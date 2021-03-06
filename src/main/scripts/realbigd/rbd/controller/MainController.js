define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/dom-construct",
       	"dojo/hash",
        "dojo/topic",
        "dojo/dom",
        "dojo/request/handlers",
        "../widgets/LayoutController",
        "../widgets/Map",
        "../widgets/Navigation",
        "../widgets/Search"
         ],
        function(declare, lang, domConstruct, hash, topic, dom, handlers, LayoutController, Map, Navigation, Search){

   return declare(null, {
	   
	 containerNode: null,
	   
	 _search: null, 
	 _map: null,
	 _navigation: null,
	 _layoutController: null,
	   
     constructor: function(args) {
    	 lang.mixin(this, args);
     },

     startup: function() {
    	 this._buildMainPage();
     },
     
     _buildMainPage: function() {
    	 this._startupNavigationBar();
    	 this._startupSearchBar(); 
    	 this._buildMapTest();
    	 
    	 this._layoutController = new LayoutController({}, this.containerNode);
    	 this._layoutController.placeNavigationBar(this._navigation);
    	 this._layoutController.placeSearchBar(this._search);
    	 //TODO: shitty test for now, need to create method to place dynamically on each page
    	 this._layoutController.placeInfoBar(this._map);
    	 this._layoutController.startup(); 
     },
     
     _startupNavigationBar: function() {
    	 this._navigation = new Navigation();
    	 this._navigation.startup();
     },
     
     _startupSearchBar : function() {
		 this._search = new Search();
	 	 hash("search");
	 	 this._search.startup();
	 },
     
     _buildMapTest: function() {
    	 this._map = new Map();
    	 this._map.startup();
     }
     
     
     
   });
});