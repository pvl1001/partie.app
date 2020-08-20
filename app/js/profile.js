function openTab(evt, Tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".profile__tabs .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".profile__tabs .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Tab).style.display = "block";
    evt.currentTarget.className += " active";

}

function openTabModal(evt, Tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll("#levelProgress .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll("#levelProgress .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Tab).style.display = "block";
    evt.currentTarget.className += " active";

    let token = document.querySelectorAll( '.pop' )
    let popovers = document.querySelectorAll( '.popover' )
    for (let i = 0; i < token.length; i++) {
        let el = token[i]
        let popover = popovers[i]
        let h = popover.getBoundingClientRect().height
        let x = el.getBoundingClientRect().left - 92
        let y = el.getBoundingClientRect().top - 20 - h
        el.addEventListener( 'mouseover', function () {
            popover.style.opacity = '1'
            popover.style.visibility = 'visible'
            popover.style.left = x + 'px'
            popover.style.top = y + 'px'
        } )
        el.addEventListener( 'mouseout', function () {
            popover.style.cssText = ''
        } )
    }
}

let defaultOpen = document.getElementById("defaultOpen")
if(defaultOpen !== null) {
    defaultOpen.click()
}

let defaultOpen2 = document.getElementById("defaultOpen2")
if(defaultOpen2 !== null) defaultOpen2.click()






