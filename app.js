const readMoreLinks = document.querySelectorAll('.read-more');
const popupMenu = document.getElementById('popup-menu');
const closePopupBtn = document.querySelector('.close-popup-btn');
const closePopupIcon = document.querySelector('.popup-content .close-popup-icon');
console.log(closePopupBtn);
console.log(closePopupIcon);
const projectNamePopup = document.querySelector('#popup-menu .project-name');
const projectImagePopup = document.querySelector('#popup-menu .project-image');
const projectDescriptionPopup = document.querySelector('#popup-menu .project-description');

// Function to toggle the overlay
function toggleOverlay() {
    document.body.classList.toggle('overlay-active');
}

// Function to toggle the popup menu
function togglePopupMenu() {
    popupMenu.classList.toggle('active');
}

// Function to show popup menu with project details
function showPopupMenu(projectName, projectImageSrc, projectDescription) {
    projectNamePopup.textContent = projectName;
    projectImagePopup.src = projectImageSrc;
    projectDescriptionPopup.textContent = projectDescription;
    togglePopupMenu();
    toggleOverlay();
}

// Add click event listeners to "Read more" links
readMoreLinks.forEach(link => {
    link.addEventListener('click', () => {
        const projectCard = link.closest('.project-card');
        const projectName = projectCard.querySelector('.project-card h3').textContent;
        console.log(projectName);
        const projectImageSrc = projectCard.querySelector('.project-image img').src;
        console.log(projectImageSrc);
        const projectDescription = projectCard.querySelector('.project-card p').textContent;
        console.log(projectDescription);
        // Show the popup menu with project details
        showPopupMenu(projectName, projectImageSrc, projectDescription);
    });
});

// Add click event listener to close popup button
closePopupBtn.addEventListener('click', () => {
    // Hide the popup menu
    togglePopupMenu();
    // Remove overlay from background
    toggleOverlay();
});

// JavaScript for toggling the dropdown menu
function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("active");
}