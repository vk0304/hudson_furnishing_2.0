
$(document).ready(function(){

    // for bedroom section

    $(".bed_1").click(function(){
        $("#popup_bedroom1").css({"display":"block"});
        
    });

    $(".bed_2").click(function(){
        $("#popup_bedroom2").css({"display":"block"});
        
    });

    $(".bed_3").click(function(){
        $("#popup_bedroom3").css({"display":"block"});
        
    });

    $(".bed_4").click(function(){
        $("#popup_bedroom4").css({"display":"block"});
        
    });

    $(".bed_5").click(function(){
        $("#popup_bedroom5").css({"display":"block"});
        
    });

    $(".bed_6").click(function(){
        $("#popup_bedroom6").css({"display":"block"});
        
    });

    // for living room section


    
    $(".living_1").click(function(){
        $("#popup_living1").css({"display":"block"});
        
    });

    $(".living_2").click(function(){
        $("#popup_living2").css({"display":"block"});
        
    });

    $(".living_3").click(function(){
        $("#popup_living3").css({"display":"block"});
        
    });

    $(".living_4").click(function(){
        $("#popup_living4").css({"display":"block"});
        
    });

    $(".living_5").click(function(){
        $("#popup_living5").css({"display":"block"});
        
    });

    $(".living_6").click(function(){
        $("#popup_living6").css({"display":"block"});
        
    });


    // for dining table


    
    $(".dining_1").click(function(){
        $("#popup_dining1").css({"display":"block"});
        
    });
    
    $(".dining_2").click(function(){
        $("#popup_dining2").css({"display":"block"});
        
    });
    
    $(".dining_3").click(function(){
        $("#popup_dining3").css({"display":"block"});
        
    });
    
    $(".dining_4").click(function(){
        $("#popup_dining4").css({"display":"block"});
        
    });
    
    $(".dining_5").click(function(){
        $("#popup_dining5").css({"display":"block"});
        
    });
    
    $(".dining_6").click(function(){
        $("#popup_dining6").css({"display":"block"});
        
    });


    // for outdoor 


    
    $(".outdoor_1").click(function(){
        $("#popup_outdoor1").css({"display":"block"});
        
    });
    
    $(".outdoor_2").click(function(){
        $("#popup_outdoor2").css({"display":"block"});
        
    });
    
    $(".outdoor_3").click(function(){
        $("#popup_outdoor3").css({"display":"block"});
        
    });
    
    $(".outdoor_4").click(function(){
        $("#popup_outdoor4").css({"display":"block"});
        
    });
    
    $(".outdoor_5").click(function(){
        $("#popup_outdoor5").css({"display":"block"});
        
    });
    
    $(".outdoor_6").click(function(){
        $("#popup_outdoor6").css({"display":"block"});
        
    });

    // for promo code button 

    $('.promo-btn').click(function() {
        $('.product-cart').css({'filter':'grayscale(100%)'});
        $('.popup_window').css({'display':'none', "transition": "all 0.10s ease-in-out"});
      $('.promo_section').css({"display":"block" , "transition": "all 0.2s ease-in-out"});
    });

    // query for pressing enter in input field 
    
    $('#input-field').keypress(function(event) {
        if (event.which == 13) { // Check if the key pressed is the enter key
          $('#apply').click(); // Trigger the click event of the button
        }
    });
    
    // for apply button when promo code screen shown

    $('#apply').click(function(){
        var promocode = $('#input-field').val();
        if (promocode == '') {
          alert('Please enter a Promo code');
          return false;
        } else {
            $('.promo_section').css({"display":"none"  });
        $('.product-cart').css({'filter':'grayscale(0%)'});
        alert('"Congrats" \n You have got the Discount');
        }
      });
        

    //  for close button of pop up screen 

    $(".close_button").click(function(){
        $(".popup_window").css({"display":"none"})
    })

    // for order button
    $(".order-now").click(function(){
        $(".popup_window").css({"display":"none"});
        alert("Your Order Has Been Successfully Placed");
    });

});
