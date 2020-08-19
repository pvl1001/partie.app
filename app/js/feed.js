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
    textarea.style.height = 'auto'
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

    function clickTab(open, close) {
        open.style.display = 'block'
        close.style.display = 'none'
        $( '.slider' ).slick('unslick')
        $( '.slider' ).slick( {
            slidesToShow: 10,
            infinite: true,
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






