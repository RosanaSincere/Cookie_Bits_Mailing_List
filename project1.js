 window.onload = function() {

    alert( "connected" );
    $('#myform')[0].reset();
};

$(document).ready(function(){
    $("button").click(function(){
        $("ol").hide();
       $('body').append('<h1> Thank You ' + name + '</h1>');
       $('body').append('<h1> Confirm your email for a special treat! </h1>');
    });
 });
