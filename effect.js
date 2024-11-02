$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function(){
    var vw;
    $(window).resize(function(){
        vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({top:240, left: vw-350},500);
        $('#b22').animate({top:240, left: vw-250},500);
        $('#b33').animate({top:240, left: vw-150},500);
        $('#b44').animate({top:240, left: vw-50},500);
        $('#b55').animate({top:240, left: vw+50},500);
        $('#b66').animate({top:240, left: vw+150},500);
        $('#b77').animate({top:240, left: vw+250},500);
    });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color', '#FFF'); // Fixed typo: "backgroud-color" to "background-color"
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopOne();
        });
    }
    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopTwo();
        });
    }
    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopFive();
        });
    }
    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopSix();
        });
    }
    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopSeven();
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top: -500}, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function(){
        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22');
        $('#b3').attr('id', 'b33');
        $('#b4').attr('id', 'b44');
        $('#b5').attr('id', 'b55');
        $('#b6').attr('id', 'b66');
        $('#b7').attr('id', 'b77');
        $('#b11').animate({top: 240, left: vw - 350}, 500);
        $('#b22').animate({top: 240, left: vw - 250}, 500);
        $('#b33').animate({top: 240, left: vw - 150}, 500);
        $('#b44').animate({top: 240, left: vw - 50}, 500);
        $('#b55').animate({top: 240, left: vw + 50}, 500);
        $('#b66').animate({top: 240, left: vw + 150}, 500);
        $('#b77').animate({top: 240, left: vw + 250}, 500);
        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function() {
        $(this).fadeOut('slow'); // Fade out the story element
        $('.cake').fadeOut('fast').promise().done(function() {
            $('.message').fadeIn('slow'); // Show the message area

            var paragraphs = $('p'); // Select all paragraphs
            var index = 0; // Start with the first paragraph

            function showNextParagraph() {
                if (index < paragraphs.length) {
                    // Fade in the current paragraph, wait for 1 second, then fade out
                    $(paragraphs[index])
                        .fadeIn('slow') // Show the current paragraph
                        .delay(1000) // Wait for 1 second
                        .fadeOut('slow', function() { // Fade out the current paragraph
                            index++; // Move to the next paragraph
                            showNextParagraph(); // Show the next paragraph
                        });
                } else {
                    // Call showButtons only if they haven't been added yet
                    if ($('.message').find('#buttonYes').length === 0) {
                        showButtons(); // Once all paragraphs are shown, display buttons
                    }
                }
            }

            // Function to display the "Yes" and "No" buttons after the last message
function showButtons() {
    // Create the "Yes" and "No" buttons dynamically
    var buttonYes = $('<a href="https://wa.me/212649879970?text=hiiyoo%20msali%20kri%20tbh" target="_blank"><button">Yes</button></a>');
    var buttonNo = $('<button id="buttonNo">No</button>');

// Updated CSS for "Yes" button
buttonYes.css({
    'margin-right': '10px',
    'background-color': '#ff69b4',  // Pink background
    'color': 'white',               // White text
    'border': 'none',
    'border-radius': '25px',
    'cursor': 'pointer',
    'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
    'font-family': '"Comic Sans MS", cursive, sans-serif',
    'font-size': '16px',
    'transition': 'transform 0.2s',
    'display': 'inline-flex',       // Use flexbox to center text
    'align-items': 'center',        // Center vertically
    'justify-content': 'center',    // Center horizontally
    'width': '60px',                // Set fixed width (adjust as needed)
    'height': '40px'                // Set fixed height (adjust as needed)
});

// Ensure the <a> tag has no extra padding or styling
$('a').css({
    'text-decoration': 'none',      // Remove underline
    'padding': '0',
    'margin': '0',
});

    

    buttonNo.css({
        'padding': '10px 20px',
        'background-color': '#dda0dd', // Light purple for "No"
        'color': 'white',
        'border': 'none',
        'border-radius': '25px',
        'cursor': 'pointer',
        'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'font-family': '"Comic Sans MS", cursive, sans-serif',
        'transition': 'transform 0.2s',
        'display': 'inline-block'
    });

    // Append buttons after the message section
    $('.message').append(buttonYes).append(buttonNo);

    // Center the message container and buttons
    $('.message').css({
        'text-align': 'center',   // Center text and buttons
        'position': 'fixed',      // Fixed positioning
        'top': '50%',             // Vertically center
        'left': '50%',            // Horizontally center
        'transform': 'translate(-50%, -50%)', // Adjust for centering
        'width': '100%',          // Full width container
    });

    // Add actions to the "No" button
    $('#buttonNo').click(function() {
        displayCenteredMessage('Okey', '#dda0dd');
        buttonYes.fadeOut('slow'); // Fade out the Yes button
        buttonNo.fadeOut('slow'); // Fade out the No button
    });
}

            // Start showing the paragraphs
            showNextParagraph();
        });
    });

    // Function to display a centered message with a specific color
    function displayCenteredMessage(message, color) {
        var messageDiv = $('<div class="message-text">' + message + '</div>');
        messageDiv.css({
            'position': 'fixed',
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)',
            'background-color': color,
            'padding': '20px',
            'border-radius': '10px',
            'color': 'white',
            'font-size': '20px',
            'text-align': 'center',
            'z-index': '9999'
        });
        $('body').append(messageDiv);
        messageDiv.fadeIn('slow').delay(3000).fadeOut('slow', function() {
            $(this).remove(); // Remove the message after fading out
        });
    }
});






