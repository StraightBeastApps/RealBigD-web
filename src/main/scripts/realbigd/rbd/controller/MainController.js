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
	   
	 _search: null, 
	 _navigation: null,
	   
     constructor: function(args) {
    	 lang.mixin(this, args);
     },

     startup: function() {
    	 this._startupNavigation();
    	 this._startupSearchPage();
     },
     
     _startupNavigation: function() {
    	 this._navigation = new Navigation();
    	 this._navigation.startup();
     },
     
     _startupSearchPage : function() {
		 var _search = new Search();
	 	 hash("search");
	 	 _search.startup();
	 }
     
   });
});