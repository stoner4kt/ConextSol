// --- Modal/Form JavaScript ---
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const openBtnHeader = document.getElementById('openContactModal');
    const openBtnHero = document.getElementById('openContactModalHero');
    const closeBtn = document.getElementById('closeContactModal');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling the background
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Event listeners
    if (openBtnHeader) openBtnHeader.addEventListener('click', openModal);
    if (openBtnHero) openBtnHero.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- Scroll Animation JavaScript ---
    const faders = document.querySelectorAll('.advantage-item, .hero-content, .analysis-content');
    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.style.opacity = 0;
        fader.style.transform = 'translateY(20px)';
        fader.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        appearOnScroll.observe(fader);
    });
}); 