# ui.timepickr.js #

| **Author** | Copyright (c) 2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:----------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |
| **Website** | http://haineault.com/media/jquery/ui-timepickr/page/ |
| **Rails plugin** | http://github.com/integrallis/in_place_jquery_timepickr/tree/master |


## Introduction ##

jquery.timepickr was created in a attempt to make the process of inputing time in a form as easy an natural as posssible.

**New:** More infos available in [Development notes](http://code.google.com/p/jquery-utils/wiki/UiTimepickrDev)

## Usage examples ##

### Basic usage ###

#### HTML ####

```

<input id="test" type="text" value="">

```

#### JavaScript ####

```

$(function(){
    $('#test').timepickr();
});

```

### Complete example ###

```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <link title="theme" type="text/css" href="http://ui.jquery.com/applications/themeroller/css/jquery-ui-base.css.php?ctl=themeroller&amp;=" media="screen" rel="Stylesheet" id="themeCSS" />
  <link rel="stylesheet" media="screen" href="images/jquery.timepickr.css" type="text/css" />
  <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
  <script type="text/javascript" src="js/jquery.ui.all.js"></script>
  <script type="text/javascript" src="js/jquery.timepickr.js"></script>
  <script type="text/javascript">
  $(function(){
      $('#timestart').timepickr();
  });
  </script>
</head>
<body>
    <input id="timestart" type="text" value="09:00" />
</body>
</html>

```

**Note**: The `timepickr.css` file _must_ be loaded _after_ `jquery-ui-base.css`

### Options ###

| **Option** | **Default**| **Description**|
|:-----------|:|:|
| convention | 24 | Hour convention (12 or 24) |
| dropslide | {trigger:  'focus'} | Dropslide options |
| format12 | "{h:02.d}:{m:02.d} {suffix:s}" | 12h format string |
| format24 | "{h:02.d}:{m:02.d}" | 24h format string |
| handle | false | handle is a DOM element which will open the menu upon click |
| hours | true | Show hours picker |
| minutes | true | Show minutes picker |
| seconds | false | Show seconds picker |
| prefix | ['am', 'pm'] | Time prefix |
| suffix | ['am', 'pm'] | Time suffix |
| rangeMin | ['00', '15', '30', '45'] | Minutes range |
| rangeSec | ['00', '15', '30', '45'] | Seconds range |
| updateLive | true | Update input value on each mouseover |
| val | false | Initial value |
| resetOnBlur | true | Input reset itself on blur when no click happens |


### TODO ###

  * add possibility to add labels
  * optional keyboard navigation
  * themes support
  * "reset" on blur

### References ###
  * [Development notes](http://code.google.com/p/jquery-utils/wiki/UiTimepickrDev)
  * [12-hour clock](http://en.wikipedia.org/wiki/12-hour_clock)
  * [24-hour clock](http://en.wikipedia.org/wiki/24-hour_clock)