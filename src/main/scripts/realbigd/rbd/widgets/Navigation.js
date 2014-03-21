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

	return declare([_WidgetBase, _TemplatedMixin], { 

		templateString: template,
		baseClass: "navigation",
		
		_navigationItems: null,
		_menuBar: null,
		_subMenu: null,
		_subMenu2: null,
		
		constructor: function(args) {
			lang.mixin(this, args);
		},
	
		startup: function() {
			this._navigationItems = new NavigationStore();
			this._buildMenuBar();
		},
	
		_buildMenuBar: function() {
			this.pMenuBar = new MenuBar({}, this.navigationNode);
			this._getNavigationMetaData();			
			
			
		    this.pSubMenu = new DropDownMenu({});
		    this.pSubMenu.addChild(new MenuItem({
		        label: "File item #1"
		    }));
		    this.pSubMenu.addChild(new MenuItem({
		        label: "File item #2"
		    }));
		    this.pMenuBar.addChild(new PopupMenuBarItem({
		        label: "File",
		        popup: this.pSubMenu
		    }));

		    this.pSubMenu2 = new DropDownMenu({});
		    this.pSubMenu2.addChild(new MenuItem({
		        label: "Cut",
		        iconClass: "dijitEditorIcon dijitEditorIconCut"
		    }));
		    this.pSubMenu2.addChild(new MenuItem({
		        label: "Copy",
		        iconClass: "dijitEditorIcon dijitEditorIconCopy"
		    }));
		    this.pSubMenu2.addChild(new MenuItem({
		        label: "Paste",
		        iconClass: "dijitEditorIcon dijitEditorIconPaste"
		    }));
		    this.pMenuBar.addChild(new PopupMenuBarItem({
		        label: "Edit",
		        popup: this.pSubMenu2
		    }));
		},
		
		_getNavigationMetaData: function() {
			this._navigationItems.store.query({}).forEach(lang.hitch(this, function(item) {
				this.pMenuBar.addChild(new PopupMenuBarItem({
					label: item.name
				}));
			}));
		}
		
	});
});