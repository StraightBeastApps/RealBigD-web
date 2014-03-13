define(["dojo/_base/declare", 
         "dojo/dom",
         "dojo/dom-construct"
		 ], 
		 function(declare, dom, domConstruct) {

	return declare(null, { 

		templateString: '<div id="rbd" class="fullHeight"></div>',
		
		constructor: function(options) {
			if (options.containerNode) {
				this.domNode = domConstruct.place(this.templateString, options.containerNode, 'last');
			}
		},
	
	});
});