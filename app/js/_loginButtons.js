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

