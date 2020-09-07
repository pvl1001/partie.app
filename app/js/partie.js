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


let arrUser = document.querySelectorAll('.message__user_user-name')
let arrWindow = document.querySelectorAll('.message .user-window')
let arrClosePlace = document.querySelectorAll('.user-window .close-place')

for(let i = 0; i < arrUser.length; i++){
    let user = arrUser[i]
    let window = arrWindow[i]
    let closePlace = arrClosePlace[i]
    user.addEventListener('click', function () {
        window.style.opacity = '1'
        window.style.visibility = 'visible'
    })
    closePlace.addEventListener('click', function () {
        window.style.opacity = ''
        window.style.visibility = ''
    })
}

function openMorePartie() {
    let moreWin = document.querySelector( '.more__win' )
    let closePlaceMore = document.querySelector( '.big-round-btn.more .close-place' )

    moreWin.style.visibility = 'visible'
    moreWin.style.opacity = '1'
    closePlaceMore.style.display = 'block'

    let test = moreWin.querySelectorAll( '.more__win_row ' )
    for (let el of test)
        el.addEventListener( 'click', function (e) {
            moreWin.style.cssText = ''
            closePlaceMore.style.display = ''
            e.stopPropagation()
        } )
    closePlaceMore.addEventListener( 'click', function (e) {
        moreWin.style.cssText = ''
        closePlaceMore.style.display = ''
        e.stopPropagation()
    } )
}

function openMoreChats() {
    let moreWin = document.querySelector( '.more__win-chats' )
    let closePlaceMore = document.querySelector( '.big-round-btn.more .close-place.more__win-chats' )

    moreWin.style.visibility = 'visible'
    moreWin.style.opacity = '1'
    closePlaceMore.style.display = 'block'

    let test = moreWin.querySelectorAll( '.more__win_row' )
    for (let el of test)
        el.addEventListener( 'click', function (e) {
            moreWin.style.cssText = ''
            closePlaceMore.style.display = ''
            e.stopPropagation()
        } )
    closePlaceMore.addEventListener( 'click', function (e) {
        moreWin.style.cssText = ''
        closePlaceMore.style.display = ''
        e.stopPropagation()
    } )
}


let onClickStart
function clickStart() {
    onClickStart = !onClickStart
    let btnStart = document.querySelector( '.big-round-btn.start' )

    if (onClickStart) {
        btnStart.style.backgroundColor = '#F45365'
        btnStart.parentNode.children[1].innerHTML = 'End Partie'
    } else {
        btnStart.style.cssText = ''
        btnStart.parentNode.children[1].innerHTML = 'Start'
    }
}


let arrReportInput = document.querySelectorAll('#partieReport input')
let reportBtn = document.querySelector('#partieReport button')
for(let input of arrReportInput) {
    input.addEventListener('change', function () {
        reportBtn.removeAttribute('disabled')
        reportBtn.classList.remove('disabled')
        reportBtn.classList.add('bg-fiolet')
    })
}


function reportSubmitted() {
    let reportSubmitted = document.querySelector('.reportSubmitted')
    if(reportSubmitted !== null) {
        closeModal(partieReport)
        reportSubmitted.style.visibility = 'visible'
        reportSubmitted.style.opacity = '1'
        setTimeout(function () {
            reportSubmitted.style.cssText = ''
        },5000)
    }
}


let arrStar = document.querySelectorAll('.rating-area input')
let ratingPartieModal = document.querySelector('#ratingPartie .modal')
let btnSkip = document.querySelector('#btnSkip')
let star2 = document.querySelector('.star-2')
let star3 = document.querySelector('.star-3')
let star4 = document.querySelector('.star-4')
let star5 = document.querySelector('.star-5')
for(let star of arrStar) {
    star.addEventListener('change', function (e) {
        if(e.target.value <= '2') {
            star5.style.right = ''
            star4.style.right = ''
            star3.style.right = ''
            btnSkip.style.right = '110%'
            setTimeout(function () {
                if (window.innerWidth >= 1024) {
                    ratingPartie.style.background = 'linear-gradient(0deg, rgba(60,28,32,0.8) 0%, rgba(20,20,20,0.7091211484593838) 100%)'
                    ratingPartieModal.style.height = '379px'
                } else {
                    ratingPartie.style.background = 'rgba(244, 83, 101,.5)'
                    ratingPartieModal.style.height = '490px'
                }
                star2.style.right = '0'
                star5.style.position = 'absolute'
                star4.style.position = 'absolute'
                star3.style.position = 'absolute'
                star2.style.position = ''
            },300)
        }
        if (e.target.value === '3'){
            star5.style.right = ''
            star4.style.right = ''
            star2.style.right = ''
            btnSkip.style.right = '110%'
            setTimeout(function () {
                if (window.innerWidth >= 1024) {
                    ratingPartie.style.background = 'linear-gradient(0deg, rgba(42,24,45,0.8) 0%, rgba(20,20,20,0.7091211484593838) 100%)'
                    ratingPartieModal.style.height = '629px'
                } else {
                    ratingPartie.style.background = 'rgba(156, 66, 171,.5)'
                    ratingPartieModal.style.height = '490px'
                }
                star3.style.right = '0'
                star5.style.position = 'absolute'
                star4.style.position = 'absolute'
                star2.style.position = 'absolute'
                star3.style.position = ''
            },300)
        }
        if (e.target.value === '4'){
            star5.style.right = ''
            star3.style.right = ''
            star2.style.right = ''
            btnSkip.style.right = '110%'
            setTimeout(function () {
                if (window.innerWidth >= 1024) {
                    ratingPartie.style.background = 'linear-gradient(0deg, rgba(33,26,61,0.8) 0%, rgba(20,20,20,0.7091211484593838) 100%)'
                    ratingPartieModal.style.height = '629px'
                } else {
                    ratingPartie.style.background = 'rgb(110, 74, 255,.5)'
                    ratingPartieModal.style.height = '490px'
                }
                star4.style.right = '0'
                star5.style.position = 'absolute'
                star3.style.position = 'absolute'
                star2.style.position = 'absolute'
                star4.style.position = ''
            },300)
        }
        if (e.target.value === '5'){
            star4.style.right = ''
            star3.style.right = ''
            star2.style.right = ''
            btnSkip.style.right = '110%'
            setTimeout(function () {
                if (window.innerWidth >= 1024) {
                    ratingPartie.style.background = 'linear-gradient(0deg, rgba(61,58,36,0.8) 0%, rgba(20,20,20,0.7091211484593838) 100%)'
                    ratingPartieModal.style.height = '629px'
                } else {
                    ratingPartie.style.background = 'rgba(210, 200, 103,.6)'
                    ratingPartieModal.style.height = '490px'
                }
                star5.style.right = '0'
                star4.style.position = 'absolute'
                star3.style.position = 'absolute'
                star2.style.position = 'absolute'
                star5.style.position = ''
            },300)
        }
    })
}


function textareaWidth() {
    let text = document.querySelector('.textarea')
    if(text.value.length) {
        text.style.width = '100%'
    } else {
        text.style.width = ''
    }
}


let arrPostFooterBtn = document.querySelectorAll('.partie__post_footer button')
let onPostFooterBtn = []
for (let i = 0; i < arrPostFooterBtn.length; i++) {
    if (arrPostFooterBtn[i] !== null) {
        arrPostFooterBtn[i].addEventListener( 'click', function () {
            onPostFooterBtn[i] = !onPostFooterBtn[i]
            if (onPostFooterBtn[i]) {
                arrPostFooterBtn[i].style.backgroundColor = '#F45365'
                arrPostFooterBtn[i].innerHTML = 'Leave'
            } else {
                arrPostFooterBtn[i].style.backgroundColor = ''
                arrPostFooterBtn[i].innerHTML = 'Join'
            }
        } )
    }
}


let arrShortcutsBox = document.querySelectorAll('.shortcuts__box')
let box = document.querySelector('.shortcuts__box_menu')
for(let shortcutsBox of arrShortcutsBox) {
    if(shortcutsBox !== null && window.innerWidth >= 1024)
        shortcutsBox.onclick = function (e) {
        if(e.target === shortcutsBox) {
            box.style.top = e.pageY + 'px'
            box.style.left = e.pageX + 'px'
            box.style.display= 'block'
        }
        else box.style.display= ''
    }
    if (window.innerWidth <= 1023) {
        var longpress = false;
        var presstimer = null;

        var cancel = function(e) {
            if (presstimer !== null) {
                clearTimeout(presstimer)
                presstimer = null
            }
        }
        var click = function(e) {
            let closePlace = document.querySelector('.close-place')
            let span = document.querySelectorAll('.menu-wrapper span')
            if (e.target === closePlace || e.target === span[0] || e.target === span[1]) box.style.display= ''

            if (presstimer !== null) {
                clearTimeout(presstimer)
                presstimer = null
            }
            if (longpress) {
                return false
            }
        }
        var start = function(e) {
            if (e.type === "click" && e.button !== 0) {
                return
            }
            longpress = false
            presstimer = setTimeout(function() {
                box.style.top = e.pageY + 'px'
                box.style.left = e.pageX + 'px'
                box.style.display= 'block'
                longpress = true
            }, 1000)

            return false
        }

        shortcutsBox.addEventListener("mousedown", start);
        shortcutsBox.addEventListener("touchstart", start);
        shortcutsBox.addEventListener("click", click);
        shortcutsBox.addEventListener("mouseout", cancel);
        shortcutsBox.addEventListener("touchend", cancel);
        shortcutsBox.addEventListener("touchleave", cancel);
        shortcutsBox.addEventListener("touchcancel", cancel);
    }
}



