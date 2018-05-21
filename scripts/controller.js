//实例化一个模块，用来管理所有的控制器
angular.module('controllers',[])

.controller('NavController',['$scope',function($scope){
	$scope.navs = [{href:'#/today',class:'icon-home',text:'今日一刻'},
	{href:'#/order',class:'icon-file-empty',text:'往期内容'},
	{href:'#/author',class:'icon-pencil',text:'热门作者'},
	{href:'#/category',class:'icon-menu',text:'栏目浏览'},
	{href:'#/favourite',class:'icon-heart',text:'我的喜欢'},
	{href:'#/settings',class:'icon-cog',text:'设置'}]
}])
//今日一刻
.controller('TodayController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$rootScope.title = '今日一刻';
	$rootScope.index = 0;
	$http({
		url:'./api/today.php',//这个路径到底是相对什么的呀？
		method:'get'
	}).then(function(info){
		$rootScope.loaded = true;
		info = info.data;
		$scope.date = info.date;
		$scope.posts = info.posts;
	},function(){});
}])
//往期内容
.controller('OrderController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	// console.log('today');
	$rootScope.loaded = false;
	$rootScope.title = '往期内容';
	$rootScope.index = 1;
	$http({
		url:'./api/older.php',//这个路径到底是相对什么的呀？
		method:'get'
	}).then(function(info){
		$rootScope.loaded = true;
		info = info.data;
		$scope.date = info.date;
		$scope.posts = info.posts;
	},function(){});
}])
//热门作者
.controller('AuthorController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$rootScope.title = '热门作者';
	$rootScope.index = 2;
	//热门作者
	$http({
		url:'./api/author.php',//这个路径到底是相对什么的呀？
		method:'get'
	}).then(function(info){
		console.log(info);
		$rootScope.loaded = true;
		$scope.authors = info.data.authors;
	},function(){});
	//本周推荐作者
	$http({
		url:'./api/authorstwo.php',//这个路径到底是相对什么的呀？
		method:'get'
	}).then(function(info){
		$scope.authorstwo = info.data.authors;
	},function(){});
}])
//栏目浏览
.controller('CategoryController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$rootScope.title = '栏目浏览';
	$rootScope.index = 3;
	$http({
		url:'./api/category.php',//这个路径到底是相对什么的呀？
		method:'get'
	}).then(function(info){
		$rootScope.loaded = true;
		$scope.categorys = info.data.columns;
	},function(){});
}])
//我的喜欢
.controller('FavouriteController',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.index = 4;
	console.log('Favourite');
}])
//设置
.controller('SettingController',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.index = 5;
	console.log('Setting');
}])