define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dijit/MenuBar",
         "dijit/Menu",
         "dijit/MenuItem",
         "dijit/PopupMenuBarItem",
         "dijit/DropDownMenu",
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "../repositories/NavigationStore",
         "dojo/text!./templates/Navigation.html",
         "dojo/domReady!"
		 ], 
		 function(declare, lang, MenuBar, Menu, MenuItem, PopupMenuBarItem, 
				  DropDownMenu, _WidgetBase, _TemplatedMixin, NavigationStore, template) {

	return declare('realbigd/rbd/widgets/navigation', [_WidgetBase, _TemplatedMixin], { 

		templateString: template,
		baseClass: "navigation",
		
		_navigationItems: null,
		_menuBar: null,
		
		constructor: function(args) {
			lang.mixin(this, args);
		},
	
		startup: function() {
			this._navigationItems = new NavigationStore();
			this._buildMenuBar();
		},
	
		_buildMenuBar: function() {
			this._menuBar = new MenuBar({}, this.navigationNode);
			this._getNavigationMetaData();			
		},
		
		_getNavigationMetaData: function() {
			this._navigationItems.store.query({}).forEach(lang.hitch(this, function(item) {
				var dropDown = new DropDownMenu({});
				var subMenu = item.subMenu.split('|');
				
				subMenu.forEach(function(entry) {
						dropDown.addChild(new MenuItem({
							label: entry
						}));
				});
				
				this._menuBar.addChild(new PopupMenuBarItem({
							label: item.name,
							popup: dropDown
				}));
			}));
		}
		
	});
});