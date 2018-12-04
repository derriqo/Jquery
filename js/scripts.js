 $(document).ready(function(){
   $("span#dark").click(function(){
     $("body").removeClass();
     $("body").addClass("dark-theme");
      $("#initialy-dark").show();
       $("#initialy-clear").hide();
   });
   $("span#light").click(function(){
     $("body").removeClass();
     $("body").addClass("light-theme");
     $("#initialy-dark").hide();
      $("#initialy-clear").show();
   });

   // $("clickable").click(function(){



   // });
 });
// jQuery(document).ready(function() {
//   jQuery("h1").click(function() {
//     alert("This is a header.");
//     alert("I told you, THIS IS A HEADER!");
//   });
//
//   jQuery("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   jQuery("img").click(function() {
//     alert("This is an image.");
//   });
// });
