$(document).ready(function(){

    // for get promo code buttons


    $('.promo_button1').click(function(){
        $(".card_content1").css({"display":"none"});
        $(".promocode1").slideDown();
    });

    
    $('.promo_button2').click(function(){
        $(".card_content2").css({"display":"none"});
        $(".promocode2").slideDown();
    });

    
    $('.promo_button3').click(function(){
        $(".card_content3").css({"display":"none"});
        $(".promocode3").slideDown();
    });

    
    $('.promo_button4').click(function(){
        $(".card_content4").css({"display":"none"});
        $(".promocode4").slideDown();
    });

    
    $('.promo_button5').click(function(){
        $(".card_content5").css({"display":"none"});
        $(".promocode5").slideDown();
    });

    
    $('.promo_button6').click(function(){
        $(".card_content6").css({"display":"none"});
        $(".promocode6").slideDown();
    });




    // for hide button

    $('.Hide1').click(function(){
        $('.promocode1').css({"display":"none"});
        $('.card_content1').fadeIn();

    });

    
    $('.Hide2').click(function(){
        $('.promocode2').css({"display":"none"});
        $('.card_content2').fadeIn();

    });

    
    $('.Hide3').click(function(){
        $('.promocode3').css({"display":"none"});
        $('.card_content3').fadeIn();

    });

    
    $('.Hide4').click(function(){
        $('.promocode4').css({"display":"none"});
        $('.card_content4').fadeIn();

    });

    
    $('.Hide5').click(function(){
        $('.promocode5').css({"display":"none"});
        $('.card_content5').fadeIn();

    });

    
    $('.Hide6').click(function(){
        $('.promocode6').css({"display":"none"});
        $('.card_content6').fadeIn();

    });




    $('#copy1').click(function() {
        var textToCopy = $('#code1').text();
        
        // Create a hidden input element and set its value to the text to copy
        var $tempInput = $('<input>');
        $('body').append($tempInput);
        $tempInput.val(textToCopy).select();
        
        // Copy the text to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary input element
        $tempInput.remove();
        
        // Display a message to indicate that the text was copied
        alert('Text copied to clipboard!');
      });


    
    $('#copy2').click(function() {
        var textToCopy = $('#code2').text();
        
        // Create a hidden input element and set its value to the text to copy
        var $tempInput = $('<input>');
        $('body').append($tempInput);
        $tempInput.val(textToCopy).select();
        
        // Copy the text to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary input element
        $tempInput.remove();
        
        // Display a message to indicate that the text was copied
        alert('Text copied to clipboard!');
      });


    
    $('#copy3').click(function() {
        var textToCopy = $('#code3').text();
        
        // Create a hidden input element and set its value to the text to copy
        var $tempInput = $('<input>');
        $('body').append($tempInput);
        $tempInput.val(textToCopy).select();
        
        // Copy the text to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary input element
        $tempInput.remove();
        
        // Display a message to indicate that the text was copied
        alert('Text copied to clipboard!');
      });


    
    $('#copy4').click(function() {
        var textToCopy = $('#code4').text();
        
        // Create a hidden input element and set its value to the text to copy
        var $tempInput = $('<input>');
        $('body').append($tempInput);
        $tempInput.val(textToCopy).select();
        
        // Copy the text to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary input element
        $tempInput.remove();
        
        // Display a message to indicate that the text was copied
        alert('Text copied to clipboard!');
      });


    
    $('#copy5').click(function() {
        var textToCopy = $('#code5').text();
        
        // Create a hidden input element and set its value to the text to copy
        var $tempInput = $('<input>');
        $('body').append($tempInput);
        $tempInput.val(textToCopy).select();
        
        // Copy the text to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary input element
        $tempInput.remove();
        
        // Display a message to indicate that the text was copied
        alert('Text copied to clipboard!');
      });


    
    $('#copy6').click(function() {
        var textToCopy = $('#code6').text();
        
        // Create a hidden input element and set its value to the text to copy
        var $tempInput = $('<input>');
        $('body').append($tempInput);
        $tempInput.val(textToCopy).select();
        
        // Copy the text to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary input element
        $tempInput.remove();
        
        // Display a message to indicate that the text was copied
        alert('Text copied to clipboard!');
      });


    

    

});




