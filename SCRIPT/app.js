var navbar=document.getElementById('navigation');

window.addEventListener('scroll',function(){

    if(window.pageYOffset > 0){

            navbar.classList.add('cusMenu');
          
            
    
    }else{
        navbar.classList.remove('cusMenu');
        navbar.removeAttribute('data-aos');
        
    }
});





  AOS.init();

    AOS.init({
        duration: 200, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true,
    });
  