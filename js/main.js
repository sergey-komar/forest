$(function(){

    $('.photography__tabs-item').on('click', function(e){
        e.preventDefault();

        $('.photography__tabs-item').removeClass('photography__tabs-item--active');
        $('.photography__content-item').removeClass('photography__content-item--active');

        $(this).addClass('photography__tabs-item--active');
        $($(this).attr('href')).addClass('photography__content-item--active');
    });

     $('.button-btn').on('click', function(){
         $('.card').slideToggle();
     });

     $('.button-btn-1').on('click', function(){
         $('.card-1').slideToggle();
     });

    //  $('.header__nav-button').on('click', function(){
    //      $('.header__nav-list').slideToggle();
    //  });


      const navIcon = document.querySelector(".nav-icon");
      const nav = document.querySelector('.header__nav-list');

      navIcon.addEventListener("click", function () {
      // document.querySelector('.nav-icon').classList.toggle('active');
  
      this.classList.toggle("nav-icon--active");

      nav.classList.toggle('nav--active');
    });
  

});