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
			.state('technology', {
				url: '/technology/{tech_id}',
				templateUrl: 'templates/technology.html',
				controller: 'TechnologyController as tc'
			})

		.state('resources', {
			url: '/resources',
			templateUrl: 'templates/resources.html',
			controller: 'ResourcesController as rc'
		});
})

.controller('HomeController', function($state) {
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
	};
})
.controller('TechnologiesController', function($state) {
	var tc = this;

	tc.searchText = '';
	tc.categories = ['Show All','Biotech/Medical','Chemistry','Data Storage','Diagnostics & Drug Delivery','Electronics & Instrumentation','Energy/Environment/Resources','Engineered Structures & Materials','Engineering','Food/Agriculture','Life Sciences','Mechanical Devices & Processes','Microfluidics','Pharmaceuticals/Nutraceuticals','Physics','Software'];
	tc.selectedCategory = 'Show All';
	tc.technologies = [{"name" : "SHG for Nondestructive Testing of Alloys","id#" : "2014-061","PI" : "James Patterson",  "contact" : "<a href='mailto:srogers@byu.edu?Subject=BYU Disclosure #2003-09' target='_top'>Spencer Rogers</a> (801-422-3676)",  "img" : "img/ip/2014-061.jpg","tags" : "shg ndt second harmonic generation nondestructive testing alloys","categories" : "chemistry, engineering, physics","links" : ["http://www.chem.byu.edu/faculty/james-e-patterson/","http://www.chem.byu.edu/faculty/james-e-patterson/office-hours/"],"short-description" : "This invention can identify damage prior to catastrophic failure, or can determine that a part scheduled for replacement can remain in service.","long-description" : "The guiding principle of nondestructive testing (NDT) is the evaluation of a component to determine its suitability for service without compromising the component itself. When properly implemented, NDT can identify a damaged part prior to catastrophic failure, or can determine that a part scheduled for replacement can remain in service. In both cases, the savings in terms of time, money and potentially lives are significant, which is why the NDT industry generates billions of dollars a year in revenue. Unfortunately, the earliest signs of structural change in a material due to mechanical, thermal or chemical stress often cannot be detected by current NDT methods.<br /><br />Second harmonic generation (SHG) has great promise as an NDT platform. This nonlinear optical technique could be implemented for a fraction of the cost of many NDT methods and potentially detect the earliest possible signs of material weakness. SHG has great potential to be faster, cheaper, easier to interpret, and more sensitive than current NDT technologies.<br /><center><img src='img/ip/2014-061.jpg' height='300'></center><br />An NDT system based on SHG could be built for around $30,000, making it much cheaper than existing NDT instrumentation that can cost upwards of $250,000. In addition, many NDT methods require that equipment be taken off-line and transported to a testing facility, resulting in additional costs and downtime. SHG testing systems could also be incorporated into assembly lines, allowing for testing of each part as it is produced, rather than random sampling from a batch as is commonly done. The readout from such an SHG system would be a simple numerical value, allowing a trained technician to readily determine the serviceability of a component by comparing to a reference sample.<br /><br />SHG also has the potential to be field-deployable, allowing for on-site testing. In addition to the enormous revenue potential this represents, SHG may also allow for the incorporation of real-time testing on assembly lines or other production facilities. The savings in terms of minimizing downtime, reducing the number of defective components, and reducing unnecessarymaintenance would be substantial. An SHG system could also be automated to provide a determination of the suitability of a given sample for its intended use; many current NDT methods provide subjective results and require a technician to make a determination as to suitability, which increases the possibility of human error in interpreting the results.",},{"name" : "Active Noise Control","id#" : "2006-41","PI" : "Scott Sommerfeldt","contact" : "<a href='mailto:mike_alder@byu.edu?Subject=BYU Disclosure #2006-41' target='_top'>Mike Alder</a> (801-422-3049)","img" : "img/ip/ip-101.jpg","tags" : "active noise control reduce Acoustic Energy Density","categories" : "electronics & instrumentation, engineering, software, physics","links" : ["https://www.physics.byu.edu/department/directory/sommerfeldt", "http://acoustics.byu.edu/", "http://acoustics.byu.edu/content/active-noise-control"],"short-description" : "How do you reduce noise in a large space, such as in a room, in a car, or in an airplane?","long-description" : "BYU's department of Physics and Astronomy has developed Enhanced Active Noise Control using Acoustic Energy Density Sensors. Unlike previous approaches, Acoustic Energy Density Sensors respond not only to sound pressure but to acoustic particle velocity as well, providing more information from a single measurement than ever before &mdash; meaning reduced noise in a much larger space.<br /><center><iframe width='560' height='315' src='//www.youtube.com/embed/PFJE90SISPw?rel=0' frameborder='0' allowfullscreen></iframe></center><br />The current invention consists of a design for an active control system that will significantly reduce the tonal component of the radiated cooling fan noise on a global scale, both quieting the overall noise spectrum and reducing its most annoying component. The system has been researched and designed so that it will be both compact and inexpensive, thereby providing a practical means of reducing noise without significantly affecting the price of the product.<br /><br /><strong>About the market</strong> - Many electronic devices require external cooling to prevent overheating and thermal damage to components. This is usually accomplished by one or more axial cooling fans that, in turn, produce an undesired result in that they become a source of noise. This noise radiation often increases background noise levels, interfering with communication, disrupting concentration, or simply causing annoyance. The type and amount of noise produced by a fan varies depends on both the application in which it is used as well as the number of blades and rotational rate. Obstructions to flow near the inlet or outlet (also called the exhaust) of the fan significantly increase the amount of noise radiated, especially the tonal noise component, to which the human ear is particularly sensitive. Because these flow obstructions cannot be eliminated in most applications, a noise reduction method is then needed.",},{"name" : "Sign Glasses","id#" : "2013-020","PI" : "","contact" : "<a href='mailto:dave_brown@byu.edu?Subject=BYU Disclosure #2013-020' target='_top'>Dave Brown</a> (801-422-4866)","img" : "","tags" : "","categories" : "","links" : ["", "", ""],"short-description" : "","long-description" : "",},{"name" : "Spinal Support","id#" : "2010-063","PI" : "","contact" : "<a href='mailto:mike_alder@byu.edu?Subject=BYU Disclosure #2010-063' target='_top'>Mike Alder</a> (801-422-3049)","img" : "","tags" : "","categories" : "","links" : ["", "", ""],"short-description" : "","long-description" : "",},{"name" : "Mass Digitization System","id#" : "2015-003","PI" : "Scott Eldredge","contact" : "<a href='mailto:srogers@byu.edu?Subject=BYU Disclosure #2003-09' target='_top'>Spencer Rogers</a> (801-422-3676)","img" : "img/ip/2015-003.png","tags" : "library photography digitization imaging digital","categories" : "data storage, engineering, mechanical devices & processes","links" : ["https://lib.byu.edu/directory/scott-eldredge/", "https://sites.lib.byu.edu/byuorg/index.php/Harold_B._Lee_Library._Digital_Imaging_Dept", "http://sites.lib.byu.edu/cataloging/digital-initiatives/about-digital-initiatives/"],"short-description" : "The Mass Digitization System simplifies and accelerates the process of changing analog images into digitized files.","long-description" : "This invention allows for motorized, high-speed documentation of large manuscripts and other rare materials (i.e., photography and printed materials). This device is unique because a camera is mounted both with a light source above and a light source beneath as back-lighting to give better light for transparent and non-transparent materials as they pass by on a clear surface.  Anything to be digitized is placed on a motorized clear surface (e.g. glass) that runs underneath the mounted camera.<br /><center><img src='img/ip/patent.jpg' height='300'></center><br />The motor and camera are controlled through programming or the workstation and will allow for items of varying sizes and types to be scanned easily even if those items are in poor condition.  This invention allows for more items to be digitized more quickly and more conveniently than current options. It’s small design and ability to protect the items being scanned is more efficient than current automated sheet-fed or flatbed scanners which operate one item at a time.",},{"name" : "Gravity Grasper","id#" : "2014-110","PI" : "Larry Howell","contact" : "<a href='mailto:srogers@byu.edu?Subject=BYU Disclosure #2003-09' target='_top'>Spencer Rogers</a> (801-422-3676)","img" : "img/ip/2014-110.png","tags" : "construction lift DIY tool","categories" : "engineering, mechanical devices & processes","links" : ["https://me.byu.edu/faculty/larryhowell","https://me.byu.edu/content/dave-laws"],"short-description" : "The Gravity Grasper is a simple minimalist hand tool used to grasp, lift, and transport sheet materials such as plywood, sheet rock, etc.","long-description" : "The Gravity Grasper is a minimalist hand tool used to grasp, lift, and transport sheet materials. Sheet materials include, but are not limited to, plywood, drywall, glass panels, particle board, sheet metal, foam board, etc. Due to it's simplicity in design it becomes much simpler to use and manufacture than current options. Current solutions utilize a multi-step assembly system resulting in high manufacturing prices and higher retail prices.<br /><br />The device is straightforward enough that a startup could readily bring it to market. Resources needed would be manufacturing connections, marketing capability, and capital to distribute the devices.<br /><center><img src='img/ip/2014-110.png' height='300'></center><br /><strong>About the Market</strong>: There is an exceptionally large market for the Gravity Grasper. This includes construction workers, carpenters, warehouses, retail stores (hardware stores), do-it-yourself home improvement (personal use), wood shops, machine shops, and potential robotic uses.<br /><br />The market's current solutions to this issue are the Gorilla Gripper and the Stanley Panel Carrier. While both viable products, the Gravity Grasper is cheaper to manufacture and easier to use than the Gorilla Grasper, and requires less bending and lifting to transport the material than the Stanley Panel Carrier.",},{"name" : "Minimally Invasive Retractor Comprising a Compliant Lattice","id#" : "2013-054","PI" : "Larry Howell", "contact" : "<a href='mailto:srogers@byu.edu?Subject=BYU Disclosure #2013-054' target='_top'>Spencer Rogers</a> (801-422-3676)", "img" : "img/ip/2013-054.png","tags" : "Medical Compliant Mechanism Howell Surgery Microscopic MIS","categories" : "Biotech/Medical, Mechanical Devices & Processes","links" : ["http://compliantmechanisms.byu.edu/commercialization/overview","https://me.byu.edu/faculty/larryhowell"],"short-description" : "The Minimally Invasive Retractor utilizing compliant technologies allows for a simpler, safer, and more cost efficient means of handling organs during laparoscopic surgery.","long-description" : "Laparoscopic surgery is simply the act of performing a surgery far from the actual location through a smaller hole somewhere else in the body. Current technologies utilize expanding mechanisms that, once inside the body, expand and hold a certain organ during the surgery. These solutions lack the ability to properly grip the organs, as well as not being able to apply the necessary force to the organ without deforming or bending it. They also have sharp edges making them unsafe and can be difficult to clean. <br /><center><img src='img/ip/2013-054.png' height='200'></center><br />This retractor solves all of the before mentioned issues. It provides a retractor with improved grip, rigidity and safety utilizing compliant techniques developed by BYU's compliant mechanism lab. It can fit into spaces as small as 5-12mm, and once inside expands safer than current options. As well as having these benefits, it is also easier to manufacture thus reducing manufacturing costs. This may open doors to disposable options as well. This being said, it is also easier to clean than current options with less moving parts and sharp edges. (For more in depth understanding of the retractor, contact Spencer Rodgers or Larry Howell)<br /><br /><strong>About the Market</strong>: Potential customers for this product include companies involved in MIS (Minimally Invasive Surgery) and the production behind it. Certain medical companies may be interested, with a potential outlet being that of veterinary work due to the minimal costs associated with development.",   },{"name" : "Oriceps: Origami Inspired Forceps","id#" : "2013-053","PI" : "Larry Howell", "contact" : "<a href='mailto:srogers@byu.edu?Subject=BYU Disclosure #2013-053' target='_top'>Spencer Rogers</a> (801-422-3676)", "img" : "img/ip/2013-053.png","tags" : "medical compliant mechanism howell surgery microscopic","categories" : "biotech/medical, mechanical devices & processes","links" : ["https://me.byu.edu/faculty/larryhowell","http://compliantmechanisms.byu.edu/commercialization/overview"],"short-description" : "The Origami inspired Surgical Forceps are a simple solution that minimize the materials needed to perform a surgery.","long-description" : "By definition, forceps are pincers or tweezers used in the surgical process. Typically for a microscopic scale surgery, an advanced set of technology is needed to produce forceps that have full movement in such a small area. Another issue to be solved is that once the surgery has been completed the forceps must be thoroughly cleaned or completely replaced. This is an expensive process on both ends of the spectrum as cleaning is difficult and time-intensive while current disposable options cost hundreds of dollars.<br /><br />The Origami inspired Surgical Forceps are a combination of minimalistic design and simplicity. The forceps begin as a flat plane and fold out into a more complex structure allowing for a more complex motion compatible with current surgical tooling. Because of its simplistic design, these allow for a gentle motion providing more accuracy and precision, especially in situations that lack force feedback.<br /><center><img src='img/ip/2013-053.png' height='200'></center><br />Another issue that this product solves is in the machining and packaging area. The planar body is made of one material and of one piece. This allows for considerably cheaper manufacturing as well as minimization of the machining process that can be done with stamping, laser cutting, and other common flat processes. In addition to reductions in cost to manufacture, shipping the forceps while still flat also increases in packaging and shipping savings. <br /><br /><strong>About the Market</strong>: The market for the Forceps would be companies involved in hospital surgical environments. The low costs to manufacture and ship lead to higher quantities available to be sold and disposed of. Certain companies that are in this market to look further into may be companies that develop minimally invasive hand tools, minimally invasive robotic surgery, and other companies using more traditional methods.",   },{"name" : "Lens Lift","id#" : "2011-017","PI" : "Larry Howell", "contact" : "<a href='mailto:srogers@byu.edu?Subject=BYU Disclosure #2003-09' target='_top'>Spencer Rogers</a> (801-422-3676)",   "img" : "img/ip/2011-017.png","tags" : "contact lens, dispenser","categories" : "biotech/medical, engineering, mechanical structures & processses","links" : ["https://me.byu.edu/faculty/larryhowell", "http://compliantmechanisms.byu.edu/content/intro-compliant-mechanisms"],"short-description" : "A mechanism that reduces the number of touch points required to retrieve a contact lens from solution.","long-description" : "Developed by the Compliant Mechanism Lab at BYU, the Lens Lift is a device that delivers an eye contact to the user above the contact solution by simply opening the case. When you open the contact case it lifts the contact out of the solution allowing the user to put it directly into the eye while minimizing how much the user touches the lens. By doing this it decreases the amount of finger oils that get on the contact, minimizing the risk of germ entry into the eye.<br /><center><iframe width='560' height='315' src='https://www.youtube.com/embed/QvcDlqJXuEM' frameborder='0' allowfullscreen></iframe></center><br />The market for the lens lift may be a difficult market to enter. While it is a large market of an estimated $5.3 billion in the U.S., many current contact providers don't want to admit that their product has an issue with generating eye infections. This could potentially lead to complaints or lawsuits if it came out that there actually was an issue with their product in the first place. This idea would be easily adaptable for a smaller contact or contact-packaging company that wants to make a big market entrance or impact.",},{"name" : "Contant Force Exercise Machine","id#" : "2003-09","PI" : "Larry Howell","contact" : "<a href='mailto:srogers@byu.edu?Subject=BYU Disclosure #2003-09' target='_top'>Spencer Rogers</a> (801-422-3676)","img" : "img/ip/2003.09.png","tags" : "y-fit, compliant mechanism, workout, weightlifting","categories" : "engineering, mechanical structures & processses, physics","links" : ["https://me.byu.edu/faculty/larryhowell","http://compliantmechanisms.byu.edu/"],"short-description" : "The Constant Force Exercise machine is a new way of looking at exercise equipment that is much simpler and more efficient than you're used to.","long-description" : "Most workout equipment we are familiar with is composed of weights and heavy equipment. While this is true for most workout equipment, there is another genre consisting of 'spring' weights like the Bowflex(c). For many people, the current solutions are either too heavy or take up too much space for a home gym set up. On another note, flexible solutions provide more of a spring feel than an actual weight lifting motion or feel. The C-Force exercise machine utilizes compliant mechanisms to deliver a sensation closer to actual weights while remaining lightweight and minimal.<br /><center><img src='img/ip/2003-09.png' height='300'></center><br />The Constant Force utilizes a form of engineering known as 'Compliant Mechanisms' (For more information, refer to the link below). This technology provides a constant force on the user, a sensation comparable to actual heavy weight lifting. Utilizing this technology also allows the materials used to have less stress and decreased likelihood of material fatigue compared to current spring solutions. This allows the user to purchase a longer lasting machine that is more durable than current spring options all while being lighter and safer than current free-weight options.",}];

	tc.goTo = function(pagename) {
		$state.go(pagename);
	};
})
.controller('TechnologyController', function($state, $stateParams) {

})
.controller('ResourcesController', function($state) {
	var rc = this;
	rc.goTo = function(pagename) {
		$state.go(pagename);
	};
})
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
	};
})
.controller('AboutController', function($state) {
	var ac = this;
	ac.goTo = function(pagename) {
		$state.go(pagename);
	};
})

.controller('HeaderController', function($state) {
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
	};
})
.controller('FooterController', function($state) {
	this.currentYear = new Date().getFullYear();
	this.goTo = function(pagename) {
		$state.go(pagename);
	};
})
.controller('TitleController', function(PageTitle) {
	var tc = this;
	tc.title = PageTitle.getTitle;
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
