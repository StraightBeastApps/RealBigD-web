define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/dom-construct",
         "dojo/dom-prop",
         "dojo/dom",
         "dojo/store/Memory", 
         "dijit/form/FilteringSelect",
         "dijit/form/TextBox",
         "dijit/form/Button",
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "dojo/text!./templates/Search.html",
         "dojo/domReady!"
		 ], 
		 function(declare, lang, domConstruct, domProp, dom, Memory, FilteringSelect, TextBox, Button, _WidgetBase, _TemplatedMixin, template) {

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
			this._buildClearButton();
			this._buildSearchButton();
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
		        hasDownArrow: false,
		        store: locationStore,
		        searchAttr: "name"
		    }, this.locationSelect);
		    //locationSelect.startup();
		},
		
		_buildSearchButton: function() {
			var searchButton = new Button({
				label: "Search",
		        onClick: dojo.hitch(this, function(e){
		        	alert("shit don't work yet");
		        })
			}, this.searchButton);
		},
		
		_buildClearButton: function() {
			var clearButton = new Button({
				label: "Clear",
		        onClick: dojo.hitch(this, function(e){
		            this.locationSelect.set('displayedValue', "");
		        })
			}, this.clearButton);
		}

	});
});