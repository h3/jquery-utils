# jquery.delayedobserver.js #

| **Author** | Copyright (c) 2007-2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:---------------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |

A delayed observer, useful for handling user inputs to avoid calling the callback function too often.

Autocomplete fields is a common situation where this mechanism is useful. You must post pone the AJAX call until the user stops typing to prevent fast typers to fire too much requests to the server and most likely hang the browser.

## Example ##

Here's an example that will ensure a minimum of 500 miliseconds delay between each callbacks:

```
<input type="text" id="autocomplete" />
```

```
$('#autocomplete').delayedObserver(function() {
    alert('Sending "'+ $(this).val() +'" to the server.');
    // perform AJAX call ...
}, 0.5);
```

By default it listen for keyup events, but you can change that like this:

```
$('#autocomplete').delayedObserver(function() {
    alert('Sending "'+ $(this).val() +'" to the server.');
    // perform AJAX call ...
}, 0.5, {
    event: 'keydown'
});
```

Sometimes it might be useful to change the condition of the comparison, for example, to make it case insensitive. You can achieve this using the `condition` option;

```
$('#autocomplete').delayedObserver(function() {
    // AJAX call
}, 0.5, {
    condition: function() { 
        return ($(this).data('oldval').toLowerCase() == $(this).val().toLowerCase());
    }
});
```

## Tested browsers ##

  * Microsoft Internet Explorer 7 - Windows XP/MC
  * Mozilla Firefox 2 - Windows XP/MC / Ubuntu
  * Gnome Epiphany - Ubuntu