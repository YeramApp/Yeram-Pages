document.addEventListener("DOMContentLoaded", function () {
    const sliderItems = document.querySelectorAll(".slider-item");
    const indicatorsContainer = document.querySelector(".indicators");
    const indicators = [];

    // Filter out cloned elements (usually marked with a specific class, like 'bx-clone')
    const realSliderItems = Array.from(sliderItems).filter(item => !item.classList.contains('bx-clone'));

    // Create an indicator for each real slider item (excluding clones)
    realSliderItems.forEach((item, index) => {
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        indicatorsContainer.appendChild(indicator);
        indicators.push(indicator);
    });

    // Function to update the active indicator based on the current visible slide
    function updateIndicator() {
        realSliderItems.forEach((item, index) => {
            if (item.getAttribute("aria-hidden") === "false") {
                indicators.forEach(ind => ind.classList.remove("active"));
                indicators[index].classList.add("active");
            }
        });
    }

    // Initial update to set the correct indicator on page load
    updateIndicator();

    // Observe changes to the aria-hidden attribute
    const observer = new MutationObserver(updateIndicator);
    sliderItems.forEach(item => {
        observer.observe(item, {
            attributes: true, // Observe attribute changes
            attributeFilter: ['aria-hidden'] // Specifically observe changes to aria-hidden
        });
    });

    // Optional: if there are buttons or other mechanisms for changing the slider, update the indicator on click
    document.querySelectorAll('.your-next-button, .your-prev-button').forEach(button => {
        button.addEventListener('click', updateIndicator);
    });

    // If your slider changes automatically, you might also want to update based on intervals
    setInterval(updateIndicator, 5000); // Adjust the interval as needed
});
