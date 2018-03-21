$(document).ready(function() {
  
  //FUNCTION THAT SETS TRANSITION SPEED FOR COLOR CHANGE
  var transition = function() {
    document.getElementById("quotePage").style.transition = "all 3s";
    document.getElementById("quoteWell").style.transition = "all 5s";
}
  
  //FUNCTION THAT CHANGES BACKGROUND TO RANDOM COLOR
  var changeBackground = function() {
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
    backgroundRGB = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById("quotePage").style.backgroundColor = backgroundRGB;
  }
   //FUNCTION THAT LOADS QUOTE FROM API
  var loadquote = function() {
    $.ajax({
            type: "GET",
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10",
            data: {},
            dataType: 'json',
            success: function(data) {
            //DISPLAY RANDOM QUOTE
            $("#quote").html('"' + data.quote + '"');
            $("#quoteAuth").html('&mdash;' + ' ' + data.author);
            $('#twitButt').attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + data.quote + '"' + ' ' + ' ' + ' ' + ' \u2014' + ' ' + data.author).attr('target', '_blank');
            },
            error: function(err) { alert("Internet Disconnected!"); },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "ZaFxoYQvJ6mshaokiGPYaAOVyN66p1mRmjDjsnu7m3tT1lLzkV");
            }
    });
};
  transition();
  loadquote();
  
  changeBackground();
  //ON BUTTON CLICK
  $("#getQuote").on("click", function() {
    transition();
    loadquote();
    
    changeBackground();
  });
  $("#twitButt").on("click", function() {

  });
});
