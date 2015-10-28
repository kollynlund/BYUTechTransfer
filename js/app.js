var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

angular.module('techtransfer',['ui.router','ui.bootstrap','ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'HomeController as hmc'
		})

		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'AboutController as ac'
		})

		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'ContactController as cc'
		})

		.state('technologies', {
			url: '/technologies',
			templateUrl: 'templates/technologies.html',
			controller: 'TechnologiesController as tc'
		})

		.state('resources', {
			url: '/resources',
			templateUrl: 'templates/resources.html',
			controller: 'ResourcesController as fc'
		});
})

.controller('AboutController', function() {})
.controller('ContactController', function($scope, $state, DataTransfer) {
	var cc = this;
	cc.formValid = false;
	cc.emailSent = false;
	cc.formData = {
		name:'',
		email:'',
		message:''
	};

	$scope.$watchCollection(
		function watchFormData() {
			return [cc.formData.name, cc.formData.email, cc.formData.message]
		},
		function handleFormDataChange() {
			if (cc.formData.name && emailRegex.test(cc.formData.email) && cc.formData.message) {
				cc.formValid = true;
			} else {
				cc.formValid = false;
			}
		}
	);

	cc.submitForm = function() {
		// if (cc.formValid) {
		// 	DataTransfer.SendContactEmail(cc.formData);
			cc.emailSent = true;
		// }
	};

	cc.goTo = function(pagename) {
		$state.go(pagename);
		$scope.showMenu = false;
	};
})
.controller('TechnologiesController', function() {})
.controller('ResourcesController', function($modal) {
	this.open = function (facultyMemberName) {
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'Faculty Member Profiles/'+facultyMemberName+'.html',
			controller: 'FacultyModalController as fmc',
			size: 'lg'
		});
	};
})
.controller('HomeController', function($scope,$window,$state) {
	var hmc = this;
	// $scope.windowWidth = $window.innerWidth;
	// $scope.jumboHeight = $("video:first").height() > $("img:first").height() ? $("video:first").height() : $("img:first").height();
	// // Watch for changes in the window width
	// $(window).on("resize.doResize", function (){
	// 	$scope.$apply(function(){
	// 	$scope.windowWidth = $window.innerWidth;
	// 	$scope.jumboHeight = $("video:first").height() > $("img:first").height() ? $("video:first").height() : $("img:first").height();
	// 	});
	// });
	// $scope.$on("$destroy",function (){
	// 	// Kill resize listener
	// 	 $(window).off("resize.doResize");
	// });

	hmc.goTo = function(pagename) {
		$state.go(pagename);
		$scope.showMenu = false;
	};
})

.controller('TitleController', function(PageTitle) {
	var tc = this;
	tc.title = PageTitle.getTitle;
})
.controller('HeaderController', function($scope,$state,$window) {
 //	$scope.windowWidth = $window.innerWidth;
 //	$scope.showMenu = false;
 //	// Watch for changes in the window width
	// $(window).on("resize.doResize", function (){
	// 	$scope.$apply(function(){
 //			$scope.showMenu = false;
	// 		$scope.windowWidth = $window.innerWidth;
	// 	});
	// });
	// $scope.$on("$destroy",function (){
	// 	// Kill resize listener
	// 	 $(window).off("resize.doResize");
	// });
	// // -------------------------------------

	this.goTo = function(pagename) {
		$state.go(pagename);
		$scope.showMenu = false;
	};
})
.controller('FooterController', function() {
	this.currentYear = new Date().getFullYear();
})

.factory('DataTransfer',function($http) {
	return {
		SendContactEmail: function(the_data) {
			return $http({
				method: 'POST',
				url: 'https://mandrillapp.com/api/1.0/messages/send.json',
				headers: {
					'Content-Type':'application/json'
				},
				data: {
					"key":"h_FdIHNlZN0YdLY8vU8Cfg",
					"message": {
						"text": 'Name: '+the_data.name+'\nEmail Address: '+the_data.email+'\nPhone Number: '+the_data.phone+'\nMessage: '+the_data.message,
						"subject": "You have a new message for the RBA site.",
						"from_email": "signupforroyalbusinessacademy@gmail.com",
						"from_name": "New Message from RBA site",
						"to": [
							{
								"email": "spencer@royalbusinessacademy.org ",
								"name": "Spencer Rogers",
								"type": "to"
							}
						]
					}
				}
			});
		},
		SendApplicationEmail: function() {
			return $http({
				method: 'POST',
				url: 'https://mandrillapp.com/api/1.0/messages/send.json',
				headers: {
					'Content-Type':'application/json'
				},
				data: {
					"key":"h_FdIHNlZN0YdLY8vU8Cfg",
					"message": {
						"text": 'You just had a new student apply for Royal Business Academy!',
						"subject": "New RBA Applicant",
						"from_email": "signupforroyalbusinessacademy@gmail.com",
						"from_name": "New Message from RBA site",
						"to": [
							{
								"email": "spencer@royalbusinessacademy.org ",
								"name": "Spencer Rogers",
								"type": "to"
							}
						]
					}
				}
			});
		},
		SendApplication: function(the_data) {
			return $http({
				method: 'POST',
				url: 'https://docs.google.com/forms/d/1hn7YvTiMZZhA3FEm7-UHagXZDvifUx5VbLdRgz37_nE/formResponse',
				headers: {
					'Content-Type':'application/x-www-form-urlencoded'
				},
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				data: {
					'entry.1837275675': the_data.first_name || '',
					'entry.2057115759': the_data.preferred_name || '',
					'entry.1691304936': the_data.native_language || '',
					'entry.961943981': the_data.other_languages || '',
					'entry.765568650': the_data.family_surname || '',
					'entry.1496721659': the_data.date_of_birth || '',
					'entry.1058894701': the_data.how_did_you_hear_about_us || '',
					'entry.1267007426': the_data.gender || '',
					'entry.1248163241': the_data.street_address || '',
					'entry.1538648643': the_data.state_province || '',
					'entry.326672777': the_data.postal_code || '',
					'entry.757327993': the_data.telephone_number || '',
					'entry.716204733': the_data.city || '',
					'entry.753284705': the_data.country || '',
					'entry.344209816': the_data.email || '',
					'entry.629576774': the_data.application_year || '',
					'entry.809888668': the_data.level_of_education || ''
				}
			});
		}
	}
})
.factory('PageTitle',function() {
	var title = 'BYU Tech Transfer';
	return {
		getTitle: function(){return title;},
		setTitle: function(newTitle){title=newTitle; return title;}
	};
});
