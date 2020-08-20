let headerScroll = document.querySelector('.feed__header.scroll')

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    console.log(scrollTop);

    if(scrollTop >= 300){
        headerScroll.style.top = '0'
    } else {
        headerScroll.style.cssText = ''
    }
});

