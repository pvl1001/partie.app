function hiddenPeople() {
let people = document.querySelector('.feed__col3 > div')
let feedHeader = document.querySelector('.feed__col3 .feed__header')
let peopleBtn = document.querySelector('.feed__people-btn')

    if(people.style.transform !== '') {
        people.style.transform = ''
        feedHeader.style.opacity = ''
        peopleBtn.style.transform = ''
    } else {
        if(window.innerWidth <= 1300) { // mobile
            people.style.transform = 'translateX(180px)'
            feedHeader.style.opacity = '0'
            peopleBtn.style.transform = 'rotateY(180deg)'
        } else {
            people.style.transform = 'translateX(220px)'
            feedHeader.style.opacity = '0'
            peopleBtn.style.transform = 'rotateY(180deg)'
        }


    }
}


let textarea = document.querySelector( '#whatNewHead' )
let feedWhatNewRow = document.querySelector( '.feed__what-new_row' )
let photo1 = document.querySelector( 'label[for=photo-1]' )
let feedWhatNewHead = document.querySelector( '.feed__what-new_head' )

if (textarea !== null)
textarea.addEventListener( 'focus', function () {
    feedWhatNewRow.style.display = 'flex'
    photo1.style.display = 'none'
    textarea.style.width = '100%'
    textarea.style.order = '1'
    textarea.style.marginTop = '12px'
    feedWhatNewHead.style.flexWrap = 'wrap'
} )


function isNewComment() {
    let newCommentPeople = document.querySelector('.comments__new-comment_people')
    let newComment = document.querySelector('#newComment')
    let newCommentBtn = document.querySelector('#newCommentBtn')
    if (newComment.value.length) {
        newCommentBtn.style.visibility = 'visible'
    } else {
        newCommentBtn.style.visibility = ''
    }
    if(newComment.value === '@') {
        newCommentPeople.style.display = 'flex'
    } else {
        newCommentPeople.style.display = ''
    }
}


let global = document.querySelector( '.global' )
let forYou = document.querySelector( '.for-you' )
let newActivePartie = document.querySelector( '.new-active-partie' )

function openActivePartie() {
    global.style.display = 'none'
    forYou.style.display = 'none'
    newActivePartie.style.display = 'flex'
}

function clickTab(open, close) {
    open.style.display = 'block'
    close.style.display = 'none'

    setTimeout( function () {
        open.children[1].style.display = 'block'
        open.children[1].style.opacity = '1'
        open.children[1].style.transform = 'scale(1)'
    }, 100 )

    close.children[1].style.opacity = '0'
    close.children[1].style.transform = 'scale(.95)'
    setTimeout( function () {
        close.children[1].style.display = 'none'
    }, 100 )



        $( '.slider' ).slick('unslick')
        $( '.slider' ).slick( {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            swipeToSlide: true,
        } )

    }

function openChat() {
    let newChatPage = document.querySelector( '.new-active-partie.chat' )
    let chatPage = document.querySelector( '.chats' )
    closeModal(newChat)
    chatPage.style.display = 'none'
    newChatPage.style.display = 'flex'
}


$( '.share__btns' ).slick( {
    slidesToScroll: 1,
    slidesToShow: 5,
    infinite: false
})
let closePlaceMobile = document.querySelector('.close-place.post-menu.mobile')
if (window.innerWidth <= 767) {
    let commBtn =  document.querySelector('.feed__comments .comments__new-comment button')
    if (commBtn !== null) commBtn.innerHTML = ''

    for (let feedHeaderMenu of arrFeedHeaderMenu) {
        feedHeaderMenu.onclick = function () {
            closePlaceMobile.style.zIndex = '1'
            closePlaceMobile.style.opacity = '1'
            closePlaceMobile.children[0].style.bottom = '0'
        }
        if (closePlaceMobile !== null)
        closePlaceMobile.onclick = function (e) {
            if (e.target === closePlaceMobile) {
                closePlaceMobile.style.cssText = ''
                closePlaceMobile.children[0].style.bottom = ''
            }

        }
    }
}



// })


// show comments
// let comment = document.querySelectorAll('.comments > .comments__comment')
// let arrcommentsCommentReply = document.querySelectorAll('.comment-reply')
// if (arrcommentsCommentReply.length !== 1) {
//     for (let commentsCommentReply of arrcommentsCommentReply) {
//         commentsCommentReply.style.display = 'none'
//         arrcommentsCommentReply[0].style.display = ''
//
//         let arrCommentsShowMore = document.querySelectorAll('.comments__show-more')
//         arrCommentsShowMore.forEach( function (commentsShowMore)  {
//             commentsShowMore.onclick = showComments
//         })
//         function showComments() {
//             this.style.display = 'none'
//             for (let commentsCommentReply of arrcommentsCommentReply)
//             commentsCommentReply.style.display = ''
//         }
//     }
// }






