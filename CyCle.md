# jquery.cookie.js #

| **Author** | Copyright (c) 2007-2008 M. Alsup ([malsup.com](http://malsup.com)) |
|:-----------|:-------------------------------------------------------------------|
| **License** | Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses |
| **Website** | http://malsup.com/jquery/cycle/ |

The jQuery Cycle Plugin is a lightweight slideshow plugin. Its implementation is based on the [InnerFade Plugin](http://medienfreunde.com/lab/innerfade/) by Torsten Baldes, the [Slideshow Plugin](http://www.matto1990.com/web-design/jquery-plugins/simple-jquery-slideshow/) by Matt Oakes, and the [jqShuffle Plugin](http://www.benjaminsterling.com/experiments/jqShuffle/) by Benjamin Sterling. It supports pause-on-hover, auto-stop, auto-fit, before/after callbacks, click triggers and many transition effects. It also supports, but does not require, the [Metadata Plugin](http://jqueryjs.googlecode.com/svn/trunk/plugins/metadata/jquery.metadata.js) and the [Easing Plugin](http://gsgd.co.uk/sandbox/jquery.easing.php).

## Basic set cookie ##

pause-on-hover, auto-stop, auto-fit, before/after callbacks, click triggers and many transition effects. It also supports, but does not require, the Metadata Plugin and the Easing Plugin.


```

$('#shuffle').cycle({ 
    fx:     'shuffle', 
    easing: 'backout', 
    delay:  -4000 
});

```

## Options ##

| **Option** | **Default** | **Description** |
|:-----------|:------------|:----------------|
| **fx** | 'fade' | one of: fade, shuffle, zoom, scrollLeft, etc |
| **timeout** | 4000 | milliseconds between slide transitions (0 to disable auto advance) |
| **continuous** | 0 | true to start next transition immediately after current one completes |
| **speed** | 1000 | speed of the transition (any valid fx speed value)  |
| **speedIn** | null | speed of the 'in' transition  |
| **speedOut** | null | speed of the 'out' transition  |
| **next** | null | id of element to use as click trigger for next slide  |
| **prev** | null | id of element to use as click trigger for previous slide |
| **prevNextClick** | null | callback fn for prev/next clicks:  function(isNext, zeroBasedSlideIndex, slideElement)  |
| **pager** | null | id of element to use as pager container  |
| **pagerClick** | null | callback fn for pager clicks:  function(zeroBasedSlideIndex, slideElement)  |
| **pagerEvent** | 'click' | event which drives the pager navigation  |
| **pagerAnchorBuilder** | null | callback fn for building anchor links  |
| **before** | null | transition callback (scope set to element to be shown)  |
| **after** | null | transition callback (scope set to element that was shown)  |
| **end** | null | callback invoked when the slideshow terminates (use with autostop or nowrap options)  |
| **easing** | null | easing method for both in and out transitions  |
| **easeIn** | null | easing for "in" transition  |
| **easeOut** | null | easing for "out" transition  |
| **shuffle** | null | coords for shuffle animation, ex: { top: 15, left: 200 }  |
| **animIn** | null | properties that define how the slide animates in  |
| **animOut** | null | properties that define how the slide animates out  |
| **cssBefore** | null | properties that define the initial state of the slide before transitioning in  |
| **cssAfter** | null | properties that defined the state of the slide after transitioning out  |
| **fxFn** | null | function used to control the transition  |
| **height** | 'auto' | container height  |
| **startingSlide** | 0 | zero-based index of the first slide to be displayed  |
| **sync** | 1 | true if in/out transitions should occur simultaneously  |
| **random** | 0 | true for random, false for sequence (not applicable to shuffle fx)  |
| **fit** | 0 | force slides to fit container  |
| **pause** | 0 | true to enable "pause on hover"  |
| **pauseOnPagerHover** | 0 | true to pause when hovering over pager link  |
| **autostop** | 0 | true to end slideshow after X transitions (where X == slide count)  |
| **autostopCount** | 0 | number of transitions (optionally used with autostop to define X)  |
| **delay** | 0 | additional delay (in ms) for first transition (hint: can be negative)  |
| **slideExpr** | null | expression for selecting slides (if something other than all children is required)  |
| **cleartype** | 0 | true if clearType corrections should be applied (for IE)  |
| **nowrap** | 0 | true to prevent slideshow from wrapping  |