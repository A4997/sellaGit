$(document).ready(function () {
    $("#infoLink").click();
    $("#reviewsLink").click(function () {
        $(".comments").show();
        $(".addCommentForm").show();
    });
    $("#infoLink").click(function () {
        $(".comments").hide();
        $(".addCommentForm").hide();
    });
    if (window.location.href.indexOf("cart") > -1||window.location.href.indexOf("perfum") > -1 ) {
        var counterValue = $(" #value");
        var counterIncrement = $(" #increment");
        var counterDecrement = $(" #decrement");
        // console.log("counterValue : "+ counterValue.text());
        // console.log("counterIncrement : "+counterIncrement);
        // console.log("counterDecrement : "+counterDecrement);
        var count =   1;
    
        counterIncrement.on( "click", function() {
            count++;
            counterValue.text(count);
          } );
          
        
    
        counterDecrement.on( "click", function() {
            if(count>=1){
                count--;
                counterValue.text(count);
            }
           
        });
    }
    if (window.location.href.indexOf("payment") > -1 ||window.location.href.indexOf("perfum") > -1) {
        $("#secondCircle").addClass("active");
        $("#secondSpan").addClass("active");
        $("head").append(
            '<style>.progress-container::after{ content: "";height: 130px;width: 2px;position: absolute;right: 94px;background: #f282a9;top: -167%;transform: rotate(90deg);</style>'
        );
        $(".promo_discount").hide();
    }
    if (window.location.href.indexOf("shipping") > -1) {
        $("#secondCircle").addClass("active");
        $("#thirdCircle").addClass("active");
        $("#secondSpan").addClass("active");
        $("#thirdSpan").addClass("active");
        $("head").append(
            "<style>.progress-container::before{background-color:#f282a9 !important;}</style>"
        );
        $(".promo_discount").hide();
    }
  
    //   $("#modal").click(function(){
    //     // $('.modalToggle').toggle("slide", { direction: "right" }, 1000);

    //  //    if ($('.modalToggle:visible').length == 0) {
    //  //       $('.modalToggle').fadeIn();

    //  //   } else {
    //  //    $('.modalToggle').fadeOut();
    //  //   }

    //  //   if($('.modalToggle:visible').length)
    //  //      $('.modalToggle').hide();
    //  //  else
    //  //      $('.modalToggle').show();
    //    $('.modalToggle').toggle();
    //   });

    // var counterValue = document.querySelector("#counter-value");
    // var counterIncrement = document.querySelector("#counter-increment");
    // var counterDecrement = document.querySelector("#counter-decrement");
    // var count = 0;

    // counterIncrement.addEventListener("click", () => {
    //     count++;
    //     counterValue.setAttribute("value", count);
    // });

    // counterDecrement.addEventListener("click", () => {
    //     count--;
    //     counterValue.setAttribute("value", count);
    // });
    $("#creditCardResponsive").on( "click", function() {
       $("#madaResponsive").removeClass("activeCardResponsive");
       $("#paypalResponsive").removeClass("activeCardResponsive");
       $(this).addClass('activeCardResponsive');
      } );
      $("#madaResponsive").on( "click", function() {
        $("#creditCardResponsive").removeClass("activeCardResponsive");
        $("#paypalResponsive").removeClass("activeCardResponsive");
        $(this).addClass('activeCardResponsive');
       } );
       $("#paypalResponsive").on( "click", function() {
        $("#madaResponsive").removeClass("activeCardResponsive");
        $("#creditCardResponsive").removeClass("activeCardResponsive");
        $(this).addClass('activeCardResponsive');
       } );

       $("#creditCard").on( "click", function() {
        $("#mada").removeClass("activeCard");
        $("#paypal").removeClass("activeCard");
        $(this).addClass('activeCard');
        var newtop = $('.cartArrow').position().top + 15;
         $(".cartArrow").css('top', newtop + 'px');
       } );
       $("#mada").on( "click", function() {
         $("#creditCard").removeClass("activeCard");
         $("#paypal").removeClass("activeCard");
         $(this).addClass('activeCard');
         var newtop = $('.cartArrow').position().top + 165;
         $(".cartArrow").css('top', newtop + 'px');
        } );
        $("#paypal").on( "click", function() {
         $("#mada").removeClass("activeCard");
         $("#creditCard").removeClass("activeCard");
         $(this).addClass('activeCard');
         var newtop = $('.cartArrow').position().top + 90;
         $(".cartArrow").css('top', newtop + 'px');
        } );
});
