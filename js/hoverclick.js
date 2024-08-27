/*
const exploringContainer = document.getElementById('zzexploringField');
const calendarContainer = document.getElementById('zzcalendarField');
const marketplaceContainer = document.getElementById('zzmarketplaceField');
const addnewContainer = document.getElementById('zzaddnewField');
const img = document.getElementById('zzImage');

// Hover effect
calendarContainer.addEventListener('mouseover', function() {
    img.src = 'images/test.png';
});

// Revert back to original image when not hovering
calendarContainer.addEventListener('mouseout', function() {
    img.src = 'images/iphone-screen-with-shadow.png';
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
            fadeIn(img, 'images/test.png');
        });
		document.documentElement.zzexploringIcon.setProperty('background-color', textcol);
		document.documentElement.zzexploringIcon.setProperty('color', bgcol);
    });

    // Revert back to original image when not hovering
    exploringContainer.addEventListener('mouseout', function() {
        fadeOut(img, function() {
            fadeIn(img, 'images/iphone-screen-with-shadow.png');
        });

    });

    // Click effect
    exploringContainer.addEventListener('click', function() {
        fadeOut(img, function() {
            const newSrc = img.src.includes('images/test.png') ? 'images/iphone-screen-with-shadow.png' : 'images/test.png';
            fadeIn(img, newSrc);
        });
    });
	
});
