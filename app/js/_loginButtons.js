let arrShowAll = document.querySelectorAll('#showAll')
let arrBgBtnContainerShow = document.querySelectorAll('.bg-btn-container-show')
let arrBtnSocial = document.querySelectorAll('#btnSocial')


for (let i = 0; i < arrShowAll.length; i++) {
    let showAll = arrShowAll[i]
    let bgBtnContainerShow = arrBgBtnContainerShow[i]
    let btnSocial = arrBtnSocial[i]

    console.log(arrBgBtnContainerShow)

    function showAllBtns() { // анимация кнопок на стартовой
        bgBtnContainerShow.style.cssText = 'opacity: 0.6; z-index: 0;'
        btnSocial.classList.add('animate__fadeInUp')
        btnSocial.classList.remove('animate__fadeOutDownBig')
        btnSocial.style.cssText = 'z-index: 0; display: block;'
    }

    function showAllBtnsOff() {
        bgBtnContainerShow.style.cssText = ''
        btnSocial.classList.remove('animate__fadeInUp')
        btnSocial.classList.add('animate__fadeOutDownBig')
        btnSocial.style.cssText = 'z-index: 0;'
        setTimeout(function () {
            btnSocial.style.cssText = 'display: none;'
        },300)
    }

    showAll.addEventListener( 'click', showAllBtns )
    bgBtnContainerShow.addEventListener( 'click', showAllBtnsOff )
}

