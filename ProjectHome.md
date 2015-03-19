![http://jquery-utils.googlecode.com/svn/trunk/src/img/jquery-utils.png](http://jquery-utils.googlecode.com/svn/trunk/src/img/jquery-utils.png)

jQuery.utils is a library I maintain and use in my every day work and spare time. It's a collection of jQuery plugins and widget that I often use.

Some are made by me, some by other authors, but they are all under MIT or dual Open Source license.

| **General Notice** | I'm looking for some help to maintain this project and make it better (especially an IE expert). Any kind of help would be greatly appreciated (bug report, documentation, unit tests, bug fixing, etc..). You can contact me at haineault (at) gmail.com  |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

## **Notice:** ##

I'm interesting about how developers use this library and what plugins they use the most. If you do use my library and have some feedback to give me it's the right time:

## Goals ##

  * Provide extra jQuery features for everyday web development
  * Provide downloads on a highly available server
  * Easily make custom builds
  * Provide unit tests for plugins who hasn't
  * Centralize the documentation of the plugins I often use on a highly available server
  * Maybe find some contributors
  * Have fun with jQuery

## Builds ##

| **Build** | **Plugins** |
|:----------|:------------|
| jquery.utils.js | utils, strings, anchorHandler, cookie, countdown, cycle, delayedObserver, flash, i18n, masked, mousewheel, slimbox, timeago |
| jquery.utils.lite.js | utils, strings, cookie, cycle, flash, masked, mousewheel, slimbox |


## Plugins ##

| **Plugin** | **Description** | **Author** |
|:-----------|:----------------|:-----------|
| [jquery.utils.js](JqueryUtils.md) | Various utility that I don't know where to put | [Maxime Haineault](http://haineault.com) |
| [jquery.strings.js](StringFormat.md) | Various string formatting method (by now it only has a format method inspired by the Advanced String Formatting module in Python3K, sprintf is expceted next) | [Maxime Haineault](http://haineault.com) |
| [jquery.anchorhandler.js](AnchorHandler.md)  | Handle URLs anchor gracefully with regular expressions (inspired by Django URLs dispatcher). | [Maxime Haineault](http://haineault.com) |
| [jquery.cookie.js](http://stilbuero.de/jquery/cookie/) | Cookie manipulation | [Klaus Hart](http://stilbuero.de/l) |
| jquery.countdown.js | A simple countdown script | [Maxime Haineault](http://haineault.com) |
| [jquery.cycle.js](http://malsup.com/jquery/cycle/) | A cycle script, useful for banner rotation |[M. Alsup](http://malsup.com/) |
| [jquery.delayedobserver.js](DelayedObserver.md) | A delayed observer. | [Maxime Haineault](http://haineault.com) |
| [jquery.flash.js](http://jquery.lukelutman.com/plugins/flash) | A plugin for embedding Flash movies | [Luke Lutman](http://lukelutman.com/) |
| [jquery.i18n.js](I18N.md) | Provide a simple API for plugin translation | [Maxime Haineault](http://haineault.com) |
| [ui.masked.js](http://digitalbush.com/projects/masked-input-plugin) | Input restriction libary | [Josh Bush](http://digitalbush.com/) |
| [jquery.mousewheel.js](http://plugins.jquery.com/project/mousewheel) | Adds mouse wheel support for your application |[Brandon Aaron](http://brandonaaron.net/) |
| [jquery.slimbox.js](http://www.digitalia.be/software/slimbox2) | Slimbox 2 is a 4 KB visual clone of the popular Lightbox 2 script by Lokesh Dhakar, written using the jQuery javascript library. |[Christophe Beyls](http://www.digitalia.be/) |
| [jquery.timeago.js](http://timeago.yarp.com/) | A plugin that makes it easy to support automatically updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago") |[Ryan McGeary](http://mcgeary.org/) |

## Extra plugins ##

These plugins are not built by default. To include them you only have to uncomment a line in `build.yml` and type `./built.py -m`. See the [build system documentation](BuildSystem.md) for more details.

| **Plugin** | **Description** | **Author** |
|:-----------|:----------------|:-----------|
| [jquery.flickrshow.js](FlickrShow.md) | This plugins takes a flickr photostream link and turns it into a nice little slideshow. |
| [jquery.arrayUtils.js](JqueryArrayUtils.md) | Provide additional functional method to work with array. This library is largely inspired by the [enumerables](http://www.prototypejs.org/api/enumerable) concept in the [Prototype Javascript Library](http://www.prototypejs.org/) |
| [jquery.ddbelated.js](ddBelated.md) | A plugin designed to fix that problem by applying appropriate filters to user specified elements, while keeping all element tags intact. |

## UI (widgets) ##

These plugin are available with the `jquery.utils.ui.js` build.

| **Widget** | **Description** | **Author** |
|:-----------|:----------------|:-----------|
| [ui.builder.js](UiBuilder.md) | Simple template generator for UI common widgets | [Maxime Haineault](http://haineault.com) |
| [ui.toaster.js](UiToaster.md) | IM style popup notification system | [Maxime Haineault](http://haineault.com) |
| [ui.timepickr.js](UiTimepickr.md) | Time picker control | [Maxime Haineault](http://haineault.com) |
| [dev.timepickrDev](UiTimepickrDev.md) | UI timepickr development notes | [Maxime Haineault](http://haineault.com) |



**Note:** Depends on the jQuery UI library.

## Experimental ##

These are toy projects, some might be eventually included in the build, some are not even actually working yet. In other words, it's my sandbox

| **Name**| **Description** | **Author** |
|:|:----------------|:-----------|
| jquery.extendCSS.js |  | [Maxime Haineault](http://haineault.com) |
| jquery.jpath.js |  | [Maxime Haineault](http://haineault.com) |
| jquery.valid.js | Validation libary | [Maxime Haineault](http://haineault.com) |
| jquery.keynav.js |  | [Maxime Haineault](http://haineault.com) |

## Links ##

| ![http://groups.google.com/groups/img/3nb/groups_bar.gif](http://groups.google.com/groups/img/3nb/groups_bar.gif) | [Discussions about jQuery utils](http://groups.google.com/group/jquery-utils) |
|:------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------|
| ![http://www.ohloh.net/images/mast/ohloh_logo.png](http://www.ohloh.net/images/mast/ohloh_logo.png)  | [Project statistics](http://www.ohloh.net/projects/jquery-utils) |

## Stats ##

&lt;wiki:gadget url="http://www.ohloh.net/projects/26940/widgets/project\_basic\_stats.xml" height="220"  border="0" /&gt;