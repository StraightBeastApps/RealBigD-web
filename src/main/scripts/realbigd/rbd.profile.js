var profile = (function(){
	var testResourceRe = /\/test\//,
	
		copyOnly = function(filename, mid) {
			var lstCopyOnly = {
					"realbigd/rbd.profile" : true,
					"realbigd/package.json"    : true
			};
			
			return (mid in lstCopyOnly) 
				|| (/^realbigd\/resources\//.test(mid) && !/\.css$/.test(filename))
				|| /(png|jpg|jpeg|gif|tiff)$/.test(filename);
	};
	
    return {
        resourceTags: {
        	//Tag our test files
        	test: function(filename, mid) {
            	return testResourceRe.test(mid) || mid=="realbigd/test";
            },
            //Tag our copy only files
            copyOnly: function(filename, mid) {
            	return copyOnly(filename, mid);
            },
            //If it isn't a test resource, copy only, but if it is a .js file, tag it as AMD
            amd: function(filename, mid) {
                return !testResourceRe.test(mid)
                	&& !copyOnly(filename, mid)
                	&& /\.js$/.test(filename);
            }
            
        }
    };
})();