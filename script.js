document.addEventListener('DOMContentLoaded', () => {
    // Button click and double-click
    const interactiveButton = document.getElementById('interactiveButton');
    interactiveButton.addEventListener('click', () => {
        interactiveButton.textContent = 'You clicked me!';
        interactiveButton.style.backgroundColor = 'lightgreen';
    });
    interactiveButton.addEventListener('dblclick', () => {
        interactiveButton.textContent = 'Double-clicked!';
        interactiveButton.style.backgroundColor = 'orange';
    });

    // Hover effect
    const hoverEffect = document.getElementById('hoverEffect');
    hoverEffect.addEventListener('mouseover', () => {
        hoverEffect.style.backgroundColor = 'lightblue';
        hoverEffect.textContent = 'You hovered over me!';
    });
    hoverEffect.addEventListener('mouseout', () => {
        hoverEffect.style.backgroundColor = '';
        hoverEffect.textContent = 'Hover over me!';
    });

    // Keypress detection
    const keypressInput = document.getElementById('keypressInput');
    keypressInput.addEventListener('keyup', (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    // Image gallery
    const images = [
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/31986829/pexels-photo-31986829/free-photo-of-close-up-of-brewing-coffee-with-pour-over-method.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ];
    let currentImageIndex = 0;
    const galleryImage = document.getElementById('galleryImage');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');

    // Set the initial image on page load
    galleryImage.src = images[currentImageIndex];
    galleryImage.classList.add('visible');

    // Function to update the image with a smooth transition
    function updateGalleryImage() {
        galleryImage.classList.remove('visible'); // Start fade-out
        setTimeout(() => {
            galleryImage.src = images[currentImageIndex]; // Change the image source
            galleryImage.classList.add('visible'); // Start fade-in
        }, 500); // Match the transition duration in CSS
    }

    // Event listeners for navigation buttons
    prevImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateGalleryImage();
    });

    nextImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateGalleryImage();
    });

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            tabContents.forEach((content) => {
                content.style.display = content.id === `tab-${tabId}` ? 'block' : 'none';
            });
        });
    });

    // Form validation
    const myForm = document.getElementById('myForm');
    const formFeedback = document.getElementById('formFeedback');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email.includes('@')) {
            formFeedback.textContent = 'Please enter a valid email address.';
            formFeedback.style.color = 'red';
            return;
        }

        if (password.length < 8) {
            formFeedback.textContent = 'Password must be at least 8 characters long.';
            formFeedback.style.color = 'red';
            return;
        }

        formFeedback.textContent = 'Form submitted successfully!';
        formFeedback.style.color = 'green';
    });

    // Change My Color button functionality
    const colorChangeButton = document.getElementById('colorChangeButton');
    colorChangeButton.addEventListener('click', () => {
        // Change the button's background color to a random color
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        colorChangeButton.style.backgroundColor = randomColor;
        colorChangeButton.textContent = `Color: ${randomColor}`;
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Close all other accordion contents
            document.querySelectorAll('.accordion-content').forEach((item) => {
                if (item !== content) {
                    item.classList.remove('open');
                }
            });

            // Toggle the current accordion content
            content.classList.toggle('open');
        });
    });

    // Toggle dark mode
    const toggleModeButton = document.getElementById('toggleModeButton');
    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});