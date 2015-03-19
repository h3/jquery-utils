# jquery.ifixpng.js #

| **Author** | Copyright (c) 2007-2008 Kush M. ([khurshid.com](http://khurshid.com)) |
|:-----------|:----------------------------------------------------------------------|
| **License** | Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses |
| **Website** | http://jquery.khurshid.com/ifixpng.php |

## Basic usage ##

```

// apply to all png images 
$('img[@src$=.png]').ifixpng(); 
 
// apply to all png images and to div#logo 
$('img[@src$=.png], div#logo').ifixpng(); 
 
// apply to div#logo, undo fix, then apply the fix again 
$('img[@src$=.png], div#logo').ifixpng().iunfixpng().ifixpng(); 
 
// apply to div#logo2, modify css property and add click event 
$('div#logo2').ifixpng().css({cursor:'pointer'}).click(function(){ alert('ifixpng is cool!'); });

```

## Removing fix ##

```

$('#demo-2').toggle(function(){ 
        $(this).iunfixpng(); 
    }, function(){ 
        $(this).ifixpng(); 
});

```