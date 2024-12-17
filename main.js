document.querySelector(".sm3").addEventListener('click', () => {
    gsap.to('.circle', {
        rotate: '50deg',
        duration: .5
    });
    gsap.to('.sm2', {
        scale: 1,
        backgroundColor: '#1c1c1c',
        duration: .5
    });
    gsap.to('.sm3', {
        scale: 8,
        backgroundColor: 'transparent',
        rotate: '-50deg',
        duration: .5
    });
    gsap.to('.sm1', {
        scale: 1,
        backgroundColor: '#1c1c1c',
        rotate: '-50deg',
        duration: .5
    });

    gsap.to('.img', {
        scale: 0,
        duration: .5
    });
    gsap.to('.img3', {
        scale: 1,
        duration: .5,
        delay: .2,
    });
    document.querySelector('.slide-index p').textContent = '03';
});

document.querySelector(".sm2").addEventListener('click', () => {
    gsap.to('.circle', {
        rotate: 0,
        duration: .5
    });
    gsap.to('.sm2', {
        scale: 8,
        backgroundColor: 'transparent',
        duration: .5
    });
    gsap.to('.sm3', {
        scale: 1,
        backgroundColor: '#1c1c1c',
        rotate: '-50deg',
        duration: .5
    });
    gsap.to('.sm1', {
        scale: 1,
        backgroundColor: '#1c1c1c',
        rotate: '-50deg',
        duration: .5
    });

    gsap.to('.img', {
        scale: 0,
        duration: .5
    });
    gsap.to('.img2', {
        scale: 1,
        duration: .5,
        delay: .2,
    });
    document.querySelector('.slide-index p').textContent = '02';
});

document.querySelector(".sm1").addEventListener('click', () => {
    gsap.to('.circle', {
        rotate: '-50deg',
        duration: .5
    });

    gsap.to('.sm1', {
        scale: 8,
        rotate: '50deg',
        backgroundColor: 'transparent',
        duration: .5
    });

    gsap.to('.sm2', {
        scale: 1,
        backgroundColor: '#1c1c1c',
        duration: .5
    });

    gsap.to('.img', {
        scale: 0,
        duration: .5
    });
    gsap.to('.img1', {
        scale: 1,
        duration: .5,
        delay: .2,
    });
    document.querySelector('.slide-index p').textContent = '01';
});