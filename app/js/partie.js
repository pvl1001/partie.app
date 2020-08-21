let headerScroll = document.querySelector('.feed__header.scroll')
if(headerScroll !== null)
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    if(scrollTop >= 300){
        headerScroll.style.top = '0'
    } else {
        headerScroll.style.cssText = ''
    }
});

