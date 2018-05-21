var yike = angular.module('yike',['ngRoute','controllers']);
//配置路由
yike.config(['$routeProvider','$locationProvider' ,function($routeProvider,$locationProvider){
	//angular版本>1.6 url会解析“/”，出现错误，所以需要加上这一句话！！
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/today',{
		templateUrl:'./views/today.html',
		controller:'TodayController'
	})
	.when('/order',{
		templateUrl:'./views/older.html',
		controller:'OrderController'
	})
	.when('/author',{
		templateUrl:'./views/author.html',
		controller:'AuthorController'
	})
	.when('/category',{
		templateUrl:'./views/category.html',
		controller:'CategoryController'
	})
	.when('/favourite',{
		templateUrl:'./views/favourite.html',
		controller:'FavouriteController'
	})
	.when('/settings',{
		templateUrl:'./views/settings.html',
		controller:'SettingController'
	})
	.otherwise({
		redirectTo:'/today'
	})
}])

yike.run(['$rootScope',function($rootScope){
	//全局变量
	$rootScope.collapsed = false;
	$rootScope.title = '今日一刻';
	$rootScope.index = 0;
	$rootScope.loaded = false;
	//全局方法
	$rootScope.toggle = function(){
		// console.log(1);
		//改变类名初始值
		$rootScope.collapsed = !$rootScope.collapsed;

		//获取所有导航

		var navs = document.querySelectorAll('.navs dd');
		if ($rootScope.collapsed) {
			// console.log('打开');
			for (var i = 0; i < navs.length; i++) {
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transitionDuration = (i+1)*0.15+'s';
			}
		}
		else {
			// console.log('关闭');
			var len = navs.length - 1;
			for (var j = len; j >= 0; j--) {
				navs[j].style.transform = 'translate(-100%)';
				navs[j].style.transitionDelay = '';
				navs[j].style.transitionDuration = (len - j) *0.15 + 's';
			}
		}
	}
}])