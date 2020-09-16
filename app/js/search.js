let inputSearchs = document.querySelectorAll('input.feed__search_search')
let searchWinBoxs = document.querySelectorAll('.search-win__box')


for(let i = 0; i < inputSearchs.length; i++) {
    let inputSearch = inputSearchs[i]
    let searchWinBox = searchWinBoxs[i]
    if (inputSearch !== null) {
        inputSearch.addEventListener('focus', function () {
            searchWinBox.style.opacity = '1'
            searchWinBox.style.visibility = 'visible'

            if(window.innerWidth <= 1023) {
                inputSearch.style.paddingLeft = '16px'
                inputSearch.style.background = '#19181F'
                inputSearch.parentElement.style.marginTop = '-45px'
                inputSearch.parentElement.children[0].style.display = 'block'
            }
        })

        function closeSearch() {
            inputSearch.style.cssText = ''
            inputSearch.parentElement.style.marginTop = ''
            inputSearch.parentElement.children[0].style.display = ''
            searchWinBox.style.cssText = ''
        }


        inputSearch.addEventListener('keyup', function () {
            if (inputSearch.value.length) {
                searchWinBox.children[1].style.display = 'block'
                searchWinBox.children[0].style.display = 'none'
            } else {
                searchWinBox.children[1].style.display = ''
                searchWinBox.children[0].style.display = ''
            }
        })
    }
}

document.addEventListener('click', function (e) {
    if (e.target.closest('.search-win') === null) {
        let searchWinBox = document.querySelector('.search-win__box')

        if (searchWinBox !== null) {
            searchWinBox.style.opacity = '0'
            searchWinBox.style.visibility = 'hidden'
        }
    }
})


function openTabSearch(evt, Tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".search .profile__tabs .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".search .profile__tabs .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Tab).style.display = "block";
    evt.currentTarget.className += " active";

}
