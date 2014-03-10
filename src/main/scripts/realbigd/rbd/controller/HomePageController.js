define(["dojo/_base/declare",
       	"dojo/_base/lang",
       	"dojo/dom-construct",
       	"dojo/dom",
        "dojo/request/handlers"
         ],
        function(declare, lang, domConstruct, dom, handlers){

   return declare(null, {
	   
     constructor: function(args) {
    	 lang.mixin(this, args);
     },

     startup: function() {
    	 domConstruct.create("div", {innerHTML: "Hello there, bitches."}, dom.byId("rbdMainSection"));
     }
     
   });
});