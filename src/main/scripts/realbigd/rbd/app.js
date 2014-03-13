define(["dojo/_base/declare", 
         "dojo/_base/lang", 
         "dojo/request/handlers",
         "./widgets/Window",
		 "./controller/MainController"
		 ], 
		 function(declare, lang, handlers, Window, MainController) {

	return declare(null, {

		containerNode: null,
		
		_mainController: null,
		_rootWidget: null,
		_search: null,

		constructor : function(args) {
			lang.mixin(this, args);
		},

		boot : function() {
			this._config();
			
			var self = this;
			self._rootWidget = new Window({containerNode: self.containerNode});
			
			this._startupMainController();
		},

		_startupMainController : function() {
			this._mainController = new MainController({containerNode: this._rootWidget.domNode});
			this._mainController.startup();
		},

		_config : function() {
			// Need to update the JSON handler for xhr requests to strip out the
			// "{}&&" prefix if it exists.
			// Prefix can be added to prevent JavaScript Hijacking attacks.
			handlers.register("json", function(response) {
				var rspText = response.text;
				if (rspText && rspText.indexOf("{}&&") == 0) {
					rspText = rspText.substr(4);
				} else if (rspText && rspText.indexOf("{} &&") == 0) {
					rspText = rspText.substr(5);
				}
				return json.parse(rspText || null);
			});
		}

	});
});
