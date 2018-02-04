 $(document).ready(function(){
    $("button").click(function(){
        $("input").hide();
       $('body').append('<h1> Thank You ' + name + '</h1>');
    });
