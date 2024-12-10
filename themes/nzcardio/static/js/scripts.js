/* preload hero image */
const img = new Image();
img.onload = function() { 
    console.log('loaded loader');
}
img.src = "/imgs/logo.png";

const imgBg = new Image();
imgBg.onload = function() { 
    if(document.getElementById('hero-bg')) {
        document.getElementById('hero-bg').classList.add("animated");
        document.getElementById('hero-bg').classList.add("fadeIn");
        document.getElementById('hero-bg').classList.remove("hidden");
    }
}
imgBg.src = "/imgs/hero.png";

/* Mobile menu */
document.addEventListener('alpine:init', () => {
    Alpine.store('menuTrigger', {
        checked: false,

        init() {
            Alpine.effect(() => {
                this.updateBody();
            });
        },
        toggle() {
            this.checked = ! this.checked;
        },
        setOn() {
            this.checked = true;
        },
        setOff() {
            this.checked = false;
        },
        updateBody() {
            const body = document.querySelector('body');
            if(this.checked) {
                body.classList.add('overflow-hidden');
            } else {
                body.classList.remove('overflow-hidden');
            }
        }
    })
})

/*
 * General helper functions
 */
function scrollTo(elementId) {
    const el = document.getElementById(elementId);
    el.scrollIntoView();

}

/* catch top of page */
let top_of_page = true;
window.addEventListener("scroll", function(){
    let y = window.scrollY;
    if(!top_of_page && y <= 100) {
        document.getElementById('page-header').classList.add("page-at-top");
        top_of_page = true;
    } else if(top_of_page && y > 100) {
        document.getElementById('page-header').classList.remove("page-at-top");
        top_of_page = false;
    }
});

// On scroll animation triggers
// ----------------------------------------------------------------------------------------
(function () {
    function hasClass(el, cls) {
        if (el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) { return true; }
    }
    function addClass(el, cls) {
        if (!el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) { el.className += ' ' + cls; }
    }
    function delClass(el, cls) {
        el.className = el.className.replace(new RegExp('(?:^|\\s)' + cls + '(?!\\S)'), '');
    }

    function elementFromTop(elem, classToAdd, distanceFromTop, unit) {
        var winY = window.innerHeight || document.documentElement.clientHeight,
            distTop = elem.getBoundingClientRect().top,
            distPercent = Math.round((distTop / winY) * 100),
            distPixels = Math.round(distTop),
            distUnit;
        distUnit = unit == 'percent' ? distPercent : distPixels;

        if (distUnit <= distanceFromTop) {
            if (!hasClass(elem, classToAdd)) {
                addClass(elem, classToAdd);
            }
        }
        //  else {
        //     delClass(elem, classToAdd);
        // }
    }

    function scrollClassesRun() {
        
        // look for all fade in elements
        scrollFadeInUps = this.document.getElementsByClassName('scrollFadeInUp');
        for (let i = 0; i < scrollFadeInUps.length; i++) {
            // params: element id, class to add, distance from top, unit ('percent' or 'pixels')
            elementFromTop(scrollFadeInUps[i], 'smallFadeUp', 100, 'percent');
        }

        scrollFadeIns = this.document.getElementsByClassName('scrollFadeIn');
        for (let i = 0; i < scrollFadeIns.length; i++) {
            // params: element id, class to add, distance from top, unit ('percent' or 'pixels')
            elementFromTop(scrollFadeIns[i], 'animated fadeIn slow', 100, 'percent');
        }

        scrollFadeInSlows = this.document.getElementsByClassName('scrollFadeInSlow');
        for (let i = 0; i < scrollFadeInSlows.length; i++) {
            // params: element id, class to add, distance from top, unit ('percent' or 'pixels')
            elementFromTop(scrollFadeInSlows[i], 'animated fadeIn slower', 100, 'percent');
        }

        scrollFadeInDowns = this.document.getElementsByClassName('scrollFadeInDown');
        for (let i = 0; i < scrollFadeInDowns.length; i++) {
            // params: element id, class to add, distance from top, unit ('percent' or 'pixels')
            elementFromTop(scrollFadeInDowns[i], 'animated fadeInDown', 100, 'percent');
        }

        scrollFadeInRights = this.document.getElementsByClassName('scrollFadeInRight');
        for (let i = 0; i < scrollFadeInRights.length; i++) {
            // params: element id, class to add, distance from top, unit ('percent' or 'pixels')
            elementFromTop(scrollFadeInRights[i], 'animated fadeInRight', 100, 'percent');
        }

        scrollFadeInLefts = this.document.getElementsByClassName('scrollFadeInLeft');
        for (let i = 0; i < scrollFadeInLefts.length; i++) {
            // params: element id, class to add, distance from top, unit ('percent' or 'pixels')
            elementFromTop(scrollFadeInLefts[i], 'animated scrollFadeInLeft', 100, 'percent');
        }
    }

    window.addEventListener('scroll', function () {
        scrollClassesRun();
    }, false);
    // run once to pick up elements in view
    scrollClassesRun();

})();
