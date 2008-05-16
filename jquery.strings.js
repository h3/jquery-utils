/*
  jQuery strings - 0.1a
  http://code.google.com/p/jquery-utils/
  
  (c) Maxime Haineault <haineault@gmail.com>
  http://haineault.com   

  MIT License (http://www.opensource.org/licenses/mit-license.php)

  Implementation of Python3K advanced string formatting
  http://www.python.org/dev/peps/pep-3101/

  How it should work:

  named arguments
  ~~~~~~~~~~~~~~~
  $.format('{a}bc', {a:'A'}) -> Abc

  conversion 
  ~~~~~~~~~~
  $.format('{a:s}bc', {a:[1,2,3]}) -> 123bc
  $.format('{a:d}bc', {a:1.5})     -> 1bc
  
  Note: for conversion types see: http://docs.python.org/lib/typesseq-strings.html

  Support for user-defined formatting
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  jQuery.extend(jQuery.strConversion, 
      {'U': function(arg){ return arg.toUpperCase(); }
  });
  $.format('{a:U}bc', {a:'a'})     -> Abc
  
  TODO
  ~~~~
  - -|+|\s flags handling
  - sprintf
  - proper escaping
  - repr should truncate using precision
  - jQuery.fn extention (jformat)
  - create documentation (when the API will be freezed)

  Kown differences
  ~~~~~~~~~~~~~~~~
  - JavaScript precision is more limited than Python
  - Python zero pad exponent (10 -> 1.0e+01), not JavaScript (10 -> 1.0e+1)
  - My *repr* implementation is not like the python one

  Browsers tested
  ~~~~~~~~~~~~~~~
  - Mozilla/4.0 (compatible; MSIE 6.0; Windows 98)
  - Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)
  - Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Media Center PC 3.0; .NET CLR 1.0.3705)
  - Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Media Center PC 3.0; .NET CLR 1.0.3705)
  - Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.14) Gecko/20080404 Firefox/2.0.0.14
  - Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9b5) Gecko/2008050509 Firefox/3.0b5
  - Mozilla/5.0 (X11; U; Linux i686; en; rv:1.9b5) Gecko Epiphany/2.22
  - Opera/9.24 (Windows NT 5.1; U; en)
  - Opera/9.50 (X11; Linux i686; U; en)
  - Mozilla/5.0 (Windows; U; Windows NT 5.1; fr-FR) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.1 Safari/525.17
  * if you pass/fail the test suite on other browser please send me your browser string with the results
*/
(function(){
    var conversion = {
        // tries to translate any objects type into string gracefully
        __repr: function(i){
            switch(this.__getType(i)) {
                case 'array':case 'date':case 'number':
                    return i.toString();
                break;
                case 'object': 
                    var o = [];
                    for (x=0; x<i.length; i++) o.push(i+': '+ this.__repr(i[x]));
                    return o.join(', ');
                break;
                case 'string': default: 
                    return i;
                break;
            }
        },
        // like typeof but less vague
        __getType: function(i) {
            if (!i || !i.constructor) return typeof(i);
            var match = i.constructor.toString().match(/Array|Number|String|Object|Date/);
            return match && match[0].toLowerCase() || typeof(i);
        },
        //+ Jonas Raoni Soares Silva
        //@ http://jsfromhell.com/string/pad [v1.0]
        __pad: function(str, l, s, t){
            return s || (s = " "), (l -= str.length) > 0 ? (s = new Array(Math.ceil(l / s.length)
                + 1).join(s)).substr(0, t = !t ? l : t == 1 ? 0 : Math.ceil(l / 2))
                + str + s.substr(0, l - t) : str;
        },
        __getInput: function(arg, args) {
            var key = arg.getKey();
            switch(this.__getType(args)){
                case 'object': 
                    if (typeof(args[key]) != 'undefined') {
                        if (conversion.__getType(args[key]) == 'array') {
                            return arg.getFormat().match(/\.\*/) && args[key][1] || args[key];
                        }
                        return args[key];
                    }
                    else {
                        // TODO: try by numerical index
                    }
                break;
                case 'array': 
                    key = parseInt(key, 10);
                    if (arg.getFormat().match(/\.\*/) && typeof(args[key+1]) != 'undefined') return args[key+1];
                    else if (typeof(args[key]) != 'undefined') return args[key];
                    else return key;
                break;
            }
            return '{'+key+'}';
        },
        __formatToken: function(token, args) {
            var arg   = new Argument(token, args);
            return conversion[arg.getFormat().slice(-1)](this.__getInput(arg, args), arg);
        },

        // Signed integer decimal.
        d: function(input, arg){
            var o = parseInt(input, 10); // enforce base 10
            var p = arg.getPaddingLength();
            if (p) return this.__pad(o.toString(), p, arg.getPaddingString(), 0);
            else return o;
        },
        // Signed integer decimal.
        i: function(input, args){ 
            return this.d(input, args);
        },
        // Unsigned octal
        o: function(input, arg){ 
            var o = input.toString(8);
            if (arg.isAlternate()) o = this.__pad(o, o.length+1, '0', 0); 
            return this.__pad(o, arg.getPaddingLength(), arg.getPaddingString(), 0);
        },
        // Unsigned decimal
        u: function(input, args) {
            return Math.abs(this.d(input, args));
        },
        // Unsigned hexadecimal (lowercase)
        x: function(input, arg){
            var o = parseInt(input, 10).toString(16);
            o = this.__pad(o, arg.getPaddingLength(), arg.getPaddingString(),0);
            return (arg.isAlternate())? '0x'+o: o;
        },
        // Unsigned hexadecimal (uppercase)
        X: function(input, arg){
            return this.x(input, arg).toUpperCase();
        },
        // Floating point exponential format (lowercase)
        e: function(input, arg){
            return parseFloat(input, 10).toExponential(arg.getPrecision());
        },
        // Floating point exponential format (uppercase)
        E: function(input, arg){
            return this.e(input, arg).toUpperCase();
        },
        // Floating point decimal format
        f: function(input, arg){
            return this.__pad(parseFloat(input, 10).toFixed(arg.getPrecision()), arg.getPaddingLength(), arg.getPaddingString(),0);
        },
        // Floating point decimal format (alias)
        F: function(input, args){
            return this.f(input, args);
        },
        // Floating point format. Uses exponential format if exponent is greater than -4 or less than precision, decimal format otherwise
        g: function(input, arg){
            var o = parseFloat(input, 10);
            return (o.toString().length > 6) ? Math.round(o.toExponential(arg.getPrecision())): o;
        },
        // Floating point format. Uses exponential format if exponent is greater than -4 or less than precision, decimal format otherwise
        G: function(input, args){
            return this.g(input, args);
        },
        // Single character (accepts integer or single character string). 	
        c: function(input, args) {
            var match = input.match(/\w|\d/);
            return match && match[0] || '';
        },
        // String (converts any JavaScript object to anotated format)
        r: function(input, args) {
            return this.__repr(input);
        },
        // String (converts any JavaScript object using object.toString())
        s: function(input, args) {
            return input.toString && input.toString() || ''+input;
        }
    };

    var Argument = function(arg, args) {
        this.__arg  = arg;
        this.__args = args;
        this.__max_precision = parseFloat('1.'+ (new Array(32)).join('1'), 10).toString().length-3;
        this.__def_precision = 6;
        this.getString = function(){
            return this.__arg;
        };
        this.getKey = function(){
            return this.__arg.split(':')[0];
        };
        this.getFormat = function(){
            var match = this.getString().split(':');
            return (match && match[1])? match[1]: 's';
        };
        this.getPrecision = function(){
            var match = this.getFormat().match(/\.(\d+|\*)/g);
            if (!match) return this.__def_precision;
            else {
                match = match[0].slice(1);
                if (match != '*') return parseInt(match, 10);
                else if(conversion.__getType(this.__args) == 'array') {
                    return this.__args[1] && this.__args[0] || this.__def_precision;
                }
                else if(conversion.__getType(this.__args) == 'object') {
                    return this.__args[this.getKey()] && this.__args[this.getKey()][0] || this.__def_precision;
                }
                else return this.__def_precision;
            }
        };
        this.getPaddingLength = function(){
            if (this.isAlternate()) {
                var match = this.getString().match(/0?#0?(\d+)/);
                if (match && match[1]) return parseInt(match[1], 10);
            }
            var match = this.getString().match(/(0|\.)(\d+|\*)/g)
            return match && parseInt(match[0].slice(1), 10) || 0;
        };
        this.getPaddingString = function(){
            var o = '';
            if (this.isAlternate()) o = ' ';
            // 0 take precedence on alternate format
            if (this.getFormat().match(/#0|0#|^0|\.\d+/)) o = '0'; 
            return o;
        };
        this.getFlags = function(){
            var match = this.getString().match(/^(0|\#|\-|\+|\s)+/);
            return match && match[0].split('') || [];
        };
        this.isAlternate = function() {
            return !!this.getFormat().match(/^0?#/);
        };
    };

    var arguments2Array = function(args, shift) {
        var shift = shift || 0;
        var o = [];
        for (l=args.length, x=shift-1; x<l;x++) o.push(args[x]);
        return o;
    }

    var format = function(str, args) {
        var end    = 0;
        var start  = 0;
        var match  = false;
        var buffer = [];
        var token  = '';
        var args   = (typeof(arguments[1]) != 'object')? arguments2Array(arguments, 2): args || [];
        var tmp    = str.split('');
        for(start=0; start < tmp.length; start++) {
            if (tmp[start] == '{' && tmp[start+1] !='{') {
                end   = str.indexOf('}', start);
                token = tmp.slice(start+1, end).join('');
                buffer.push(conversion.__formatToken(token, args));
            }
            else if (start > end || buffer.length < 1)  buffer.push(tmp[start]);
        }
        return (buffer.length > 1)? buffer.join(''): buffer[0];
    };

    $.extend({format: format, strConversion: conversion});
})();