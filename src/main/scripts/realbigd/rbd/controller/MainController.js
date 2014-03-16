define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/dom-construct",
       	"dojo/hash",
        "dojo/topic",
        "dojo/dom",
        "dojo/request/handlers",
        "../widgets/LayoutController",
        "../widgets/Navigation",
        "../widgets/Search"
         ],
        function(declare, lang, domConstruct, hash, topic, dom, handlers, LayoutController, Navigation, Search){

   return declare(null, {
	   
	 containerNode: null,
	   
	 _search: null, 
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
    	 
    	 this._layoutController = new LayoutController({}, this.containerNode);
    	 this._layoutController.placeNavigationBar(this._navigation);
    	 this._layoutController.placeSearchBar(this._search);
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
	 }
     
   });
});