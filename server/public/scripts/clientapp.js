$(document).ready( function () {
  var calculator = {
    x = undefined;
    y = undefined;
    operation = undefined;
    answer = undefined;
  }

  $('#submit').on('click', function(){ //press the equals button on calculator
    event.preventDefault();

  $.each($("#x").serializeArray(), function (i, field) {
    calculator.x = field.value;
    sendCalc(calculator.x);
  });

  $.each($("#y").serializeArray(), function (i, field) {
    calculator.y = field.value;
    sendCalc(calculator.y);
  });
}


    $.ajax({
      type: 'POST',
      url: '/routes/' + calculator.operation,
      data: val,
      success: function (data) {
        $('h1')
        console.log(data);
      }
    })

function updateDOM (result) {
$('#answer').text(result.answer);
}


});
