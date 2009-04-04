/*
  jQuery ui.hygrid.htmltable
  http://code.google.com/p/jquery-utils/

  (c) Maxime Haineault <haineault@gmail.com> 
  http://haineault.com

  MIT License (http://www.opensource.org/licenses/mit-license.php

*/

$.extend($.ui.hygrid.defaults, {
    core: true,
    toolbar: true,
    total: 0,
});

$.tpl('hygrid.button',        '<button class="ui-state-default ui-corner-all">{label:s}</button>');
$.tpl('hygrid.toolbarTop',    '<thead class="ui-hygrid-toolbar top ui-widget-header"><tr><td></td></tr></thead>');
$.tpl('hygrid.toolbarBottom', '<tfoot class="ui-hygrid-toolbar bottom ui-widget-header"><tr><td></td></tr></tfoot>');

$.ui.plugin.add('hygrid', 'core', {
    initialize: function(e, ui) {
        $.extend($.ui.hygrid.cellModifiers, {
            label: function(el, cell, type){ 
                return (type == 'th') && el.find('div').text(cell.label) || el.text(cell.label); 
            },
            align: function(el, cell){ 
                el.find('div').andSelf().css('text-align', cell.align); 
            },
            width: function(el, cell, type, col){ 
                if (type == 'th' && (this.options.width == 'auto' || col < this.options.cols.length-1)) { 
                    el.find('div').andSelf().width(cell.width);
                }
            }
        });
        if (ui.element.get(0).nodeName == 'TABLE') {
            ui._('table', ui.element);
            ui._('wrapper', ui.element.wrap('<div />').parent());
        }
        else {
            ui._('wrapper', ui.element);
            ui._('table',   ui.element.find('table'));
        }
        ui._('wrapper').addClass('ui-hygrid');
        console.log(ui._('wrapper'));
    },
    initialized: function(e, ui) {
        var cols = ui.options.colhider && ui.cols()+1 || ui.cols();
        if (ui.options.toolbarTop) {
            ui._('toolbarTop', $.tpl('hygrid.toolbarTop').prependTo(ui._('table')).find('td:first').attr('colspan', cols));
        }
        if (ui.options.toolbarBottom) {
            ui._('toolbarBottom', $.tpl('hygrid.toolbarBottom').appendTo(ui._('table')).find('td:first').attr('colspan', cols));
        }
    },
    resized: function(e, ui) {
        ui._setGridWidth();
    },
    gridupdated: function(e, ui) {
        var thead = ui._('thead');
        thead.find('th.ui-hygrid-header')
            .each(function(x){
                if (ui.options.cols && ui.options.cols[x]) {
                    ui._applyCellModifiers(thead.find('.ui-hygrid-header').eq(x), ui.options.cols[x], x);
                }
            });
        ui._trigger('resized');
    },
    coltoggled: function(e, ui) {
        var $ths = $('th:visible', ui._('thead'));
        $ths.eq($ths.length - 2).css('width', 'auto');
        ui._trigger('gridupdated');
    }
});

