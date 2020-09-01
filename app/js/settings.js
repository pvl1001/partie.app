function openSetting(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-setting");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-setting");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
if(document.getElementById("defaultOpenSetting") !== null)
document.getElementById("defaultOpenSetting").click();


let subscriptionManage = document.querySelector('.settings .subscription__manage')
let mutedAccountsPage = document.querySelector('.settings .muted-accounts-page')
let blockedAccountsPage = document.querySelector('.settings .blocked-accounts-page')
let emailNotificationsPage = document.querySelector('.settings .email-notifications-page')
function openSettings(blockPage) {
    blockPage.style.left = '0'
}
function backSettings(blockPage) {
    blockPage.style.left = ''
}


let w = document.querySelector('.feed__col1')
let col2Settings = document.querySelector('.col2-settings')

if(col2Settings !== null) {
    col2Settings.style.width = window.innerWidth - w.offsetWidth + 'px'
    window.onresize = function () {
        col2Settings.style.width = window.innerWidth - w.offsetWidth + 'px'
    }
}
