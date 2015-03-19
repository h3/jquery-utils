# jquery.timeago.js #

| **Author** | Copyright (c) 2008 Ryan McGeary ([mcgeary.org](http://mcgeary.org)) |
|:-----------|:--------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |
| **Website** | http://timeago.yarp.com/ |

Timeago is a jQuery plugin that makes it easy to support automatically updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").

Timeago was originally built for use with [Yarp.com](http://yarp.com/) to timestamp comments.

  * Avoid timestamps dated "1 minute ago" even though the page was opened 10 minutes ago; timeago refreshes automatically
  * You can take full advantage of page caching in your web applications, because the timestamps aren't calculated on the server
  * You get to use [microformats](http://microformats.org/) like the cool kids

## Basic usage ##


```

jQuery(document).ready(function() {
  jQuery('abbr[class*=timeago]').timeago();
});

```

This will turn all abbr elements with a class of timeago and an ISO 8601 timestamp in the title:

```

<abbr class="timeago" title="2008-07-17T09:24:17Z">July 17, 2008</abbr>

```

into something like this:

```

<abbr class="timeago" title="2008-07-17T09:24:17Z">2 months ago</abbr>

```

which yields: 2 months ago. As time passes, the timestamps will automatically update.

## Input methods ##

You can also use it programmatically:

```

jQuery.timeago(new Date());             //=> "less than a minute ago"
jQuery.timeago("2008-07-17");           //=> "2 months ago"
jQuery.timeago(jQuery("abbr#some_id")); //=> "2 months ago"     // [title="2008-07-20"]

```

## Future timestamps ##

To support timestamps in the future, use the allowFuture setting:

```

jQuery.timeago.settings.allowFuture = true;

```