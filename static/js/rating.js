$(document).ready(function () {
  $("div.stars input[type=radio]").change(function () {
    var data = {"rating": $(this).val()}
    var rateURL = $(this).parent().attr('rate-url');
    if(!rateURL) {
      rateURL = $(this).parent().parent().attr('rate-url');
    }
    $.ajax({
      "type" : 'POST',
      "url" : rateURL,
      "data" : JSON.stringify(data),
      "contentType" : 'application/json',
      "dataType" : 'json'
    });
  })
});
