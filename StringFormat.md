| **Author** | Copyright (c) 2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:----------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |



## $.tpl ##

### Creating the template ###

```

$.tpl('tweet', [
    '<div id="tweet-{id:s}" class="tweet">',
        '<div class="tweet-body"><b>@{from:s}</b>: {body:s}',
            '(<a href="{href:s}" class="tweet-date">',
                '<abbr title="{timestamp:s}">{timesince:s}</abbr>',
            '</a>)',
        '</div>',
    '</div>'
]);

```

### Rendering ###

```

$.getJSON('/tweets/username/', function(resp, s){
    $.each(resp.tweets, function(idx, tweet) {
        $.tpl('tweet', {
            id: tweet.id,
            body: tweet.body,
            from: tweet.screen_name,
            timestamp: tweet.pub_time,
            timesince: $.timeago(tweet.pub_time)
        }).appendTo('#tweet-list');
    });
});

```


### Get the template as string ###

Just add `true` as third parameter.

```

$.tpl('tweet', {
     id: tweet.id,
     body: tweet.body,
     from: tweet.screen_name,
     timestamp: tweet.pub_time,
     timesince: $.timeago(tweet.pub_time)
}, true);

```



## calc ##

### Basic usage ###

```

// outputs "10"
$.calc('{a} + {b}', {a: 5, b: 5});

```

### Formatting ###

#### Input formatting ####

```

// outputs 1344.4223
$.calc('{a:02d} + {b}', {a: 1222.2243, b: 122.4223});

```

#### Input formatting ####

```

// outputs 1344.42
$.calc('{a:02d} + {b}', 
    {a: 1222.2243, b: 122.4223},
    '{0:02d}');

```

**NOTE**: will soon be implemented

## strConversion ##

See format _Conversions types_.

## repeat ##

```

$.repeat('h', 3); // outpus "hhh"

```

## UTF8encode ##

```

$.UTF8encode('é'); // outputs "Ã©"

```

## UTF8decode ##

```

$.UTF8decoe("Ã©"); // outputs "é"

```

**TO FIX:** Seems to be broken..

## format ##

Format is an implementation of the  [Python 3k Advanced String Formatting](http://www.python.org/dev/peps/pep-3101/).

**WARNING**: Currently this plugin conflicts with [jquery.validation.js](http://docs.jquery.com/Plugins/Validation). I'm not sure yet how I will address this issue.

### Usage examples ###

#### Simple replacement ####

```

// all return "1bc"
$.format('{a}bc', {a:'1'}) // named arguments
$.format('{0}bc', [1])     // array arguments
$.format('{0}bc', 1)       // normal arguments

```

#### Type conversion ####

```

$.format('{a:d}bc', {a:'a1'})  // return "1bc"

$.format('{a:d}bc', {a:1.5})   // return "1bc"

$.format('{a:.2f}bc', {a:'1'}) // returns 1.00bc

```

#### Padding ####

```

$.format('{a:08.2f}bc', {a:'1'}) // return 00001.00bc

```

#### User defined formatting ####

```

$.extend(jQuery.strConversion, 
    {'U': function(input, arg){ return input.toUpperCase(); }
});

$.format('{0:U}bc', 'a') // return Abc

```

#### Known differences ####

  * JavaScript precision is more limited than Python
  * Python zero pad exponent (10 -> 1.0e+01), not JavaScript (10 -> 1.0e+1)
  * My repr implementation is not like the python one

#### The conversion flags ####

| **Flag** | **Meaning** |
|:---------|:------------|
| # | The value conversion will use the ``alternate form'' (where defined below). |
| 0 | The conversion will be zero padded for numeric values. |
| - | The converted value is left adjusted (overrides the "0" conversion if both are given). (1) |
|   |	(a space) A blank should be left before a positive number (or empty string) produced by a signed conversion. (1) |
| + | A sign character ("+" or "-") will precede the conversion (overrides a "space" flag). (1) |

**Note:**

  1. Not supported yet

#### Conversions types ####

| **Conversion** | **Meaning** | **Notes** |
|:---------------|:------------|:----------|
| d |	Signed integer decimal. |  |
| i |	Signed integer decimal. |  |
| o |	Unsigned octal. | (1) |
| u |	Unsigned decimal. |  |
| x |	Unsigned hexadecimal (lowercase). | (2) |
| X |	Unsigned hexadecimal (uppercase). | (2) |
| e |	Floating point exponential format (lowercase).  | (3) |
| E |	Floating point exponential format (uppercase). | (3) |
| f |	Floating point decimal format. | (3) |
| F |	Floating point decimal format. | (3) |
| g |	Floating point format. Uses exponential format if exponent is greater than -4 or less than precision, decimal format otherwise. | (4) |
| G |	Floating point format. Uses exponential format if exponent is greater than -4 or less than precision, decimal format otherwise. | (4) |
| c |	Single character (accepts integer or single character string). 	 |  |
| r |	String (converts any JavaScript object using repr()). | (5) |
| s |	String (converts any JavaScript object using toString()). |(6) |

**Notes:**

  1. The alternate form causes a leading zero ("0") to be inserted between left-hand padding and the formatting of the number if the leading character of the result is not already a zero.
  1. The alternate form causes a leading '0x' or '0X' (depending on whether the "x" or "X" format was used) to be inserted between left-hand padding and the formatting of the number if the leading character of the result is not already a zero.
  1. The alternate form causes the result to always contain a decimal point, even if no digits follow it. The precision determines the number of digits after the decimal point and defaults to 6.
  1. The alternate form causes the result to always contain a decimal point, and trailing zeroes are not removed as they would otherwise be. The precision determines the number of significant digits before and after the decimal point and defaults to 6.
  1. The %r conversion was added in Python 2.0. The precision determines the maximal number of characters used.
  1. If the object or format provided is a unicode string, the resulting string will also be unicode. The precision determines the maximal number of characters used.

Source: http://docs.python.org/lib/typesseq-strings.html

### Tested browsers ###

  * Mozilla/4.0 (compatible; MSIE 6.0; Windows 98)
  * Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)
  * Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Media Center PC 3.0; .NET CLR 1.0.3705)
  * Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Media Center PC 3.0; .NET CLR 1.0.3705)
  * Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.14) Gecko/20080404 Firefox/2.0.0.14
  * Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9b5) Gecko/2008050509 Firefox/3.0b5
  * Mozilla/5.0 (X11; U; Linux i686; en; rv:1.9b5) Gecko Epiphany/2.22
  * Opera/9.24 (Windows NT 5.1; U; en)
  * Opera/9.50 (X11; Linux i686; U; en)
  * Mozilla/5.0 (Windows; U; Windows NT 5.1; fr-FR) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.1 Safari/525.17

Note: if you pass/fail the test suite on other browser please send me your browser string with the results, thanks.

#### TODO ####

  * -|+|\s flags handling
  * sprintf
  * repr should truncate using precision
  * jQuery.fn extention (jformat)
  * create documentation (when the API will be freezed)

#### References ####

  * [Conversion types](http://docs.python.org/lib/typesseq-strings.html)
  * [Implementation details](http://www.python.org/dev/peps/pep-3101/)