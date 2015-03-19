# jquery.mousewheel.js #

| **Author** | Copyright (c) 2007 Brandon Aaron ([brandonaaron.net](http://brandonaaron.net)) |
|:-----------|:-------------------------------------------------------------------------------|
| **License** | Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses |
| **Website** | http://plugins.jquery.com/project/mousewheel |

## Introduction ##

Adds mouse wheel support for your application! Just call mousewheel to add the event and call unmousewheel to remove the event.

## Basic usage ##

```

var callback = function(e, delta) {
    console.log(e.pageX, e.pageY, delta);

    // optionally you can prevent default behavior
    e.stopPropagation();
    e.preventDefault();
};

$('#test').mousewheel(callback);

```

## Removing handler ##

```

$('#test').unmousewheel(callback);

```