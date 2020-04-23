(function() {
  'use strict';

  //main js

  $('.popup-frame').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.popup-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
  });

  $('.popup').magnificPopup({
		type: 'inline',
    preloader: false,
    closeOnContentClick: false,
  });

  //

  svg4everybody();
  

  //table
  
  if($('table.responsive').length > 0){
    $('table.responsive').ngResponsiveTables();
  }
	
  //select styler

  $('select').styler();

  //datepicker

  $( ".datepicker" ).datepicker();

  //accordion

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.accordion__head');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('active');

    if (!e.data.multiple) {
      $el.find('.accordion__body').not($next).slideUp().parent().removeClass('active');
    };
  }	

  var accordion = new Accordion($('.accordion'), false);
  
  // aos

  AOS.init(
    {
      // Global settings
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    }
  );

	setTimeout(AOS.refreshHard, 1000);
	
	//clipboard

  var affil1 = new Clipboard('#affil');
  var banners = new Clipboard('.cabinet-banners__copy');

  function affiliatelink(id) {
    id.on('success', function (e) {
      // swal({
      //   title: "Your referral link copied!",
      //   text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
      //   type: "success",
      //   showCancelButton: false,
      //   confirmButtonClass: "btn-success",
      //   confirmButtonText: "OK!",
      //   closeOnConfirm: false,
      //   closeOnCancel: false
      // });

      Lobibox.notify('success', {
        title: true,
        size: 'normal',
        icon: true,
        sound: false,
        iconSource: "bootstrap",
        msg: 'Your referral link copied!'
      });
    });
  }

  affiliatelink(affil1);
  affiliatelink(banners);

  var investCar = new Swiper('.invest-car .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    effect:'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      nextEl: '.invest-pag .swiper-button-next',
      prevEl: '.invest-pag .swiper-button-prev',
    }
  });

  var investPag = new Swiper('.invest-pag .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    // navigation: {
    //   prevEl: '#wallets-slider .item-head-arrows__arrow_left',
    //   nextEl: '#wallets-slider .item-head-arrows__arrow_right',
    // }
  });

  var investContent = new Swiper('.invest-content .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    // navigation: {
    //   prevEl: '#wallets-slider .item-head-arrows__arrow_left',
    //   nextEl: '#wallets-slider .item-head-arrows__arrow_right',
    // }
  });
  
  investCar.on('slideChange', function () {
    investPag.slideTo(investCar.realIndex + 1);
    investContent.slideTo(investCar.realIndex + 1);
  });

  var roadmapSlider = new Swiper('.roadmap-slider .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      prevEl: '.roadmap-slider .swiper-button-prev',
      nextEl: '.roadmap-slider .swiper-button-next',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    }
  });

  var statDepositSlider = new Swiper('#stat-deposit .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '#stat-deposit .swiper-button-prev',
    },
  });

  var statWithdrawSlider = new Swiper('#stat-withdraw .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '#stat-withdraw .swiper-button-prev',
    },
  });

  var newsPageSlider = new Swiper('.news-page-slider .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    slideToClickedSlide: true,
    pagination: {
      el: '.news-page__nav .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.news-page__nav .swiper-button-prev',
      nextEl: '.news-page__nav .swiper-button-next',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
    }
  });
  var newsPageContentSlider = new Swiper('.news-page__content .swiper-container', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  newsPageSlider.on('slideChange', function(){
    newsPageContentSlider.slideTo(newsPageSlider.realIndex + 1);
  })


  //counter 

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });


  //cabinet js

  //tabs

  $('.tabs__wrap').each(function() {
    $(this).find('.tab').each(function(i) {
      $(this).parents('.tabs__wrap').find('.tab_content').children().not(':first').hide();
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.tabs__wrap').find('.tab_content').children().eq(i).fadeIn(0).siblings('.tab_item').hide();
        if($('#wallets-slider').length !== 0){
          walletsSlider.update();
          opersSlider.update();
        }
      });
    });
  });

  //wallets toggle
  $( ".cabinet-sidebar-tabs-content__item.item_wallets .content-item" ).click(function() {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else{
      $(this).addClass('active');
    }
    $(this).find( ".content-item__toggler" ).slideToggle( "slow" );
  });

  //sliders
  //cabinet sidebar wallets slider
  var walletsSlider = new Swiper('#wallets-slider .swiper-container', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    effect:'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      prevEl: '#wallets-slider .item-head-arrows__arrow_left',
      nextEl: '#wallets-slider .item-head-arrows__arrow_right',
    }
  });
  //cabinet sidebar operations slider
  var opersSlider = new Swiper('#opers-slider .swiper-container', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    effect:'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      prevEl: '#opers-slider .item-head-arrows__arrow_left',
      nextEl: '#opers-slider .item-head-arrows__arrow_right',
    }
  });

  //cabinet plans slider
  var plansSlider = new Swiper('.select-plan__items .swiper-container', {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 25,
    navigation: {
      nextEl: '.select-plan .header-arrows__arrow_right',
      prevEl: '.select-plan .header-arrows__arrow_left',
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    }
  });
  var bannersSlider = new Swiper('.cabinet-banners__items .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // navigation: {
    //   nextEl: '.select-plan .header-arrows__arrow_right',
    //   prevEl: '.select-plan .header-arrows__arrow_left',
    // },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      560: {
        slidesPerView: 1,
      },
    }
  });
  var bannersContentSlider = new Swiper('.cabinet-banners__content .swiper-container', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  bannersSlider.on('slideChange', function(){
    bannersContentSlider.slideTo(bannersSlider.realIndex + 1);
  })

  //cabinet-settings

  $('.cabinet-history__settings-btn').on('click', function(e){
    e.preventDefault();
  
    
  
    $(this).siblings('.cabinet-history__settings-hide').fadeIn(300);
    $(this).parent().addClass('active');
    let trueH = ($(document).outerHeight(true) - $(this).siblings('.cabinet-history__settings-hide').offset().top - $(this).siblings('.cabinet-history__settings-hide').outerHeight(true));
  
    if(trueH <= 0){
      $(this).siblings('.cabinet-history__settings-hide').addClass('top');
    }
  });

  $(document).mouseup(function (e){ 
    var block = $(".cabinet-history__settings.active .cabinet-history__settings-hide"); 
    if (!block.is(e.target) 
        && block.has(e.target).length === 0) { 
        block.hide(); 
  
        block.parent().removeClass('active');
  
        if( block.hasClass('top')){
          block.removeClass('top');
        }
    }
  });



  //charts
  //cabinet profit chart
  if($("#profit-graph").length !== 0){
    var ctx = document.getElementById('profit-graph').getContext('2d');
    ctx.width = 300;
    ctx.height = 300;
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 200);
    gradientFill.addColorStop(0, "rgba(255,255,255,1)");
    gradientFill.addColorStop(1, "rgba(255,255,255,0)");
    var gradientFill2 = ctx.createLinearGradient(0, 0, 0, 200);
    gradientFill2.addColorStop(0, "rgba(237,11,14,1)");
    gradientFill2.addColorStop(1, "rgba(65,10,20,1)");
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        //labels: [ '22 Jan','23 Jan','24 Jan','25 Jan','26 Jan','27 Jan','28 Jan','29 Jan','30 Jan','31 Jan','01 Feb','02 Feb','03 Feb','04 Feb'],
        labels: [ '30 Jan','31 Jan','01 Feb','02 Feb','03 Feb','04 Feb','05 Feb'],
        datasets: [{
          data: [20.12,15.14,10,55,20,15,10],
          borderWidth: 5,
          borderColor: '#bbb8b5',
          pointStyle:'circle',
          hoverBorderWidth:2,
          backgroundColor: gradientFill,
          hitRadius:10
        }]
      },

      // Configuration options go here
      options: {
        cutoutPercentage: 70,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips:{
          titleFontFamily: "'Roboto', sans-serif",
          titleFontSize: 12,
          bodyFontFamily:"'Tokyotrail', sans-serif",
          bodyFontSize: 11,
          backgroundColor: gradientFill2,
          displayColors: false,
          caretSize: 8,
          cornerRadius: 0,
          xPadding: 11,
          yPadding: 11,
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data['datasets'][0];
              var amount = dataset['data'][tooltipItem['index']];
              return amount + '$';
            }
          }
        },
        scales:{
          xAxes:[{
            gridLines: {
              color: 'rgba(135, 135, 135, 0.3)'
            }
          }]
        }
      }
    });
  }

  //cabinet details chart
  if($("#detailsCart").length !== 0){
    var ctx = document.getElementById('detailsCart').getContext('2d');
    ctx.width = 300;
    ctx.height = 300;
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: ['Invested', 'Withdrawal', 'Profit', 'Ref.commission',],
        datasets: [{
          data: [150,17,50,25],
          borderWidth: 0,
          backgroundColor: [
            '#410a14',
            '#bbb8b5',
            '#ed0b0e',
            '#6d625c',
          ]
        }]
      },

      // Configuration options go here
      options: {
        cutoutPercentage: 50,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips:{
          titleFontFamily: "'Roboto', sans-serif",
          titleFontSize: 12,
          bodyFontFamily:"'Tokyotrail', sans-serif",
          bodyFontSize: 11,
          backgroundColor: gradientFill2,
          displayColors: false,
          caretSize: 8,
          cornerRadius: 0,
          xPadding: 11,
          yPadding: 11,
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data['datasets'][0];
              var amount = dataset['data'][tooltipItem['index']];
              return amount + '$';
            }
          }
        }
      }
    });
  }

  if($('.first-scene').length !== 0){
    var smoke = new Image();
smoke.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/15388/smoke.png';

$.fn.emitter = function(opts){
  var particles = [];
  var canvases = [];

  var particle = function(canvas){
    var x, y, size, speedX, speedY, opacity;
    reset();
    
    this.update = function(){
      if(opacity > 0){
        opacity -= (Math.random() / opts.speed.fade);
      }

      if(opacity <= 0){
        reset();
      }
      
      speedX -= Math.random() / opts.speed.acceleration;
      speedY -= Math.random() / opts.speed.acceleration;
      x += speedX;
      y += speedY;
      size += Math.random();
      drawParticle(x, y, size, opacity);
    };

    function drawParticle(x, y, size, opacity){
      canvas.globalAlpha = opacity;
      canvas.drawImage(smoke, 0, 0, opts.size, opts.size, x, y, size, size);
    }

    function reset(){
      x = opts.x;
      y = opts.y;
      size = opts.size;
      speedX = Math.random() * opts.speed.x;
      speedY = Math.random() * opts.speed.y;
      opacity = Math.random();
    }
  };

  var canvas = function(el){
    var canvas = el[0].getContext('2d');

    canvas.width = el.width();
    canvas.height = el.height();

    for(var c = 0; c < opts.particles; c++){
      particles.push(new particle(canvas));
    }

    this.clear = function(){
      canvas.clearRect(0, 0, canvas.width, canvas.height);
    };
  };

  $(this).each(function(){
    canvases.push(new canvas($(this)));
  });

  function render(){
    canvases.forEach(function(canvas){
      canvas.clear();
    });

    particles.forEach(function(particle){
      particle.update();
    });
    
    window.requestAnimationFrame(render);
  }

  return {
    render: render
  }
};

    $('#main-smoke').emitter({
      x: 500,
      y: 0,
      size: 70,
      particles: 200,
      speed: {
        x: -1,
        y: 3,
        fade: 150,
        acceleration: 1300
      }
    }).render();
    $('#road-smoke').emitter({
      x: 500,
      y: 0,
      size: 70,
      particles: 200,
      speed: {
        x: -1,
        y: 3,
        fade: 150,
        acceleration: 1300
      }
    }).render();

  }
})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIC8vbWFpbiBqc1xyXG5cclxuICAkKCcucG9wdXAtZnJhbWUnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGRpc2FibGVPbjogNzAwLFxyXG5cdFx0dHlwZTogJ2lmcmFtZScsXHJcblx0XHRtYWluQ2xhc3M6ICdtZnAtZmFkZScsXHJcblx0XHRyZW1vdmFsRGVsYXk6IDE2MCxcclxuXHRcdHByZWxvYWRlcjogZmFsc2UsXHJcblx0XHRmaXhlZENvbnRlbnRQb3M6IGZhbHNlXHJcblx0fSk7XHJcblxyXG5cdCQoJy5wb3B1cC1pbWcnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdHR5cGU6ICdpbWFnZScsXHJcblx0XHRjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxyXG5cdFx0bWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxyXG5cdFx0aW1hZ2U6IHtcclxuXHRcdFx0dmVydGljYWxGaXQ6IHRydWVcclxuXHRcdH1cclxuXHRcdFxyXG4gIH0pO1xyXG5cclxuICAkKCcucG9wdXAnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdHR5cGU6ICdpbmxpbmUnLFxyXG4gICAgcHJlbG9hZGVyOiBmYWxzZSxcclxuICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICAvL1xyXG5cclxuICBzdmc0ZXZlcnlib2R5KCk7XHJcbiAgXHJcblxyXG4gIC8vdGFibGVcclxuICBcclxuICBpZigkKCd0YWJsZS5yZXNwb25zaXZlJykubGVuZ3RoID4gMCl7XHJcbiAgICAkKCd0YWJsZS5yZXNwb25zaXZlJykubmdSZXNwb25zaXZlVGFibGVzKCk7XHJcbiAgfVxyXG5cdFxyXG4gIC8vc2VsZWN0IHN0eWxlclxyXG5cclxuICAkKCdzZWxlY3QnKS5zdHlsZXIoKTtcclxuXHJcbiAgLy9kYXRlcGlja2VyXHJcblxyXG4gICQoIFwiLmRhdGVwaWNrZXJcIiApLmRhdGVwaWNrZXIoKTtcclxuXHJcbiAgLy9hY2NvcmRpb25cclxuXHJcbiAgdmFyIEFjY29yZGlvbiA9IGZ1bmN0aW9uKGVsLCBtdWx0aXBsZSkge1xyXG4gICAgdGhpcy5lbCA9IGVsIHx8IHt9O1xyXG4gICAgdGhpcy5tdWx0aXBsZSA9IG11bHRpcGxlIHx8IGZhbHNlO1xyXG5cclxuICAgIC8vIFZhcmlhYmxlcyBwcml2YWRhc1xyXG4gICAgdmFyIGxpbmtzID0gdGhpcy5lbC5maW5kKCcuYWNjb3JkaW9uX19oZWFkJyk7XHJcbiAgICAvLyBFdmVudG9cclxuICAgIGxpbmtzLm9uKCdjbGljaycsIHtlbDogdGhpcy5lbCwgbXVsdGlwbGU6IHRoaXMubXVsdGlwbGV9LCB0aGlzLmRyb3Bkb3duKVxyXG4gIH1cclxuXHJcbiAgQWNjb3JkaW9uLnByb3RvdHlwZS5kcm9wZG93biA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciAkZWwgPSBlLmRhdGEuZWwsXHJcbiAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICRuZXh0ID0gJHRoaXMubmV4dCgpO1xyXG5cclxuICAgICRuZXh0LnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkdGhpcy5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgaWYgKCFlLmRhdGEubXVsdGlwbGUpIHtcclxuICAgICAgJGVsLmZpbmQoJy5hY2NvcmRpb25fX2JvZHknKS5ub3QoJG5leHQpLnNsaWRlVXAoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG4gIH1cdFxyXG5cclxuICB2YXIgYWNjb3JkaW9uID0gbmV3IEFjY29yZGlvbigkKCcuYWNjb3JkaW9uJyksIGZhbHNlKTtcclxuICBcclxuICAvLyBhb3NcclxuXHJcbiAgQU9TLmluaXQoXHJcbiAgICB7XHJcbiAgICAgIC8vIEdsb2JhbCBzZXR0aW5nc1xyXG4gICAgICBkaXNhYmxlOiBmYWxzZSwgLy8gYWNjZXB0cyBmb2xsb3dpbmcgdmFsdWVzOiAncGhvbmUnLCAndGFibGV0JywgJ21vYmlsZScsIGJvb2xlYW4sIGV4cHJlc3Npb24gb3IgZnVuY3Rpb25cclxuICAgICAgc3RhcnRFdmVudDogJ0RPTUNvbnRlbnRMb2FkZWQnLCAvLyBuYW1lIG9mIHRoZSBldmVudCBkaXNwYXRjaGVkIG9uIHRoZSBkb2N1bWVudCwgdGhhdCBBT1Mgc2hvdWxkIGluaXRpYWxpemUgb25cclxuICAgICAgaW5pdENsYXNzTmFtZTogJ2Fvcy1pbml0JywgLy8gY2xhc3MgYXBwbGllZCBhZnRlciBpbml0aWFsaXphdGlvblxyXG4gICAgICBhbmltYXRlZENsYXNzTmFtZTogJ2Fvcy1hbmltYXRlJywgLy8gY2xhc3MgYXBwbGllZCBvbiBhbmltYXRpb25cclxuICAgICAgdXNlQ2xhc3NOYW1lczogZmFsc2UsIC8vIGlmIHRydWUsIHdpbGwgYWRkIGNvbnRlbnQgb2YgYGRhdGEtYW9zYCBhcyBjbGFzc2VzIG9uIHNjcm9sbFxyXG4gICAgICAvLyBTZXR0aW5ncyB0aGF0IGNhbiBiZSBvdmVycmlkZW4gb24gcGVyLWVsZW1lbnQgYmFzaXMsIGJ5IGBkYXRhLWFvcy0qYCBhdHRyaWJ1dGVzOlxyXG4gICAgICBvZmZzZXQ6IDAsIC8vIG9mZnNldCAoaW4gcHgpIGZyb20gdGhlIG9yaWdpbmFsIHRyaWdnZXIgcG9pbnRcclxuICAgICAgZGVsYXk6IDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcclxuICAgICAgZHVyYXRpb246IDcwMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xyXG4gICAgICBlYXNpbmc6ICdlYXNlLWluLW91dCcsIC8vIGRlZmF1bHQgZWFzaW5nIGZvciBBT1MgYW5pbWF0aW9uc1xyXG4gICAgICBvbmNlOiBmYWxzZSwgLy8gd2hldGhlciBhbmltYXRpb24gc2hvdWxkIGhhcHBlbiBvbmx5IG9uY2UgLSB3aGlsZSBzY3JvbGxpbmcgZG93blxyXG4gICAgICBtaXJyb3I6IGZhbHNlLCAvLyB3aGV0aGVyIGVsZW1lbnRzIHNob3VsZCBhbmltYXRlIG91dCB3aGlsZSBzY3JvbGxpbmcgcGFzdCB0aGVtXHJcbiAgICAgIGFuY2hvclBsYWNlbWVudDogJ3RvcC1ib3R0b20nLCAvLyBkZWZpbmVzIHdoaWNoIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHJlZ2FyZGluZyB0byB3aW5kb3cgc2hvdWxkIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxyXG4gICAgfVxyXG4gICk7XHJcblxyXG5cdHNldFRpbWVvdXQoQU9TLnJlZnJlc2hIYXJkLCAxMDAwKTtcclxuXHRcclxuXHQvL2NsaXBib2FyZFxyXG5cclxuICB2YXIgYWZmaWwxID0gbmV3IENsaXBib2FyZCgnI2FmZmlsJyk7XHJcbiAgdmFyIGJhbm5lcnMgPSBuZXcgQ2xpcGJvYXJkKCcuY2FiaW5ldC1iYW5uZXJzX19jb3B5Jyk7XHJcblxyXG4gIGZ1bmN0aW9uIGFmZmlsaWF0ZWxpbmsoaWQpIHtcclxuICAgIGlkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgLy8gc3dhbCh7XHJcbiAgICAgIC8vICAgdGl0bGU6IFwiWW91ciByZWZlcnJhbCBsaW5rIGNvcGllZCFcIixcclxuICAgICAgLy8gICB0ZXh0OiBcIllvdSBjYW4gcGFzdGUgdGV4dCB0aGF0IGhhcyBiZWVuIGNvcGllZCBieSBwcmVzc2luZyBDdHJsICsgVi4gVGhlIHRleHQgdGhhdCB3YXMgY29waWVkIGxhc3Qgd2lsbCBiZSBwYXN0ZWQuXCIsXHJcbiAgICAgIC8vICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgIC8vICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgIC8vICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0bi1zdWNjZXNzXCIsXHJcbiAgICAgIC8vICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT0shXCIsXHJcbiAgICAgIC8vICAgY2xvc2VPbkNvbmZpcm06IGZhbHNlLFxyXG4gICAgICAvLyAgIGNsb3NlT25DYW5jZWw6IGZhbHNlXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgTG9iaWJveC5ub3RpZnkoJ3N1Y2Nlc3MnLCB7XHJcbiAgICAgICAgdGl0bGU6IHRydWUsXHJcbiAgICAgICAgc2l6ZTogJ25vcm1hbCcsXHJcbiAgICAgICAgaWNvbjogdHJ1ZSxcclxuICAgICAgICBzb3VuZDogZmFsc2UsXHJcbiAgICAgICAgaWNvblNvdXJjZTogXCJib290c3RyYXBcIixcclxuICAgICAgICBtc2c6ICdZb3VyIHJlZmVycmFsIGxpbmsgY29waWVkISdcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFmZmlsaWF0ZWxpbmsoYWZmaWwxKTtcclxuICBhZmZpbGlhdGVsaW5rKGJhbm5lcnMpO1xyXG5cclxuICB2YXIgaW52ZXN0Q2FyID0gbmV3IFN3aXBlcignLmludmVzdC1jYXIgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjUsXHJcbiAgICBlZmZlY3Q6J2N1YmUnLFxyXG4gICAgY3ViZUVmZmVjdDoge1xyXG4gICAgICBzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLmludmVzdC1wYWcgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5pbnZlc3QtcGFnIC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgaW52ZXN0UGFnID0gbmV3IFN3aXBlcignLmludmVzdC1wYWcgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgLy8gICBwcmV2RWw6ICcjd2FsbGV0cy1zbGlkZXIgLml0ZW0taGVhZC1hcnJvd3NfX2Fycm93X2xlZnQnLFxyXG4gICAgLy8gICBuZXh0RWw6ICcjd2FsbGV0cy1zbGlkZXIgLml0ZW0taGVhZC1hcnJvd3NfX2Fycm93X3JpZ2h0JyxcclxuICAgIC8vIH1cclxuICB9KTtcclxuXHJcbiAgdmFyIGludmVzdENvbnRlbnQgPSBuZXcgU3dpcGVyKCcuaW52ZXN0LWNvbnRlbnQgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgIC8vICAgcHJldkVsOiAnI3dhbGxldHMtc2xpZGVyIC5pdGVtLWhlYWQtYXJyb3dzX19hcnJvd19sZWZ0JyxcclxuICAgIC8vICAgbmV4dEVsOiAnI3dhbGxldHMtc2xpZGVyIC5pdGVtLWhlYWQtYXJyb3dzX19hcnJvd19yaWdodCcsXHJcbiAgICAvLyB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgaW52ZXN0Q2FyLm9uKCdzbGlkZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGludmVzdFBhZy5zbGlkZVRvKGludmVzdENhci5yZWFsSW5kZXggKyAxKTtcclxuICAgIGludmVzdENvbnRlbnQuc2xpZGVUbyhpbnZlc3RDYXIucmVhbEluZGV4ICsgMSk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciByb2FkbWFwU2xpZGVyID0gbmV3IFN3aXBlcignLnJvYWRtYXAtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBwcmV2RWw6ICcucm9hZG1hcC1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIG5leHRFbDogJy5yb2FkbWFwLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgc3RhdERlcG9zaXRTbGlkZXIgPSBuZXcgU3dpcGVyKCcjc3RhdC1kZXBvc2l0IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcjc3RhdC1kZXBvc2l0IC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdmFyIHN0YXRXaXRoZHJhd1NsaWRlciA9IG5ldyBTd2lwZXIoJyNzdGF0LXdpdGhkcmF3IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcjc3RhdC13aXRoZHJhdyAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHZhciBuZXdzUGFnZVNsaWRlciA9IG5ldyBTd2lwZXIoJy5uZXdzLXBhZ2Utc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICBzcGFjZUJldHdlZW46IDI1LFxyXG4gICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcubmV3cy1wYWdlX19uYXYgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBwcmV2RWw6ICcubmV3cy1wYWdlX19uYXYgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIG5leHRFbDogJy5uZXdzLXBhZ2VfX25hdiAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA0ODA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHZhciBuZXdzUGFnZUNvbnRlbnRTbGlkZXIgPSBuZXcgU3dpcGVyKCcubmV3cy1wYWdlX19jb250ZW50IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgc3BlZWQ6IDQwMCxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICBmYWRlRWZmZWN0OiB7XHJcbiAgICAgIGNyb3NzRmFkZTogdHJ1ZVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgbmV3c1BhZ2VTbGlkZXIub24oJ3NsaWRlQ2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgIG5ld3NQYWdlQ29udGVudFNsaWRlci5zbGlkZVRvKG5ld3NQYWdlU2xpZGVyLnJlYWxJbmRleCArIDEpO1xyXG4gIH0pXHJcblxyXG5cclxuICAvL2NvdW50ZXIgXHJcblxyXG4gICQoJy5jb3VudCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wcm9wKCdDb3VudGVyJywwKS5hbmltYXRlKHtcclxuICAgICAgICBDb3VudGVyOiAkKHRoaXMpLnRleHQoKVxyXG4gICAgfSwge1xyXG4gICAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgICBzdGVwOiBmdW5jdGlvbiAobm93KSB7XHJcbiAgICAgICAgICAgICQodGhpcykudGV4dChNYXRoLmNlaWwobm93KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvL2NhYmluZXQganNcclxuXHJcbiAgLy90YWJzXHJcblxyXG4gICQoJy50YWJzX193cmFwJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykuZmluZCgnLnRhYicpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy50YWJzX193cmFwJykuZmluZCgnLnRhYl9jb250ZW50JykuY2hpbGRyZW4oKS5ub3QoJzpmaXJzdCcpLmhpZGUoKTtcclxuICAgICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnLnRhYnNfX3dyYXAnKS5maW5kKCcudGFiX2NvbnRlbnQnKS5jaGlsZHJlbigpLmVxKGkpLmZhZGVJbigwKS5zaWJsaW5ncygnLnRhYl9pdGVtJykuaGlkZSgpO1xyXG4gICAgICAgIGlmKCQoJyN3YWxsZXRzLXNsaWRlcicpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICAgICAgICB3YWxsZXRzU2xpZGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgb3BlcnNTbGlkZXIudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvL3dhbGxldHMgdG9nZ2xlXHJcbiAgJCggXCIuY2FiaW5ldC1zaWRlYmFyLXRhYnMtY29udGVudF9faXRlbS5pdGVtX3dhbGxldHMgLmNvbnRlbnQtaXRlbVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgJCh0aGlzKS5maW5kKCBcIi5jb250ZW50LWl0ZW1fX3RvZ2dsZXJcIiApLnNsaWRlVG9nZ2xlKCBcInNsb3dcIiApO1xyXG4gIH0pO1xyXG5cclxuICAvL3NsaWRlcnNcclxuICAvL2NhYmluZXQgc2lkZWJhciB3YWxsZXRzIHNsaWRlclxyXG4gIHZhciB3YWxsZXRzU2xpZGVyID0gbmV3IFN3aXBlcignI3dhbGxldHMtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgLy9sb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjUsXHJcbiAgICBlZmZlY3Q6J2N1YmUnLFxyXG4gICAgY3ViZUVmZmVjdDoge1xyXG4gICAgICBzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgcHJldkVsOiAnI3dhbGxldHMtc2xpZGVyIC5pdGVtLWhlYWQtYXJyb3dzX19hcnJvd19sZWZ0JyxcclxuICAgICAgbmV4dEVsOiAnI3dhbGxldHMtc2xpZGVyIC5pdGVtLWhlYWQtYXJyb3dzX19hcnJvd19yaWdodCcsXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy9jYWJpbmV0IHNpZGViYXIgb3BlcmF0aW9ucyBzbGlkZXJcclxuICB2YXIgb3BlcnNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjb3BlcnMtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgLy9sb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjUsXHJcbiAgICBlZmZlY3Q6J2N1YmUnLFxyXG4gICAgY3ViZUVmZmVjdDoge1xyXG4gICAgICBzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgcHJldkVsOiAnI29wZXJzLXNsaWRlciAuaXRlbS1oZWFkLWFycm93c19fYXJyb3dfbGVmdCcsXHJcbiAgICAgIG5leHRFbDogJyNvcGVycy1zbGlkZXIgLml0ZW0taGVhZC1hcnJvd3NfX2Fycm93X3JpZ2h0JyxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9jYWJpbmV0IHBsYW5zIHNsaWRlclxyXG4gIHZhciBwbGFuc1NsaWRlciA9IG5ldyBTd2lwZXIoJy5zZWxlY3QtcGxhbl9faXRlbXMgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICBzcGFjZUJldHdlZW46IDI1LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc2VsZWN0LXBsYW4gLmhlYWRlci1hcnJvd3NfX2Fycm93X3JpZ2h0JyxcclxuICAgICAgcHJldkVsOiAnLnNlbGVjdC1wbGFuIC5oZWFkZXItYXJyb3dzX19hcnJvd19sZWZ0JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAxMjAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KTtcclxuICB2YXIgYmFubmVyc1NsaWRlciA9IG5ldyBTd2lwZXIoJy5jYWJpbmV0LWJhbm5lcnNfX2l0ZW1zIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcclxuICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgIC8vICAgbmV4dEVsOiAnLnNlbGVjdC1wbGFuIC5oZWFkZXItYXJyb3dzX19hcnJvd19yaWdodCcsXHJcbiAgICAvLyAgIHByZXZFbDogJy5zZWxlY3QtcGxhbiAuaGVhZGVyLWFycm93c19fYXJyb3dfbGVmdCcsXHJcbiAgICAvLyB9LFxyXG4gICAgYXV0b3BsYXk6IHtcclxuICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMTIwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDU2MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdmFyIGJhbm5lcnNDb250ZW50U2xpZGVyID0gbmV3IFN3aXBlcignLmNhYmluZXQtYmFubmVyc19fY29udGVudCAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNwZWVkOiA0MDAsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgZmFkZUVmZmVjdDoge1xyXG4gICAgICBjcm9zc0ZhZGU6IHRydWVcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGJhbm5lcnNTbGlkZXIub24oJ3NsaWRlQ2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgIGJhbm5lcnNDb250ZW50U2xpZGVyLnNsaWRlVG8oYmFubmVyc1NsaWRlci5yZWFsSW5kZXggKyAxKTtcclxuICB9KVxyXG5cclxuICAvL2NhYmluZXQtc2V0dGluZ3NcclxuXHJcbiAgJCgnLmNhYmluZXQtaGlzdG9yeV9fc2V0dGluZ3MtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICBcclxuICBcclxuICAgICQodGhpcykuc2libGluZ3MoJy5jYWJpbmV0LWhpc3RvcnlfX3NldHRpbmdzLWhpZGUnKS5mYWRlSW4oMzAwKTtcclxuICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgbGV0IHRydWVIID0gKCQoZG9jdW1lbnQpLm91dGVySGVpZ2h0KHRydWUpIC0gJCh0aGlzKS5zaWJsaW5ncygnLmNhYmluZXQtaGlzdG9yeV9fc2V0dGluZ3MtaGlkZScpLm9mZnNldCgpLnRvcCAtICQodGhpcykuc2libGluZ3MoJy5jYWJpbmV0LWhpc3RvcnlfX3NldHRpbmdzLWhpZGUnKS5vdXRlckhlaWdodCh0cnVlKSk7XHJcbiAgXHJcbiAgICBpZih0cnVlSCA8PSAwKXtcclxuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmNhYmluZXQtaGlzdG9yeV9fc2V0dGluZ3MtaGlkZScpLmFkZENsYXNzKCd0b3AnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSl7IFxyXG4gICAgdmFyIGJsb2NrID0gJChcIi5jYWJpbmV0LWhpc3RvcnlfX3NldHRpbmdzLmFjdGl2ZSAuY2FiaW5ldC1oaXN0b3J5X19zZXR0aW5ncy1oaWRlXCIpOyBcclxuICAgIGlmICghYmxvY2suaXMoZS50YXJnZXQpIFxyXG4gICAgICAgICYmIGJsb2NrLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7IFxyXG4gICAgICAgIGJsb2NrLmhpZGUoKTsgXHJcbiAgXHJcbiAgICAgICAgYmxvY2sucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIFxyXG4gICAgICAgIGlmKCBibG9jay5oYXNDbGFzcygndG9wJykpe1xyXG4gICAgICAgICAgYmxvY2sucmVtb3ZlQ2xhc3MoJ3RvcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxuICAvL2NoYXJ0c1xyXG4gIC8vY2FiaW5ldCBwcm9maXQgY2hhcnRcclxuICBpZigkKFwiI3Byb2ZpdC1ncmFwaFwiKS5sZW5ndGggIT09IDApe1xyXG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maXQtZ3JhcGgnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY3R4LndpZHRoID0gMzAwO1xyXG4gICAgY3R4LmhlaWdodCA9IDMwMDtcclxuICAgIHZhciBncmFkaWVudEZpbGwgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgMjAwKTtcclxuICAgIGdyYWRpZW50RmlsbC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIpO1xyXG4gICAgZ3JhZGllbnRGaWxsLmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMjU1LDI1NSwyNTUsMClcIik7XHJcbiAgICB2YXIgZ3JhZGllbnRGaWxsMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAyMDApO1xyXG4gICAgZ3JhZGllbnRGaWxsMi5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDIzNywxMSwxNCwxKVwiKTtcclxuICAgIGdyYWRpZW50RmlsbDIuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSg2NSwxMCwyMCwxKVwiKTtcclxuICAgIHZhciBjaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgLy8gVGhlIHR5cGUgb2YgY2hhcnQgd2Ugd2FudCB0byBjcmVhdGVcclxuICAgICAgdHlwZTogJ2xpbmUnLFxyXG5cclxuICAgICAgLy8gVGhlIGRhdGEgZm9yIG91ciBkYXRhc2V0XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAvL2xhYmVsczogWyAnMjIgSmFuJywnMjMgSmFuJywnMjQgSmFuJywnMjUgSmFuJywnMjYgSmFuJywnMjcgSmFuJywnMjggSmFuJywnMjkgSmFuJywnMzAgSmFuJywnMzEgSmFuJywnMDEgRmViJywnMDIgRmViJywnMDMgRmViJywnMDQgRmViJ10sXHJcbiAgICAgICAgbGFiZWxzOiBbICczMCBKYW4nLCczMSBKYW4nLCcwMSBGZWInLCcwMiBGZWInLCcwMyBGZWInLCcwNCBGZWInLCcwNSBGZWInXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGRhdGE6IFsyMC4xMiwxNS4xNCwxMCw1NSwyMCwxNSwxMF0sXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogNSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2JiYjhiNScsXHJcbiAgICAgICAgICBwb2ludFN0eWxlOidjaXJjbGUnLFxyXG4gICAgICAgICAgaG92ZXJCb3JkZXJXaWR0aDoyLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBncmFkaWVudEZpbGwsXHJcbiAgICAgICAgICBoaXRSYWRpdXM6MTBcclxuICAgICAgICB9XVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGdvIGhlcmVcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcHM6e1xyXG4gICAgICAgICAgdGl0bGVGb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICB0aXRsZUZvbnRTaXplOiAxMixcclxuICAgICAgICAgIGJvZHlGb250RmFtaWx5OlwiJ1Rva3lvdHJhaWwnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICBib2R5Rm9udFNpemU6IDExLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBncmFkaWVudEZpbGwyLFxyXG4gICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2UsXHJcbiAgICAgICAgICBjYXJldFNpemU6IDgsXHJcbiAgICAgICAgICBjb3JuZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICB4UGFkZGluZzogMTEsXHJcbiAgICAgICAgICB5UGFkZGluZzogMTEsXHJcbiAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKHRvb2x0aXBJdGVtLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGRhdGFzZXQgPSBkYXRhWydkYXRhc2V0cyddWzBdO1xyXG4gICAgICAgICAgICAgIHZhciBhbW91bnQgPSBkYXRhc2V0WydkYXRhJ11bdG9vbHRpcEl0ZW1bJ2luZGV4J11dO1xyXG4gICAgICAgICAgICAgIHJldHVybiBhbW91bnQgKyAnJCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlczp7XHJcbiAgICAgICAgICB4QXhlczpbe1xyXG4gICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMTM1LCAxMzUsIDEzNSwgMC4zKSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9jYWJpbmV0IGRldGFpbHMgY2hhcnRcclxuICBpZigkKFwiI2RldGFpbHNDYXJ0XCIpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHNDYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGN0eC53aWR0aCA9IDMwMDtcclxuICAgIGN0eC5oZWlnaHQgPSAzMDA7XHJcbiAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIC8vIFRoZSB0eXBlIG9mIGNoYXJ0IHdlIHdhbnQgdG8gY3JlYXRlXHJcbiAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcblxyXG4gICAgICAvLyBUaGUgZGF0YSBmb3Igb3VyIGRhdGFzZXRcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogWydJbnZlc3RlZCcsICdXaXRoZHJhd2FsJywgJ1Byb2ZpdCcsICdSZWYuY29tbWlzc2lvbicsXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgIGRhdGE6IFsxNTAsMTcsNTAsMjVdLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgJyM0MTBhMTQnLFxyXG4gICAgICAgICAgICAnI2JiYjhiNScsXHJcbiAgICAgICAgICAgICcjZWQwYjBlJyxcclxuICAgICAgICAgICAgJyM2ZDYyNWMnLFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZ28gaGVyZVxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNTAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwczp7XHJcbiAgICAgICAgICB0aXRsZUZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIHRpdGxlRm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgYm9keUZvbnRGYW1pbHk6XCInVG9reW90cmFpbCcsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIGJvZHlGb250U2l6ZTogMTEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYWRpZW50RmlsbDIsXHJcbiAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZSxcclxuICAgICAgICAgIGNhcmV0U2l6ZTogOCxcclxuICAgICAgICAgIGNvcm5lclJhZGl1czogMCxcclxuICAgICAgICAgIHhQYWRkaW5nOiAxMSxcclxuICAgICAgICAgIHlQYWRkaW5nOiAxMSxcclxuICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24odG9vbHRpcEl0ZW0sIGRhdGEpIHtcclxuICAgICAgICAgICAgICB2YXIgZGF0YXNldCA9IGRhdGFbJ2RhdGFzZXRzJ11bMF07XHJcbiAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IGRhdGFzZXRbJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFtb3VudCArICckJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZigkKCcuZmlyc3Qtc2NlbmUnKS5sZW5ndGggIT09IDApe1xyXG4gICAgdmFyIHNtb2tlID0gbmV3IEltYWdlKCk7XHJcbnNtb2tlLnNyYyA9ICdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNTM4OC9zbW9rZS5wbmcnO1xyXG5cclxuJC5mbi5lbWl0dGVyID0gZnVuY3Rpb24ob3B0cyl7XHJcbiAgdmFyIHBhcnRpY2xlcyA9IFtdO1xyXG4gIHZhciBjYW52YXNlcyA9IFtdO1xyXG5cclxuICB2YXIgcGFydGljbGUgPSBmdW5jdGlvbihjYW52YXMpe1xyXG4gICAgdmFyIHgsIHksIHNpemUsIHNwZWVkWCwgc3BlZWRZLCBvcGFjaXR5O1xyXG4gICAgcmVzZXQoKTtcclxuICAgIFxyXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpe1xyXG4gICAgICBpZihvcGFjaXR5ID4gMCl7XHJcbiAgICAgICAgb3BhY2l0eSAtPSAoTWF0aC5yYW5kb20oKSAvIG9wdHMuc3BlZWQuZmFkZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9wYWNpdHkgPD0gMCl7XHJcbiAgICAgICAgcmVzZXQoKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc3BlZWRYIC09IE1hdGgucmFuZG9tKCkgLyBvcHRzLnNwZWVkLmFjY2VsZXJhdGlvbjtcclxuICAgICAgc3BlZWRZIC09IE1hdGgucmFuZG9tKCkgLyBvcHRzLnNwZWVkLmFjY2VsZXJhdGlvbjtcclxuICAgICAgeCArPSBzcGVlZFg7XHJcbiAgICAgIHkgKz0gc3BlZWRZO1xyXG4gICAgICBzaXplICs9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgIGRyYXdQYXJ0aWNsZSh4LCB5LCBzaXplLCBvcGFjaXR5KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd1BhcnRpY2xlKHgsIHksIHNpemUsIG9wYWNpdHkpe1xyXG4gICAgICBjYW52YXMuZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICBjYW52YXMuZHJhd0ltYWdlKHNtb2tlLCAwLCAwLCBvcHRzLnNpemUsIG9wdHMuc2l6ZSwgeCwgeSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXQoKXtcclxuICAgICAgeCA9IG9wdHMueDtcclxuICAgICAgeSA9IG9wdHMueTtcclxuICAgICAgc2l6ZSA9IG9wdHMuc2l6ZTtcclxuICAgICAgc3BlZWRYID0gTWF0aC5yYW5kb20oKSAqIG9wdHMuc3BlZWQueDtcclxuICAgICAgc3BlZWRZID0gTWF0aC5yYW5kb20oKSAqIG9wdHMuc3BlZWQueTtcclxuICAgICAgb3BhY2l0eSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGZ1bmN0aW9uKGVsKXtcclxuICAgIHZhciBjYW52YXMgPSBlbFswXS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IGVsLndpZHRoKCk7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gZWwuaGVpZ2h0KCk7XHJcblxyXG4gICAgZm9yKHZhciBjID0gMDsgYyA8IG9wdHMucGFydGljbGVzOyBjKyspe1xyXG4gICAgICBwYXJ0aWNsZXMucHVzaChuZXcgcGFydGljbGUoY2FudmFzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNhbnZhcy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBjYW52YXNlcy5wdXNoKG5ldyBjYW52YXMoJCh0aGlzKSkpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgIGNhbnZhc2VzLmZvckVhY2goZnVuY3Rpb24oY2FudmFzKXtcclxuICAgICAgY2FudmFzLmNsZWFyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwYXJ0aWNsZXMuZm9yRWFjaChmdW5jdGlvbihwYXJ0aWNsZSl7XHJcbiAgICAgIHBhcnRpY2xlLnVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXI6IHJlbmRlclxyXG4gIH1cclxufTtcclxuXHJcbiAgICAkKCcjbWFpbi1zbW9rZScpLmVtaXR0ZXIoe1xyXG4gICAgICB4OiA1MDAsXHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIHNpemU6IDcwLFxyXG4gICAgICBwYXJ0aWNsZXM6IDIwMCxcclxuICAgICAgc3BlZWQ6IHtcclxuICAgICAgICB4OiAtMSxcclxuICAgICAgICB5OiAzLFxyXG4gICAgICAgIGZhZGU6IDE1MCxcclxuICAgICAgICBhY2NlbGVyYXRpb246IDEzMDBcclxuICAgICAgfVxyXG4gICAgfSkucmVuZGVyKCk7XHJcbiAgICAkKCcjcm9hZC1zbW9rZScpLmVtaXR0ZXIoe1xyXG4gICAgICB4OiA1MDAsXHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIHNpemU6IDcwLFxyXG4gICAgICBwYXJ0aWNsZXM6IDIwMCxcclxuICAgICAgc3BlZWQ6IHtcclxuICAgICAgICB4OiAtMSxcclxuICAgICAgICB5OiAzLFxyXG4gICAgICAgIGZhZGU6IDE1MCxcclxuICAgICAgICBhY2NlbGVyYXRpb246IDEzMDBcclxuICAgICAgfVxyXG4gICAgfSkucmVuZGVyKCk7XHJcblxyXG4gIH1cclxufSkoKTtcclxuXHJcbiJdfQ==
