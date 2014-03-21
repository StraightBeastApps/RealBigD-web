define(["dojo/_base/declare", 
         "dojo/_base/lang",
         "dojo/store/Memory",
         "dojo/domReady!"
		 ], 
		 function(declare, lang, Memory) {

	return declare(null, { 

		store: null,
		
		constructor: function(args) {
			lang.mixin(this, args);
			
			var navigationData = [
				{	name: "Home", 
					id: "0",
					subMenu: 	 "Homes For Sale|"
								 + "Homes For Sale By Owner|"
								 + "Foreclosures|"
								 + "Open Houses|"
								 + "New Homes|"
								 + "Pre-Market Homes|"
								 + "Recent Home Sales|"
								 + "Browse All Homes"
					},{	
						name: "Rentals", 
						id: "1",
						subMenu: "Apartments For Rent|"
								 + "Houses For Rent|"
								 + "Rental Resources"
					},{	
						name: "Mortgage Rates", 
						id: "2",
						subMenu: "Mortgage Rates|"
								 + "Refinance"
					},{	
						name: "Advice", 
						id: "3",
						subMenu: "Real Estate Forum|"
								 + "Mortgage Forum|"
								 + "Using TheROD Forum|"
								 + "Ask a Question"
					},{	
						name: "Local Info", 
						id: "4",
						subMenu: "Placeholder 0|"
								 + "Placeholder 1"
					},{	
						name: "More", 
						id: "5",
						subMenu: + "Mobile|"
								 + "What TheROD Offers|"
								 + "Real Estate Advertising|"
								 + "Widgets, Badges & Data|"
								 + "Help"
				}
			];
			
			this.store = new Memory({
							idProperty: "name",
							data: navigationData});
		}
	});
});