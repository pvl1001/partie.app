let signUpPage = document.querySelector('#signUpPage')
let logInCode = document.querySelector('#logInCode')
let logInPlatforms = document.querySelector('#logInPlatforms')
let logInIn = document.querySelector('#logInIn')
let resetPass = document.querySelector('#resetPass')
let checkEmail = document.querySelector('#checkEmail')
let header = document.querySelector('.header')
let salutation = document.querySelector('.salutation')
let body = document.querySelector('body')
let addCreditCard = document.querySelector('#addCreditCard')
let subscriptionModal = document.querySelector('#subscriptionModal')


let arrlogInMenu = document.querySelectorAll('.logIn__menu')
let arrModalWrapp = document.querySelectorAll( '.modal-wrapp' )


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
                    logInPlatforms.children[0].style.backgroundColor = 'transparent'
                }

            } else {
                btnPlatforms.classList.remove('animate__fadeInUp')
                btnPlatforms.classList.add('animate__fadeOutDown')
                if(window.innerWidth > 767) { //pc
                    btnPlatforms.style.zIndex = '-1'
                    logInPlatforms.children[0].style.backgroundColor = ''
                }
            }
        })
    }

})

function next(open, close) { // кнопка далее

    if (window.innerWidth <= 767) { // mobile
        open.children[0].style.left = '0'
        setTimeout(function () {
            close.style.top = '-200%'
        }, 500)
    }

    if (window.innerWidth > 767) { // pc
        open.style.top = '0'
        close.style.top = ''
        if (open === logInCode || open === logInPlatforms) open.children[0].style.left = '0'
        setTimeout(function () {
            if (close === logInCode) {
                close.children[0].style.left = '100%'
                header.style.opacity = '0'
                salutation.style.visibility = 'hidden'
                body.style.background = '#000'
            } else {
                close.children[0].style.left = ''
                header.style.opacity = ''
                salutation.style.visibility = ''
                body.style.background = ''
            }
        }, 500)

        if(open === logInIn) {
            header.style.opacity = ''
            body.style.background = ''
            salutation.style.visibility = ''
            close.style.left = '100%'
            openModal(open)
        }

    }
}

function back(page) { // кнопка назад
    if (window.innerWidth > 767) { // pc
        page.style.top = '-200%'
    }
    if (window.innerWidth <= 767) { // mobile
        page.children[0].style.left = '100%'
    }
}


function openModal(modal) { // modal

    if (window.innerWidth > 767) { //pc
        modal.style.top = '0'

        if (modal === resetPass) {
            logInIn.style.top = ''
        }
    }

    if (window.innerWidth <= 767) { // mobile
        if (modal === resetPass) {
            next(modal)
        }
    }
}

function closeModal(modal) {
    modal.style.top = ''
}

for (let modalWrapp of arrModalWrapp) { // close modal target
    modalWrapp.onclick = function (e) {
        if (e.target === modalWrapp) {
            modalWrapp.style.top = ''
        }
    }
}


let arrShowAll = document.querySelectorAll('#showAll')
let arrBtnSocial = document.querySelectorAll('#btnSocial')
let arrBtnContainerWrapp = document.querySelectorAll('.btn-container-wrapp')


for (let i = 0; i < arrShowAll.length; i++) {
    let showAll = arrShowAll[i]
    let btnContainerWrapp = arrBtnContainerWrapp[i]
    let btnSocial = arrBtnSocial[i]

    function showAllBtns() { // анимация кнопок на стартовой
        if (window.innerWidth <= 767) { // mobile
            btnContainerWrapp.style.top = '0'
            btnSocial.classList.remove( 'animate__fadeOutDownBig' )
            btnSocial.classList.add( 'animate__fadeInUp' )
            btnSocial.style.cssText = 'z-index: 0; display: block;'
        }
        else { // pc
            for(let i = 0; i < arrShowAll.length; i++){
                let showAll = arrShowAll[i]
                for(let logInMenu of arrlogInMenu) logInMenu.style.height = 'auto'
                showAll.style.display = 'none'
                btnContainerWrapp.style.top = '0'
                btnSocial.classList.remove( 'animate__fadeOutDownBig' )
                btnSocial.classList.add( 'animate__fadeInUp' )
                btnSocial.style.cssText = 'z-index: 0; display: block;'
            }
        }
    }

    function showAllBtnsOff() {
        btnContainerWrapp.style.top = ''
        btnSocial.classList.add('animate__fadeOutDownBig')
        btnSocial.classList.remove('animate__fadeInUp')
    }

    btnContainerWrapp.addEventListener( 'click', function(e) {
        if (e.target === btnContainerWrapp) {
            showAllBtnsOff()
        }
    })

}


function hiddenPeople() {
let people = document.querySelector('.feed__col3 > div')
let feedHeader = document.querySelector('.feed__col3 .feed__header')
let peopleBtn = document.querySelector('.feed__people-btn')

    if(people.style.transform !== '') {
        people.style.transform = ''
        feedHeader.style.opacity = ''
        peopleBtn.style.transform = ''
    } else {
        people.style.transform = 'translateX(220px)'
        feedHeader.style.opacity = '0'
        peopleBtn.style.transform = 'rotateY(180deg)'

    }
}


let textarea = document.querySelector( 'textarea' )
let feedWhatNewRow = document.querySelector( '.feed__what-new_row' )
let photo1 = document.querySelector( 'label[for=photo-1]' )
let feedWhatNewHead = document.querySelector( '.feed__what-new_head' )

textarea.addEventListener( 'focus', function () {
    feedWhatNewRow.style.display = 'flex'
    photo1.style.display = 'none'
    textarea.style.width = '100%'
    textarea.style.order = '1'
    textarea.style.height = 'auto'
    textarea.style.marginTop = '12px'
    feedWhatNewHead.style.flexWrap = 'wrap'
} )

function isNewComment() {
    let newComment = document.querySelector('#newComment')
    let newCommentBtn = document.querySelector('#newCommentBtn')
    if (newComment.value.length) {
        newCommentBtn.style.visibility = 'visible'
    } else {
        newCommentBtn.style.visibility = ''
    }
// alert()
}

