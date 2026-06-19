// ============================================
// UMADE - Main App JavaScript
// ============================================

// Sample Products Data (Millets Focus)
const products = [
    { id: 1, name: "Organic Foxtail Millet (Thinai) 500g", tamilName: "கரிம தினை 500g", price: 89, oldPrice: 110, category: "millets", origin: "Tamil Nadu", badge: "organic", emoji: "🌾" },
    { id: 2, name: "Organic Pearl Millet (Bajra/Kambu) 1kg", tamilName: "கரிம கம்பு 1kg", price: 129, oldPrice: 155, category: "millets", origin: "Rajasthan", badge: "organic", emoji: "🌾" },
    { id: 3, name: "Organic Finger Millet (Ragi) 500g", tamilName: "கரிம ராகி 500g", price: 79, oldPrice: 95, category: "millets", origin: "Karnataka", badge: "bestseller", emoji: "🌾" },
    { id: 4, name: "Organic Kodo Millet (Varagu) 500g", tamilName: "கரிம வரகு 500g", price: 85, oldPrice: 100, category: "millets", origin: "Madhya Pradesh", badge: "organic", emoji: "🌾" },
    { id: 5, name: "Organic Little Millet (Samai) 500g", tamilName: "கரிம சாமை 500g", price: 95, oldPrice: 115, category: "millets", origin: "Andhra Pradesh", badge: "organic", emoji: "🌾" },
    { id: 6, name: "Organic Barnyard Millet (Kuthiraivali) 500g", tamilName: "கரிம குதிரைவாலி 500g", price: 99, oldPrice: 120, category: "millets", origin: "Uttarakhand", badge: "new", emoji: "🌾" },
    { id: 7, name: "Organic Toor Dal (Arhar) 1kg", tamilName: "கரிம துவரம் பருப்பு 1kg", price: 149, oldPrice: 175, category: "pulses", origin: "Madhya Pradesh", badge: "organic", emoji: "🫘" },
    { id: 8, name: "Organic Moong Dal 1kg", tamilName: "கரிம பாசி பருப்பு 1kg", price: 139, oldPrice: 165, category: "pulses", origin: "Rajasthan", badge: "organic", emoji: "🫘" },
    { id: 9, name: "Organic Brown Rice 1kg", tamilName: "கரிம பழுப்பு அரிசி 1kg", price: 119, oldPrice: 140, category: "rice", origin: "Tamil Nadu", badge: "organic", emoji: "🍚" },
    { id: 10, name: "Organic Red Rice 1kg", tamilName: "கரிம சிவப்பு அரிசி 1kg", price: 109, oldPrice: 130, category: "rice", origin: "Kerala", badge: "organic", emoji: "🍚" },
    { id: 11, name: "Organic Turmeric Powder 250g", tamilName: "கரிம மஞ்சள் தூள் 250g", price: 79, oldPrice: 95, category: "spices", origin: "Tamil Nadu", badge: "bestseller", emoji: "🌶️" },
    { id: 12, name: "Organic Cold-Pressed Coconut Oil 500ml", tamilName: "கரிம தேங்காய் எண்ணெய் 500ml", price: 189, oldPrice: 220, category: "oils", origin: "Kerala", badge: "organic", emoji: "🫒" },
];

// Cart State
let cart = JSON.parse(localStorage.getItem('umade_cart')) || [];

// Language State
let currentLang = localStorage.getItem('umade_lang') || 'en';

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    renderProducts();
    updateCartCount();
    initCartSidebar();
    initProductModal();
    initFilters();
    initSearch();
    initTestimonials();
    initCountdown();
    initNavbar();
    initNewsletter();
    applyLanguage();
}

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <span style="font-size: 4rem;">${product.emoji}</span>
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-name" data-tamil="${product.tamilName}">${product.name}</div>
                <div class="product-origin">${product.origin}</div>
                <div class="product-price-row">
                    <span class="product-price">₹${product.price}</span>
                    <span class="product-old-price">₹${product.oldPrice}</span>
                </div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-basket"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// ============================================
// CART FUNCTIONALITY
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCartCount();
    showToast('Item added to cart!');

    // Open cart sidebar
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    if (sidebar && overlay) {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }
    renderCartItems();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
}

function updateQty(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCartCount();
    renderCartItems();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    renderCartItems();
}

function saveCart() {
    localStorage.setItem('umade_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = document.getElementById('cartCount');
    if (count) {
        const total = cart.reduce((sum, item) => sum + item.qty, 0);
        count.textContent = total;
    }
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
                <i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.3;"></i>
                <p>Your cart is empty</p>
                <a href="#products" class="btn btn-primary" style="margin-top: 16px;" onclick="closeCart()">Shop Now</a>
            </div>
        `;
        if (totalEl) totalEl.textContent = '₹0.00';
        return;
    }

    let total = 0;
    container.innerHTML = cart.map(item => {
        total += item.price * item.qty;
        return `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');

    if (totalEl) totalEl.textContent = '₹' + total.toFixed(2);
}

function initCartSidebar() {
    const cartIcon = document.getElementById('cartIcon');
    const closeBtn = document.getElementById('closeCart');
    const overlay = document.getElementById('cartOverlay');

    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            document.getElementById('cartSidebar').classList.add('active');
            overlay.classList.add('active');
            renderCartItems();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeCart);
    }

    if (overlay) {
        overlay.addEventListener('click', closeCart);
    }
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

// ============================================
// PRODUCT MODAL
// ============================================
function initProductModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('closeModal');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 200px; background: var(--primary-lighter); border-radius: var(--radius); display: flex; align-items: center; justify-content: center; font-size: 6rem; min-height: 250px;">
                ${product.emoji}
            </div>
            <div style="flex: 1; min-width: 250px;">
                <h2 style="font-family: var(--font-display); margin-bottom: 8px;">${product.name}</h2>
                <p style="color: var(--text-muted); margin-bottom: 16px;">Origin: ${product.origin}</p>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                    <span style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">₹${product.price}</span>
                    <span style="text-decoration: line-through; color: var(--text-muted);">₹${product.oldPrice}</span>
                </div>
                <p style="color: var(--text-light); margin-bottom: 24px; line-height: 1.7;">
                    Premium quality organic ${product.category} sourced directly from certified farms in ${product.origin}. 
                    FSSAI certified, pesticide-free, and packed with nutrients.
                </p>
                <button class="btn btn-primary btn-full" onclick="addToCart(${product.id}); document.getElementById('productModal').classList.remove('active');">
                    <i class="fas fa-shopping-basket"></i> Add to Cart
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// ============================================
// FILTERS
// ============================================
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });
}

// ============================================
// SEARCH
// ============================================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const grid = document.getElementById('productsGrid');
        if (!grid) return;

        if (!query) {
            renderProducts();
            return;
        }

        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.tamilName.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);"><i class="fas fa-search" style="font-size: 2rem; margin-bottom: 12px; opacity: 0.3;"></i><p>No products found</p></div>`;
            return;
        }

        grid.innerHTML = filtered.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <span style="font-size: 4rem;">${product.emoji}</span>
                    ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-name" data-tamil="${product.tamilName}">${product.name}</div>
                    <div class="product-origin">${product.origin}</div>
                    <div class="product-price-row">
                        <span class="product-price">₹${product.price}</span>
                        <span class="product-old-price">₹${product.oldPrice}</span>
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-basket"></i> Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    });
}

// ============================================
// TESTIMONIALS SLIDER
// ============================================
function initTestimonials() {
    const dots = document.querySelectorAll('.slider-dots .dot');
    const slider = document.getElementById('testimonialsSlider');
    if (!slider || dots.length === 0) return;

    let currentSlide = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    function updateSlider() {
        dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        const cards = slider.querySelectorAll('.testimonial-card');
        cards.forEach((card, i) => {
            card.style.opacity = i === currentSlide ? '1' : '0.3';
            card.style.transform = i === currentSlide ? 'scale(1)' : 'scale(0.95)';
        });
    }

    // Auto slide
    setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        updateSlider();
    }, 5000);
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function initCountdown() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    if (!hoursEl || !minutesEl || !secondsEl) return;

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

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

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
        userIcon.addEventListener('click', () => {
            userDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!userIcon.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('active');
            }
        });
    }
}

// ============================================
// NEWSLETTER
// ============================================
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you for subscribing!');
        form.reset();
    });
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toastMessage');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// LANGUAGE TOGGLE
// ============================================
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ta' : 'en';
    localStorage.setItem('umade_lang', currentLang);
    applyLanguage();

    const langCurrent = document.querySelector('.lang-current');
    if (langCurrent) {
        langCurrent.textContent = currentLang === 'en' ? 'EN' : 'TA';
    }
}

function applyLanguage() {
    const body = document.body;
    const langCurrent = document.querySelector('.lang-current');

    if (currentLang === 'ta') {
        body.classList.add('tamil');
    } else {
        body.classList.remove('tamil');
    }

    if (langCurrent) {
        langCurrent.textContent = currentLang === 'en' ? 'EN' : 'TA';
    }

    // Translate elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Translate product names
    document.querySelectorAll('[data-tamil]').forEach(el => {
        if (currentLang === 'ta') {
            el.textContent = el.getAttribute('data-tamil');
        }
    });
}

// Translations object (will be extended by lang.js)
const translations = {
    en: {},
    ta: {}
};
