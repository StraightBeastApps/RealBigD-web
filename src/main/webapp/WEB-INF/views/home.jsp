<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%@ page session="false"%>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />

<link rel="icon" href="../sba-icon.png" type="image/x-icon" />
<link rel="shortcut icon" href="../sba-icon.png" type="image/x-icon" />

<script src="<spring:url value='/scripts/dojo/dojo.js'/>" data-dojo-config:"locale:'en', async:true, parseOnLoad:false"></script>
<script type="text/javascript" src="<spring:url value='/OpenLayers-2.13.1/OpenLayers.js'/>"></script>
<script src="http://maps.google.com/maps/api/js?v=3&amp;sensor=false"></script>
<link rel="stylesheet" type="text/css" href="<spring:url value='/scripts/dijit/themes/claro/claro.css'/>"></link>
<link rel="stylesheet" type="text/css" href="<spring:url value='/scripts/realbigd/rbd/themes/main.css'/>"></link>

<title>Real Big D, Bros.</title>
</head>
<body class="rbd-body claro">
	<div id="rbdMainSection" class="fullHeight"></div>

	<script type="text/javascript">
		var lstDependencies = [];
		var url = window.location.search.slice(1);
		var blnDebugEnabled = url.indexOf("isDebugEnabled") != -1;
		if (blnDebugEnabled) {
			lstDependencies = [ "realbigd/layers/rbd" ];
		}

		//NOTE: Project version: ${project.version}

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
			require([ "realbigd/rbd/app", "dojo/domReady!" ], 
				function(app) {
					new app({containerNode: 'rbdMainSection'}).boot();
			});
		});
	</script>
</body>
</html>
