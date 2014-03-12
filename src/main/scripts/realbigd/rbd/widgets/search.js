define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/dom-construct",
         "dojo/dom",
         "dojo/store/Memory", 
         "dijit/form/FilteringSelect", 
         "dojo/domReady!"
		 ], 
		 function(declare, lang, domConstruct, dom, Memory, FilteringSelect) {

	return declare(null, { 
		constructor : function(args) {
			lang.mixin(this, args);
		},
	
		startup: function() {
	    	 domConstruct.create("div", {innerHTML: "Hello there, we are at the search Page...Bitches."}, dom.byId("rbdMainSection"));
	    	 this.createPageElements();
	     },
		
		createPageElements: function() {
			this._buildSearchBar();
		},
		
		_buildSearchBar: function() {
			var locationStore = new Memory({
		        data: [
		            {name:"Ballantyne, Charlotte", id:"Bal"},
		            {name:"South End, Charlotte", id:"SE"},
		            {name:"Rock Hill, South Carolina (really...??!?!?!)", id:"RH"}
		        ]
		    });

		    var filteringSelect = new FilteringSelect({
		        id: "locationSelect",
		        name: "location",
		        value: "CA",
		        store: locationStore,
		        searchAttr: "name"
		    }, "locationSelect");
		}

	});
});