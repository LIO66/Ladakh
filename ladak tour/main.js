var i=0;
   function read(){
   if(!i){
   document.getElementById("more").style.display="inline";
   document.getElementById("read").innerHTML="Read Less";
   i=1;
   }
   else
   {
   document.getElementById("more").style.display="none"
   document.getElementById("read").innerHTML="Read More";
   i=0;
   }
   }

   /* slick slider*/
   $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
     });

    
    
          
    