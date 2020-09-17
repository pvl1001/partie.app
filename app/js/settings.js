function openSetting(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName( "tabcontent-setting" );
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName( "tablinks-setting" );
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( " active", "" );
    }
    let tabContent = document.getElementById( cityName );
    tabContent.style.display = "block"
    evt.currentTarget.className += " active";
    if (window.innerWidth <= 1023) tabContent.style.left = '0'
}





let subscriptionManage = document.querySelector( '.settings .subscription__manage' )
let mutedAccountsPage = document.querySelector( '.settings .muted-accounts-page' )
let blockedAccountsPage = document.querySelector( '.settings .blocked-accounts-page' )
let emailNotificationsPage = document.querySelector( '.settings .email-notifications-page' )
let privateAccount = document.querySelector( '.private-account .form' )
let gamertagPrivacy = document.querySelector( '.gamertag-privacy .form' )

function openSettings(blockPage) {
    blockPage.style.left = '0'
    if (window.innerWidth <= 1023) {
        if (blockPage === followRequests) {
            let header = document.querySelector( '.notifications__content.follow-requests .feed__header' )
            header.style.position = 'fixed'
        }
    }
}

function backSettings(blockPage) {
    setTimeout( function () {
        blockPage.style.left = ''
    } )
    if (window.innerWidth <= 1023) {
        if (blockPage === followRequests) {
            let header = document.querySelector( '.notifications__content.follow-requests .feed__header' )
            header.style.position = ''
        }
    }
}

function backSettingsMobile(tabId) {
    let tab = document.getElementById( tabId )
    tab.style.left = ''
}


if (window.innerWidth >= 1024) { // PC
    if (document.getElementById( "defaultOpenSetting" ) !== null)
        document.getElementById( "defaultOpenSetting" ).click();


    let w = document.querySelector( '.feed__col1' )
    let col2Settings = document.querySelector( '.col2-settings' )


    if (col2Settings !== null) {
        col2Settings.style.width = window.innerWidth - w.offsetWidth + 'px'
        window.onresize = function () {
            col2Settings.style.width = window.innerWidth - w.offsetWidth + 'px'
        }
    }
}

if (window.innerWidth <= 1023) {
    let privateAccounts = document.getElementsByName( 'privateAccount' )
    for (let el of privateAccounts) {
        el.onchange = function () {
            let checked = document.querySelector( '.private-account > .description.mobile' )
            if (el.checked) checked.innerHTML = el.value
        }
    }

    let privateGamertags = document.getElementsByName( 'privateGamertag' )
    for (let el of privateGamertags) {
        el.onchange = function () {
            let checked = document.querySelector( '.gamertag-privacy > .description.mobile' )
            if (el.checked) checked.innerHTML = el.value
        }
    }

    let languages = document.getElementsByName( 'language' )
    for (let el of languages) {
        el.onchange = function () {
            let checked = document.querySelector( '.col2-settings .tablinks-setting > .description.mobile' )
            if (el.checked) checked.innerHTML = el.value
        }
    }
}


let btnPlatform = document.querySelector( '.settings .feed__col3 .btn-box button.ps' )
let platforms = document.getElementsByName( 'settingsPlatform' )

for (let platform of platforms) {
    platform.onchange = function () {
        btnPlatform.innerHTML = platform.value
        btnPlatform.className = ''
        if (platform.value === 'Xbox') btnPlatform.classList.add( 'host-xb' )
        if (platform.value === 'Playstation') btnPlatform.classList.add( 'host-ps' )
        if (platform.value === 'Playstation') btnPlatform.classList.add( 'host-ps' )
        if (platform.value === 'Playstation') btnPlatform.classList.add( 'host-ps' )
        if (platform.value === 'PC') btnPlatform.classList.add( 'host-pc' )
        if (platform.value === 'Switch') btnPlatform.classList.add( 'host-sw' )
        if (platform.value === 'Mobile') btnPlatform.classList.add( 'host-mob' )
    }
}




