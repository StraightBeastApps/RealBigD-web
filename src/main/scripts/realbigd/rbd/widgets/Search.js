define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/dom-construct",
         "dojo/dom-prop",
         "dojo/dom",
         "dojo/keys",
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
		 function(declare, lang, domConstruct, domProp, dom, keys, Memory, FilteringSelect, RadioButton, TextBox, Button, _WidgetBase, _TemplatedMixin, template) {

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
			
			var locationSelect = new TextBox({
		        id: "locationSelect",
		        name: "location", 
		        onKeyUp: dojo.hitch(this, function(e){
		        	if(e.keyCode == keys.ENTER){
		        		this._executeSearch();
		        	}
		        })
		    }, this.locationSelect);
			
			/*var locationStore = new Memory({
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
		    }, this.locationSelect);*/
		},
		
		_buildRadioButtons: function() {
			var radioSale = new RadioButton({
		        checked: true,
		        value: "sale",
		        name: "radio",
		    }, this.radioSale).startup();
			
			var radioRent = new RadioButton({
		        checked: false,
		        value: "rent",
		        name: "radio",
		    }, this.radioRent).startup();
			
			var radioRecentlySold = new RadioButton({
		        checked: false,
		        value: "recentlySold",
		        name: "radio",
		    }, this.radioRecentlySold).startup();
		},
		
		_buildSearchButton: function() {
			var searchButton = new Button({
				label: "Search",
		        onClick: dojo.hitch(this, this._executeSearch)
			}, this.searchButton);
		},
		
		_executeSearch: function() {
			var type = this.getRadioValue('radio');
        	var location = dom.byId('locationSelect').value;	        	
        	alert("Searching : " + location + "in the category of :" + type);
		},
		
		getRadioValue: function(radios) {
		    var elements = document.getElementsByName(radios);
		    for (var i=0; i<elements.length; i++){
		        if (elements[i].checked){
		            return elements[i].value;
		        }
		    }
		},
		
		_buildClearButton: function() {
			var clearButton = new Button({
				label: "Clear",
		        onClick: dojo.hitch(this, function(e){
		            this.locationSelect.value = "";
		        })
			}, this.clearButton);
		}

	});
});