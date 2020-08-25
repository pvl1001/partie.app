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
let newPost = document.querySelector('#newPost')
let chooseGame = document.querySelector('#chooseGame')
let profileProgress = document.querySelector('#profileProgress')
let levelProgress = document.querySelector('#levelProgress')
let applyPartner = document.querySelector('#applyPartner')
let editProfile = document.querySelector('#editProfile')
let hostPartie = document.querySelector('#hostPartie')
let hostPlatform = document.querySelector('#hostPlatform')
let gametrag = document.querySelector('#gametrag')
let gametragPlatform = document.querySelector('#gametragPlatform')
let addGametrag = document.querySelector('#addGametrag')
let hostLiveShow = document.querySelector('#hostLiveShow')
let additionalSettings = document.querySelector('#additionalSettings')
let removeUser = document.querySelector('#removeUser')
let titleModal = document.querySelector('#titleModal')
let editPartie = document.querySelector('#editPartie')
let partieReport = document.querySelector('#partieReport')
let ratingPartie = document.querySelector('#ratingPartie')
let titleModalStart = document.querySelector('#titleModalStart')
let arrHeaderMenuMenu = document.querySelectorAll('.header__menu_menu')
let arrlogInMenu = document.querySelectorAll('.logIn__menu')
let arrModalWrapp = document.querySelectorAll( '.modal-wrapp' )
let arrFeedHeaderMenu = document.querySelectorAll( '.feed__header_menu' )

document.addEventListener('DOMContentLoaded', function () {

    $( '.slider' ).slick( {
        autoplay: true,
        autoplaySpeed: 4000,
        delay: 5000,
        speed: 700,

        slidesToShow: 10,
        slidesToScroll: 5,
        infinite: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    } )

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
        if (open === addCreditCard || open === subscriptionModal) {
            open.style.left = '0'
            close.style.left = ''
            closeModal(checkEmail)
        } else {
            openModal(open)
            closeModal(close)
        }


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

function back(close, open) { // кнопка назад
    if (window.innerWidth > 767) { // pc
        if (open === subscriptionModal) {
            open.style.left = '0'
            close.style.left = ''
        } else {
            closeModal( close )
            openModal( open )
        }
    }
    if (window.innerWidth <= 767) { // mobile
        close.children[0].style.left = '100%'
        open.children[0].style.left = '0'
    }
}

function openModal(modal) { // modal

    if (window.innerWidth > 767) { //pc
        modal.style.top = '0'
        modal.style.backgroundColor = 'rgba(20,20,20,0.8)'

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
    modal.style.cssText = ''
    modal.style.transitionProperty = 'background-color, top'
    modal.style.transitionDuration = '.4s, .5s'
    modal.style.transitionDelay = '0s, .2s'
    setTimeout(function () {
        modal.style.cssText = ''
    },300)
}

for (let modalWrapp of arrModalWrapp) { // close modal target
    modalWrapp.onclick = function (e) {
        if (e.target === modalWrapp) {
            modalWrapp.style.cssText = ''
            modalWrapp.style.transitionProperty = 'background-color, top'
            modalWrapp.style.transitionDuration = '.4s, .5s'
            modalWrapp.style.transitionDelay = '0s, .2s'
            setTimeout(function () {
                modalWrapp.style.cssText = ''
            },300)
        }
    }
}

for (let feedHeaderMenu of arrFeedHeaderMenu) {
    feedHeaderMenu.addEventListener( 'click', function () {
        this.style.backgroundColor = '#19181F'
        this.children[0].style.visibility = 'visible'
        this.children[0].style.opacity = '1'
    } )
}
let arrHeaderMenu = document.querySelectorAll('.header__menu_menu')
for(let headerMenu of  arrHeaderMenu) {
    window.addEventListener('click', function (e) {
        if(e.target === headerMenu.children[0]) {
            headerMenu.style.cssText = ''
            headerMenu.parentNode.style.cssText = ''
        }
    })
}


let shortcuts = document.querySelector('.shortcuts')
if(shortcuts !== null) {
    let onShortcuts
    let btnUp = document.querySelector('.btn-up')
    let bgClick = document.querySelector('.bg-click')
    let heightShortcuts = shortcuts.offsetHeight
    shortcuts.style.bottom = -heightShortcuts +40 +87 + 'px'

    function shortcutsUp() {
        onShortcuts = !onShortcuts
        if(onShortcuts) {
            shortcuts.style.bottom = '5px'
            btnUp.style.transform = 'rotateX(190deg)'
            bgClick.style.opacity = '1'
            bgClick.style.zIndex = '1'
        } else {
            shortcuts.style.bottom = -heightShortcuts +40 +87 + 'px'
            btnUp.style.transform = ''
            bgClick.style.cssText = ''
        }
    }
}



// open reply comment
// let reply = document.querySelectorAll('.reply')
// let commentReply = document.querySelectorAll('.comments__reply')
// for (let i = 0; i < reply.length; i++) {
//     let el = reply[i]
//     let el2 = commentReply[i]
//     console.log(el, el2)
//     el.addEventListener('click', function () {
//         el2.style.display = 'flex'
//     })
// }

// function reply(el) {
//     let reply = el.parentNode.parentElement.parentElement.parentElement.children[4]
//     console.log(reply)
    // reply.style.display = 'flex'

    // let name = el.parentNode.parentElement.children[1].outerText
    // reply.children[1].setAttribute('value', '@' + name + ' ')
// }

// Targets all textareas with class "txta"
// let textareas = document.querySelectorAll('.txta'),
//     hiddenDiv = document.createElement('div'),
//     content = null;
// for (let j of textareas) {
//     j.classList.add('txtstuff');
// }
// hiddenDiv.classList.add('txta');
// hiddenDiv.style.display = 'none';
// hiddenDiv.style.whiteSpace = 'pre-wrap';
// hiddenDiv.style.wordWrap = 'break-word';
//
// for(let i of textareas) {
//     (function(i) {
//         i.addEventListener('input', function() {
//             i.parentNode.appendChild(hiddenDiv);
//             i.style.resize = 'none';
//             i.style.overflow = 'hidden';
//             content = i.value;
//             content = content.replace(/\n/g, '<br>');
//             hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';
//             hiddenDiv.style.visibility = 'hidden';
//             hiddenDiv.style.display = 'block';
//             i.style.height = hiddenDiv.offsetHeight + 'px';
//             hiddenDiv.style.visibility = 'visible';
//             hiddenDiv.style.display = 'none';
//         });
//     })(i);
// }

@@include( 'slick.min.js' )
@@include( '_loginButtons.js' )
@@include( 'feed.js' )
@@include( 'profile.js' )
@@include( 'partie.js' )
