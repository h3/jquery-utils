# jquery.flickrshow.js #

| **Author** | Copyright (c) 2007-2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:---------------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |


This plugins takes a flickr photostream link and turns it into a nice little slideshow.

## Example ##

```

$('#flickr-photostream').flickrshow({
    url: 'http://api.flickr.com/services/feeds/photos_public.gne?id=30563648@N07&lang=en-us&format=json&jsoncallback=?'
});

```

## Options ##

| **Option** | **Type** | **Default** | **Description** |
|:-----------|:---------|:------------|:----------------|
| `cycle`  | object | `{}` | jQuery.cycle options |
| `imgBorder` | int | `0` | Size of the image border |
| `toolbar` | boolean | `true` | Show toolbar |
| `titlebar` | boolean | `true` | Show titlebar |
| `browseTarget` | string | `_self` | Where to open "Browse" link |
| `slimbox` | boolean | `$.slimbox OR false` | Use slimbox to display photos when clicked |

## Important ##

To get the right photostream URL, open the flickr photostream you want to display, go the the very bottom of the page where it's written "Subscribe to Username's photostream".

Copy the "Latest" link, it should look something like this;

```
http://api.flickr.com/services/feeds/photos_public.gne?id=30563648@N07&lang=en-us&format=rss_200
```

You have to change the **format** to json and specify a **jsoncallback**, which should make the URL looks like this;

```
http://api.flickr.com/services/feeds/photos_public.gne?id=30563648@N07&lang=en-us&format=json&jsoncallback=?
```

In other words, replace `&format=rss_200` by `&format=json&jsoncallback=?_` and you're done.