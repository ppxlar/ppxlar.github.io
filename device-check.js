// Function to dynamically load Particle.js
function loadParticleJS() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = () => {
        particlesJS.load('particles-js', 'particlesjs-config.json', () => {
            console.log('Particle.js config loaded.');
        });
    };
    document.head.appendChild(script);
}

// Function to set up event listeners for the buttons
function setupButtons() {
    const highEndButton = document.getElementById('high-end');
    const potatoButton = document.getElementById('potato');
    const particlesContainer = document.getElementById('particles-js');

    highEndButton.addEventListener('click', () => {
        localStorage.setItem('graphicsSetting', 'high-end');
        particlesContainer.style.display = 'block'; // Show Particle.js container
        loadParticleJS(); // Load high-end graphics
    });

    potatoButton.addEventListener('click', () => {
        localStorage.setItem('graphicsSetting', 'potato');
        particlesContainer.style.display = 'none'; // Hide Particle.js container
        console.log('Potato graphics selected. Particle.js not loaded.');
    });
}

// Function to initialize the page based on the user's choice
function initialize() {
    const graphicsSetting = localStorage.getItem('graphicsSetting');
    const particlesContainer = document.getElementById('particles-js');

    if (graphicsSetting === 'high-end') {
        particlesContainer.style.display = 'block'; // Show Particle.js container
        loadParticleJS(); // Load high-end graphics
    } else if (graphicsSetting === 'potato') {
        particlesContainer.style.display = 'none'; // Hide Particle.js container
        console.log('Potato graphics setting detected. Particle.js not loaded.');
    } else {
        setupButtons(); // Show buttons if no preference is set
    }
}

// Run the initialization
initialize();
