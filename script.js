document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // Function to access the user's camera
    function startCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
                video.play();
                // Capture the face immediately after the camera starts
                video.onloadmetadata = function() {
                    captureFace();
                };
            })
            .catch(err => {
                console.error('Error accessing the camera:', err);
                alert('Please allow camera access to proceed.');
            });
    }

    // Function to capture the face from the video feed
    function captureFace() {
        context.drawImage(video, 0, 0, 640, 480);
        const imageData = canvas.toDataURL('image/png');
        console.log('Captured Face:', imageData);
        // Here you can send the imageData to your server for processing
        alert('Face captured successfully!');
    }

    // Start the camera when the page loads
    startCamera();
});