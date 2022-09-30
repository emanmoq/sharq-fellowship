jQuery(function ($) {
  $(".heroSlider").owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    items: 1

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
  $('.videoChart.chart').easyPieChart({
    size: 38,
    barColor: "#FFCE21",
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
    if ((scrollTop + $(window).height()) > $(document).height()) {

      $(".up").stop(true).animate({
        opacity: 1
      }, 100);

    } else {

      $(".up").stop(true).animate({
        opacity: 0
      }, 250);
    }



  });

  function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('.courseDetailsBody .coursepage-tabs .nav-link').each(function () {
      console.log($(this).attr('href'));
    });
  }

  $('.courseDetailsBody .coursepage-tabs .nav-link').click(function () {
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
  $(".datepicker").datepicker({
    changeMonth: true,
    changeYear: true
  });
  $(document).on('click', '.dropdown-menu a', function (e) {

    e.stopPropagation();
  });

  // make it as accordion for smaller screens

  $('.dropdown-menu a').click(function (e) {

    e.preventDefault();
    if ($(this).next('.submenu').length) {
      $(this).addClass("active")
      $('.submenu').hide();
      $(this).next('.submenu').css("display", "block");
    }
    $('.dropdown').on('hide.bs.dropdown', function () {
      $(this).find('.submenu').hide();
    })
  });

  if ($(".select").length) {
    $('.select').selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    }
    );
  }
  $('.selectric .button').text('');

  $('.selectric .button').append('<i class="lni lni-chevron-down"></i>');
  $('.loginLink').click(function () {
    $('.modal').modal('hide');
    $('#LoginModal').modal('show')
  });
  $('.regBtnLink').click(function () {
    $('.modal').modal('hide');
    $('#regModal').modal('show')
  });
  $('.forgetLink').click(function () {
    $('.modal').modal('hide');
    $('#forgerPassModal').modal('show')
  });
  $('.instructortBtn').click(function () {
    $('.modal').modal('hide');
    $('#InstructorModal').modal('show')
  });
  $(".form-control").click(function () {
    $(this).attr("placeholder", " ");
    if ($(this).attr("value") != "") {
      $(this).attr("value", "")
    }

  });

  $(".slider-range-min").slider({
    range: "min",
    value: 65,
    min: 1,
    max: 100,
    slide: function (event, ui) {
      $(this).parent().find(".amount").val("%" + ui.value);
    }
  });
  $(".amount").val("%" + $(".slider-range-min").slider("value"));

  $(".slider-range").slider({
    range: "min",
    value: 65,
    max:100,
    min:1
  });
});


