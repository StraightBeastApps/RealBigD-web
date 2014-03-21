define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/store/Memory",
         "dojo/domReady!"
		 ], 
		 function(declare, lang, Memory) {

	return declare(null, { 

		store: null,
		
		constructor: function(args) {
			lang.mixin(this, args);
			
			var navigationData = [
				{name: "Home", id: "0"},
				{name: "Rentals", id: "1"},
				{name: "Mortgage Rates", id: "2"},
				{name: "Advice", id: "3"},
				{name: "Local Info", id: "4"},
				{name: "More", id: "5"}
			]
			
			this.store = new Memory({
							idProperty: "name",
							data: navigationData});
		}
	});
});