gsap.registerPlugin(ScrollTrigger)
const timeline = gsap.timeline();


timeline.from("nav",{opacity:0 ,duration:1.2});
timeline.from(".hero__text",{x:"-400%" , opacity:0 ,duration:1},"<.5");
timeline.from(".hero__image",{x:"400%" , opacity:0 ,duration:1},"<.2");

ScrollTrigger.matchMedia({

  "(min-width:800px)":function(){


    gsap.from(".article__grid" , {
      opacity:"0",
      duration:1,
      scrollTrigger:{
      trigger:".article__content",  
      toggleActions:" play  reverse  reset  reset",
      start:" 300px top",
      end:"bottom bottom",
      markers:false,
      }
    }
      ),

      gsap.from(".feature__item",{
        opacity:"0",
        duration:.5,
        scrollTrigger:{
          trigger:".feature__content",
          toggleActions:" play  reverse  reset  reset",
          markers:false,
          start:"top 200px",
          end:"bottom bottom"
        }
       


      })
  }

  


  

})

  

