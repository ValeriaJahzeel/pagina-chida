/* Barra de navegacion */
function openNav() {
     document.getElementById("mySidepanel").style.width = "250px";
   }
   
   function closeNav() {
     document.getElementById("mySidepanel").style.width = "0";
   }

 
   
   $(window).scroll(function(){
       if ($(window).scrollTop() >= 300) {
           $('nav').addClass('fixed-header');
           $('nav div').addClass('visible-title');
       }
       else {
           $('nav').removeClass('fixed-header');
           $('nav div').removeClass('visible-title');
       }
   });