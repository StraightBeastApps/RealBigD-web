define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/dom",
         "dojo/dom-construct",
         "dijit/MenuBar",
         "dijit/Menu",
         "dijit/MenuItem",
         "dijit/PopupMenuBarItem",
         "dijit/DropDownMenu",
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "dojo/text!./templates/navigation.html",
         "dojo/domReady!"
		 ], 
		 function(declare, lang, dom, domConstruct, MenuBar, Menu, MenuItem, PopupMenuBarItem, 
				  DropDownMenu, _WidgetBase, _TemplatedMixin, template) {

	return declare([_WidgetBase, _TemplatedMixin], { 
		
		baseClass: "navigation",
		templateString: template,
		
		_pMenuBar: null,
		_pSubMenu: null,
		_pSubMenu2: null,
		
		constructor: function(args) {
			lang.mixin(this, args);
		},
	
		startup: function() {
			this._buildMenuBar();
		},
	
		_buildMenuBar: function() {
			this.pMenuBar = new MenuBar({}, this.navigationNode);

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

		    //this.pMenuBar.placeAt(this.navigationNode);
		    console.log("here");
		  //  domConstruct.place(this.pMenuBar, this.navigationNode);
		    this.pMenuBar.startup();
		}
		
	});
});