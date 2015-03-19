# jquery.countdown.js #

| **Author** | Copyright (c) 2007-2008 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:---------------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |

| **WARNING** | This documentation is not up to date with the trunk |
|:------------|:----------------------------------------------------|

## Options ##

| **Option**    | **Default** | **Description** |
|:--------------|:------------|:----------------|
| `date`      | - | JavaScript date object (ex; new Date("August 23, 2010 8:00:00")) |
| `msgFormat` | `'%d [day|days] %hh %mm %ss'` | Format of the countdown string (see _string format tokens below)_|
| `msgNow`    | `'Now !'`           | String to display when reaching zero |
| `interval`  | `1000`              | Update interval in milliseconds |


## String format tokens ##

| **Token** | **Represents** |
|:----------|:---------------|
| `%y`    | Year(s)      |
| `%M`    | Month(s)     |
| `%w`    | Week(s)      |
| `%d`    | Day(s)       |
| `%h`    | Hour(s)      |
| `%m`    | Minute(s)    |
| `%s`    | Second(s)    |


## Basic usage ##

```

// default format is '%d [day|days] %hh %mm %ss'
var d = new Date();

$('#countdown-1').countdown({now: 'Happy new year !', 
    year: d.getFullYear()+1, month: d.getMonth()+1, day: d.getDate()+1, hour: 1, min: 1, sec: 1 
});


```

## Custom format ##

```

$('#countdown-2').countdown({
    format: '%d jours, %h heures %m minutes et %s secondes',
    year: 2030, month: 12, day: 1
});


```


## Handling plurals ##

```

$('#countdown-4').countdown({
    format: '%d [jour|jours], %h [heure|heures] %m [minute|minutes] et %s [seconde|secondes]',
    year: 2038, month: 1, day: 1
});

```

## Now message ##

```

$('#countdown-4').countdown({
    now: 'Happy new yearbug !',
    year: 2038, month: 1, day: 1
});

```

## Functional arguments ##

```

$('#countdown-5').countdown({year: '+1'});

```