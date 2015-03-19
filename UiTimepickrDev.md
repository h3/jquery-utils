![http://jquery-utils.googlecode.com/svn/trunk/standalone/ui-timepickr/page/logo.png](http://jquery-utils.googlecode.com/svn/trunk/standalone/ui-timepickr/page/logo.png)

# Development notes #

## Introduction ##

I have very little spare time to work on this project, I'll try to work on it at least once a week but I can't promise.

Luckily, this project as attracted some attention and some people already started to send me bug reports and patches, for which I'm very grateful thank you.

This page will contains developer documentation, I'll try to keep it up to date and useful.

If you would like to contribute don't hesitate to [contact me](http://www.haineault.com/about/).

~ h


# ui.timepickr.js #

## Medhods ##

### Public ###

| **Method** | **Arguments**| Returns | **Description**|
|:-----------|:|:--------|:|
| `init` | - | $ | Plugin initialization |
| `update` | - | $ | Update the value of the input field wit currently selected time |
| `select` | e | - | Called when selection is made |
| `getHour` | - | string | Return currently selected hour (shortcut of `getValue('hour')` |
| `getMinute` | - | string | Return currently selected Minute (shortcut of `getValue('Minute')` |
| `getSecond` | - | string | Return currently selected Second (shortcut of `getValue('Second')` |
| `getValue` | type | string | Return currently selected (`li.ui-timepickr.$type.hover`) |
| `activate` | - | $ | Calls `dropslide('activate')` |
| `destroy` | - | $ | Calls `dropslide('destrow')` |


### Private ###

| **Method** | **Arguments**| Returns | **Description**|
|:-----------|:|:--------|:|
| `_createButton` | i, format, className | $ | Returns a button: `<li class="ui-reset ui-timepickr className"><span class="ui-default-state">$.format(i, format)</span></li>` |
| `_createRow` | obj, format, className | $ | Returns a row: `<ol class="ui-clearfix ui-reset">[_createButton(i) for each i in range]</ol>` |
| `_getRanges12` | - | [.md](.md) | Build an array of dom element necessary to make the 12h menu |
| `_getRanges24` | - | [.md](.md) | Build an array of dom element necessary to make the 24h menu |
| `_buildMenu` | [.md](.md) | $ | Build the timepickr menu according to `_getRange12` or 24 output |

## Dependencies ##

| **Dependency** | Documentation |
|:---------------|:--------------|
| [jquery.utils.js](http://code.google.com/p/jquery-utils/source/browse/trunk/src/jquery.utils.js) | http://code.google.com/p/jquery-utils/wiki/JqueryUtils  |
| [jquery.strings.js](http://code.google.com/p/jquery-utils/source/browse/trunk/src/jquery.strings.js) | http://code.google.com/p/jquery-utils/wiki/StringFormat |
| [jquery.dropslide.js](http://code.google.com/p/jquery-utils/source/browse/trunk/src/ui.dropslide.js) | n/a |

## References ##

  * [12-hour clock](http://en.wikipedia.org/wiki/12-hour_clock)
  * [24-hour clock](http://en.wikipedia.org/wiki/24-hour_clock)