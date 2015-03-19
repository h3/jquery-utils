# Introduction #

I'm introducing the first new developer on this project since it started so I though it might be a good idea to outline some of the coding guidelines to stay consistent.

## Unit tests ##

jQuery states that no code without unit tests should go mainstream.

I'm not going that far. There is lots of code that hasn't any unit tests, but the framework is there and ready to accept new one whenever I need.

Personally I usually write some basic unit tests when I write a plugin and only add new one if issues arises and I solve them.

## Documentation ##

That said, I will go as far as say that undocumented code is code that doesn't exists.

So please use the wiki to _at least_ lay down the option list.


## jQuery ##

This list is taken from a [post on my blog](http://haineault.com/blog/84/).

I will write something more conscise and up to date when I'll have some spare time.

### Scoping ###

If you want 100% compatibility with other JavaScript framework, the best way is like this:

```
(function($){

  // Now you are sure that within this function $ === jQuery

})(jQuery);
```

### Be lazy ###

```

// Don't
if ($('#item').get(0)) {
    $('#item').someFunction();
}

// Or
if ($('#item').length) {
    $('#item').someFunction();
}


// Just do
$('#item').someFunction();

```

jQuery will call the function only if there is a match, no need to double check.

### Use shortcuts ###

```
// You can but..
$(document).ready(function(){
    // ...
});

// There is a shorter equivalent
$(function(){
   // ...
});
```

### Chain ###

```
// Don't
$('#frame').fadeIn();
$('#frame .title').show();
$('#frame a:visited').hide;

// Do
$('#frame').fadeIn()
    .find('.title').show().end()
    .find('a:visited').hide();
```

Unnecessary DOM traversal is a expensive operation, avoid it when possible.

### Group queries ###

```
// Ugly
$('div.close').click(closeCallback);
$('button.close').click(closeCallback);
$('input.close').click(closeCallback);

// Not ugly
$('div.close, button.close, input.close')
    .click(closeCallback);
```

### Select siblings like a pro ###

```
// Don't
$('#nav li').click(function(){
    $('#nav li').removeClass('active');
    $(this).addClass('active');
});

// Do
$('#nav li').click(function(){
    $(this).addClass('active')
        .siblings().removeClass('active');
});
```

### Use each and map ###

```
// Try to avoid
var output = [];
for (var i=0;i < arr.length; i++) {
    output.push(arr[i]);
}

// Do
var output = $.map(arr, function() {
    ...
});

// Or
var output = [];
$.each(arr, function(index, value) {
    output.push(value);
});
```

Using jQuery's each and map is more reliable because they won't break if another library is extending the Array object.

### Use namespaces ###

Events can be namespaced

```
$('input').bind('blur.validation', function(e){
    // ...
});
```

The data method also accept namespaces

```
$('input').data('validation.isValid', true);
```

### triggerHandler is great ###

Instead of

```
var refreshFrame = function() {
    $('#frame').load('http://reddit.com');
};

$('.button').click(refreshFrame);

refreshFrame();
```

You can do

```
$('.button').click(function() {
    $('#frame').load('/page/frame.html');
}).triggerHandler('click');

// You can also use a shortcut
$('.button').click(function() {
    $('#frame').load('/page/frame.html');
}).click();
```

triggerHandler is also useful for creating custom events, which leads me to my next tip

### Custom events ###

In some situation it can saves you lots of pain, it's also really handy to encapsulate plugins interactions. Let me illustrate.

```
$('.button').click(function() {
    $('div#frame').load('/page/frame.html', function(){
        $(this).triggerHandler('frameLoaded');
    });
});

// PluginA.js
$('#frame').bind('frameLoaded', function(){
    $(this).show('slide', {direction: 'top'});
});

// PluginB.js
$('div').bind('frameLoaded', function(){
    // do something else
});
```

### Test ! ###

jQuery comes with a nice unit test framework called QUnit. Writing tests is quite easy and allow you to confidently modify your code while ensuring that it still works as expected.

```
module("A simple test");

test("The frame should appear #button is clicked", function() {
  expect(1);
  $('#button').click();
  ok($('#frame').is(':visible'), "The frame is visible" );
});
```