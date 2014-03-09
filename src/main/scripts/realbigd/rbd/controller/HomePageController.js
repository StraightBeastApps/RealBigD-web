define(["dojo/_base/declare",
       	"dojo/_base/lang",
       	"dojo/dom-construct",
        "dojo/request/handlers"
         ],
        function(declare, lang, domConstruct, handlers){

   return declare(null, {
	   
     constructor: function(args) {
    	 lang.mixin(this, args);
     },

     startup: function() {
    	 console.log("before create div");
    	 domConstruct.create("div", {innerHTML: "Hello there, bitches."}, dom.byId("rbdMainSection"));
    	 console.log("after create div");
     }
     
   });
});