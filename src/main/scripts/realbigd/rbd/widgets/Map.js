define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/dom-attr",
         "dojox/geo/openlayers/Map",
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "dojo/text!./templates/Map.html",
         "dojo/domReady!"
		 ], 
		 function(declare, lang, domAttr, Map, _WidgetBase, _TemplatedMixin, template) {

	return declare('realbigd/rbd/widgets/map', [_WidgetBase, _TemplatedMixin], { 

		templateString: template,
		baseClass: "map",
		
		_map: null,
		_layer: null,
		
		constructor: function(args) {
			lang.mixin(this, args);
		},
	
		startup: function() {
			domAttr.set(this.mapNode, { style: "background-color: #b5d0d0; width: 100%; height: 100%;" });
			this._map = new Map(this.mapNode, {
					baseLayerType: dojox.geo.openlayers.BaseLayerType.GOOGLE
			});

			var rh = {
				      latitude : 34.9381,
				      longitude : -81.0261
				    };

		    this._map.fitTo({
		    		position : [ rh.longitude, rh.latitude ],
		    		extent : 0.01
		    });
		}
		
	});
});