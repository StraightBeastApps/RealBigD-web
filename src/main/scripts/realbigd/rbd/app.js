define(["dojo/_base/declare", 
         "dojo/_base/lang", 
         "dojo/request/handlers",
         "dojo/hash",
         "dojo/topic",
		 "./controller/HomePageController",
		 "./widgets/Search"
		 ], 
		 function(declare, lang, handlers, hash, topic, HomePageController, search) {

	return declare(null, {

		_appController : null,
		
		_search: null,

		constructor : function(args) {
			lang.mixin(this, args);
		},

		boot : function() {
			this._config();
			this._startupSearchPage();
		},

		_startupSearchPage : function() {
			//var _appController = new HomePageController();
			var _search = new search();
			hash("search");
			_search.startup();
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
