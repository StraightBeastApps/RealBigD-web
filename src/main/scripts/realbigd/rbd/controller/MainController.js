define(["dojo/_base/declare",
       	"dojo/_base/lang",
       	"dojo/dom-construct",
       	"dojo/hash",
        "dojo/topic",
       	"dojo/dom",
        "dojo/request/handlers",
		"../widgets/Search"
         ],
        function(declare, lang, domConstruct, hash, topic, dom, handlers, search){

   return declare(null, {
	   
     constructor: function(args) {
    	 lang.mixin(this, args);
     },

     startup: function() {
    	 domConstruct.create("div", {innerHTML: "Hello there, bitches."}, dom.byId("rbdMainSection"));
     },
     
     _startupSearchPage : function() {
			var _search = new search();
			hash("search");
			_search.startup();
		}

     
     
   });
});