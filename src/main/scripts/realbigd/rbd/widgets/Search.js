define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/dom-construct",
         "dojo/dom-prop",
         "dojo/dom",
         "dojo/store/Memory", 
         "dijit/form/FilteringSelect",
         "dijit/form/RadioButton",
         "dijit/form/TextBox",
         "dijit/form/Button",
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "dojo/text!./templates/Search.html",
         "dojo/domReady!"
		 ], 
		 function(declare, lang, domConstruct, domProp, dom, Memory, FilteringSelect, RadioButton, TextBox, Button, _WidgetBase, _TemplatedMixin, template) {

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
			this._buildRadioButtons();
			this._buildClearButton();
			this._buildSearchButton();
		},
		
		_buildSearchBar: function() {
			var locationStore = new Memory({
		        data: [
		            {name:"Ballantyne, Charlotte", id:"Bal"},
		            {name:"South End, Charlotte", id:"SE"},
		            {name:"Rock Hill, South Carolina", id:"RH"}
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
		
		_buildRadioButtons: function() {
			var radioSale = new RadioButton({
		        checked: true,
		        value: "sale",
		        name: "sale",
		    }, this.radioSale).startup();
			
			var radioRent = new RadioButton({
		        checked: false,
		        value: "rent",
		        name: "rent",
		    }, this.radioRent).startup();
			
			var radioRecentlySold = new RadioButton({
		        checked: false,
		        value: "recentlySold",
		        name: "recentlySold",
		    }, this.radioRecentlySold).startup();
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
		            this.locationSelect.displayedValue = "";
		        })
			}, this.clearButton);
		}

	});
});