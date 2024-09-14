/*
const exploringContainer = document.getElementById('zzexploringField');
const calendarContainer = document.getElementById('zzcalendarField');
const marketplaceContainer = document.getElementById('zzmarketplaceField');
const addnewContainer = document.getElementById('zzaddnewField');
const img = document.getElementById('zzImage');

// Hover effect
calendarContainer.addEventListener('mouseover', function() {
    img.src = 'images/zzonboarding.webp';
});

// Revert back to original image when not hovering
calendarContainer.addEventListener('mouseout', function() {
    img.src = 'images/zzonboarding.webp';
});

// Click effect
calendarContainer.addEventListener('click', function() {
    img.src = img.src === 'image1.jpg' ? 'image2.jpg' : 'image1.jpg';
});*/


document.addEventListener('DOMContentLoaded', function() {
	
// Select the root element
const root = document.documentElement;

// Get the computed style of the root element
const computedStyle = getComputedStyle(root);

// Access the CSS variable using the getPropertyValue method
var bgcol = computedStyle.getPropertyValue('--backgroundLight');
var textcol = computedStyle.getPropertyValue('--textColor');
	
	
var rootStyles = getComputedStyle(document.documentElement);
var IconBGColor = rootStyles.getPropertyValue('--white');
var IconColor = getComputedStyle(document.querySelector('.icon-border')).color; //rootStyles.getPropertyValue('--indigo');

const exploringContainer = document.getElementById('zzexploringField');
const exploringIcon = document.getElementById('zzexploringIcon');

const eventContainer = document.getElementById('zzcalendarField');
const eventIcon = document.getElementById('zzcalendarIcon');

const markContainer = document.getElementById('zzmarketplaceField');
const markIcon = document.getElementById('zzmarketplaceIcon');

const addContainer = document.getElementById('zzaddnewField');
const addIcon = document.getElementById('zzaddnewIcon');




const calendarContainer = document.getElementById('zzcalendarField');
const marketplaceContainer = document.getElementById('zzmarketplaceField');
const addnewContainer = document.getElementById('zzaddnewField');
const img = document.getElementById('zzImage');
const fadeDuration = 50; // Duration for fade in/out in milliseconds

    // Function to gradually change opacity
    function changeOpacity(element, start, end, duration, callback) {
        const increment = (end - start) / (duration / 5); // 50ms intervals
        let currentOpacity = start;

        function fade() {
            currentOpacity += increment;
            if ((increment > 0 && currentOpacity >= end) || (increment < 0 && currentOpacity <= end)) {
                currentOpacity = end;
            }
            element.style.opacity = currentOpacity;

            if (currentOpacity === end) {
                if (callback) callback();
            } else {
                setTimeout(fade, 5);
            }
        }

        fade();
    }

    function fadeOut(element, callback) {
        changeOpacity(element, 1, 0, fadeDuration, callback);
    }

    function fadeIn(element, newSrc) {
        element.src = newSrc;
        changeOpacity(element, 0, 1, fadeDuration);
    }




    // Hover effect
    exploringContainer.addEventListener('mouseover', function() {
        fadeOut(img, function() {
            fadeIn(img, 'images/zzdir.webp');
        });
		document.documentElement.zzexploringIcon.setProperty('background-color', textcol);
		document.documentElement.zzexploringIcon.setProperty('color', bgcol);
    });

    // Revert back to original image when not hovering
    exploringContainer.addEventListener('mouseout', function() {
        fadeOut(img, function() {
            fadeIn(img, 'images/zzonboarding.webp');
        });

    });

    // Click effect
    exploringContainer.addEventListener('click', function() {
        fadeOut(img, function() {
            const newSrc = img.src.includes('images/zzonboarding.webp') ? 'images/zzdir.webp' : 'images/zzonboarding.webp';
            fadeIn(img, newSrc);
        });
    });
	
	
	
	
	
	    // Hover effect
    eventContainer.addEventListener('mouseover', function() {
        fadeOut(img, function() {
            fadeIn(img, 'images/zzevent.webp');
        });
		document.documentElement.zzcalendarIcon.setProperty('background-color', textcol);
		document.documentElement.zzcalendarIcon.setProperty('color', bgcol);
    });

    // Revert back to original image when not hovering
    eventContainer.addEventListener('mouseout', function() {
        fadeOut(img, function() {
            fadeIn(img, 'images/zzonboarding.webp');
        });

    });

    // Click effect
    eventContainer.addEventListener('click', function() {
        fadeOut(img, function() {
            const newSrc = img.src.includes('images/zzonboarding.webp') ? 'images/zzevent.webp' : 'images/zzonboarding.webp';
            fadeIn(img, newSrc);
        });
    });
	
	
	
	
	
	
	
	    // Hover effect
    markContainer.addEventListener('mouseover', function() {
        fadeOut(img, function() {
            fadeIn(img, 'images/zzmarketplace.webp');
        });
		document.documentElement.zzmarketplaceIcon.setProperty('background-color', textcol);
		document.documentElement.zzmarketplaceIcon.setProperty('color', bgcol);
    });

    // Revert back to original image when not hovering
    markContainer.addEventListener('mouseout', function() {
        fadeOut(img, function() {
            fadeIn(img, 'images/zzonboarding.webp');
        });

    });

    // Click effect
    markContainer.addEventListener('click', function() {
        fadeOut(img, function() {
            const newSrc = img.src.includes('images/zzonboarding.webp') ? 'images/zzmarketplace.webp' : 'images/zzonboarding.webp';
            fadeIn(img, newSrc);
        });
    });
	
	
	
	
	
	
	    // Hover effect
    addContainer.addEventListener('mouseover', function() {
        fadeOut(img, function() {
            fadeIn(img, 'images/zzaddentry.webp');
        });
		document.documentElement.zzaddnewIcon.setProperty('background-color', textcol);
		document.documentElement.zzaddnewIcon.setProperty('color', bgcol);
    });

    // Revert back to original image when not hovering
    addContainer.addEventListener('mouseout', function() {
        fadeOut(img, function() {
            fadeIn(img, 'images/zzonboarding.webp');
        });

    });

    // Click effect
    addContainer.addEventListener('click', function() {
        fadeOut(img, function() {
            const newSrc = img.src.includes('images/zzonboarding.webp') ? 'images/zzaddentry.webp' : 'images/zzonboarding.webp';
            fadeIn(img, newSrc);
        });
    });
	
});
