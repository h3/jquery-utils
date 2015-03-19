# jquery.extendCSS.js #

| **Author** | Copyright (c) 2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:----------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |

This is a plugin proposal to ease plugin translation. It currently support namespaces and language switching.

## Example ##

### Fixing IE6 ###

Transparently fix the :hover and :first-child behavior in IE6

```

$.extendCSSif(($.browser.msie 
    && parseInt($.browser.version, 10) < 7),
    'pseudo-class', {
        'hover': function(selector) {
            var selector2 = selector.replace(':hover', '');
            // new styles
            var styles2 = this.getStyles(selector); 
            // original styles
            var styles1 = this.getInitialStyles(selector2, styles2); 
            $(selector2).hover(function(){
                $(this).css(styles2); // apply :hover styles
            }, function(){
                $(this).css(styles1); // restore original styles
            });
        },
        'first-child': function(selector) {
            var sel = selector.replace(':first-child', '');
            $(sel).filter(':first').css(this.getStyles(sel));
        }
});

```

## Extending capabilities ##

This example implement `-moz-border-radius` in other browsers.

```

$extendCSSif(($.fn.corner && !$.browser.mozilla), 'property', {
    '-moz-border-radius': 
      function(selector, value) { $(selector).corner(value); },
    '-moz-border-radius-topLeft': 
      function(selector, value) { $(selector).corner('tl '+ value); },
    '-moz-border-radius-bottomLeft': 
      function(selector, value) { $(selector).corner('bl '+ value); },
    '-moz-border-radius-topRight': 
      function(selector, value) { $(selector).corner('tr '+value); },
    '-moz-border-radius-topRight': 
      function(selector, value) { $(selector).corner('br '+value); }
});

```