
let signUpPage = document.querySelector('.sign-up')
let logInCode = document.querySelector('.logIn__code')
let logInPlatforms = document.querySelector('.logIn__platforms')
let logInIn = document.querySelector('.logIn__in')
let resetPass = document.querySelector('.logIn__reset-pass')
let checkEmail = document.querySelector('.logIn__check-email')



document.addEventListener('DOMContentLoaded', function () {

    function logoAnimate() { // анимицаия лого
        let arrBgAnimate = document.querySelectorAll( '.bg-animate' )
        let logo = document.getElementById('logo')
        for(let bgAnimate of arrBgAnimate)
            bgAnimate.style.cssText = 'opacity: 1'
        logo.style.transform = 'translateY(0)'
        logo.style.transition = '1s'
    }
    setTimeout(logoAnimate, 3000)


    let arrChecked = [] // появление кнопки platforms continue
    let arrPlatforms = document.querySelectorAll('.logIn__platforms-platforms input')
    let btnPlatforms = document.getElementById('btnPlatforms')
    for(let platform of arrPlatforms) {
        platform.addEventListener('change', function () {
            if(platform.checked) {
                arrChecked.push('')
            } else { arrChecked.pop() }
            if(arrChecked.length > 0) {
                btnPlatforms.style.display = 'block'
                btnPlatforms.classList.remove('animate__fadeOutDown')
                btnPlatforms.classList.add('animate__fadeInUp')
                btnPlatforms.style.zIndex = ''
            } else {
                btnPlatforms.classList.remove('animate__fadeInUp')
                btnPlatforms.classList.add('animate__fadeOutDown')
                btnPlatforms.style.zIndex = '-1'
            }
        })
    }

})

function next(page) {
    page.style.left = '0'
}

function back(page) {
    page.style.left = '100%'
}


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








