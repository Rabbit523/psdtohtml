$( document ).ready(function() {
  var email_check = false, sms_check = false, terms_check = false;
  var category_ids = ["games-menu__item--lobby", "games-menu__item--new", "games-menu__item--slots", "games-menu__item--blackjack", "games-menu__item--roulette"];
  var hader_links = ["header-menu__link--lobby", "header-menu__link--new", "header-menu__link--slots", "header-menu__link--roulette", "header-menu__link--blackjack"];
  // event of game list item hoever event
  $(".game-item").mouseenter(function() {
    var id = $(this).data("id");
    if (!$("#"+id).hasClass('hover')) {
      $("#"+id).addClass('hover');
    }
  });
  $(".game-item").mouseleave(function() {
    var id = $(this).data("id");
    if ($("#"+id).hasClass('hover')) {
      $("#"+id).removeClass('hover');
    }
  });
  // mobile navbar
  $(".header__mobile-navbar").click(function () {
    if ($("#menu").hasClass("mm-current")) {
      $("#menu").removeClass("mm-current");
      $(".mm-page").attr("style", "transform: translate(0, 0);");
    } else {
      $("#menu").addClass("mm-current");
      $(".mm-page").attr("style", "transform: translate(80%, 0);");
    }
  });
  // event of game category
  $("#games-menu__item--lobby").click(function() {
    if (!$(this).hasClass('games-menu__item--current')) {
      $(this).addClass('games-menu__item--current');
      $(".games-list__wrap.lobby").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--lobby' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$(".header-menu__link--lobby").hasClass('header-menu__link--current')) {
      $(".header-menu__link--lobby").addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--lobby' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  $("#games-menu__item--new").click(function() {
    if (!$(this).hasClass('games-menu__item--current')) {
      $(this).addClass('games-menu__item--current');
      $(".games-list__wrap.new").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--new' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$(".header-menu__link--new").hasClass('header-menu__link--current')) {
      $(".header-menu__link--new").addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--new' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  $("#games-menu__item--slots").click(function() {
    if (!$(this).hasClass('games-menu__item--current')) {
      $(this).addClass('games-menu__item--current');
      $(".games-list__wrap.slots").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--slots' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$(".header-menu__link--slots").hasClass('header-menu__link--current')) {
      $(".header-menu__link--slots").addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--slots' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  $("#games-menu__item--blackjack").click(function() {
    if (!$(this).hasClass('games-menu__item--current')) {
      $(this).addClass('games-menu__item--current');
      $(".games-list__wrap.blackjack").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--blackjack' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$(".header-menu__link--blackjack").hasClass('header-menu__link--current')) {
      $(".header-menu__link--blackjack").addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--blackjack' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  $("#games-menu__item--roulette").click(function() {
    if (!$(this).hasClass('games-menu__item--current')) {
      $(this).addClass('games-menu__item--current');
      $(".games-list__wrap.roulette").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--roulette' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$(".header-menu__link--roulette").hasClass('header-menu__link--current')) {
      $(".header-menu__link--roulette").addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--roulette' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  // event of header menu item
  $(".header-menu__link--lobby").click(function() {
    if (!$(this).hasClass('header-menu__link--current')) {
      $(this).addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--lobby' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$("#games-menu__item--lobby").hasClass('games-menu__item--current')) {
      $("#games-menu__item--lobby").addClass('games-menu__item--current');
      $(".games-list__wrap.lobby").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--lobby' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  $(".header-menu__link--new").click(function() {
    if (!$(this).hasClass('header-menu__link--current')) {
      $(this).addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--new' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$("#games-menu__item--new").hasClass('games-menu__item--current')) {
      $("#games-menu__item--new").addClass('games-menu__item--current');
      $(".games-list__wrap.new").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--new' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  $(".header-menu__link--slots").click(function() {
    if (!$(this).hasClass('header-menu__link--current')) {
      $(this).addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--slots' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$("#games-menu__item--slots").hasClass('games-menu__item--current')) {
      $("#games-menu__item--slots").addClass('games-menu__item--current');
      $(".games-list__wrap.slots").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--slots' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  $(".header-menu__link--blackjack").click(function() {
    if (!$(this).hasClass('header-menu__link--current')) {
      $(this).addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--blackjack' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$("#games-menu__item--blackjack").hasClass('games-menu__item--current')) {
      $("#games-menu__item--blackjack").addClass('games-menu__item--current');
      $(".games-list__wrap.blackjack").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--blackjack' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  $(".header-menu__link--roulette").click(function() {
    if (!$(this).hasClass('header-menu__link--current')) {
      $(this).addClass('header-menu__link--current');
    }
    hader_links.forEach(item => {
      if (item != 'header-menu__link--roulette' && $("."+item).hasClass('header-menu__link--current')) {
        $("."+item).removeClass('header-menu__link--current');
        var list_id = item.split("header-menu__link--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
    if (!$("#games-menu__item--roulette").hasClass('games-menu__item--current')) {
      $("#games-menu__item--roulette").addClass('games-menu__item--current');
      $(".games-list__wrap.roulette").addClass('active');
    }
    category_ids.forEach(item => {
      if (item != 'games-menu__item--roulette' && $("#"+item).hasClass('games-menu__item--current')) {
        $("#"+item).removeClass('games-menu__item--current');
        var list_id = item.split("games-menu__item--")[1];
        $(".games-list__wrap."+list_id).removeClass('active');
      }
    });
  });
  // mobile game provider event
  $(".provider-search__btn").click(function() {
    if(!$(".provider-search__wrap").hasClass('open')) {
      $(".provider-search__wrap").addClass('open');
    } else {
      $(".provider-search__wrap").removeClass('open');
    }
  });
  // modal popup showing event
  $(".signup_btn").click(function() {
    $("#signup-modal").modal("show");
  });

  // $(".login_btn").click(function() {
  //   $("#signin-modal").modal("show");
  // });

  //sign up modal
  $(".btn-next").click(function (e) {
    e.preventDefault();
    if ($("#step1").valid()) {
      $("#step1").attr('style', 'display:none');
      $("#step2").attr('style', 'display:block');
    }
  });
  $('#email_check').click(function(){
    if($(this).prop("checked") == true){
      email_check = true;
      $(".email_check .checkbox-elem__required").attr('style', 'display:none');
    }
    else if($(this).prop("checked") == false){
      email_check = false;
      $(".email_check .checkbox-elem__required").attr('style', 'display:block');
    }
  });
  $('#sms_check').click(function(){
    if($(this).prop("checked") == true){
      sms_check = true;
      $(".sms_check .checkbox-elem__required").attr('style', 'display:none');
    }
    else if($(this).prop("checked") == false){
      sms_check = false;
      $(".sms_check .checkbox-elem__required").attr('style', 'display:block');
    }
  });
  $('#terms_check').click(function(){
    if($(this).prop("checked") == true){
      terms_check = true;
      $(".terms_check .checkbox-elem__required").attr('style', 'display:none');
    }
    else if($(this).prop("checked") == false){
      terms_check = false;
      $(".terms_check .checkbox-elem__required").attr('style', 'display:block');
    }
  });
  $(".btn-submit").click(function(e) {
    e.preventDefault();
    if ($("#step2").valid()) {
      if (!email_check) {
        $(".email_check .checkbox-elem__required").attr('style', 'display:block');
      } else if (!sms_check) {
        $(".sms_check .checkbox-elem__required").attr('style', 'display:block');
      } else if (!terms_check) {
        $(".terms_check .checkbox-elem__required").attr('style', 'display:block');
      } else {
        $('#signup-modal').modal('hide');
      }
    }
  });

  var init = function() {
    $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:10000,
      autoplayHoverPause:true,
      animateOut: 'fadeOut'
    });
  };
  init();
});
