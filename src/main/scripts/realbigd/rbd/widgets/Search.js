define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/dom-construct",
         "dojo/dom-prop",
         "dojo/dom",
         "dojo/store/Memory", 
         "dijit/form/FilteringSelect",
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "dojo/text!./templates/Search.html",
         "dojo/domReady!"
		 ], 
		 function(declare, lang, domConstruct, domProp, dom, Memory, FilteringSelect, _WidgetBase, _TemplatedMixin, template) {

	return declare('realbigd/rbd/widgets/search', [_WidgetBase, _TemplatedMixin], { 
		
		templateString: template,
		
	
		startup: function() {
	    	 this.createPageElements();
	     },
	     
	    constructor: function(args) {
				lang.mixin(this, args);
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

		    var locationSelect = new FilteringSelect({
		        id: "locationSelect",
		        name: "location",
		        value: "CA",
		        store: locationStore,
		        searchAttr: "name"
		    }, this.locationSelect);
		    //locationSelect.startup();
		}

	});
});