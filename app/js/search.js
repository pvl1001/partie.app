let inputSearch = document.querySelector('input.feed__search_search')
let searchWinBox = document.querySelector('.search-win__box')
let contentSearch = document.querySelector('.search-win__content.search-win__content-search')
let content = document.querySelector('.search-win__content')

if (inputSearch !== null) {
    inputSearch.addEventListener('focus', function () {
        searchWinBox.style.opacity = '1'
        searchWinBox.style.visibility = 'visible'
    })

    inputSearch.addEventListener('blur', function () {
        searchWinBox.style.cssText = ''
    })

    inputSearch.addEventListener('keyup', function () {
        if (inputSearch.value.length) {
            contentSearch.style.display = 'block'
            content.style.display = 'none'
        } else {
            contentSearch.style.display = ''
            content.style.display = ''
        }
    })
}


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
