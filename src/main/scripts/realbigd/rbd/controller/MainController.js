define(["dojo/_base/declare",
       	"dojo/_base/lang",
       	"dojo/dom-construct",
       	"dojo/hash",
        "dojo/topic",
       	"dojo/dom",
        "dojo/request/handlers",
        "../widgets/Navigation",
        "../widgets/Search"
         ],
        function(declare, lang, domConstruct, hash, topic, dom, handlers, Navigation, Search){

   return declare(null, {
	   
	 containerNode: null,
	   
	 _search: null, 
	 _navigation: null,
	   
     constructor: function(args) {
    	 lang.mixin(this, args);
     },

     startup: function() {
    	 //domConstruct.create("div", {innerHTML: "Hello there, bitches."}, dom.byId("rbdMainSection"));
    	 this._startupNavigation();
     },
     
     _startupNavigation: function() {
    	 this._navigation = new Navigation();
    	 this._navigation.placeAt(this.containerNode);
    	 this._navigation.startup();
     },
     
     _startupSearchPage : function() {
		 var _search = new Search();
	 	 hash("search");
	 	 _search.startup();
	 }
     
   });
});