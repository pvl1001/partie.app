
let signUpPage = document.querySelector('.sign-up')
let logInCode = document.querySelector('.logIn__code')
let logInPlatforms = document.querySelector('.logIn__platforms')
let logInIn = document.querySelector('.logIn__in')
let resetPass = document.querySelector('.logIn__reset-pass')
let checkEmail = document.querySelector('.logIn__check-email')
let arrlogInMenu = document.querySelectorAll('.logIn__menu')



document.addEventListener('DOMContentLoaded', function () {

    function logoAnimate() { // анимицаия лого
        let arrBgAnimate = document.querySelectorAll( '.bg-animate' )
        let logo = document.getElementById('logo')
        for(let bgAnimate of arrBgAnimate)
            bgAnimate.style.cssText = 'opacity: 1'
        for(let logInMenu of arrlogInMenu)
            logInMenu.style.height = '260px'
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


@@include( '_loginButtons.js' )
@@include( '_bgAnimation.js' )
