// ============================================
// UMADE MAIN SCRIPT (for index.html)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('umade_cart')) || [];

    function updateCartCount() {
        const count = document.getElementById('cartCount');
        if (count) {
            const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
            count.textContent = total;
        }
    }

    // Cart icon click
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            const sidebar = document.getElementById('cartSidebar');
            const overlay = document.getElementById('cartOverlay');
            if (sidebar && overlay) {
                sidebar.classList.add('active');
                overlay.classList.add('active');
            }
        });
    }

    // Close cart
    const closeCartBtn = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            const sidebar = document.getElementById('cartSidebar');
            if (sidebar) sidebar.classList.remove('active');
            if (cartOverlay) cartOverlay.classList.remove('active');
        });
    }
    if (cartOverlay) {
        cartOverlay.addEventListener('click', () => {
            const sidebar = document.getElementById('cartSidebar');
            if (sidebar) sidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        });
    }

    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // User dropdown
    const userIcon = document.getElementById('userIcon');
    const userDropdown = document.getElementById('userDropdown');
    if (userIcon && userDropdown) {
        userIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!userIcon.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('active');
            }
        });
    }

    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const current = document.querySelector('.lang-current');
            if (current) {
                current.textContent = current.textContent === 'EN' ? 'TA' : 'EN';
            }
            // Toggle body class for Tamil
            document.body.classList.toggle('tamil');
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Thank you for subscribing! Check your email for 15% off. 🌿');
            newsletterForm.reset();
        });
    }

    // Countdown timer
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    if (hoursEl && minutesEl && secondsEl) {
        let totalSeconds = 23 * 3600 + 45 * 60 + 12;

        setInterval(() => {
            totalSeconds--;
            if (totalSeconds < 0) totalSeconds = 24 * 3600;

            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;

            hoursEl.textContent = String(h).padStart(2, '0');
            minutesEl.textContent = String(m).padStart(2, '0');
            secondsEl.textContent = String(s).padStart(2, '0');
        }, 1000);
    }

    // Testimonials slider dots
    const dots = document.querySelectorAll('.slider-dots .dot');
    if (dots.length > 0) {
        let currentSlide = 0;
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
            });
        });

        // Auto slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % dots.length;
            dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        }, 5000);
    }

    updateCartCount();
});

function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
