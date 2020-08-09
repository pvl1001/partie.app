
let logo = document.getElementById('logo')
let btnPlatforms = document.getElementById('btnPlatforms')

let signUpPage = document.querySelector('.sign-up')
let logInCode = document.querySelector('.logIn__code')
let logInPlatforms = document.querySelector('.logIn__platforms')
let logInIn = document.querySelector('.logIn__in')
let resetPass = document.querySelector('.logIn__reset-pass')
let checkEmail = document.querySelector('.logIn__check-email')

let arrPlatforms = document.querySelectorAll('.logIn__platforms-platforms input')


document.addEventListener('DOMContentLoaded', function () {

    function logoTest() { // анимицаия лого
        logo.style.transform = 'translateY(0)'
        logo.style.transition = '1s'
    }
    setTimeout(logoTest, 3000)


    let arrChecked = [] // появление кнопки platforms continue
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

setTimeout(function () { // анимация появления bg
    let arrBgAnimate = document.querySelectorAll( '.bg-animate' )
    for(let bgAnimate of arrBgAnimate)
    bgAnimate.style.cssText = 'opacity: 1'
},3000)

let arrShowAll = document.querySelectorAll('#showAll')
let arrBtnApple = document.querySelectorAll('#btnApple')
let arrBtnGoogle = document.querySelectorAll('#btnGoogle')
let arrBtnFacebook = document.querySelectorAll('#btnFacebook')
let arrBtnContainer = document.querySelectorAll('#btnContainer')


for (let i = 0; i < arrShowAll.length; i++) {
    let showAll = arrShowAll[i]
    let btnApple = arrBtnApple[i]
    let btnGoogle = arrBtnGoogle[i]
    let btnFacebook = arrBtnFacebook[i]
    let btnContainer = arrBtnContainer[i]
    function showAllTest() { // анимация кнопок на стартовой
        btnContainer.style.height = '176px'
        btnContainer.style.transition = '1s'
        showAll.classList.add('hidden')
        btnApple.style.marginBottom = '10px'
        btnGoogle.style.display = 'block'
        btnGoogle.classList.add('animate__fadeInUp')
        btnFacebook.style.display = 'block'
        btnFacebook.classList.add('animate__fadeInUp')
    }
    showAll.addEventListener('click', showAllTest)
}








