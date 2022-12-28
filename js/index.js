var typed = new Typed('.typed', {
    strings: ['Simone Olivia', 'a Freelancer','a Photographer','a Designer'],
    typeSpeed:115,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,

    
  });

  new WOW().init();


  let homebtn=$('.homebtn').offset().top
$(window).scroll(function(){
if($(window).scrollTop()>homebtn){
$('.about-title h2').addClass('bounce');
$('.about-title .line').addClass('swing');


let count1 = document.getElementById('counter1');
let count2 = document.getElementById('counter2');
let count3 = document.getElementById('counter3');
let count4 = document.getElementById('counter4');

function counterAnimation(counterNum, start, end, duration){
    let startTimestamp = null;
    function step(timestamp){
        if(!startTimestamp ){
            startTimestamp = timestamp;
        }
        let progress = Math.min((timestamp - startTimestamp) / duration, 1);
        counterNum.innerText = Math.floor(progress * (end - start) + start);
        if(progress < 1){
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

counterAnimation(count1, 0, 10, 2000)
counterAnimation(count2, 0, 250, 3000)
counterAnimation(count3, 0, 650, 3000)
counterAnimation(count4, 0, 38, 2000)


}
})
let navchange=$('.homebtn').offset().top
$(window).scroll(()=>{
if($(window).scrollTop()>navchange){
    $('.color').addClass('f-color')
    $('.navbar').css({'backgroundColor':'black','transition':'2s'})

}else{
    $('.nav-link').removeClass('f-color')
    $('.navbar').css({'backgroundColor':'transparent','transition':'2s'})
}
})


let aboutitem =$('.about-item').offset().top
$(window).scroll(()=>{
if($(window).scrollTop()>aboutitem){

    
    $('.services-title h2').addClass('bounce');
    $('.services-title .line').addClass('swing');

}
})
let lastitem =$('.lastitem').offset().top
$(window).scroll(()=>{
if($(window).scrollTop()>lastitem){
    $('.Resume-title h2').addClass('bounce');
    $('.Resume-title .line').addClass('swing');

}
})
let carousel =$('.carousel').offset().top
$(window).scroll(()=>{
if($(window).scrollTop()>carousel){
    $('.Portfolio-title h2').addClass('bounce');
    $('.Portfolio-title .line').addClass('swing');

}
})
let lastclient =$('.last-client').offset().top
$(window).scroll(()=>{
if($(window).scrollTop()>lastclient){
    $('.Contact-title h2').addClass('bounce');
    $('.Contact-title .line').addClass('swing');

}
})
let lastimg =$('.img-last-portfolio').offset().top
$(window).scroll(()=>{
if($(window).scrollTop()>lastimg){
    $('.client-title h2').addClass('bounce');
    $('.client-title .line').addClass('swing');
    $('.one').fadeIn(1000)}
    $('.two').fadeIn(1000)
    $('.three').fadeIn(1000)
    $('.four').fadeIn(1000)
    })



$(document).ready(()=>{
    $('#loading').fadeOut(2500,()=>{
        $('body').css('overflow','visible')
    })
})