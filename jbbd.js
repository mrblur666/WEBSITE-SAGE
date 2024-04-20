
function firstpageAnime() {
    var ll = gsap.timeline();

    ll.from("#nav", {
        y: '-12',
        opacity: 0,
        duration:1.5,
        ease: Expo.eseInOut
    })
    ll.to(".boundingelem", {
        y: '0',
        duration:1.5,
        ease: Expo.eseInOut,
        stagger: .2
    })

    ll.from("#trd", {
        y: '-10',
        opacity: 0,
        duration:1.8,
        ease: Expo.eseInOut
    })




}

firstpageAnime();