var profile = (function(){
	return {
		action: "release",
        basePath: "./",
        cssOptimize: "comments",
        layerOptimize: "shrinksafe",
        mini: true,
        copyTests: false,
        optimize: "shrinksafe",
        selectorEngine: "lite",
        
        defaultConfig: {
        	hasCache: {
		    	"dojo-built": 1,
		    	"dojo-loader": 1,
		    	"dom": 1,
		    	"host-browser": 1,
		    	"config-selectorEngine": "lite"
		    },
		    async: 1,
        },
        
        packages:[{
        	name: "dojo",
        	location: "./dojo"
        },{
        	name: "dijit",
        	location: "./dijit"
        },{
        	name: "dojox",
        	location: "./dojox"
        },{
        	name: "realbigd",
        	location: "./realbigd/"
        }],
        
        layers: {
        	"realbigd/layers/rbd": {
        		include: ["realbigd/rbd/app",
        		          "realbigd/rbd/widgets/search",
        		          "dijit/_base",
        		          "dojo/_base/lang"
	  			          ],
	  		    exclude: [ ]
        	}
        }
    };
})();