define(["dojo/_base/declare", 
         "dojo/_base/lang", 
         "dojo/request/handlers",
		 "./controller/HomePageController"
		 ], 
		 function(declare, lang, handlers, HomePageController) {

	return declare(null, {

		_appController : null,

		constructor : function(args) {
			lang.mixin(this, args);
		},

		boot : function() {
			this._config();
			this._startupHomePage();
		},

		_startupHomePage : function() {
			var _appController = new HomePageController();
			_appController.startup();
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