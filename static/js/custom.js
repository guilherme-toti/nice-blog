/* ----------------- Start Document ----------------- */
(function($){
	$(document).ready(function(){

/*----------------------------------------------------*/
/*	Sticky Header
/*----------------------------------------------------*/

	var stickyheader = true; // set false to disable or true to enable sticky header
	
	if(stickyheader == true) {

		var searchform = $('#search-form'),
			logo = $('#logo'),
			header = $('#header'),
			menu = $('.menu ul > li > a');

		var smallHeight = 70,   // set compact header height
			durationAnim = 150, // animation speed

			defaultHeight = parseInt(header.css('height')),
			defSearchformMarginTop = parseInt(searchform.css('margin-top')),
			defLogoMarginTop = parseInt(logo.css('margin-top')),
			defMenuPaddingTop = parseInt(menu.css('padding-top')),
			defMenuPaddingBottom = parseInt(menu.css('padding-bottom')),
			small_height = defaultHeight - smallHeight;

		$("#header").css({ position: "fixed"});

		var stickyValue = defaultHeight;

		function stickyPosition(val, body, header) {
			$(header).css({ marginTop: val });
			$(body).css({ paddingTop: val });
		}

		stickyPosition(-stickyValue, null, "#header");
		stickyPosition(stickyValue, "body", null);

		function stickymenu(){
			var base = this,
				offset = $(window).scrollTop(), // Get how much of the window is scrolled
				header = $('#header'),
				src = logo.find('img').attr('src');

			var	searchformMarginTop = defSearchformMarginTop - small_height/2;
				menuPaddingTop = defMenuPaddingTop - small_height/2,
				menuPaddingBottom = defMenuPaddingBottom - small_height/2,
				logoMarginTop = defLogoMarginTop - 1 - small_height/2;

			if ($(window).width() > 767) {
				if (offset > 60) { // if it is over 60px (the initial width)
					if (!header.hasClass('compact')) {
						header.animate({
								height: defaultHeight-small_height
							}, {
								queue: false,
								duration: durationAnim,
								complete: function () {
									header.addClass('compact').css("overflow", "visible");
								}
							});
						searchform.animate({
								marginTop: searchformMarginTop,
							}, {
								queue: false,
								duration: durationAnim
							});
							
							logo.animate({
								marginTop: logoMarginTop
							}, {
								queue: false,
								duration: durationAnim
							});
						menu.animate({
								paddingTop: menuPaddingTop,
								paddingBottom: menuPaddingBottom,
								margin:0
							}, {
								queue: false,
								duration: durationAnim
							});
						}
				} else if (offset > -1 && offset < 60) {
					header.animate({
							height: defaultHeight,
						}, {
							queue: false,
							duration: durationAnim,
							complete: function () {
								header.removeClass('compact').css("overflow", "visible");
							}
						});
					searchform.animate({
							marginTop: defSearchformMarginTop,
						}, {
							queue: false,
							duration: durationAnim
						});
					  logo.stop().animate({
							marginTop: defLogoMarginTop
						}, {
							queue: false,
							duration: durationAnim
						});
					menu.animate({
							paddingTop: defMenuPaddingTop,
							paddingBottom: defMenuPaddingBottom,
						}, {
							queue: false,
							duration: durationAnim
						});
				}
			}
		}

		stickymenu();
		$(window).scroll(function () { stickymenu(); });

		// sticky header reset for mobile
		$(window).resize(function (){
			var winWidth = $(window).width();
			if(winWidth < 767) {
				 $('#logo').css('marginTop','');
				 $('#header').css('height','').removeClass('compact');
				 $("#header").css({ position: ""});
				 $('.menu ul > li > a').css({
					'paddingTop' : '',
					'paddingBottom' : '',
				 });
				 $('#search-form').css('marginTop','');
				stickyPosition(null, null, "#header");
				stickyPosition(null, "body", null);
			} else {
				stickymenu();
				stickyPosition(-stickyValue, null, "#header");
				stickyPosition(stickyValue, "body", null);
				$("#header").css({ position: "fixed" });
			}
		});
	}


/*----------------------------------------------------*/
/*	Navigation
/*----------------------------------------------------*/

	$('.menu ul').superfish({
		delay:       300,                              // one second delay on mouseout
		animation:   {opacity:'show',height:'show'},   // fade-in and slide-down animation
		speed:       200,                              // animation speed
		speedOut:    50                                // out animation speed
	});


/*----------------------------------------------------*/
/*	Mobile Navigation
/*----------------------------------------------------*/

	var jPanelMenu = {};
	$(function() {
		$('pre').each(function(i, e) {hljs.highlightBlock(e)});

		jPanelMenu = $.jPanelMenu({
			menu: '#responsive',
			animated: false,
			keyboardShortcuts: true
		});
		jPanelMenu.on();

		$(document).on('click',jPanelMenu.menu + ' li a',function(e){
			if ( jPanelMenu.isOpen() && $(e.target).attr('href').substring(0,1) == '#' ) { jPanelMenu.close(); }
		});

		$(document).on('touchend','.menu-trigger',function(e){
			jPanelMenu.triggerMenu();
			e.preventDefault();
			return false;
		});
		   
		// Removes SuperFish Styles
		$('#jPanelMenu-menu').removeClass('sf-menu');
		$('#jPanelMenu-menu li ul').removeAttr('style');

	});


/*----------------------------------------------------*/
/*	Mobile Search
/*----------------------------------------------------*/

	$('.search-trigger').click(function(){
		if($('#menu-search').is(":visible")){
			$('.menu-trigger,#logo').show();
			$('#menu-search').hide();
			$('.search-trigger .icon-remove').removeClass('icon-remove').addClass('icon-search');
		} else {
			$('.menu-trigger, #logo').hide();
			$('#menu-search').show();
			$('.search-trigger .icon-search').removeClass('icon-search').addClass('icon-remove');
		}
	})

	$(window).resize(function (){
		var winWidth = $(window).width();
		if(winWidth>767) {
			jPanelMenu.close();
			$('.menu-trigger, #logo').show();
			$('#menu-search').hide();
			$('.icon-remove').removeClass('icon-remove').addClass('icon-search');
		}
	});


/*----------------------------------------------------*/
/*	Revolution Slider
/*----------------------------------------------------*/

	if ($.fn.cssOriginal != undefined) {
		$.fn.css = $.fn.cssOriginal;
	}

	$(document).ready(function(){
		$('.fullwidthbanner').revolution({
			delay: 9000,
			startwidth: 1180,
			startheight: 470,
			onHoverStop: "on", // Stop Banner Timet at Hover on Slide on/off
			navigationType: "none", //bullet, none
			navigationArrows: "verticalcentered", //nexttobullets, verticalcentered, none
			navigationStyle: "none", //round, square, navbar, none
			touchenabled: "on", // Enable Swipe Function : on/off
			navOffsetHorizontal: 0,
			navOffsetVertical: 20,
			stopAtSlide: -1, // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
			stopAfterLoops: -1, // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
			fullWidth: "on",
		});
	});


/*----------------------------------------------------*/
/*	FlexSlider
/*----------------------------------------------------*/

	$(window).load(function() {
	  $('.flexslider').flexslider({
		animation: "fade",
		controlNav: false,
		animationSpeed: 400,
		smoothHeight: true
	  });
	});


/*----------------------------------------------------*/
/*	ShowBiz Carousel
/*----------------------------------------------------*/

	function is_mobile() {
		var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
		var ismobile=false;
		for(i in agents) {
			if (navigator.userAgent.split(agents[i]).length>1)
			ismobile = true;
		}
		return ismobile;
	}

	jQuery('#recent-work').showbizpro({
		dragAndScroll: (is_mobile() ? "on" : "off"),
		visibleElementsArray:[4,4,3,1],
		carousel:"off",
		entrySizeOffset:0,
		allEntryAtOnce:"off"
	});

	jQuery('#our-clients').showbizpro({
		dragAndScroll:"off",
		visibleElementsArray:[5,4,3,1],
		carousel:"off",
		entrySizeOffset:0,
		allEntryAtOnce:"off"
	});

	jQuery('#testimonials').showbizpro({
		dragAndScroll:"off",
		visibleElementsArray:[1,1,1,1],
		carousel:"off",
		entrySizeOffset:0,
		allEntryAtOnce:"off"
	});

	jQuery('#happy-clients').showbizpro({
		dragAndScroll:"off",
		visibleElementsArray:[1,1,1,1],
		carousel:"off",
		entrySizeOffset:0,
		allEntryAtOnce:"off"
	});

	jQuery('#team').showbizpro({
		dragAndScroll:"off",
		visibleElementsArray:[3,3,3,1],
		carousel:"off",
		entrySizeOffset:0,
		allEntryAtOnce:"off"
	});


/*----------------------------------------------------*/
/*	Hover Overlay
/*----------------------------------------------------*/

	$(".media").hover(function () {
		$(this).find(".hovercover").stop().fadeTo(200, 1);
		$(this).find(".hovericon").stop().animate({'top' : '50%', 'opacity' : 1}, 250, 'easeOutBack');
	},function () {
		$(this).find(".hovercover").stop().fadeTo(200, 0);
		$(this).find(".hovericon").stop().animate({'top' : '65%', 'opacity' : 0}, 150, 'easeOutSine');
	});


/*----------------------------------------------------*/
/*	Tooltips
/*----------------------------------------------------*/

	$(".tooltip.top").tipTip({
		defaultPosition: "top"
	});

	$(".tooltip.bottom").tipTip({
		defaultPosition: "bottom"
	});

	$(".tooltip.left").tipTip({
		defaultPosition: "left"
	});

	$(".tooltip.right").tipTip({
		defaultPosition: "right"
	});


/*----------------------------------------------------*/
/*	Isotope Portfolio Filter
/*----------------------------------------------------*/

	$(window).load(function(){
		$('#portfolio-wrapper').isotope({
			  itemSelector : '.portfolio-item',
				layoutMode : 'fitRows'
		});
		$('#filters a.selected').trigger("click");
	});
	$('#filters a').click(function(e){
		e.preventDefault();

		var selector = $(this).attr('data-option-value');
		$('#portfolio-wrapper').isotope({ filter: selector });

		$(this).parents('ul').find('a').removeClass('selected');
		$(this).addClass('selected');
	});
	

	jQuery(document).ready(function($) {
		var $Filter = $('#filters');
		var FilterTimeOut;
		$Filter.find('ul li:first').addClass('active');
		$Filter.find('ul li:not(.active)').hide();
		$Filter.hover(function(){
			clearTimeout(FilterTimeOut);
			if( $(window).width() < 959 )
			{
				return;
			}
			FilterTimeOut=setTimeout(function(){ $Filter.find('ul li:not(.active)').stop(true, true).animate({width: 'show' }, 250, 'swing'); }, 100);
		},function(){
			if( $(window).width() < 959 )
			{
				return;
			}
			clearTimeout(FilterTimeOut);
			FilterTimeOut=setTimeout(function(){ $Filter.find('ul li:not(.active)').stop(true, true).animate({width: 'hide' }, 250, 'swing'); }, 100);
		});
		$(window).resize(function() {
			if( $(window).width() < 959 )
			{
				$Filter.find('ul li:not(.active)').show();
			}
			else
			{
				$Filter.find('ul li:not(.active)').hide();
			}
		});
		$(window).resize();
		$Filter.find('a').click(function(){
			$Filter.find('ul li').not($(this)).removeClass('active');
			$(this).parent('li').addClass('active');
		});
	});


/*----------------------------------------------------*/
/*	Magnific Popup
/*----------------------------------------------------*/

	$(document).ready(function(){

		$('body').magnificPopup({ 
		  type: 'image',
		  delegate: 'a.mfp-gallery',
		  
		  fixedContentPos: true,
		  fixedBgPos: true,

		  overflowY: 'auto',

		  closeBtnInside: true,
		  preloader: true,

		  removalDelay: 0,
		  mainClass: 'mfp-fade',
		  
		  gallery:{enabled:true},
		  
		  callbacks: {
			buildControls: function() {
			 console.log('inside'); this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
			}
		  }
		});
		
		$('.mfp-image').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-fade',
			image: {
				verticalFit: true
			}
		});
		
		$('.mfp-youtube, .mfp-vimeo, .mfp-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 0,
			preloader: false,
			fixedContentPos: false
		});

	});


/*----------------------------------------------------*/
/*	Tabs
/*----------------------------------------------------*/

	var $tabsNav    = $('.tabs-nav'),
		$tabsNavLis = $tabsNav.children('li'),
		$tabContent = $('.tab-content');

	$tabsNav.each(function() {
		var $this = $(this);

		$this.next().children('.tab-content').stop(true,true).hide()
		.first().show();

		$this.children('li').first().addClass('active').stop(true,true).show();
	});

	$tabsNavLis.on('click', function(e) {
		var $this = $(this);

		$this.siblings().removeClass('active').end()
		.addClass('active');

		$this.parent().next().children('.tab-content').stop(true,true).hide()
		.siblings( $this.find('a').attr('href') ).fadeIn();

		e.preventDefault();
	});


/*----------------------------------------------------*/
/*	Accordion
/*----------------------------------------------------*/

	var $accor = $('.accordion');

	$accor.each(function() {
		$(this).addClass('ui-accordion ui-widget ui-helper-reset');
		$(this).find('h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
		$(this).find('div').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
		$(this).find("div").hide().first().show();
		$(this).find("h3").first().removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-accordion-header-active ui-state-active ui-corner-top');
		$(this).find("span").first().addClass('ui-accordion-icon-active');
	});

	$trigger = $accor.find('h3');

	$trigger.on('click', function(e) {
		var location = $(this).parent();

	   if( $(this).next().is(':hidden') ) {
			$triggerloc = $('h3',location);
			$triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
			$triggerloc.find('span').removeClass('ui-accordion-icon-active');
			$(this).find('span').addClass('ui-accordion-icon-active');
			$(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
		}
		e.preventDefault();
	});


/*----------------------------------------------------*/
/*	Toggle
/*----------------------------------------------------*/

	$(".toggle-container").hide();
	$(".trigger").toggle(function(){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});
	$(".trigger").click(function(){
		$(this).next(".toggle-container").slideToggle();
	});

	$(".trigger.opened").toggle(function(){
		$(this).removeClass("active");
		}, function () {
		$(this).addClass("active");
	});

	$(".trigger.opened").addClass("active").next(".toggle-container").show();


/*----------------------------------------------------*/
/*	Skill Bars Animation
/*----------------------------------------------------*/

	if($('#skillzz').length != 0){
		var skillbar_active = false;
		$('.skill-bar-value').hide();
				
		if($(window).scrollTop() == 0 && isScrolledIntoView($('#skillzz')) == true){
			skillbarActive();
			skillbar_active = true;
		}
				else if(isScrolledIntoView($('#skillzz')) == true){
					skillbarActive();
					skillbar_active = true;
				}
		$(window).bind('scroll', function(){
			if(skillbar_active === false && isScrolledIntoView($('#skillzz')) == true ){
				skillbarActive();
				skillbar_active = true;
			}
		});
	}

	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= (docViewBottom + $(elem).height())) && (elemTop >= (docViewTop - $(elem).height())));
	}

	function skillbarActive(){
		setTimeout(function(){

			$('.skill-bar-value').each(function() {
				$(this)
					.data("origWidth", $(this)[0].style.width)
					.css('width','1%').show();
				$(this)
					.animate({
					width: $(this).data("origWidth")
					}, 1200);
			});

			$('.skill-bar-value .dot').each(function() {
				var me = $(this);
				var perc = me.attr("data-percentage");

				var current_perc = 0;

				var progress = setInterval(function() {
					if (current_perc>=perc) {
						clearInterval(progress);
							} else {
								current_perc +=1;
								me.text((current_perc)+'%');
							}
				}, 10);
			});
		}, 10);}


/*----------------------------------------------------*/
/*	Alert Boxes
/*----------------------------------------------------*/

	$(document).ready(function(){
		$("a.close").removeAttr("href").click(function(){
			$(this).parent().fadeOut(200);
		});
	});


/* ------------------ End Document ------------------ */
});

})(this.jQuery);