/*
  jQuery anchor handler - 0.2
  (c) 2008 ~ Maxime Haineault (haineault@gmail.com)
  http://haineault.com   

  MIT License (http://www.opensource.org/licenses/mit-license.php)

  changelog
  =========
  - fixed bug in IE
*/

(function($){
	var url  = window.location.href, handlers = [];
	
	$.extend({
		anchorHandler: {
			add: function(regexp, callback) {
                var args = {};
				if (typeof(regexp) == 'object') {
					$.map(regexp, function(arg){
						args = {r: arg[0], cb: arg[1]};});}
				else	args = {r: regexp, cb: callback};
				handlers.push(args);
				return $.anchorHandler;
			}
		}
	})(document).ready(function(){
		$.map(handlers, function(handler){
			var match = url.match(handler.r) && url.match(handler.r)[0] || false;
			if (match) handler.cb.apply(this, [match, (url.match(/#.*/)[0] || false)]);});});
})(jQuery);