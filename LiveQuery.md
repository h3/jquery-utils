# jquery.livequery.js #

| **Author** | Copyright (c) 2007 Brandon Aaron ([brandonaaron.net](http://brandonaaron.net)) |
|:-----------|:-------------------------------------------------------------------------------|
| **License** | Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses |
| **Website** | http://brandonaaron.net/docs/livequery/ |

## Introduction ##

Live Query utilizes the power of jQuery selectors by binding events or firing callbacks for matched elements auto-magically, even after the page has been loaded and the DOM updated.

For example you could use the following code to bind a click event to all A tags, even any A tags you might add via AJAX.

```

$('a') 
    .livequery('click', function(event) { 
        alert('clicked'); 
        return false; 
    }); 

```

Once you add new A tags to your document, Live Query will bind the click event and there is nothing else that needs to be called or done.

When an element no longer matches a selector the events Live Query bound to it are unbound. The Live Query can be expired which will no longer bind anymore events and unbind all the events it previously bound.

Live Query can even be used with the more powerful jQuery selectors. The following Live Query will match and bind a click event to all A tags that have a rel attribute with the word "friend" in it. If one of the A tags is modified by removing the word "friend" from the rel attribute, the click event will be unbound since it is no longer matched by the Live Query.

```

$('a[@rel*=friend]') 
    .livequery('click', function(event) { 
        doSomething(); 
    }); 

```

Live Query also has the ability to fire a function (callback) when it matches a new element and another function (callback) for when an element is no longer matched. This provides ultimate flexibility and untold use-cases. For example the following code uses a function based Live Query to implement the jQuery hover helper method and remove it when the element is no longer matched.

```

$('li') 
    .livequery(function(){ 
    // use the helper function hover to bind a mouseover and mouseout event 
        $(this) 
            .hover(function() { 
                $(this).addClass('hover'); 
            }, function() { 
                $(this).removeClass('hover'); 
            }); 
    }, function() { 
        // unbind the mouseover and mouseout events 
        $(this) 
            .unbind('mouseover') 
            .unbind('mouseout'); 
    }); 

```

## Methods ##

| **Method** | **Arguments** | **Return** | **Chainable** | **Description** |
|:-----------|:--------------|:-----------|:--------------|:----------------|
| livequery | String type, Function handler | jQuery | yes | Binds an event handler to all matched elements, even after the page has been loaded the DOM updated. An event is unbound from an element if the element is changed and is no longer matched. |
| livequery | Function matchedFn | jQuery | yes | Fires a function (matchedFn) for each matched element, even after the page has been loaded the DOM updated. |
| livequery | Function matchedFn, Function unmatchedFn | jQuery | yes | Fires a function (matchedFn) for each matched element, even after the page has been loaded the DOM updated. For each element that is no longer matched, the second function (unmatchedFn) is fired. |
| expire | - | jQuery | yes | This will stop/expire all live queries associated with the selector. Event based live queries unbind the events it bound when expired. The second function (unmatchedFn) of a function based live query is called for each element it had matched, if provided. |
| expire | String type | jQuery | yes | Will stop/expire all live queries associated with the selector and event type. All events that the live query bound will be unbound. |
| expire | String type, Function handler | jQuery | yes | This will stop/expire all live queries associated with the selector, event type and handler. All events that the live query bound will be unbound. |
| expire | Function matchedFn | jQuery | yes | This will stop/expire all live queries associated with the selector and matchedFn. |
| expire | Function matchedFn, Function unmatchedFn | jQuery | yes | This will stop/expire all live queries associated with the selector, matchedFn and unmatchedFn. The unmatchedFn is called for each element it had matched. |


## For Plugin Developers ##

If your plugin modifies the DOM without using the built-in DOM Modification methods (append, addClass, etc), you can register your plugin with Live Query like this.

```

if (jQuery.livequery) 
    jQuery.livequery.registerPlugin("pluginMethodName"); 

```

You can register several plugin methods at once by just passing them as additional arguments to the registerPlugin method.

```

if (jQuery.livequery) 
    jQuery.livequery.registerPlugin("method1", "method2", "method3"); 

```


## Browser Support ##

Live Query is tested in Safari 2 and WebKit Nightlies, Firefox 1.5 and 2, Internet Explorer 6 and 7 and Opera 9.

## Depends On ##

Live Query depends on jQuery 1.1.3 or higher.