<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%@ page session="false"%>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />

<link rel="icon" href="../sba-icon.png" type="image/x-icon" />
<link rel="shortcut icon" href="../sba-icon.png" type="image/x-icon" />

<script src="<spring:url value='/scripts/dojo/dojo.js'/>"data-dojo-config:"locale:'en', async:true, parseOnLoad:false"></script>

<title>Real Big D, Bros.</title>
</head>
<body class="rbd-body">
	<div id="rbdMainSection" class="fullHeight"></div>

	<script>
		var lstDependencies = [];
		var url = window.location.search.slice(1);
		var blnDebugEnabled = url.indexOf("isDebugEnabled") != -1;
		if (!blnDebugEnabled) {
			lstDependencies = [ "realbigd/layers/rbd" ];
		}

		//NOTE: Project version: ${project.version}

		var buildTs = "${serverTime}";
		if (buildTs === "") {
			buildTs = "" + new Date().getTime();
		}

		if (blnDebugEnabled) {
			// In debug mode we don't want to change the url so that we can set breakpoints
			buildTs = "1234567890000";
		}

		var pathContext = "${contextPath}";
		if (pathContext.indexOf("/", pathContext.length - 1) === -1) {
			pathContext = pathContext + "/";
		}

		var dojoAppConfig = {
			baseUrl : pathContext + "scripts" + "/",
			packages : [ {
				name : "dojo",
				location : "dojo"
			}, {
				name : "dijit",
				location : "dijit"
			}, {
				name : "dojox",
				location : "dojox"
			}, {
				name : "realbigd",
				location : "realbigd"
			} ]
		};

		require(dojoAppConfig, lstDependencies, function() {
			require([ "realbigd/rbd/app", "dojo/domReady!" ], function(app) {
				console.log("im here homejsp 1");
				var myApp = new app();
				myApp.boot();
				console.log("im here homejsp 2");
			});
		});
	</script>
</body>
</html>
