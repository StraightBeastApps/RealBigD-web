define(["dojo/_base/declare",
       	"dojo/_base/lang",
        "dijit/registry",
        "dijit/layout/BorderContainer",
        "dijit/layout/TabContainer",
        "dijit/layout/ContentPane",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "../widgets/Navigation",
        "../widgets/Search",
        "dojo/text!./templates/LayoutController.html"
         ],
        function(declare, lang, registry, BorderContainer, TabContainer, ContentPane, 
        		 _WidgetBase, _TemplatedMixin, Navigation, Search, template) {

   return declare([_WidgetBase, _TemplatedMixin], {
	   
	 templateString: template,
	 baseClass: "layout",
	 
	 _navigationBar: null,
	 _searchBar: null,
	 _infoBar: null,
	 	   
     constructor: function(args) {
    	 lang.mixin(this, args);
     },

     startup: function() {
    	 this._buildMainLayout();    	 
     },
     
     _buildMainLayout: function() {
    	 var _mainBorder = new BorderContainer({ design: "headline" }, this.mainBorderNode);
    	 
    	 this._navigationBar = new ContentPane({ region: "top" }, this.navigationPaneNode);
    	 this._searchBar = new ContentPane({ region: "center" }, this.searchPaneNode);
    	 this._infoBar = new ContentPane({ region: "bottom" }, this.infoPaneNode);
     },
     
     placeNavigationBar: function(widget) {
    	 widget.placeAt(this.navigationPaneNode);
     },
     
     placeSearchBar: function(widget) {
    	 widget.placeAt(this.searchPaneNode);
     },
     
     placeInfoBar: function(widget) {
    	 widget.placeAt(this.infoPaneNode);
     }
     
   });
});