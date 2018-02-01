
$('#contact-form').on('submit',
  function() {
    console.log('The form was submitted.');
    var name = $('#name').val();
    $(this).remove();
    $('body').append('<h1>Thank You" + name + '</h1>');
  }
);
