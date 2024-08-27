/*const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.documentElement.style.setProperty('--background', 'red');
})*/


const checkbox = document.getElementById("checkbox");

// Function to update the background color based on checkbox state
const updateBackgroundColor = () => {
    if (checkbox.checked) {
        document.documentElement.style.setProperty('--textColor', '#FFFFFF');
		document.documentElement.style.setProperty('--textColorLight', '#B0B0B0');
		document.documentElement.style.setProperty('--textColorDark', '#E0E0E0');
		document.documentElement.style.setProperty('--background', '#121212');
		document.documentElement.style.setProperty('--backgroundLight', '#1F1F1F');
    } else {
        document.documentElement.style.setProperty('--textColor', '#000000');
		document.documentElement.style.setProperty('--textColorLight', '#818992');
		document.documentElement.style.setProperty('--textColorDark', '#333');
		document.documentElement.style.setProperty('--background', '#ffffff');
		document.documentElement.style.setProperty('--backgroundLight', '#e2e2e2');
    }
};

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Set the checkbox to be checked on page load
checkbox.checked = prefersDarkScheme;

// Update the background color based on the initial checkbox state
updateBackgroundColor();

// Add event listener to change background color when checkbox state changes
checkbox.addEventListener("change", updateBackgroundColor);

