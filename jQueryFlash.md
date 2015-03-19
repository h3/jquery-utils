# jquery.flash.js #

| **Author** | Copyright (c) 2006 Luke Lutman ([lukelutman.com](http://lukelutman.com)) |
|:-----------|:-------------------------------------------------------------------------|
| **License** | Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses |
| **Website** | http://jquery.lukelutman.com/plugins/flash |

## Basic usage ##

```

$('#hello').flash({
    src: 'hello.swf',
    width: 320,
    height: 240
});

```

## Custom replacement ##

```

$('.custom').flash(null, null, function(htmlOptions){
    // do stuff
});

```

## Overwriting defaults ##

```

$.fn.flash.replace = function(htmlOptions) {
    // always do stuff
};

```

## Flash detection ##

```

$('#hello').flash(
    { src: 'hello.swf' }, 
    { version: '6.0.65' }
);

```


## Express install ##

```

$('#hello').flash(
    { src: 'hello.swf' }, 
    { expressInstall: true }
);

```



## Graceful degradation ##

```

$('#hello').flash(
    { src: 'hello.swf' }, 
    { update: false }
);

```