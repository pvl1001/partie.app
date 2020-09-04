function openTab(evt, Tab) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".profile__tabs .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.transition = ".4s";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.transform = "scale(.95)";
        tabcontent[i].style.height = "0";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".profile__tabs .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout(function () {
        document.getElementById(Tab).style.opacity = "1";
        document.getElementById(Tab).style.transform = "scale(1)";
        document.getElementById(Tab).style.height = "100%";
    },300)
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

function openFoll(evt, Tab) {

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".followers .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.transition = ".4s";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.transform = "scale(.95)";
        tabcontent[i].style.height = "0";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".followers .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout(function () {
        document.getElementById(Tab).style.opacity = "1";
        document.getElementById(Tab).style.transform = "scale(1)";
        document.getElementById(Tab).style.height = "auto";
    },300)
    evt.currentTarget.className += " active";
}

let defaultOpen = document.getElementById("defaultOpen")
if(defaultOpen !== null) defaultOpen.click()


let defaultOpen2 = document.getElementById("defaultOpen2")
if(defaultOpen2 !== null) defaultOpen2.click()


let showPs = false
function showBtnPs() {
    if (window.innerWidth >=768) { // pc
        showPs = !showPs
        let btn = document.querySelector( '#ps' )
        let show = document.querySelector( '.show-all' )
        console.log(btn)
        if (showPs) {
            btn.style.height = '64px'
            show.innerHTML = 'Hide'
            show.style.opacity = '.4'
        } else {
            btn.style.height = ''
            show.innerHTML = 'Show all'
            show.style.opacity = ''
        }
    } else { // mobile
        openModal(gamertags)
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






function openTabPatie(evt, Tab) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".partie-tab .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.transition = "opacity .4s, transform .4s";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.transform = "scale(.95)";
        tabcontent[i].style.height = "0";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".partie-tab .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout(function () {
        document.getElementById(Tab).style.opacity = "1";
        document.getElementById(Tab).style.transform = "scale(1)";
        if(window.innerWidth <= 767) { // mobile
            document.getElementById(Tab).style.height = "100%";
        } else { // pc
            document.getElementById(Tab).style.height = "calc(100% - 66px)";
        }
    },300)
    evt.currentTarget.className += " active";
}

let defaultOpenPartieTab = document.getElementById("defaultOpenPartieTab")
if(defaultOpenPartieTab !== null) defaultOpenPartieTab.click()


function openTabFeed(evt, Tab) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".feed-tab .tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.transition = "opacity .4s, transform .4s";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.transform = "scale(.95)";
        tabcontent[i].style.height = "0";

    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".feed-tab .tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout(function () {
        document.getElementById(Tab).style.opacity = "1";
        document.getElementById(Tab).style.transform = "scale(1)";
        if(window.innerWidth <= 767) { // mobile
            document.getElementById(Tab).style.height = "100%";
        } else { // pc
            document.getElementById(Tab).style.height = "calc(100% - 66px)";
        }
    },300)
    evt.currentTarget.className += " active";
}






let defaultOpenFeedTab = document.getElementById("defaultOpenFeedTab")
if(defaultOpenFeedTab !== null) defaultOpenFeedTab.click()


let btnGametrag = document.querySelector('.gametrag-mobile button')
function showBtnGametrag(el) {
    if(el.value.length) {
        btnGametrag.style.cssText = 'visibility: visible; opacity: 1;'
    } else btnGametrag.style.cssText = ''
}






let profileProgressModal = document.querySelector('#profileProgress .modal')

profileProgressModal.addEventListener('touchstart', handleTouchStart, false);
profileProgressModal.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;
function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) { /* left swipe */
        } else {/* right swipe */}
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            if(window.innerWidth <= 767) {
                profileProgressModal.children[1].style.height = 'calc(100vh - 60px)'
                profileProgressModal.style.backgroundColor = '#17171a'
                profileProgressModal.classList.add('modal-arrow')
                setTimeout(function () {
                    profileProgressModal.children[1].style.overflow = 'auto'
                },500)
            }
        } else {
            /* down swipe */
            if (profileProgressModal.offsetTop !== 0) closeModal(profileProgress)
            if(window.innerWidth <= 767) {
                if (profileProgressModal.children[1].scrollTop === 0) {
                    profileProgressModal.children[1].style.cssText = ''
                    profileProgressModal.style.backgroundColor = ''
                    profileProgressModal.classList.remove('modal-arrow')
                }
            }
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}

