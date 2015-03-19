# ui.toaster.js #

## Introduction ##

Display a non-obstrusive and customizable notification window similar to the one used by the IM and Mail clients.

## options ##

| **Option** | **Default** | **Description** |
|:-----------|:------------|:----------------|
| delay | 0 | Timeout in seconds before showing toaster |
| timeout | 3 | Timeout in seconds to show the toaster |
| position | auto | Atrong tl, tr, bl, br |
| speed | slow | Animation speed (string or seconds) |
| closable | true | Allow user to close the toaster |
| sticky | false | Show the toaster until the user close it |
| onClose | false | Function called _before_ closing the toaster |
| onClosed | false | Function called _after_ closing the toaster |
| onHide | false | Function called when use close the toaster |
| onOpen | false | Function called _before_ opening the toaster |
| onOpened | false | Function called _after_ opening the toaster |
| show | $.fn.slideDown | Effect to use when showing the toaster |
| hide | $.fn.fadeOut | Effect to use when user manually close the toaster |
| close | $.fn.slideDown | Effect to use when closing toaster |



## Positions ##

  * **tl**: Top left
  * **tr**: Top right
  * **bl**: Bottom left
  * **br**: Bottom right

## Usage examples ##

### Basic ###

```
$.ui.toaster($('<p>hello world</p>'));
$.ui.toaster('hello world');

$('#msg-box').ui.toaster();
$('<p>hello world</p>').ui.toaster();
```


### Close ###

#### Default ####

```
$('a[href=#close-dedault]').click(function(){
    $('<div><p>Click anywhere in the box to close it.</p><div>').toaster()
});
```

#### Sticky ####

```
$('a[href=#close-dedault]').click(function(){
    $('<div><p>This box won\'t close until user close it.</p><div>').toaster({sticky: true})
});
```

#### Custom ####

```
$('a[href=#close-custom]').click(function(){
    $('<div><a class="ui-toaster-close">x</a><p>Click the "x" to close the box.</p><div>').toaster()
});
```

### Delay ###

#### 3 sec delay ####

```
$('<div><p>Delayed opening..</p><div>').toaster({delay: 3})
```

## Planned features ##

  * Option to prevent closing when mouse is over
  * Better insertion (eg. bottom toaster should pop on top of the stack) with an option to force insert position
  * Maybe support for corner plugin


## Known bugs ##

  * IE6 fixed positioning is broken
  * IE6 layout glitches