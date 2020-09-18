if(window.innerWidth <= 1023) {

    let profileProgressModal = document.querySelector('#profileProgress .modal')
    if(profileProgressModal !== null) {
        profileProgressModal.addEventListener('touchstart', handleTouchStart, false);
        profileProgressModal.addEventListener('touchmove', handleTouchMove, false);
    }

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
    }
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
                profileProgressModal.children[2].style.height = 'calc(100vh - 154px)'
                profileProgressModal.style.backgroundColor = '#17171a'
                profileProgressModal.classList.add( 'modal-arrow' )
                setTimeout( function () {
                    profileProgressModal.children[2].style.overflow = 'auto'
                }, 500 )

            } else {
                /* down swipe */
                if (profileProgressModal.offsetTop !== 0) closeModal(profileProgress)
                if(window.innerWidth <= 1023) {
                    if (profileProgressModal.children[2].scrollTop === 0) {
                        profileProgressModal.children[2].style.cssText = ''
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
}



if(window.innerWidth <= 1023) {


    // let shortcutsMobile = document.querySelector( '#hostPartie .shortcuts' )
    //
    // if (shortcutsMobile !== null) {
    //     shortcutsMobile.addEventListener( 'touchstart', handleTouchStart, false );
    //     shortcutsMobile.addEventListener( 'touchmove', handleTouchMove, false );
    // }
    //
    // var xDown = null;
    // var yDown = null;
    //
    // function getTouches(evt) {
    //     return evt.touches ||             // browser API
    //         evt.originalEvent.touches; // jQuery
    // }
    //
    // function handleTouchStart(evt) {
    //     const firstTouch = getTouches( evt )[0];
    //     xDown = firstTouch.clientX;
    //     yDown = firstTouch.clientY;
    // }
    //
    // function handleTouchMove(evt) {
    //     if (!xDown || !yDown) {
    //         return;
    //     }
    //     var xUp = evt.touches[0].clientX;
    //     var yUp = evt.touches[0].clientY;
    //     var xDiff = xDown - xUp;
    //     var yDiff = yDown - yUp;
    //
    //     if (Math.abs( xDiff ) > Math.abs( yDiff )) {/*most significant*/
    //         if (xDiff > 0) { /* left swipe */
    //         } else {/* right swipe */
    //         }
    //     } else {
    //         if (yDiff > 0) {
    //             /* up swipe */
    //             shortcutsUp()
    //         } else {
    //             /* down swipe */
    //             shortcutsDown()
    //         }
    //     }
    //     /* reset values */
    //     xDown = null;
    //     yDown = null;
    // }
    //



    let postMenus = document.querySelectorAll( '.post-menu.mobile' )
    for(let postMenuMenu of postMenus) {
        if (postMenuMenu !== null) {
            postMenuMenu.children[0].addEventListener( 'touchstart', handleTouchStart, false );
            postMenuMenu.children[0].addEventListener( 'touchmove', handleTouchMove, false );
        }

        var xDown = null;
        var yDown = null;

        function getTouches(evt) {
            return evt.touches ||             // browser API
                evt.originalEvent.touches; // jQuery
        }

        function handleTouchStart(evt) {
            const firstTouch = getTouches( evt )[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }

        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }
            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs( xDiff ) > Math.abs( yDiff )) {/*most significant*/
                if (xDiff > 0) { /* left swipe */
                } else {/* right swipe */
                }
            } else {
                if (yDiff > 0) {
                    /* up swipe */

                } else {
                    /* down swipe */
                    postMenuMenu.style.cssText = ''
                    postMenuMenu.children[0].style.cssText = ''
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }




    let btnContainerWrapps = document.querySelectorAll( '.btn-container-wrapp' )
    for(let el of btnContainerWrapps) {
        if (el !== null) {
            el.children[0].addEventListener( 'touchstart', handleTouchStart, false );
            el.children[0].addEventListener( 'touchmove', handleTouchMove, false );
        }

        var xDown = null;
        var yDown = null;

        function getTouches(evt) {
            return evt.touches ||             // browser API
                evt.originalEvent.touches; // jQuery
        }

        function handleTouchStart(evt) {
            const firstTouch = getTouches( evt )[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }

        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }
            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs( xDiff ) > Math.abs( yDiff )) {/*most significant*/
                if (xDiff > 0) { /* left swipe */
                } else {/* right swipe */
                }
            } else {
                if (yDiff > 0) {
                    /* up swipe */

                } else {
                    /* down swipe */
                    el.style.top = ''
                    el.children[0].classList.add('animate__fadeOutDownBig')
                    el.children[0].classList.remove('animate__fadeInUp')
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }





    let modals = document.querySelectorAll( '.modal' )

    for (let modal of modals) {
        if (modal.parentElement !== hostLiveShowMobile &&
            modal.parentElement !== hostPartie &&
            modal.parentElement !== createShortcutMobile &&
            modal.parentElement !== editPartie &&
            modal.parentElement !== newChat &&
            modal.parentElement !== changePaymentMethod &&
            modal.parentElement !== chooseGame &&
            modal.parentElement !== signUpPage &&
            modal.parentElement !== logInIn &&
            modal.parentElement !== resetPass &&
            modal.parentElement !== checkEmail &&
            modal.parentElement !== welcomeMobile &&
            modal.parentElement !== newPost &&
            modal.parentElement !== preferencesModal &&
            modal.parentElement !== titleModal &&
            modal.parentElement !== editShortcutMobile) {

            modal.addEventListener( 'touchstart', handleTouchStart, false );
            modal.addEventListener( 'touchmove', handleTouchMove, false );
        }


        var xDown = null;
        var yDown = null;

        function getTouches(evt) {
            return evt.touches ||             // browser API
                evt.originalEvent.touches; // jQuery
        }

        function handleTouchStart(evt) {
            const firstTouch = getTouches( evt )[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }

        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }
            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs( xDiff ) > Math.abs( yDiff )) {/*most significant*/
                if (xDiff > 0) { /* left swipe */
                } else {/* right swipe */
                }
            } else {
                if (yDiff > 0) {
                    /* up swipe */
                } else {
                    /* down swipe */
                    closeModal( modal.parentElement )
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }
}


let checkSwipe = true

$(function() {
    $("#hostPartie .shortcuts").swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if (checkSwipe) {
                checkSwipe = false
                alert(direction)
                if(direction === 'up') {
                    shortcutsUp()
                }
                if (direction === 'down') {
                    shortcutsDown()
                }
            }
        }
    });

});