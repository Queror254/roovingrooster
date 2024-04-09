document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling function
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offset = element.offsetTop; // Get offset from top of the target element
            const duration = 500; // Adjust duration (in milliseconds) as needed for slower scrolling
            const startY = window.pageYOffset; // Get current scroll position
            const distance = offset - startY; // Calculate distance to scroll
            const startTime = performance.now(); // Get current time

            // Animation function
            function scrollAnimation(currentTime) {
                const elapsedTime = currentTime - startTime;
                const scrollProgress = Math.min(elapsedTime / duration, 1); // Limit progress to max 1
                const easedProgress = ease(scrollProgress); // Apply easing function
                window.scrollTo(0, startY + (distance * easedProgress)); // Scroll based on eased progress
                if (elapsedTime < duration) {
                    requestAnimationFrame(scrollAnimation); // Continue animation until duration is reached
                }
            }

            // Easing function (you can use different easing functions for different scroll effects)
            function ease(t) {
                return t<.5 ? 2*t*t : -1+(4-2*t)*t; // Example of easeInOutQuad easing function
            }

            // Start animation
            requestAnimationFrame(scrollAnimation);
        } else {
            console.error('Target element not found:', target);
        }
    }

    // Attach smooth scrolling to navigation links
    document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
});


