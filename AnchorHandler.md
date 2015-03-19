# jquery.anchorhandler.js #

| **Author** | Copyright (c) 2007-2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:---------------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |


This jQuery plugin allow to use regular expressions to attach events on url hanchor.. it's less complicated and more useful than it sounds :)

It's a clever and neat way to handle custom URLs that I borrowed from django's clever [URL dispatcher](http://www.djangoproject.com/documentation/url_dispatch/).

## Example ##

```

$.anchorHandler
    .add(/\#show\-something/,   function(){ /* ..*/  })
    .add(/\#trigger\-event/,    someEvent)
    .add(/\#/,                  smoothScrollToLink);

```