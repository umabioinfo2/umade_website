// ===== Umade - Organic Food & Groceries Delivery =====
// Main JavaScript Application

// ===== Product Data =====
const products = [
    // ===== ORGANIC FOOD =====
    // 1. Organic Millets
    {
        id: 1,
        name: "Organic Foxtail Millet (Thinai) 500g",
        category: "millets",
        price: 89,
        oldPrice: 119,
        rating: 4.8,
        reviews: 156,
        emoji: "🌾",
        badge: "organic",
        description: "Premium organic foxtail millet (Thinai) from Tamil Nadu farms. High in fiber, protein, and iron. Perfect for porridge, upma, or dosa.",
        features: ["FSSAI Certified", "Tamil Nadu Sourced", "High Fiber", "Gluten-Free"]
    },
    {
        id: 2,
        name: "Organic Pearl Millet (Bajra/Kambu) 1kg",
        category: "millets",
        price: 129,
        oldPrice: 159,
        rating: 4.7,
        reviews: 98,
        emoji: "🌾",
        badge: "organic",
        description: "Nutrient-dense organic pearl millet (Bajra/Kambu) from Rajasthan. Rich in iron, magnesium, and calcium. Ideal for rotis, khichdi, or porridge.",
        features: ["Rajasthan Sourced", "Iron Rich", "Diabetic Friendly", "Farm Fresh"]
    },
    {
        id: 3,
        name: "Organic Finger Millet (Ragi) 500g",
        category: "millets",
        price: 79,
        oldPrice: 99,
        rating: 4.9,
        reviews: 210,
        emoji: "🌾",
        badge: "bestseller",
        description: "Calcium-rich organic finger millet (Ragi) from Karnataka. 10x more calcium than wheat. Perfect for idli, dosa, porridge, or malt.",
        features: ["Karnataka Sourced", "Calcium Rich", "Weight Management", "Diabetic Friendly"]
    },
    {
        id: 4,
        name: "Organic Mixed Millets Combo (2kg)",
        category: "millets",
        price: 499,
        oldPrice: 649,
        rating: 4.9,
        reviews: 89,
        emoji: "🌾",
        badge: "bestseller",
        description: "A healthy combo pack with Foxtail, Pearl, Finger, and Little millets (500g each). Perfect for trying all varieties. Save ₹150!",
        features: ["4 Varieties", "Bulk Savings", "Variety Pack", "Gift Ready"]
    },
    // 2. Organic Sweets
    {
        id: 5,
        name: "Organic Jaggery Laddu (250g)",
        category: "sweets",
        price: 149,
        oldPrice: 199,
        rating: 4.8,
        reviews: 134,
        emoji: "🍬",
        badge: "organic",
        description: "Traditional organic jaggery laddus made with desi ghee, peanuts, and sesame seeds. No refined sugar, no preservatives. Perfect healthy sweet.",
        features: ["No Refined Sugar", "Desi Ghee", "Traditional Recipe", "Handmade"]
    },
    {
        id: 6,
        name: "Organic Dry Fruit Halwa (500g)",
        category: "sweets",
        price: 349,
        oldPrice: 449,
        rating: 4.7,
        reviews: 87,
        emoji: "🍬",
        badge: "new",
        description: "Rich organic dry fruit halwa with almonds, cashews, and pistachios. Sweetened with organic jaggery. Perfect for festivals and special occasions.",
        features: ["Premium Dry Fruits", "Jaggery Sweetened", "No Preservatives", "Festive Special"]
    },
    {
        id: 7,
        name: "Organic Millet Cookies (200g)",
        category: "sweets",
        price: 99,
        oldPrice: null,
        rating: 4.6,
        reviews: 112,
        emoji: "🍬",
        badge: "organic",
        description: "Crunchy organic millet cookies made with ragi flour and jaggery. Perfect tea-time snack for kids and adults. No maida, no refined sugar.",
        features: ["Ragi Flour", "Jaggery Sweetened", "No Maida", "Kids Friendly"]
    },
    // 3. Organic Soaps
    {
        id: 8,
        name: "Organic Neem & Tulsi Soap (100g)",
        category: "soaps",
        price: 79,
        oldPrice: 99,
        rating: 4.8,
        reviews: 245,
        emoji: "🧼",
        badge: "organic",
        description: "Handmade organic soap with neem, tulsi, and coconut oil. Antibacterial, anti-fungal, and perfect for acne-prone skin. No SLS, no parabens.",
        features: ["Handmade", "Neem & Tulsi", "No SLS", "No Parabens"]
    },
    {
        id: 9,
        name: "Organic Sandalwood Soap (100g)",
        category: "soaps",
        price: 89,
        oldPrice: null,
        rating: 4.7,
        reviews: 178,
        emoji: "🧼",
        badge: "bestseller",
        description: "Luxurious organic sandalwood soap with pure sandalwood oil and shea butter. Moisturizing, fragrant, and perfect for daily use.",
        features: ["Pure Sandalwood", "Shea Butter", "Moisturizing", "Handmade"]
    },
    {
        id: 10,
        name: "Organic Aloe Vera Soap (100g)",
        category: "soaps",
        price: 69,
        oldPrice: 89,
        rating: 4.6,
        reviews: 156,
        emoji: "🧼",
        badge: "sale",
        description: "Soothing organic aloe vera soap with real aloe extract and vitamin E. Gentle on skin, perfect for sensitive skin types. No artificial fragrance.",
        features: ["Real Aloe Extract", "Vitamin E", "Sensitive Skin", "No Artificial Fragrance"]
    },
    // 4. Organic Shampoo
    {
        id: 11,
        name: "Organic Amla & Shikakai Shampoo (200ml)",
        category: "shampoo",
        price: 199,
        oldPrice: 249,
        rating: 4.8,
        reviews: 312,
        emoji: "🧴",
        badge: "organic",
        description: "Traditional organic shampoo with amla, shikakai, and reetha. Strengthens hair roots, prevents dandruff, and adds natural shine. No SLS, no parabens.",
        features: ["Amla & Shikakai", "No SLS", "No Parabens", "Hair Strengthening"]
    },
    {
        id: 12,
        name: "Organic Henna & Brahmi Shampoo (200ml)",
        category: "shampoo",
        price: 229,
        oldPrice: 299,
        rating: 4.7,
        reviews: 189,
        emoji: "🧴",
        badge: "new",
        description: "Nourishing organic shampoo with henna, brahmi, and hibiscus. Natural conditioning, color protection, and scalp nourishment. Safe for colored hair.",
        features: ["Henna & Brahmi", "Color Protection", "Natural Conditioning", "Scalp Nourishment"]
    },
    // 5. Organic Herbs Food Powder
    {
        id: 13,
        name: "Organic Moringa Leaf Powder (100g)",
        category: "herbs",
        price: 149,
        oldPrice: 199,
        rating: 4.9,
        reviews: 245,
        emoji: "🌿",
        badge: "bestseller",
        description: "Superfood organic moringa leaf powder from Tamil Nadu. 7x more vitamin C than oranges, 4x more calcium than milk. Add to smoothies, soups, or dal.",
        features: ["Tamil Nadu Sourced", "Superfood", "7x Vitamin C", "4x Calcium"]
    },
    {
        id: 14,
        name: "Organic Ashwagandha Powder (100g)",
        category: "herbs",
        price: 179,
        oldPrice: 229,
        rating: 4.8,
        reviews: 178,
        emoji: "🌿",
        badge: "organic",
        description: "Premium organic ashwagandha powder from Madhya Pradesh. Adaptogenic herb for stress relief, energy, and immunity. Traditional Ayurvedic remedy.",
        features: ["Madhya Pradesh Sourced", "Adaptogenic", "Stress Relief", "Ayurvedic"]
    },
    {
        id: 15,
        name: "Organic Curry Leaf Powder (100g)",
        category: "herbs",
        price: 89,
        oldPrice: null,
        rating: 4.7,
        reviews: 134,
        emoji: "🌿",
        badge: "new",
        description: "Aromatic organic curry leaf powder from Karnataka. Rich in iron, fiber, and antioxidants. Perfect for hair care, chutneys, and seasoning.",
        features: ["Karnataka Sourced", "Iron Rich", "Hair Care", "Antioxidant"]
    },
    // 6. Organic Biscuits
    {
        id: 16,
        name: "Organic Ragi Biscuits (150g)",
        category: "biscuits",
        price: 59,
        oldPrice: 79,
        rating: 4.8,
        reviews: 312,
        emoji: "🍪",
        badge: "organic",
        description: "Crunchy organic ragi biscuits sweetened with jaggery. High in calcium, fiber, and protein. Perfect healthy snack for kids and adults. No maida.",
        features: ["Ragi Flour", "Jaggery Sweetened", "No Maida", "Kids Friendly"]
    },
    {
        id: 17,
        name: "Organic Multi-Grain Biscuits (150g)",
        category: "biscuits",
        price: 69,
        oldPrice: 89,
        rating: 4.6,
        reviews: 189,
        emoji: "🍪",
        badge: "sale",
        description: "Nutritious organic multi-grain biscuits with wheat, ragi, jowar, and bajra. Sweetened with honey. Perfect tea-time companion. No refined flour.",
        features: ["Multi-Grain", "Honey Sweetened", "No Refined Flour", "Tea-Time Snack"]
    },

    // ===== GROCERIES =====
    // Pulses
    {
        id: 18,
        name: "Organic Toor Dal (Arhar) 1kg",
        category: "pulses",
        price: 149,
        oldPrice: 189,
        rating: 4.8,
        reviews: 245,
        emoji: "🫘",
        badge: "bestseller",
        description: "Premium organic toor dal (Arhar/Tur) from Maharashtra farms. Rich in protein, fiber, and essential amino acids. Perfect for sambar, dal tadka.",
        features: ["Maharashtra Sourced", "Protein Rich", "Unpolished", "Farm Fresh"]
    },
    {
        id: 19,
        name: "Organic Moong Dal (Green Gram) 500g",
        category: "pulses",
        price: 89,
        oldPrice: null,
        rating: 4.9,
        reviews: 178,
        emoji: "🫘",
        badge: "organic",
        description: "Light and nutritious organic moong dal from Rajasthan. Easy to digest, high in protein, and perfect for khichdi, sprouts, or dal.",
        features: ["Rajasthan Sourced", "Easy Digestion", "High Protein", "Sprouting Grade"]
    },
    // Rice
    {
        id: 20,
        name: "Organic Brown Basmati Rice 1kg",
        category: "rice",
        price: 199,
        oldPrice: 249,
        rating: 4.8,
        reviews: 156,
        emoji: "🍚",
        badge: "new",
        description: "Aromatic organic brown basmati rice from Punjab. Whole grain with bran intact. Low glycemic index, perfect for biryanis and pulao.",
        features: ["Punjab Sourced", "Whole Grain", "Low Glycemic", "Aromatic"]
    },
    {
        id: 21,
        name: "Organic Red Rice (Matta) 1kg",
        category: "rice",
        price: 129,
        oldPrice: 159,
        rating: 4.7,
        reviews: 134,
        emoji: "🍚",
        badge: "sale",
        description: "Nutrient-rich organic red rice (Matta) from Kerala. High in fiber, antioxidants, and minerals. Traditional South Indian staple.",
        features: ["Kerala Sourced", "Antioxidant Rich", "High Fiber", "Traditional"]
    },
    // Spices
    {
        id: 22,
        name: "Organic Turmeric Powder (Haldi) 250g",
        category: "spices",
        price: 79,
        oldPrice: null,
        rating: 4.9,
        reviews: 312,
        emoji: "🌶️",
        badge: "organic",
        description: "Pure organic turmeric powder from Erode, Tamil Nadu. High curcumin content (5%+). Anti-inflammatory, antioxidant powerhouse.",
        features: ["Erode Sourced", "High Curcumin", "Anti-Inflammatory", "Lab Tested"]
    },
    {
        id: 23,
        name: "Organic Red Chilli Powder 250g",
        category: "spices",
        price: 89,
        oldPrice: 109,
        rating: 4.8,
        reviews: 245,
        emoji: "🌶️",
        badge: "bestseller",
        description: "Fiery organic red chilli powder from Guntur, Andhra Pradesh. Rich in capsaicin, vitamin C, and antioxidants. Perfect for curries and pickles.",
        features: ["Guntur Sourced", "High Capsaicin", "Vitamin C Rich", "Pickle Grade"]
    },
    // Oils
    {
        id: 24,
        name: "Cold-Pressed Groundnut Oil 1L",
        category: "oils",
        price: 249,
        oldPrice: 299,
        rating: 4.8,
        reviews: 189,
        emoji: "🫒",
        badge: "new",
        description: "Traditional cold-pressed groundnut oil from Gujarat. Wood-pressed at low temperature to retain nutrients. Rich in monounsaturated fats.",
        features: ["Gujarat Sourced", "Wood Pressed", "Cold Pressed", "No Refining"]
    },
    {
        id: 25,
        name: "Cold-Pressed Coconut Oil 1L",
        category: "oils",
        price: 299,
        oldPrice: 349,
        rating: 4.9,
        reviews: 267,
        emoji: "🫒",
        badge: "bestseller",
        description: "Pure cold-pressed coconut oil from Kerala. Virgin grade, unrefined, and perfect for cooking, hair care, and skin care. No chemicals.",
        features: ["Kerala Sourced", "Virgin Grade", "Unrefined", "Multi-Purpose"]
    },
    // Sweeteners
    {
        id: 26,
        name: "Organic Jaggery Powder (Gur) 1kg",
        category: "sweeteners",
        price: 149,
        oldPrice: null,
        rating: 4.8,
        reviews: 245,
        emoji: "🍯",
        badge: "organic",
        description: "Pure organic jaggery powder from Maharashtra sugarcane farms. Unrefined, mineral-rich natural sweetener. Perfect replacement for white sugar.",
        features: ["Maharashtra Sourced", "Unrefined", "Mineral Rich", "No Chemicals"]
    },
    {
        id: 27,
        name: "Organic Wild Honey 500g",
        category: "sweeteners",
        price: 349,
        oldPrice: 449,
        rating: 4.9,
        reviews: 178,
        emoji: "🍯",
        badge: "bestseller",
        description: "Raw organic wild honey from Himalayan forests. Unfiltered, unpasteurized, and rich in enzymes. Natural immunity booster and sweetener.",
        features: ["Himalayan Sourced", "Raw & Unfiltered", "Enzyme Rich", "Immunity Booster"]
    },
    // Flours
    {
        id: 28,
        name: "Organic Wheat Flour (Atta) 5kg",
        category: "flours",
        price: 349,
        oldPrice: 399,
        rating: 4.8,
        reviews: 312,
        emoji: "🌾",
        badge: "organic",
        description: "Stone-ground organic wheat flour (Atta) from Punjab. Whole grain with bran and germ intact. Perfect for soft rotis and parathas.",
        features: ["Punjab Sourced", "Stone Ground", "Whole Grain", "Soft Rotis"]
    },
    {
        id: 29,
        name: "Organic Ragi Flour 1kg",
        category: "flours",
        price: 129,
        oldPrice: 159,
        rating: 4.7,
        reviews: 134,
        emoji: "🌾",
        badge: "sale",
        description: "Nutritious organic ragi flour from Karnataka. 10x more calcium than wheat. Perfect for idli, dosa, roti, and porridge.",
        features: ["Karnataka Sourced", "Calcium Rich", "Gluten-Free", "Multi-Purpose"]
    },
    // Special offers
    {
        id: 997,
        name: "Organic Millets & Pulses Combo Pack",
        category: "millets",
        price: 799,
        oldPrice: 999,
        rating: 4.9,
        reviews: 89,
        emoji: "📦",
        badge: "bestseller",
        description: "Healthy combo with 3 millets (500g each) + 2 pulses (1kg each). Perfect starter pack for healthy eating. Save ₹200!",
        features: ["3 Millets", "2 Pulses", "Bulk Savings", "Starter Pack"]
    },
    {
        id: 998,
        name: "Organic Personal Care Combo",
        category: "soaps",
        price: 499,
        oldPrice: 649,
        rating: 4.8,
        reviews: 67,
        emoji: "📦",
        badge: "sale",
        description: "Complete personal care combo with 2 soaps, 1 shampoo, and 1 hair oil. All organic, chemical-free. Perfect gift set.",
        features: ["2 Soaps", "1 Shampoo", "1 Hair Oil", "Gift Ready"]
    },
    {
        id: 999,
        name: "Organic Complete Grocery Box",
        category: "pulses",
        price: 1499,
        oldPrice: 1899,
        rating: 4.9,
        reviews: 156,
        emoji: "📦",
        badge: "sale",
        description: "Complete monthly grocery box with rice, dal, flour, oil, spices, and jaggery. Everything you need for a month. Save ₹400!",
        features: ["Monthly Supply", "Rice & Dal", "Oil & Spices", "Save ₹400"]
    }
];

// ===== Cart State =====
let cart = [];
let currentFilter = 'all';

// ===== DOM Elements =====
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const searchInput = document.getElementById('searchInput');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const newsletterForm = document.getElementById('newsletterForm');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    startCountdown();
    initScrollEffects();
    initTestimonialSlider();
});

// ===== Render Products =====
function renderProducts(filter = 'all', searchTerm = '') {
    let filtered = products.filter(p => p.id < 100); // Exclude special offer items

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }

    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    productsGrid.innerHTML = filtered.map((product, index) => `
        <div class="product-card" style="animation-delay: ₹{index * 0.05}s">
            ₹{product.badge ? `<span class="product-badge ₹{product.badge}">₹{getBadgeText(product.badge)}</span>` : ''}
            <div class="product-image">
                <span class="emoji">₹{product.emoji}</span>
                <div class="product-actions">
                    <button class="action-btn" onclick="openModal(₹{product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn" onclick="addToCart(₹{product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">₹{product.category}</span>
                <h3 class="product-name">₹{product.name}</h3>
                <div class="product-rating">
                    <span class="stars">₹{getStars(product.rating)}</span>
                    <span>(₹{product.reviews})</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-current">₹₹{product.price.toFixed(2)}</span>
                        ₹{product.oldPrice ? `<span class="price-old">₹₹{product.oldPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(₹{product.id})" title="Add to Cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px; color: var(--text-light);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
                <p>No products found. Try a different search or filter.</p>
            </div>
        `;
    }
}

function getBadgeText(badge) {
    const badges = {
        'organic': 'Organic',
        'sale': 'Sale',
        'bestseller': 'Best Seller',
        'new': 'New'
    };
    return badges[badge] || badge;
}

function getStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '<i class="fas fa-star"></i>';
    if (half) stars += '<i class="fas fa-star-half-alt"></i>';
    const empty = 5 - Math.ceil(rating);
    for (let i = 0; i < empty; i++) stars += '<i class="far fa-star"></i>';
    return stars;
}

// ===== Filter Buttons =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderProducts(currentFilter, searchInput.value);
    });
});

// ===== Search =====
searchInput.addEventListener('input', (e) => {
    renderProducts(currentFilter, e.target.value);
});

// ===== Cart Functions =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`₹{product.name} added to cart!`);

    // Open cart sidebar on mobile
    if (window.innerWidth <= 768) {
        openCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function clearCart() {
    cart = [];
    updateCartUI();
    showToast('Cart cleared');
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `₹₹{totalPrice.toFixed(2)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <p style="font-size: 13px; margin-top: 8px;">Add some organic goodies!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">₹{item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">₹{item.name}</div>
                    <div class="cart-item-price">₹₹{item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateQuantity(₹{item.id}, -1)">-</button>
                    <span>₹{item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(₹{item.id}, 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(₹{item.id})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');
    }
}

// ===== Cart Sidebar =====
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

cartIcon.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

// ===== Product Modal =====
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalBody.innerHTML = `
        <div class="modal-image">₹{product.emoji}</div>
        <div class="modal-details">
            <span class="modal-category">₹{product.category}</span>
            <h2 class="modal-title">₹{product.name}</h2>
            <div class="modal-rating">
                <span class="stars">₹{getStars(product.rating)}</span>
                <span>₹{product.rating} (₹{product.reviews} reviews)</span>
            </div>
            <div class="modal-price">₹₹{product.price.toFixed(2)}</div>
            <p class="modal-desc">₹{product.description}</p>
            <ul class="modal-features">
                ₹{product.features.map(f => `<li><i class="fas fa-check-circle"></i> ₹{f}</li>`).join('')}
            </ul>
            <div class="modal-actions">
                <div class="modal-qty">
                    <button onclick="this.nextElementSibling.textContent = Math.max(1, parseInt(this.nextElementSibling.textContent) - 1)">-</button>
                    <span>1</span>
                    <button onclick="this.previousElementSibling.textContent = parseInt(this.previousElementSibling.textContent) + 1">+</button>
                </div>
                <button class="btn btn-primary" onclick="addToCartFromModal(₹{product.id})">
                    <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
            </div>
        </div>
    `;

    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function addToCartFromModal(productId) {
    const qtyEl = document.querySelector('.modal-qty span');
    const qty = parseInt(qtyEl.textContent);

    for (let i = 0; i < qty; i++) {
        addToCart(productId);
    }

    closeProductModal();
}

function closeProductModal() {
    productModal.classList.remove('open');
    document.body.style.overflow = '';
}

closeModal.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
});

// ===== Toast Notification =====
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Checkout =====
function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showToast(`Order placed! Total: ₹₹{total.toFixed(2)}`);
    cart = [];
    updateCartUI();
    closeCartSidebar();
}

// ===== Countdown Timer =====
function startCountdown() {
    let hours = 23, minutes = 45, seconds = 12;

    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 23;
            minutes = 59;
            seconds = 59;
        }

        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// ===== Scroll Effects =====
function initScrollEffects() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active nav link
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                this.classList.add('active');

                // Close mobile menu if open
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                }
            }
        });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card, .step-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ===== Testimonial Slider =====
function initTestimonialSlider() {
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            currentSlide = index;
        });
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        dots.forEach(d => d.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }, 5000);
}

// ===== Mobile Menu =====
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// ===== Newsletter =====
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    showToast('Thanks for subscribing! Check your email for 15% off.');
    e.target.reset();
});

// ===== Load More =====
loadMoreBtn.addEventListener('click', () => {
    showToast('More products coming soon!');
});

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCartSidebar();
        closeProductModal();
    }
});

// ===== Category Card Click =====
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            }
        });
        currentFilter = category;
        renderProducts(category);

        // Scroll to products
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});


// ===== User Dropdown Toggle =====
function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('open');
}

// Close user dropdown when clicking outside
document.addEventListener('click', (e) => {
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.getElementById('userDropdown');
    if (userMenu && dropdown && !userMenu.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});
