let signUpPage = document.querySelector('#signUpPage')
let logInCode = document.querySelector('#logInCode')
let logInPlatforms = document.querySelector('#logInPlatforms')
let logInIn = document.querySelector('#logInIn')
let resetPass = document.querySelector('#resetPass')
let checkEmail = document.querySelector('#checkEmail')
let header = document.querySelector('.header')
let salutation = document.querySelector('.salutation')
let body = document.querySelector('body')
let addCreditCard = document.querySelector('#addCreditCard')
let subscriptionModal = document.querySelector('#subscriptionModal')
let newPost = document.querySelector('#newPost')
let chooseGame = document.querySelector('#chooseGame')
let profileProgress = document.querySelector('#profileProgress')
let levelProgress = document.querySelector('#levelProgress')
let applyPartner = document.querySelector('#applyPartner')
let editProfile = document.querySelector('#editProfile')
let hostPartie = document.querySelector('#hostPartie')
let hostPlatform = document.querySelector('#hostPlatform')
let gametrag = document.querySelector('#gametrag')
let gametragPlatform = document.querySelector('#gametragPlatform')
let addGametrag = document.querySelector('#addGametrag')
let hostLiveShow = document.querySelector('#hostLiveShow')
let additionalSettings = document.querySelector('#additionalSettings')
let removeUser = document.querySelector('#removeUser')
let titleModal = document.querySelector('#titleModal')
let editPartie = document.querySelector('#editPartie')
let partieReport = document.querySelector('#partieReport')
let ratingPartie = document.querySelector('#ratingPartie')
let titleModalStart = document.querySelector('#titleModalStart')
let inviteFriends = document.querySelector('#inviteFriends')
let newChat = document.querySelector('#newChat')
let chatHead = document.querySelector('#chatHead')
let editChat = document.querySelector('#editChat')
let leaveChat = document.querySelector('#leaveChat')
let inviteFriendsSetting = document.querySelector('#inviteFriendsSetting')
let deleteAccount = document.querySelector('#deleteAccount')
let changePaymentMethod = document.querySelector('#changePaymentMethod')
let addCreditCardSetting = document.querySelector('#addCreditCardSetting')
let share = document.querySelector('#share')
let logInPlatformsGames = document.querySelector('#logInPlatformsGames')
let arrHeaderMenuMenu = document.querySelectorAll('.header__menu_menu')
let arrlogInMenu = document.querySelectorAll('.logIn__menu')
let arrModalWrapp = document.querySelectorAll( '.modal-wrapp' )
let arrFeedHeaderMenu = document.querySelectorAll( '.feed__header_menu' )

document.addEventListener('DOMContentLoaded', function () {

    $( '.slider' ).slick( {
        slidesToShow: 10,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    } )

    function logoAnimate() { // анимицаия лого
        let arrBgAnimate = document.querySelectorAll( '.bg-animate' )
        let logo = document.getElementById('logo')
        for(let bgAnimate of arrBgAnimate)
            bgAnimate.style.cssText = 'opacity: 1'
        for(let logInMenu of arrlogInMenu)
            logInMenu.style.height = '260px'
    }
    setTimeout(logoAnimate, 3000)


    let arrChecked = [] // появление кнопки platforms continue
    let arrPlatforms = document.querySelectorAll('.logIn__platforms-platforms input')
    let btnPlatforms = document.getElementById('btnPlatforms')
    for(let platform of arrPlatforms) {
        platform.addEventListener('change', function () {
            if(platform.checked) {
                arrChecked.push('')
            } else { arrChecked.pop() }
            if(arrChecked.length > 0) {
                btnPlatforms.style.display = 'block'
                btnPlatforms.classList.remove('animate__fadeOutDown')
                btnPlatforms.classList.add('animate__fadeInUp')
                if(window.innerWidth > 767) {
                    btnPlatforms.style.zIndex = ''
                    logInPlatforms.children[0].style.backgroundColor = 'transparent'
                }

            } else {
                btnPlatforms.classList.remove('animate__fadeInUp')
                btnPlatforms.classList.add('animate__fadeOutDown')
                if(window.innerWidth > 767) { //pc
                    btnPlatforms.style.zIndex = '-1'
                    logInPlatforms.children[0].style.backgroundColor = ''
                }
            }
        })
    }

    let arrCheckedGames = [] // появление кнопки platforms continue
    let arrPlatformsGames = document.querySelectorAll('#logInPlatformsGames .cards input')
    let btnPlatformsGames = document.getElementById('btnPlatformsGames')
    for(let platform of arrPlatformsGames) {
        platform.addEventListener('change', function () {
            if(platform.checked) {
                arrCheckedGames.push('')
            } else {
                arrCheckedGames.pop()
            }
            if(arrCheckedGames.length > 0) {
                btnPlatformsGames.style.display = 'block'
                btnPlatformsGames.classList.remove('animate__fadeOutDown')
                btnPlatformsGames.classList.add('animate__fadeInUp')
                if(window.innerWidth > 767) {
                    btnPlatformsGames.style.zIndex = ''
                    logInPlatforms.children[0].style.backgroundColor = 'transparent'
                }

                console.log(arrCheckedGames.length)

            } else {
                btnPlatformsGames.classList.remove('animate__fadeInUp')
                btnPlatformsGames.classList.add('animate__fadeOutDown')
                if(window.innerWidth > 767) { //pc
                    setTimeout(function () {
                        btnPlatformsGames.style.zIndex = '-1'
                    },500)
                    logInPlatforms.children[0].style.backgroundColor = ''
                }
            }
        })
    }

})

function next(open, close) { // кнопка далее

    if (window.innerWidth <= 767) { // mobile
        open.children[0].style.left = '0'
        setTimeout(function () {
            close.style.top = '-200%'
        }, 500)
    }

    if (window.innerWidth > 767) { // pc
        if (open === addCreditCard || open === subscriptionModal) {
            open.style.left = '0'
            close.style.left = ''
            closeModal(checkEmail)
        } else {
            openModal(open)
            closeModal(close)
        }


        if (open === logInCode || open === logInPlatforms || open === logInPlatformsGames || open === checkEmail) open.children[0].style.left = '0'
        setTimeout(function () {
            if (close === logInCode) {
                close.children[0].style.left = '100%'
                header.style.opacity = '0'
                salutation.style.visibility = 'hidden'
                body.style.background = '#000'
            } else {
                close.children[0].style.left = ''
                header.style.opacity = ''
                salutation.style.visibility = ''
                body.style.background = ''
            }
        }, 500)

        if(open === logInIn) {
            header.style.opacity = ''
            body.style.background = ''
            salutation.style.visibility = ''
            close.style.left = '100%'
            openModal(open)
        }

    }
}

function back(close, open) { // кнопка назад
    if (window.innerWidth > 767) { // pc
        if (open === subscriptionModal) {
            open.style.left = '0'
            close.style.left = ''
        } else {
            closeModal( close )
            openModal( open )
        }
    }
    if (window.innerWidth <= 767) { // mobile
        close.children[0].style.left = '100%'
        open.children[0].style.left = '0'
    }
}

function openModal(modal) { // modal

    if (window.innerWidth > 767) { //pc
        modal.style.top = '0'
        modal.style.backgroundColor = 'rgba(20,20,20,0.8)'

        if (modal === resetPass) {
            logInIn.style.top = ''
        }
    }

    if (window.innerWidth <= 767) { // mobile
        if (modal === resetPass) {
            next(modal)
        }
    }
}

function closeModal(modal) {
    modal.style.cssText = ''
    modal.style.transitionProperty = 'background-color, top'
    modal.style.transitionDuration = '.4s, .5s'
    modal.style.transitionDelay = '0s, .2s'
    setTimeout(function () {
        modal.style.cssText = ''
    },300)
}

for (let modalWrapp of arrModalWrapp) { // close modal target
    modalWrapp.onclick = function (e) {
        if (e.target === modalWrapp) {
            modalWrapp.style.cssText = ''
            modalWrapp.style.transitionProperty = 'background-color, top'
            modalWrapp.style.transitionDuration = '.4s, .5s'
            modalWrapp.style.transitionDelay = '0s, .2s'
            setTimeout(function () {
                modalWrapp.style.cssText = ''
            },300)
        }
    }
}

for (let feedHeaderMenu of arrFeedHeaderMenu) {
    feedHeaderMenu.addEventListener( 'click', function () {
        this.style.backgroundColor = '#19181F'
        this.children[0].style.visibility = 'visible'
        this.children[0].style.opacity = '1'
    } )
}
let arrHeaderMenu = document.querySelectorAll('.header__menu_menu')
for(let headerMenu of  arrHeaderMenu) {
    window.addEventListener('click', function (e) {
        if(e.target === headerMenu.children[0]) {
            headerMenu.style.cssText = ''
            headerMenu.parentNode.style.cssText = ''
        }
    })
}


let shortcuts = document.querySelector('.shortcuts')
if(shortcuts !== null) {
    let onShortcuts
    let btnUp = document.querySelector('.btn-up')
    let bgClick = document.querySelector('.bg-click')
    let heightShortcuts = shortcuts.offsetHeight
    shortcuts.style.bottom = -heightShortcuts +40 +87 + 'px'

    function shortcutsUp() {
        onShortcuts = !onShortcuts
        if(onShortcuts) {
            shortcuts.style.bottom = '5px'
            btnUp.style.transform = 'rotateX(190deg)'
            bgClick.style.opacity = '1'
            bgClick.style.zIndex = '1'
        } else {
            shortcuts.style.bottom = -heightShortcuts +40 +87 + 'px'
            btnUp.style.transform = ''
            bgClick.style.cssText = ''
        }
    }
}


function openBurger() {
    let windowBurger = document.querySelector('.burger__menu')
    let closePlace = windowBurger.querySelector('.close-place')
    windowBurger.style.opacity = '1'
    windowBurger.style.visibility = 'visible'
    closePlace.addEventListener('click', function () {
        windowBurger.style.cssText = ''
    })
}


let feedPostImg = document.querySelector('.post .feed__post_img img')
if (feedPostImg !== null) {
    feedPostImg.onclick = openImg
    let bg = document.querySelector('.img-bg')
    let bgBtn = document.querySelector('.img-bg .img-bg__close')
    let img
    function openImg() {
        img = this
        this.style.cssText =
            'top:0;' +
            'right:0;' +
            'bottom:0;' +
            'left:0;' +
            'position:fixed;' +
            'z-index: 12;' +
            'margin: auto;' +
            'padding: 0 50px'
        bg.style.zIndex = '11'
        bgBtn.onclick = function () {
            img.style.cssText = ''
            bg.style.zIndex = ''
        }
    }
}



// open reply comment
// let reply = document.querySelectorAll('.reply')
// let commentReply = document.querySelectorAll('.comments__reply')
// for (let i = 0; i < reply.length; i++) {
//     let el = reply[i]
//     let el2 = commentReply[i]
//     console.log(el, el2)
//     el.addEventListener('click', function () {
//         el2.style.display = 'flex'
//     })
// }

// function reply(el) {
//     let reply = el.parentNode.parentElement.parentElement.parentElement.children[4]
//     console.log(reply)
    // reply.style.display = 'flex'

    // let name = el.parentNode.parentElement.children[1].outerText
    // reply.children[1].setAttribute('value', '@' + name + ' ')
// }

// Targets all textareas with class "txta"
// let textareas = document.querySelectorAll('.txta'),
//     hiddenDiv = document.createElement('div'),
//     content = null;
// for (let j of textareas) {
//     j.classList.add('txtstuff');
// }
// hiddenDiv.classList.add('txta');
// hiddenDiv.style.display = 'none';
// hiddenDiv.style.whiteSpace = 'pre-wrap';
// hiddenDiv.style.wordWrap = 'break-word';
//
// for(let i of textareas) {
//     (function(i) {
//         i.addEventListener('input', function() {
//             i.parentNode.appendChild(hiddenDiv);
//             i.style.resize = 'none';
//             i.style.overflow = 'hidden';
//             content = i.value;
//             content = content.replace(/\n/g, '<br>');
//             hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';
//             hiddenDiv.style.visibility = 'hidden';
//             hiddenDiv.style.display = 'block';
//             i.style.height = hiddenDiv.offsetHeight + 'px';
//             hiddenDiv.style.visibility = 'visible';
//             hiddenDiv.style.display = 'none';
//         });
//     })(i);
// }

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

let arrShowAll = document.querySelectorAll('#showAll')
let arrBtnSocial = document.querySelectorAll('#btnSocial')
let arrBtnContainerWrapp = document.querySelectorAll('.btn-container-wrapp')


for (let i = 0; i < arrShowAll.length; i++) {
    let showAll = arrShowAll[i]
    let btnContainerWrapp = arrBtnContainerWrapp[i]
    let btnSocial = arrBtnSocial[i]

    function showAllBtns() { // анимация кнопок на стартовой
        if (window.innerWidth <= 767) { // mobile
            btnContainerWrapp.style.top = '0'
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


let textarea = document.querySelector( '#whatNewHead' )
let feedWhatNewRow = document.querySelector( '.feed__what-new_row' )
let photo1 = document.querySelector( 'label[for=photo-1]' )
let feedWhatNewHead = document.querySelector( '.feed__what-new_head' )

if (textarea !== null)
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
    let newCommentPeople = document.querySelector('.comments__new-comment_people')
    let newComment = document.querySelector('#newComment')
    let newCommentBtn = document.querySelector('#newCommentBtn')
    if (newComment.value.length) {
        newCommentBtn.style.visibility = 'visible'
    } else {
        newCommentBtn.style.visibility = ''
    }
    if(newComment.value === '@') {
        newCommentPeople.style.display = 'flex'
    } else {
        newCommentPeople.style.display = ''
    }
}


let global = document.querySelector( '.global' )
let forYou = document.querySelector( '.for-you' )
let newActivePartie = document.querySelector( '.new-active-partie' )

function openActivePartie() {
    global.style.display = 'none'
    forYou.style.display = 'none'
    newActivePartie.style.display = 'flex'
}

function clickTab(open, close) {
        open.style.display = 'block'
        close.style.display = 'none'
        $( '.slider' ).slick('unslick')
        $( '.slider' ).slick( {
            slidesToShow: 10,
            slidesToScroll: 1,
            infinite: true,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 7
                    }
                },
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 6
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1180,
                    settings: {
                        slidesToShow: 4
                    }
                }
            ]
        } )

    }

function openChat() {
    let newChatPage = document.querySelector( '.new-active-partie.chat' )
    let chatPage = document.querySelector( '.chats' )
    closeModal(newChat)
    chatPage.style.display = 'none'
    newChatPage.style.display = 'flex'
}


$( '.share__btns' ).slick( {
    slidesToScroll: 1,
    slidesToShow: 5,
    infinite: false
})
// })


// show comments
// let comment = document.querySelectorAll('.comments > .comments__comment')
// let arrcommentsCommentReply = document.querySelectorAll('.comment-reply')
// if (arrcommentsCommentReply.length !== 1) {
//     for (let commentsCommentReply of arrcommentsCommentReply) {
//         commentsCommentReply.style.display = 'none'
//         arrcommentsCommentReply[0].style.display = ''
//
//         let arrCommentsShowMore = document.querySelectorAll('.comments__show-more')
//         arrCommentsShowMore.forEach( function (commentsShowMore)  {
//             commentsShowMore.onclick = showComments
//         })
//         function showComments() {
//             this.style.display = 'none'
//             for (let commentsCommentReply of arrcommentsCommentReply)
//             commentsCommentReply.style.display = ''
//         }
//     }
// }







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








let headerScroll = document.querySelector('.feed__header.scroll')
if(headerScroll !== null)
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    if(scrollTop >= 300){
        headerScroll.style.top = '0'
    } else {
        headerScroll.style.cssText = ''
    }
});


let arrUser = document.querySelectorAll('.message__user_user-name')
let arrWindow = document.querySelectorAll('.message .user-window')
let arrClosePlace = document.querySelectorAll('.user-window .close-place')

for(let i = 0; i < arrUser.length; i++){
    let user = arrUser[i]
    let window = arrWindow[i]
    let closePlace = arrClosePlace[i]
    user.addEventListener('click', function () {
        window.style.opacity = '1'
        window.style.visibility = 'visible'
    })
    closePlace.addEventListener('click', function () {
        window.style.opacity = ''
        window.style.visibility = ''
    })
}

function openMorePartie() {
    let moreWin = document.querySelector( '.more__win' )
    let closePlaceMore = document.querySelector( '.big-round-btn.more .close-place' )

    moreWin.style.visibility = 'visible'
    moreWin.style.opacity = '1'
    closePlaceMore.style.display = 'block'

    let test = moreWin.querySelectorAll( '.more__win_row ' )
    for (let el of test)
        el.addEventListener( 'click', function (e) {
            moreWin.style.cssText = ''
            closePlaceMore.style.display = ''
            e.stopPropagation()
        } )
    closePlaceMore.addEventListener( 'click', function (e) {
        moreWin.style.cssText = ''
        closePlaceMore.style.display = ''
        e.stopPropagation()
    } )
}

function openMoreChats() {
    let moreWin = document.querySelector( '.more__win-chats' )
    let closePlaceMore = document.querySelector( '.big-round-btn.more .close-place.more__win-chats' )

    moreWin.style.visibility = 'visible'
    moreWin.style.opacity = '1'
    closePlaceMore.style.display = 'block'

    let test = moreWin.querySelectorAll( '.more__win_row' )
    for (let el of test)
        el.addEventListener( 'click', function (e) {
            moreWin.style.cssText = ''
            closePlaceMore.style.display = ''
            e.stopPropagation()
        } )
    closePlaceMore.addEventListener( 'click', function (e) {
        moreWin.style.cssText = ''
        closePlaceMore.style.display = ''
        e.stopPropagation()
    } )
}


let onClickStart
function clickStart() {
    onClickStart = !onClickStart
    let btnStart = document.querySelector( '.big-round-btn.start' )

    if (onClickStart) {
        btnStart.style.backgroundColor = '#F45365'
        btnStart.parentNode.children[1].innerHTML = 'End Partie'
    } else {
        btnStart.style.cssText = ''
        btnStart.parentNode.children[1].innerHTML = 'Start'
    }
}


let arrReportInput = document.querySelectorAll('#partieReport input')
let reportBtn = document.querySelector('#partieReport button')
for(let input of arrReportInput) {
    input.addEventListener('change', function () {
        reportBtn.removeAttribute('disabled')
        reportBtn.classList.remove('disabled')
        reportBtn.classList.add('bg-fiolet')
    })
}


function reportSubmitted() {
    let reportSubmitted = document.querySelector('.reportSubmitted')
    if(reportSubmitted !== null) {
        closeModal(partieReport)
        reportSubmitted.style.visibility = 'visible'
        reportSubmitted.style.opacity = '1'
        setTimeout(function () {
            reportSubmitted.style.cssText = ''
        },5000)
    }
}


let arrStar = document.querySelectorAll('.rating-area input')
let ratingPartieModal = document.querySelector('#ratingPartie .modal')
let btnSkip = document.querySelector('#btnSkip')
let star2 = document.querySelector('.star-2')
let star3 = document.querySelector('.star-3')
let star4 = document.querySelector('.star-4')
let star5 = document.querySelector('.star-5')
for(let star of arrStar) {
    star.addEventListener('change', function (e) {
        if(e.target.value <= '2') {
            star5.style.right = ''
            star4.style.right = ''
            star3.style.right = ''
            btnSkip.style.right = '110%'
            setTimeout(function () {
                ratingPartie.style.background = 'linear-gradient(0deg, rgba(60,28,32,0.8) 0%, rgba(20,20,20,0.7091211484593838) 100%)'
                ratingPartieModal.style.height = '379px'
                star2.style.right = '0'
                star5.style.position = 'absolute'
                star4.style.position = 'absolute'
                star3.style.position = 'absolute'
                star2.style.position = ''
            },300)
        }
        if (e.target.value === '3'){
            star5.style.right = ''
            star4.style.right = ''
            star2.style.right = ''
            btnSkip.style.right = '110%'
            setTimeout(function () {
                ratingPartie.style.background = 'linear-gradient(0deg, rgba(42,24,45,0.8) 0%, rgba(20,20,20,0.7091211484593838) 100%)'
                ratingPartieModal.style.height = '629px'
                star3.style.right = '0'
                star5.style.position = 'absolute'
                star4.style.position = 'absolute'
                star2.style.position = 'absolute'
                star3.style.position = ''
            },300)
        }
        if (e.target.value === '4'){
            star5.style.right = ''
            star3.style.right = ''
            star2.style.right = ''
            btnSkip.style.right = '110%'
            setTimeout(function () {
                ratingPartie.style.background = 'linear-gradient(0deg, rgba(33,26,61,0.8) 0%, rgba(20,20,20,0.7091211484593838) 100%)'
                ratingPartieModal.style.height = '629px'
                star4.style.right = '0'
                star5.style.position = 'absolute'
                star3.style.position = 'absolute'
                star2.style.position = 'absolute'
                star4.style.position = ''
            },300)
        }
        if (e.target.value === '5'){
            star4.style.right = ''
            star3.style.right = ''
            star2.style.right = ''
            btnSkip.style.right = '110%'
            setTimeout(function () {
                ratingPartie.style.background = 'linear-gradient(0deg, rgba(61,58,36,0.8) 0%, rgba(20,20,20,0.7091211484593838) 100%)'
                ratingPartieModal.style.height = '629px'
                star5.style.right = '0'
                star4.style.position = 'absolute'
                star3.style.position = 'absolute'
                star2.style.position = 'absolute'
                star5.style.position = ''
            },300)
        }
    })
}


function textareaWidth() {
    let text = document.querySelector('.textarea')
    if(text.value.length) {
        text.style.width = '100%'
    } else {
        text.style.width = ''
    }
}


let arrPostFooterBtn = document.querySelectorAll('.partie__post_footer button')
let onPostFooterBtn = []
for(let i = 0; i < arrPostFooterBtn.length; i++) {
    if(arrPostFooterBtn[i] !== null) {
        arrPostFooterBtn[i].addEventListener('click', function () {
            onPostFooterBtn[i] = !onPostFooterBtn[i]
            if(onPostFooterBtn[i]) {
                arrPostFooterBtn[i].style.backgroundColor = '#F45365'
                arrPostFooterBtn[i].innerHTML = 'Leave'
            } else {
                arrPostFooterBtn[i].style.backgroundColor = ''
                arrPostFooterBtn[i].innerHTML = 'Join'
            }
        })
    }}



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
let tell = document.querySelector('#Tell')

if(tell !== null) {
    tell.addEventListener('keyup', function () {
        let label = document.querySelector('#How label')
        let btn = document.querySelector('#How button')
        if(tell.value.length) {
            label.style.opacity = '.5'
            label.style.top = '70px'
            label.style.fontSize = '13px'
            btn.style.opacity = '1'
            btn.style.visibility = 'visible'
        } else {
            label.style.cssText = ''
            btn.style.cssText = ''
        }
    })
}


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

let followRequests = document.querySelector('.follow-requests')
let requestsCounter = document.querySelector('.requests__counter')

if (requestsCounter !== null)
if(requestsCounter.innerHTML === '0') {
    requestsCounter.style.backgroundColor = '#14131A'
}

