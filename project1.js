<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>

  /*$('#contact-form').on('submit',
  function() {
    console.log('The form was submitted.');
    var name = $('#name').val();
    $(this).remove();
    $('body').append('<h1>Thank You" + name + '</h1>');
  }
);*/
   $(document).ready(function(){
    $("button").click(function(){
        $("input").hide();
       $('body').append('<h1>Thank You" + name + '</h1>');
    });
</script>
