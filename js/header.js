$(document).ready(function(){
  $(".submit").click(function(){
    var textvalue=$('.url').val();
    console.log(textvalue);
    geturl= $.ajax({
      type: 'POST',
      url:textvalue,
      success: function() {
        console.log(geturl.getAllResponseHeaders());
        $(".list_headers").append("<br>"+geturl.getAllResponseHeaders());
      }
    });
  });
});