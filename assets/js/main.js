jQuery(function ($) {
  $(".heroSlider").owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    items: 1

  });
  $(".coursesSlider").owlCarousel({
    nav: true,
    loop: false,
    dots: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    items: 4,
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3,
      }
    },

  });
  $(".updateSlider").owlCarousel({
    nav: true,
    loop: false,
    dots: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    items: 4,
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3,
      }
    },

  });
   $(".intersetcoursesSlider").owlCarousel({
     nav: false,
   loop: false,
     dots: false,
     autoplay:true,
     navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
     items: 4,
     margin: 30,
     responsive: {
     0: {
        items: 1
     },
       700: {
       items: 2
       },
     1000: {
        items: 3,
      }
     },

   });

  $(".certificateSlider").owlCarousel({
    nav: true,
    loop: false,
    dots: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    items: 4,
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 4,
      }
    }
  });
  $(".InstructorsSlider").owlCarousel({
    nav: true,
    loop: false,
    dots: true,
    items: 4,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    margin: 70,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 4,
      },

    }
  });
  $(".partnerSlider").owlCarousel({
    nav: true,
    loop: false,
    dots: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    items: 6,
    margin: 25,
    responsive: {
      0: {
        items: 2
      },
      700: {
        items: 4
      },
      1000: {
        items: 6,
      },

    },

  });
  $(".instructorSlider").owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    items: 3,
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3,
      },

    },

  });
  $(".nav-slider").owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    autoplay: true,
    items: 2

  });

    $('.success.chart').easyPieChart({
      size: 68,
      barColor: "#31D894",
      scaleLength: 0,
      lineWidth: 3,
      trackColor: "#E9E9E9",
      lineCap: "circle",
      animate: 2000,
    });
    $('.InProgress.chart').easyPieChart({
      size: 68,
      barColor: "#FFCE21",
      scaleLength: 0,
      lineWidth: 3,
      trackColor: "#E9E9E9",
      lineCap: "circle",
      animate: 2000,
    });

  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (( scrollTop +  $(window).height()) > $(document).height()) {

      $(".up").stop(true).animate({
        opacity: 1
      }, 100);

    } else {

      $(".up").stop(true).animate({
        opacity: 0
      }, 250);
    } 
    if ($(window).width() > 767){
      // && scrollTop < $('.sideCurriclum').height() 
      if (scrollTop > $("header").height()-10 ) {
        
          $(".videoSec").css('position','fixed').css('top','70');
          $(".coursesTabsSection.lessonTabSec").css('position','fixed').css('top','255');

        $(".courseDetailsBody .innerHeader").addClass("removeHeader");
        $(".courseDetailsBody .scrolableHeader").css("display","flex")
        $(".courseDetailsBody .mainHeader").addClass("removeHeader");
        $(".courseDetailsBody .scrolltabsection").addClass("scrollNav");
        $(".lessonHeader").addClass("scrollHeader");
        $(".scrolltabsection").addClass("scrollNav");
        $(".videoSec").addClass("scrollVideo");
        $(".lessonBody .tab-content").css("padding-top","500px")
        let topVideo=$('footer').position().top+$('.scrollVideo').height()+250-window.screen.height;
        if(scrollTop>=topVideo){
          $(".coursesTabsSection.lessonTabSec").css('position','fixed').css('top',(topVideo-scrollTop+$('.scrollVideo').height()+150));
          $(".videoSec").css('position','fixed').css('top',topVideo-scrollTop+150);

        }
      }
      else if (scrollTop < 300 ){
        $(".coursesTabsSection.lessonTabSec").css('position','relative').css('top','auto');
        $(".videoSec").css('position','relative').css('top','auto');
        $(".courseDetailsBody  .innerHeader").removeClass("removeHeader");
        $(".courseDetailsBody .mainHeader").removeClass("removeHeader");
        $(".scrolltabsection").removeClass("scrollNav");
        $(".courseDetailsBody .scrolableHeader").css("display","none");
        $(".videoSec").removeClass("scrollVideo");
        $(".lessonHeader").removeClass("scrollHeader");
        $(".lessonBody .tab-content").css("padding-top","0")

  
      }
    
    }
  });

    function onScroll(event){
      var scrollPosition = $(document).scrollTop();
    $('.courseDetailsBody .coursepage-tabs .nav-link').each(function () {
      console.log($(this).attr('href')); 
    //   var refElement = $(this).attr("href");
    // //   console.log($(this).attr("href")); //log
    //   if ( $('body').find(refElement).length && $('body').find(refElement).position().top-100 <= scrollTop) {
    //   $('.courseDetailsBody .coursepage-tabs .nav-link').removeClass("active");
    //   $(this).addClass("active");
    //   }
    //   else if( $(document).scrollTop() <= 100){
    //     $('.courseDetailsBody .coursepage-tabs .nav-link').removeClass("active");
    //   }
    //   else{
    //   $(this).removeClass("active"); 
    
    //   }
    });
  }

  $('.courseDetailsBody .coursepage-tabs .nav-link').click(function(){
    var refElement = $(this).attr("href");
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);

            $('.courseDetailsBody .coursepage-tabs .nav-item').removeClass("active");

      $(this).closest('.nav-item').addClass("active");
 
      return false;
    
  });

  $(document).on("scroll", onScroll);
        // alert(scrollTop);
    $(".up").on("click", function (e) { 
      e.preventDefault()
      console.log('asdasd');
      $("html, body").animate({ scrollTop: 0 }, "slow"); 
      
    }); 

  $(".langBtn").click(function () {
    $(".langDropDown").toggle()
  });
  $(".showHidePass").click(function () {

    var x = $(this).closest(".form-group").find(".form-control");
    if (x.attr("type") == "text") {
      x.attr("type", "password");
      $(this).closest(".form-group").find(".showPass").css("display", "block");
      $(this).closest(".form-group").find(".hidePass").css("display", "none");
    }
    else {
      x.attr("type", "text");
      $(this).closest(".form-group").find(".hidePass").css("display", "block");
      $(this).closest(".form-group").find(".showPass").css("display", "none");
    }
  });
  $( ".datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true
  });
$(document).on('click', '.dropdown-menu a', function (e) {
  
  e.stopPropagation();
});

  // make it as accordion for smaller screens

    $('.dropdown-menu a').click(function(e){

      e.preventDefault();
        if($(this).next('.submenu').length){
          $(this).addClass("active")
          $('.submenu').hide();
          $(this).next('.submenu').css("display","block");
        }
        $('.dropdown').on('hide.bs.dropdown', function () {
       $(this).find('.submenu').hide();
    })
    });

    $(".filterSearch").on("keyup", function() {

      var value = $(this).val().toLowerCase();
     $(this).parent(".dropdown-menu").find("li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    /**************FAQ Collapse */
    $('.accordion-panel').click(function () {
      $(this).not(this).find('span:first').removeClass('lni-chevron-up').addClass('lni-chevron-down');
      $(this).find('span:first').toggleClass('lni lni-chevron-up lni lni-chevron-down');
  })
  $(".CurriculumList li").click(function(){
    $(this).not(this).find('span:first').removeClass('lni-chevron-down').addClass('lni-chevron-up');
    $(this).find('span:first').toggleClass('lni lni-chevron-down lni lni-chevron-up');
  })
  $(".NoteCollapse .accordion-panel").click(function(){
    $(this).not(this).find('span:first').removeClass('lni-chevron-up').addClass('lni-chevron-down');
    $(this).find('span:first').toggleClass('lni lni-chevron-up lni lni-chevron-down');
  })
  $('.faqHeader').click(function () {
    $(this).parent().find('.faqbody').slideToggle(400);
});
$(".faqHeader").on("click", "a", function(e) { e.preventDefault() });

  $('.CurriculumList li').click(function () {
      $(this).find('.innerCurriculumList').slideToggle(400);
  });
  $(".CurriculumList li").on("click", "a", function(e) { e.preventDefault() });
  $(".radioBtnContainer").on("click", "a", function(e) { e.preventDefault() });
  $(".NoteCollapse").on("click", "a", function(e) { e.preventDefault() });
  $(".issueCertificateBtn").click(function () {
    $(this).css("display","none");
    $(this).parent().find(".MyCoursesCertficateBtns").css("display","block");
    $(this).parent().parent().find(".MycourseCertificateImg").css("filter","blur(0)")
  });

  $(".readOnlyRating").starRating({
    starSize: 16,
    activeColor: '#FFD93F',
    hoverColor: '#FFD93F',
    ratedColor: '#FFD93F',
    emptyColor: 'transparent',
    starShape: 'straight',
    strokeColor:'#FFD93F',
    strokeWidth:9,
    ratedColors: '#FFD93F',
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
  $(".lectureReviewsReadOnly").starRating({
    starSize: 16,
    activeColor: '#FFD93F',
    hoverColor: '#FFD93F',
    ratedColor: '#FFD93F',
    emptyColor: 'transparent',
    starShape: 'straight',
    strokeColor:'#FFD93F',
    strokeWidth:9,
    ratedColors: '#FFD93F',
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
  $(".learnerReviewsReadOnly").starRating({
    starSize: 16,
    rtl: true,
    activeColor: '#FFB13E',
    hoverColor: '#FFB13E',
    ratedColor: '#FFB13E',
    emptyColor: 'transparent',
    starShape: 'straight',
    strokeColor:'#FFB13E',
    strokeWidth:9,
    ratedColors: '#FFD93F',
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
  $(".leaveReviewRating").starRating({
    starSize: 16,
    activeColor: '#FFB13E',
    hoverColor: '#FFB13E',
    ratedColor: '#FFB13E',
    emptyColor: 'transparent',
    starShape: 'straight',
    strokeColor:'#FFB13E',
    strokeWidth:9,
    ratedColors: '#FFD93F',
    useGradient: false,
    disableAfterRate:true,
    useFullStars: true,

    callback: function (currentRating, $el) {
      // make a server call here
    }
  });

	if($(".exploreSelect").length){
		$('.exploreSelect').selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });
    }
    if($(".select").length){
      $('.select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false
      }
      );
      }
    $('.selectric .button').text('');

    $('.selectric .button').append('<i class="lni lni-chevron-down"></i>');
        $('.loginLink').click(function(){
          $('.modal').modal('hide');
          $('#LoginModal').modal('show')
        });
        $('.regBtnLink').click(function(){
          $('.modal').modal('hide');
          $('#regModal').modal('show')
        });
        $('.forgetLink').click(function(){
          $('.modal').modal('hide');
          $('#forgerPassModal').modal('show')
        });
        $('.instructortBtn').click(function(){
          $('.modal').modal('hide');
          $('#InstructorModal').modal('show')
        });
        $(".form-control").click(function () {
          $(this).attr("placeholder", " ");
          if($(this).attr("value") !=""){
            $(this).attr("value","")
          }
      
        });
        $(".modal").modal("show")
    });


