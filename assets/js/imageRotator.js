function getRandomImage() {
    // Array of image paths
    const images = [
        './assets/images/pinkSkyWater.jpeg',
        './assets/images/BeachBridge.jpeg', 
        './assets/images/SagouineSky.jpeg',
        './assets/images/ConfedBridge.jpeg',
        './assets/images/MammatusPink.jpeg',
        './assets/images/BeachKite.jpeg' 


        // Add more image paths as needed
    ];
    
    // Get random index
    const randomIndex = Math.floor(Math.random() * images.length);
    
    // Update the image source
    const headerImage = document.getElementById('headerImage');
    if (headerImage) {
        headerImage.src = images[randomIndex];
        headerImage.alt = images[randomIndex].split('/').pop().split('.')[0];
    }
}

// Run when page loads
window.addEventListener('load', getRandomImage);