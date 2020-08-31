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

    // let tools = document.querySelectorAll( '.tool' )
    // let tooltips = document.querySelectorAll( '.tooltip' )
    // for (let i = 0; i < tools.length; i++) {
    //     let tool = tools[i]
    //     let tooltip = tooltips[i]
    //     let h = tooltip.getBoundingClientRect().height
    //     let x = tool.getBoundingClientRect().left
    //     let y = tool.getBoundingClientRect().top
    //     tool.addEventListener( 'mouseover', function () {
    //         console.log(window.scrollTop)
    //         tooltip.style.opacity = '1'
    //         tooltip.style.visibility = 'visible'
    //         tooltip.style.left = x + 'px'
    //         tooltip.style.top = y + 'px'
    //     } )
    //     tool.addEventListener( 'mouseout', function () {
    //         tooltip.style.cssText = ''
    //     } )
    // }
}

function openFoll(evt, cityName) {

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".followers .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".followers .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

let defaultOpen = document.getElementById("defaultOpen")
if(defaultOpen !== null) defaultOpen.click()


let defaultOpen2 = document.getElementById("defaultOpen2")
if(defaultOpen2 !== null) defaultOpen2.click()


let showPs = false
function showBtnPs() {
    showPs = !showPs
    let btn = document.querySelector( '.ps' )
    let show = document.querySelector( '.show-all' )
    if (showPs) {
        btn.style.height = '64px'
        show.innerHTML = 'Hide'
        show.style.opacity = '.4'
    } else {
        btn.style.height = ''
        show.innerHTML = 'Show all'
        show.style.opacity = ''
    }
}

let arrBtnFollowers = document.querySelectorAll('.followers__btn')
let onBtnFollowers = []
for(let i = 0; i < arrBtnFollowers.length; i++) {
    let btnFollowers = arrBtnFollowers[i]
    btnFollowers.addEventListener('click', function () {
        onBtnFollowers[i] = !onBtnFollowers[i]
        if(onBtnFollowers[i]) {
            arrBtnFollowers[i].style.backgroundColor = '#100F15'
            arrBtnFollowers[i].innerHTML = 'Following'
        } else {
            arrBtnFollowers[i].style.backgroundColor = ''
            arrBtnFollowers[i].innerHTML = 'Follow'
        }
    })
}

let  followersTab = document.querySelector('#followersTab')
let  followingTab = document.querySelector('#followingTab')
let followers = document.querySelector('.followers')
let profile = document.querySelector('.profile-col2')
function followPage(x) {
    body.style.background = '#000'
    body.style.transition = '0s'
    profile.style.display = 'none'
    followers.style.display = 'block'
    x.click()
}

function backProfile() {
    profile.style.display = ''
    followers.style.cssText = ''
    body.style.cssText = ''
}







