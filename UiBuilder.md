# ui.builder.js #

| **Author** | Copyright (c) 2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:----------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |



## Introduction ##

A simple UI building system to ease the creation and manipulation of UI elements.

## Goals ##

  * Maximize code reuse
  * Improve UI consistency (centralized and cached templates)
  * Code less, do more

## Methods ##

### ui.builder.button ###

| **Option** | **Description** |
|:-----------|:----------------|
| `label` | Button label |
| `corner` | Corner value |
| `icon` | Icon value, will automatically insert the icon before the text. |

#### Javascript ####

```
$.ui.builder.button({label: 'Hello World'});

$.ui.builder.button({label: 'Options', icon: 'gear'});
```

#### HTML output ####

```
<a class="ui-state-default ui-corner-all ui-button" href="#">Hello World</a>

<a class="ui-state-default ui-corner-all ui-button" href="#"> 
 <span class="ui-icon ui-icon-gear" /> Options
</a>
```


### ui.builder.icon ###

| **Option** | **Description** |
|:-----------|:----------------|
| `icon` | Icon value  |

#### Javascript ####

```
$.ui.builder.icon({type: 'gear'});
```

#### HTML output ####

```
<span class="ui-icon ui-icon-gear" />
```

### ui.builder.input ###

| **Option** | **Description** |
|:-----------|:----------------|
| `type` | `button, checkbox, file, hidden, image, password, radio, reset, submit, text`  |
| `corner` | Corner value |

#### Javascript ####

```
$.ui.builder.input();
```

#### HTML output ####

```
<input type="text" class="ui-input ui-input-text ui-corner-none" />
```

### ui.builder.progressbar ###

| **Option** | **Description** |
|:-----------|:----------------|
| `corner` | Corner value |
| `valCorner` | Corner value of the "value" element |
| `valuemin` | Minimum value |
| `valuemax` | Maximum value |
| `valuenow` | Current value |
| `role` | Not sure .. (default: progressbar) |

#### Javascript ####

```
$.ui.builder.progressbar();
```

#### HTML output ####

```
<div class="ui-corder-all ui-progressbar ui-widget ui-widget-content" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
    <div class="ui-progressbar-value ui-widget-header ui-corner-left" />
</div>
```

### ui.builder.tabs ###

| **Option** | **Description** |
|:-----------|:----------------|
| `icon` | Icon value  |
| `corner` | Corner value |
| `navCorner` | Corner value |

#### Javascript ####

```
var tabset = $.ui.builder.tabs();
```

#### HTML output ####

```
<div class="ui-tabs ui-widget-content ui-corner-all">
    <ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-top"></ul>
</div>
```

### ui.builder.tab ###

| **Option** | **Description** |
|:-----------|:----------------|
| `title` | Title of the tab |
| `panelCorner` | Corner value |
| `titleCorner` | Corner value |

#### Javascript ####

```
var tab1 = $.ui.builder.tab(tabset, {title: 'Tab 1'}).text('Hello');
var tab2 = $.ui.builder.tab(tabset, {title: 'Tab 2'}).text('World');
```

`*` **Note**: This method requires the tab element as first argument.

#### HTML output (tab1) ####

```
<div id="tabs-1" class="ui-tabs-panel ui-widget-content ui-corner-all">Hello</div>
```

### ui.builder.toolbar ###

| **Option** | **Description** |
|:-----------|:----------------|
| `corner` | Corner value |

#### Javascript ####

```
var tabset = $.ui.builder.toolbar();
```

#### HTML output ####

```
<div class="ui-toolbar ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"></div>
```

### ui.builder.message ###

| **Option** | **Description** |
|:-----------|:----------------|
| **Option** | **Description** |
| `corner` | Corner value |
| `state` | Message state |
| `icon` | Insert icon |
| `title` | Message title |
| `body` | Message body |

#### Javascript ####

```
var tabset = $.ui.builder.message({
    title: 'Hello World',
    body:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
});
```

#### HTML output ####

```
<div class="ui-widget">
    <div class="ui-state-highlight ui-corner-all">
        <p>
            <span style="float: left; margin-right: 0.3em;" class="ui-icon ui-icon-info"/>
            <strong>Hello World:</strong> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    </div>
</div>
```

## Options values ##

| **state** | `highlight, error` |
|:----------|:-------------------|
| **corner** | `all, top, right, bottom, left, none` |
| **icon** | `carat-1-n, carat-1-ne, carat-1-e, carat-1-se, carat-1-s, carat-1-sw, carat-1-w, carat-1-nw, carat-2-n-s, carat-2-e-w, triangle-1-n, triangle-1-ne, triangle-1-e, triangle-1-se, triangle-1-s, triangle-1-sw, triangle-1-w, triangle-1-nw, triangle-2-n-s, triangle-2-e-w, arrow-1-n, arrow-1-ne, arrow-1-e, arrow-1-se, arrow-1-s, arrow-1-sw, arrow-1-w, arrow-1-nw, arrow-2-n-s, arrow-2-ne-sw, arrow-2-e-w, arrow-2-se-nw, arrowstop-1-n, arrowstop-1-e, arrowstop-1-s, arrowstop-1-w, arrowthick-1-n, arrowthick-1-ne, arrowthick-1-e, arrowthick-1-se, arrowthick-1-s, arrowthick-1-sw, arrowthick-1-w, arrowthick-1-nw, arrowthick-2-n-s, arrowthick-2-ne-sw, arrowthick-2-e-w, arrowthickstop-1-n, arrowthickstop-1-e, arrowthickstop-1-s, arrowthickstop-1-w, arrowreturnthick-1-w, arrowreturnthick-1-n, arrowreturnthick-1-e, arrowreturnthick-1-s, arrowreturn-1-w, arrowreturn-1-n, arrowreturn-1-e, arrowreturn-1-s, arrowrefresh-1-w, arrowrefresh-1-n, arrowrefresh-1-e, arrowrefresh-1-s, arrow-4, arrow-4-diag, extlink, newwin, refresh, shuffle, transfer-e-w, transferthick-e-w, folder-collapsed, folder-open, document, document-b, note, mail-closed, mail-open, suitcase, comment, person, print, trash, locked, unlocked, bookmark, tag, home, flag, calculator, cart, pencil, clock, disk, calendar, zoomin, zoomout, search, wrench, gear, heart, star, link, cancel, plus, plusthick, minus, minusthick, close, closethick, key, lightbulb, scissors, clipboard, copy, contact, image, video, alert, info, notice, help, check, bullet, radio-off, radio-on, play, pause, seek-next, seek-prev, seek-end, seek-first, stop, eject, volume-off, volume-on, power, signal-diag, signal, battery-0, battery-1, battery-2, battery-3, circle-plus, circle-minus, circle-close, circle-triangle-e, circle-triangle-s, circle-triangle-w, circle-triangle-n, circle-arrow-e, circle-arrow-s, circle-arrow-w, circle-arrow-n, circle-zoomin, circle-zoomout, circle-check, circlesmall-plus, circlesmall-minus, circlesmall-close, squaresmall-plus, squaresmall-minus, squaresmall-close, grip-dotted-vertical, grip-dotted-horizontal, grip-solid-vertical, grip-solid-horizontal, gripsmall-diagonal-se, grip-diagonal-se` |

## Usage example ##

This plugin is meant to only provide the minimal boiler plate code to get a UI widget working. Then you can customize it with normal jQuery DOM manipulations.

#### JavaScript ####

```

$(function(){
    $.ui.builder.button({label: "Hello"})
        .appendTo('body')
        .bind('click', function(){
            alert('Hi !');
        });
});

```

#### HTML output ####

```

<body id="themeroller">
    <a href="#" class="ui-state-default ui-corner-all ui-button">Hello</a>
</body>

```


## References ##
  * [jQuery UI Themeroller](http://ui.jquery.com/themeroller)