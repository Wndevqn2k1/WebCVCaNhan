var loader = document.getElementById("loading-web");

var tb = setInterval(function (){
  $( "#loading-web" ).fadeOut( "slow", function() {
    loader.style.display="none";
  });
}, 2000);
// Dung setInterval để làm chậm chức năng
