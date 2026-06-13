// ===== PRODUCT DATABASE =====
const products = [
    // MILLETS
    {
        id: 1,
        name: 'Organic Foxtail Millet (Thinai)',
        category: 'millets',
        price: 89,
        size: '500g',
        emoji: '🌾',
        origin: 'Tamil Nadu'
    },
    {
        id: 2,
        name: 'Organic Pearl Millet (Bajra)',
        category: 'millets',
        price: 129,
        size: '1kg',
        emoji: '🌾',
        origin: 'Rajasthan'
    },
    {
        id: 3,
        name: 'Organic Finger Millet (Ragi)',
        category: 'millets',
        price: 79,
        size: '500g',
        emoji: '🌾',
        origin: 'Karnataka'
    },
    {
        id: 4,
        name: 'Organic Kodo Millet (Varagu)',
        category: 'millets',
        price: 85,
        size: '500g',
        emoji: '🌾',
        origin: 'Madhya Pradesh'
    },
    // PULSES
    {
        id: 5,
        name: 'Organic Red Lentils (Masoor)',
        category: 'pulses',
        price: 75,
        size: '500g',
        emoji: '🫘',
        origin: 'Madhya Pradesh'
    },
    {
        id: 6,
        name: 'Organic Split Green Peas (Mung)',
        category: 'pulses',
        price: 95,
        size: '500g',
        emoji: '🫘',
        origin: 'Rajasthan'
    },
    // RICE
    {
        id: 7,
        name: 'Organic Brown Rice',
        category: 'rice',
        price: 85,
        size: '1kg',
        emoji: '🍚',
        origin: 'Tamil Nadu'
    },
    {
        id: 8,
        name: 'Organic Basmati Rice',
        category: 'rice',
        price: 180,
        size: '1kg',
        emoji: '🍚',
        origin: 'Kashmir'
    },
    // SPICES
    {
        id: 9,
        name: 'Organic Turmeric Powder',
        category: 'spices',
        price: 120,
        size: '250g',
        emoji: '🌶️',
        origin: 'Telangana'
    },
    {
        id: 10,
        name: 'Organic Chili Powder',
        category: 'spices',
        price: 95,
        size: '200g',
        emoji: '🌶️',
        origin: 'Karnataka'
    },
    // OILS
    {
        id: 11,
        name: 'Organic Cold-Pressed Coconut Oil',
        category: 'oils',
        price: 185,
        size: '500ml',
        emoji: '🫒',
        origin: 'Kerala'
    },
    {
        id: 12,
        name: 'Organic Cold-Pressed Sesame Oil',
        category: 'oils',
        price: 220,
        size: '500ml',
        emoji: '🫒',
        origin: 'Tamil Nadu'
    },
    // SWEETENERS
    {
        id: 13,
        name: 'Organic Jaggery Powder',
        category: 'sweeteners',
        price: 65,
        size: '500g',
        emoji: '🍯',
        origin: 'Telangana'
    },
    {
        id: 14,
        name: 'Organic Honey',
        category: 'sweeteners',
        price: 250,
        size: '500g',
        emoji: '🍯',
        origin: 'Himachal Pradesh'
    }
];

let cart = [];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    displayProducts();
    setupEventListeners();
});

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('umadeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartCount();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('umadeCart', JSON.stringify(cart));
    updateCartCount();
}

// Display products grid
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const isInCart = cart.some(item => item.id === product.id);

    card.innerHTML = `
        <div class="product-image">
            ${product.emoji}
        </div>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div style="font-size: 0.85rem; color: #999; margin-bottom: 0.5rem;">
                ${product.size} | ${product.origin}
            </div>
            <div class="product-price">₹${product.price}</div>
            <button class="add-to-cart-btn ${isInCart ? 'disabled' : ''}" 
                    onclick="addToCart(${product.id})"
                    ${isInCart ? 'disabled' : ''}>
                ${isInCart ? '✓ Added' : 'Add to Cart'}
            </button>
        </div>
    `;

    return card;
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    displayProducts();
    displayCart();
    showToast(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayProducts();
    displayCart();
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        displayProducts();
        displayCart();
    }
}

// Display cart items
function displayCart() {
    const cartItems = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
        return;
    }

    cartItems.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div style="font-size: 0.9rem; color: #666;">Qty: ${item.quantity}</div>
                <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <button style="background-color: #ffebee; color: #d32f2f; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: 600;"
                    onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(itemElement);
    });

    updateCartTotal();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `₹${total.toFixed(2)}`;
}

// Setup event listeners
function setupEventListeners() {
    // Cart button
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            document.getElementById('cartSidebar').classList.add('active');
            displayCart();
        });
    }

    // Close cart button
    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            document.getElementById('cartSidebar').classList.remove('active');
        });
    }

    // Cart overlay
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', function() {
            document.getElementById('cartSidebar').classList.remove('active');
        });
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Toggle user menu
function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
