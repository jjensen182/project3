(function(){
	var app = angular.module('space', []);

	//app.controller('SpaceController', function(){
		//this.products = jupiters;
	//});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	//var jupiters = [
	//{
		//name: 'Jupiter',
		//diameter: '86,881 Miles in Diameter',
		//description:'dsfsdfsdfsdfsadfsdfsdfs',
	//},
	//{
		//name: 'Europa',
		//diameter: '1,950 Miles',
		//description: '. . .'
	//}
//];










})();