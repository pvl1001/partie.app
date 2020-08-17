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
