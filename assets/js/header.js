const $header = document.querySelector('header')

const headerFunc = () => {
    if (window.scrollY > 5) {
        $header.style.background = 'transparent';
        $header.style.boxShadow = '0px 0px';
        $header.style.opacity = '20%';
        $header.style.transition = '200ms';
    }
    else {
     $header.style.background = 'inherit';
     $header.style.boxShadow = '0px 10px 25px rgba(0, 0, 0, 0.05)';
     $header.style.opacity = '100%';
     $header.style.transition = '200ms';
    }
}

$header.addEventListener('mouseover', () => {
    $header.style.opacity = '100%';
})
$header.addEventListener('mouseleave', () => {
    if(window.scrollY > 5)
        $header.style.opacity = '20%';
})


window.addEventListener('scroll', headerFunc)

window.addEventListener('scroll', () => {
    const filter = document.querySelector('.filter');
    const banner = document.querySelector('.banner');
    banner.style.backgroundPositionY =  `${-window.scrollY*0.3}px`; 
    // console.log(window.innerHeight)
    // console.log(banner.style)
    filter.style.opacity = `${(window.scrollY/window.innerHeight*0.1)*100}%`; 
    
})
