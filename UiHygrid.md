# ui.hygrid.js #

| **Author** | Copyright (c) 2009 Maxime Haineault ([haineault.com](http://haineault.com)) |
|:-----------|:----------------------------------------------------------------------------|
| **License** | [MIT License](http://www.opensource.org/licenses/mit-license.php) |


## Basic usage ##

### Javascript ###

```

$('#demo').hygrid({
    url:  'php/backend.php', 
    cols: [
        {label: 'ISO', name: 'iso', width: 40, align: 'center' }, 
        {label: 'Name', name: 'name', width: 80, hide: true }, 
        {label: 'Price', name: 'price', format: '{0:0.2f} $' } 
    ] 
}); 

```


## Plugins ##

| **Name** | **Description** |
|:---------|:----------------|
| `core` | Core cell modifiers and event handling |
| `htmltable` | Create hygrid from static html table |
| `ajax` | Create hygrid from remote data |
| `caption` | Grid title |
| `colhider` | Provide a way to toggle columns |
| `ledger` | Apply alternate colors on rows. |
| `pagination` | Show pagination options |
| `selectable` | Allow row selection |
| `search` | Search functionality |

## Events ##

| **Event** |  **Description** |
|:----------|:-----------------|
| `initialize` | Triggered _before_ the plugin are initialized. That's also where you can extend or modify the grid |
| `initialized` | The grid is built and each plugins are initialized |
| `resized` | The grid has been resized |
| `refresh` | The grid get rebuilt according to its current options |
| `updated` | The content of the grid has changed |
| `coltoggled` | A column has been toggled (column is accessible via ui.toggledCol) |
| `dataloading` | A ajax request has been made |
| `dataloaded` | A ajax response has been loaded (data is accessible via ui.recievedData) |
| `rowinsert` | A row will be inserted |
| `rowinserted` | A row has been inserted (row is accessible via ui.insertedRow) |
| `rowselect` | A row will be selected (row is accessible via ui.selectedRow) |
| `rowselected` | A has beed selected (row is accessible via ui.selectedRow) |
| `rowunselect` | A row will be unselected (row is accessible via ui.unselectedRow) |
| `rowunselected` | A has beed unselected (row is accessible via ui.unselectedRow) |

Plugins uses events to manipulate the grid, but it's also possible to bind grid events externally. You simply have to add the prefix "grid" before the event name;

```

$('#mygrid').bind('gridrefresh', function() {
    alert('The grid has been refreshed.');
});

```

I'm not sure why, but it seems you have to use the same selector used to create the grid to bind events. So if you used `$('#mygrid').hygrid()`, using `$('.ui-hygrid').bind(...)` afterwards to bind grid events will not work.

It's also possible to trigger events. Normally it would be possible to do `$('#mygrid').trigger('gridrefresh');` or something like that, however it does not work.. I had to expose the `_trigger` method;

```

$('#mygrid').hygrid('trigger', 'refresh');

```

Use this method until I figure out why a normal trigger don't work.

## Options ##

| **Option** | **Default** | **Description** |
|:-----------|:------------|:----------------|
| `debug` | `false` | Output internal events with context  |
| `trace` | `false` | Show stack trace (debug will be enabled automatically if true) |
| `width` | `'auto'` | Grid's width`*`  |
| `core` | `true` | Load core plugin |
| `toolbar` | `true` | Show toolbar |
| `caption` | `false` | Display specified caption |
| `ajax` | `false` | Use Ajax |
| `url` | `false` | Backend URL |
| `method` | `'get'` | Method to use to pass the grid parameters to the backend |
| `dataType` | `'json'` | Data type to use. It's also used to specify the data parser, which is also extendable. |
| `onError` | `function` | Callback function for Ajax error handling |
| `colhider` | `true` | Activate colhider |
| `sortable` | `true` | Activate sortable cols |
| `ledger` | `true` | Activate ledger |
| `pagination` | `true` | Activate pagination |
| `page` | `1` | Current page (pagination) |
| `rpp` | `10` | Rows per page (pagination) |
| `total` | `0` | Row count |
| `rppSelect` | `[5, 10, 15, 20]` | Show row per page selec box |
| `pager` | `'{start:d}-{end:d}/{total:d}, page: {page:d} of {pagetotal:d}'` | Pager string (set to false to disable pager) |
| `params` | `[]` | Which options must be passed as request parameter |

`*` height is determined by the number of rows displayed

## Developers ##

Documentation for hacking the grid is available [here](UiHygridDev.md).