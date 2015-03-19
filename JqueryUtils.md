# jquery.utils.js #

| **Author** | Copyright (c) 2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:----------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |



## Introduction ##

A collection of some utilities I often re-use and didn't know where to put.

## $.exp ##

| **Expression**  | **Argument** | **Description** |
|:----------------|:-------------|:----------------|
| `:icontains` | string | Matches elements which contain the given text (case insensitive). |


## $.methods ##

| **Method** | **Argument** | **Return** | **Description** |
|:-----------|:-------------|:-----------|:----------------|
| `$.basename` | string | string |  Returns the base name of a path  |
| `$.filename` | string | string |  Returns the file name of a path  |
| `$.filesizeformat` | string | string |  Format a file size (ex: 1024 -> 1MB)  |
| `$.delay` | int, function | jQuery |  Chainable delay (for methods and animations) |
| `$.isArray` | mixed | boolean | Returns true if the given argument is an array |
| `$.isRegexp` | mixed | boolean | Returns true if the given argument is a regular expression |
| `$.keyIs` | string event | boolean | Works with $.keyCode, ex: $.keyIs('up', e) will returns true if the keyCode is 38. |
| `$.pxToEm` | string, object | string | pxToEm converts a pixel value to ems depending on inherited font size |
| `$.range` | start, strop, steps | object | Returns a range object |
| `$.redirect` | string | - | Shortcut for `window.location.href = str;` |
| `$.stop` | e, preventDefault, stopPropagation | boolean | Ex: `return $.stop(e, false, true)` |
| `$.toCurrency` | mixed | boolean | Converts argument to double digit decimal |


## $.keyCode ##

Taken from [ui.core.js](http://code.google.com/p/jquery-ui/source/browse/trunk/ui/ui.core.js). I really thought this gem should not be scoped.


| **Name** | **KeyCode** |
|:---------|:------------|
| `$.keyCode.BACKSPACE` | 8 |
| `$.keyCode.BACKSPACE` | 8 |
| `$.keyCode.CAPS_LOCK` | 20 |
| `$.keyCode.COMMA` | 188 |
| `$.keyCode.CONTROL` | 17 |
| `$.keyCode.DELETE` | 46 |
| `$.keyCode.DOWN` | 40 |
| `$.keyCode.END` | 35 |
| `$.keyCode.ENTER` | 13 |
| `$.keyCode.ESCAPE` | 27 |
| `$.keyCode.HOME` | 36 |
| `$.keyCode.INSERT` | 45 |
| `$.keyCode.LEFT` | 37 |
| `$.keyCode.NUMPAD_ADD` | 107 |
| `$.keyCode.NUMPAD_DECIMAL` | 110 |
| `$.keyCode.NUMPAD_DIVIDE` | 111 |
| `$.keyCode.NUMPAD_ENTER` | 108 |
| `$.keyCode.NUMPAD_MULTIPLY` | 106 |
| `$.keyCode.NUMPAD_SUBTRACT` | 109 |
| `$.keyCode.PAGE_DOWN` | 34 |
| `$.keyCode.PAGE_UP` | 33 |
| `$.keyCode.PERIOD` | 190 |
| `$.keyCode.RIGHT` | 39 |
| `$.keyCode.SHIFT` | 16 |
| `$.keyCode.SPACE` | 32 |
| `$.keyCode.TAB` | 9 |
| `$.keyCode.UP` | 38 |


## $.fn.methods ##

| **Method** | **Argument** | **Description** |
|:-----------|:-------------|:----------------|
| `$.fn.equalHeights` | px | Compares the heights or widths of the top-level children of a provided element and sets their min-height to the tallest height (or width to widest width). Sets in em units by default if pxToEm() method is available |
| `$.fn.selectRange` | start, end | Select a text range in a textarea |

## Other credits ##

| **$.range** | Copyright (c) 2007-2008 [Matthias Miller](http://blog.outofhanwell.com/2006/03/29/javascript-range-function/) |
|:------------|:--------------------------------------------------------------------------------------------------------------|
| **$.keyCode** | Copyright (c) 2008 [jQuery UI authors](http://code.google.com/p/jquery-ui/source/browse/trunk/AUTHORS.txt?r=991) (http://ui.jquery.com/about) |