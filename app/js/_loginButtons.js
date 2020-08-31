let arrShowAll = document.querySelectorAll('#showAll')
let arrBtnSocial = document.querySelectorAll('.btn-container-show')
let arrBtnContainerWrapp = document.querySelectorAll('.btn-container-wrapp')

for (let i = 0; i < arrShowAll.length; i++) {
    let showAll = arrShowAll[i]
    let btnContainerWrapp = arrBtnContainerWrapp[i]
    let btnSocial = arrBtnSocial[i]

    function showAllBtns() { // анимация кнопок на стартовой
        if (window.innerWidth <= 767) { // mobile
            btnContainerWrapp.style.top = '0'
            btnContainerWrapp.style.zIndex = '1'
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


function showBtns() {
    let btnShow = document.querySelector('.subscription .btn-container-show')
    let btnWrapp = document.querySelector('.subscription .btn-container-wrapp')
    if(window.innerWidth <= 767) {
        btnWrapp.style.top = '0'
        btnWrapp.style.zIndex = '1'
        btnShow.classList.remove( 'animate__fadeOutDownBig' )
        btnShow.classList.add( 'animate__fadeInUp' )
        btnShow.style.cssText = 'z-index: 0; display: block;'
    }

    btnWrapp.addEventListener( 'click', function(e) {
        let btns = document.querySelectorAll('.subscription .btn-container-wrapp button')
        for(let btn of btns)
        if (e.target === btnWrapp || e.target === btn) {
            btnWrapp.style.top = ''
            btnShow.classList.add('animate__fadeOutDownBig')
            btnShow.classList.remove('animate__fadeInUp')
        }
    })
}

