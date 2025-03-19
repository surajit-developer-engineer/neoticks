// ========================== Hot Topics JS ==========================
$(document).ready(function () {
    $('.hottopics-carousel').owlCarousel({
        loop: true,
        items: 9,
        stagePadding: 0,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 7000,
        autoplayHoverPause: false, // Disable pause on hover
        responsive: {
            0: {
              nav: false,
              items: 3
            },        
            600: {
              nav: false,
              items: 4
            },        
            1024: {
              items: 7
            },        
            1366: {
              items: 9
            }
          }

    });

    $( ".hottopics-carousel .owl-prev").html('<i class="tiIcon ti-angle-left"></i>');
    $( ".hottopics-carousel .owl-next").html('<i class="tiIcon ti-angle-right"></i>');

});


// ========================== Featured Brands carousel JS ==========================
$(document).ready(function () {
    $('.featuredBrands-carousel').owlCarousel({
        loop: true,
        items: 4,
        stagePadding: 0,
        margin: 5,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 7000,
        autoplayHoverPause: false, // Disable pause on hover
        responsive: {
            0: {
              nav: false,
              items: 1
            },
        
            600: {
              nav: false,
              items: 1

            },
        
            1024: {
              items: 4
            },
        
            1366: {
              items: 4
            }
          }

    });

    $( ".featuredBrands-carousel .owl-prev").html('<i class="tiIcon ti-angle-left"></i>');
    $( ".featuredBrands-carousel .owl-next").html('<i class="tiIcon ti-angle-right"></i>');

});



$(document).ready(function() {
    $("div.dropdown button").click((event) => {
      if($(event.target).next().css('display') == 'flex'){
        $(event.target).next().css('display', 'none');
        $(event.target).children().removeClass('rotate');
      } else if($(event.target).next().css('display') == 'none'){
        $(event.target).next().css('display', 'flex');
        $(event.target).children().addClass('rotate');
      }
    });
    
    $('.hamburger').click(() => {
      if($('nav').css('display') == 'none'){
        $('nav').css('display', 'flex').css('animation-name', 'navAnim').addClass('animInfo').css('animation-duration', '.5s');
        $('.hamburger :nth-child(1)').css('animation-name', 'bar1Anim').addClass('animInfo');
        $('.hamburger :nth-child(2)').css('animation-name', 'bar2Anim').addClass('animInfo');
        $('.hamburger :nth-child(3)').css('animation-name', 'bar3Anim').addClass('animInfo');
      } else if($('nav').css('display') == 'flex'){
        $('nav').css('display', 'none').css('animation-name', 'navAnimReverse').css('animation-duration', '.5s');
        $('.hamburger :nth-child(1)').css('animation-name', 'bar1AnimReverse');
        $('.hamburger :nth-child(2)').css('animation-name', 'bar2AnimReverse');
        $('.hamburger :nth-child(3)').css('animation-name', 'bar3AnimReverse');
      }
    });
    
    if ($(window).width() > 2000 ) {
      $('nav').removeClass('animInfo').css('animation-name', 'unset').css('opacity', '1');
  }
  });
  
  
  
  



// ========================== Show Hide Class JS ==========================
$(document).ready(function(){
    function AddReadMore() {
     //This limit you can set after how much characters you want to show Read More.
     var carLmt = 60;
     // Text to show when text is collapsed
     var readMoreTxt = " ...read more";
     // Text to show when text is expanded
     var readLessTxt = " read less";


     //Traverse all selectors with this class and manupulate HTML part to show Read More
     $(".add-read-more").each(function () {
        if ($(this).find(".first-section").length)
           return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
           var firstSet = allstr.substring(0, carLmt);
           var secdHalf = allstr.substring(carLmt, allstr.length);
           var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
           $(this).html(strtoadd);
        }
     });

     //Read More and Read Less Click Event binding
     $(document).on("click", ".read-more,.read-less", function () {
        $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
     });
  }

  AddReadMore();
});






// ========================== FAQ Accordion Active Class JS ==========================
$(document).ready(function() {

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).parent().removeClass('active');
    });

});