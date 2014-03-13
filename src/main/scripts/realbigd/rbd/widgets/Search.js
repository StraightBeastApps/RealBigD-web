define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/dom-construct",
         "dojo/dom",
         "dojo/store/Memory", 
         "dijit/form/FilteringSelect",
         "dijit/_TemplatedMixin",
         "dojo/text!./templates/search.html",
         "dojo/domReady!"
		 ], 
		 function(declare, lang, domConstruct, dom, Memory, FilteringSelect, _TemplatedMixin, template) {

	return declare(null, { 
		
		templateString: template,
		
		constructor: function(args) {
			lang.mixin(this, args);
		},
	
		startup: function() {
	    	 domConstruct.create("div", {innerHTML: "Hello there, we are at the search Page...."}, dom.byId("rbdMainSection"));
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