document.addEventListener('DOMContentLoaded', function() {
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bigDataElements = entry.target.querySelectorAll('.big_data');
                bigDataElements.forEach(element => {
                    const endValue = parseFloat(element.getAttribute('data-count'));
                    animateValue(element, 0, endValue, 2000);
                });
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('#numbers .card');
    cards.forEach(card => {
        observer.observe(card);
    });
});
