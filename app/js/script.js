let signUpPage = document.querySelector('.sign-up')
let logInCode = document.querySelector('.logIn__code')
let logInPlatforms = document.querySelector('.logIn__platforms')
let logInIn = document.querySelector('.logIn__in')
let resetPass = document.querySelector('.logIn__reset-pass')
let checkEmail = document.querySelector('.logIn__check-email')
let header = document.querySelector('.header')
let salutation = document.querySelector('.salutation')
let body = document.querySelector('body')
let arrlogInMenu = document.querySelectorAll('.logIn__menu')
let arrBgShow = document.querySelectorAll( '#bgShow' )


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
                if(window.innerWidth > 767) {
                    btnPlatforms.style.zIndex = ''
                    logInPlatforms.style.backgroundColor = 'transparent'
                }

            } else {
                btnPlatforms.classList.remove('animate__fadeInUp')
                btnPlatforms.classList.add('animate__fadeOutDown')
                if(window.innerWidth > 767) {
                    btnPlatforms.style.zIndex = '-1'
                    logInPlatforms.style.backgroundColor = ''
                }
            }
        })
    }

})

function next(open, close) { // кнопка далее
    open.style.left = '0'
    setTimeout(function () {
        close.style.left = '100%'
    }, 500)
    for(let bgShow of arrBgShow)
        bgShow.style.cssText = ''
    header.style.opacity = '0'
    salutation.style.display = 'none'
    body.style.background = '#000'
}

function back(page) { // кнопка назад
    page.style.left = '100%'
}

function openModal(modal) { // modal
    modal.classList.add( 'modal' )

    for(let bgShow of arrBgShow) {
        bgShow.style.cssText = 'opacity: 0.6; z-index: 0;'
        bgShow.addEventListener( 'click', function () {
            modal.classList.remove( 'modal' )
            for(let bgBtnContainerShow of arrBgBtnContainerShow)
                bgBtnContainerShow.style.cssText = ''
        })
    }
}
function closeModal(modal) {
    modal.classList.remove( 'modal' )
    for(let bgBtnContainerShow of arrBgBtnContainerShow)
    bgBtnContainerShow.style.cssText = ''
}


@@include( '_loginButtons.js' )
@@include( '_bgAnimation.js' )
