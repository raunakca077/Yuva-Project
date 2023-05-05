// DOM Elements

const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const calendarButton = document.getElementById('show-calendar');
const calendarContainer = document.getElementById('calendar-container');
const form = document.getElementById('attendance-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

// Navigation Active State
window.addEventListener('scroll', () => {
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
			const sectionId = section.getAttribute('id');
			const activeLink = nav.querySelector(`a[href="#${sectionId}"]`);
			nav.querySelectorAll('a').forEach(link => link.classList.remove('active'));
			activeLink.classList.add('active');
		}
	})
});

// Event Calendar
calendarButton.addEventListener('click', () => {
	if (calendarContainer.style.display === 'none') {
		calendarContainer.style.display = 'block';
		calendarButton.innerText = 'Hide Calendar';
	} else {
		calendarContainer.style.display = 'none';
		calendarButton.innerText = 'Show Calendar';
	}
});

// Attendance Form
window.addEventListener('load', function() {
    // your code here
 
  
form.addEventListener('submit', e => {
	e.preventDefault();
	if (nameInput.value && emailInput.value && passwordInput.value) {
		alert('Attendance submitted successfully!');
		form.reset();
	} else {
		alert('Please fill in all fields.');
	}
});
});