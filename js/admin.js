// ============================================
// UMADE ADMIN DASHBOARD JavaScript
// ============================================

// Sample Data
const orders = [
    { id: 'UM-2026-78432', customer: 'Priya Kumar', items: 8, total: 1038, payment: 'UPI', status: 'out_for_delivery', date: '2026-06-08' },
    { id: 'UM-2026-78431', customer: 'Arjun Singh', items: 5, total: 650, payment: 'Card', status: 'delivered', date: '2026-06-07' },
    { id: 'UM-2026-78430', customer: 'Neha Reddy', items: 12, total: 2450, payment: 'COD', status: 'preparing', date: '2026-06-07' },
    { id: 'UM-2026-78429', customer: 'Vikram Mehta', items: 3, total: 320, payment: 'UPI', status: 'pending', date: '2026-06-06' },
    { id: 'UM-2026-78428', customer: 'Sanya Gupta', items: 6, total: 890, payment: 'Net Banking', status: 'delivered', date: '2026-06-06' },
    { id: 'UM-2026-78427', customer: 'Rahul Sharma', items: 4, total: 480, payment: 'Wallet', status: 'cancelled', date: '2026-06-05' },
    { id: 'UM-2026-78426', customer: 'Meera Iyer', items: 10, total: 1560, payment: 'UPI', status: 'delivered', date: '2026-06-05' },
    { id: 'UM-2026-78425', customer: 'Karthik Nair', items: 7, total: 780, payment: 'Card', status: 'out_for_delivery', date: '2026-06-04' },
];

const topProducts = [
    { name: 'Organic Finger Millet (Ragi)', emoji: '🌾', sales: 1240, revenue: 98000 },
    { name: 'Organic Foxtail Millet (Thinai)', emoji: '🌾', sales: 980, revenue: 87000 },
    { name: 'Organic Turmeric Powder', emoji: '🌶️', sales: 850, revenue: 67000 },
    { name: 'Organic Toor Dal', emoji: '🫘', sales: 720, revenue: 107000 },
    { name: 'Organic Brown Rice', emoji: '🍚', sales: 650, revenue: 77000 },
];

const customers = [
    { name: 'Priya Kumar', email: 'priya@email.com', orders: 24, total: 24500 },
    { name: 'Arjun Singh', email: 'arjun@email.com', orders: 18, total: 18200 },
    { name: 'Neha Reddy', email: 'neha@email.com', orders: 15, total: 15600 },
    { name: 'Vikram Mehta', email: 'vikram@email.com', orders: 12, total: 12300 },
];

const deliveries = [
    { driver: 'Ramesh Kumar', vehicle: 'Electric Bike', orders: 4, progress: 65, status: 'On the Way' },
    { driver: 'Suresh Patel', vehicle: 'Scooter', orders: 3, progress: 40, status: 'Picked Up' },
    { driver: 'Anita Devi', vehicle: 'Electric Bike', orders: 5, progress: 80, status: 'Near Drop' },
];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initAdmin();
});

function initAdmin() {
    setCurrentDate();
    initSidebar();
    initNavigation();
    renderRecentOrders();
    renderTopProducts();
    renderAllOrders();
    renderProductsAdmin();
    renderCustomers();
    renderDeliveries();
    initCharts();
    initSettingsTabs();
}

function setCurrentDate() {
    const dateEl = document.getElementById('currentDate');
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = new Date().toLocaleDateString('en-US', options);
    }
}

function initSidebar() {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('adminSidebar');

    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-page]');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            switchPage(page);

            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

function switchPage(page) {
    document.querySelectorAll('.admin-page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(page + '-page');
    if (target) {
        target.classList.add('active');
    }

    const titleMap = {
        'dashboard': 'Dashboard Overview',
        'orders': 'All Orders',
        'products': 'Products Management',
        'customers': 'Customers',
        'sales': 'Sales Report',
        'delivery': 'Delivery Tracking',
        'settings': 'Settings'
    };

    const titleEl = document.getElementById('pageTitle');
    if (titleEl && titleMap[page]) {
        titleEl.textContent = titleMap[page];
    }
}

function renderRecentOrders() {
    const tbody = document.getElementById('recentOrdersTable');
    if (!tbody) return;

    tbody.innerHTML = orders.slice(0, 5).map(order => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.items} items</td>
            <td>₹${order.total.toLocaleString()}</td>
            <td><span class="status-badge ${order.status}">${order.status.replace(/_/g, ' ')}</span></td>
            <td>
                <button class="action-btn" onclick="viewOrder('${order.id}')">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function renderTopProducts() {
    const container = document.getElementById('topProductsList');
    if (!container) return;

    container.innerHTML = topProducts.map((product, index) => `
        <div class="top-product-item">
            <div class="top-product-rank ${index < 3 ? 'top-3' : ''}">${index + 1}</div>
            <div class="top-product-img">${product.emoji}</div>
            <div class="top-product-info">
                <div class="top-product-name">${product.name}</div>
                <div class="top-product-sales">${product.sales.toLocaleString()} sold</div>
            </div>
            <div class="top-product-revenue">₹${(product.revenue / 1000).toFixed(1)}k</div>
        </div>
    `).join('');
}

function renderAllOrders() {
    const tbody = document.getElementById('allOrdersTable');
    if (!tbody) return;

    tbody.innerHTML = orders.map(order => `
        <tr>
            <td><input type="checkbox" class="table-checkbox"></td>
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.date}</td>
            <td>${order.items} items</td>
            <td>₹${order.total.toLocaleString()}</td>
            <td>${order.payment}</td>
            <td><span class="status-badge ${order.status}">${order.status.replace(/_/g, ' ')}</span></td>
            <td>
                <button class="action-btn" onclick="viewOrder('${order.id}')"><i class="fas fa-eye"></i></button>
                <button class="action-btn" onclick="editOrder('${order.id}')"><i class="fas fa-edit"></i></button>
            </td>
        </tr>
    `).join('');
}

function renderProductsAdmin() {
    const grid = document.getElementById('productsGridAdmin');
    if (!grid) return;

    const adminProducts = [
        { name: 'Foxtail Millet (Thinai)', price: 89, stock: 245, emoji: '🌾' },
        { name: 'Pearl Millet (Bajra)', price: 129, stock: 180, emoji: '🌾' },
        { name: 'Finger Millet (Ragi)', price: 79, stock: 320, emoji: '🌾' },
        { name: 'Kodo Millet (Varagu)', price: 85, stock: 150, emoji: '🌾' },
        { name: 'Little Millet (Samai)', price: 95, stock: 200, emoji: '🌾' },
        { name: 'Barnyard Millet (Kuthiraivali)', price: 99, stock: 120, emoji: '🌾' },
    ];

    grid.innerHTML = adminProducts.map(product => `
        <div class="product-admin-card">
            <div class="product-admin-actions">
                <button class="product-admin-btn" onclick="editProduct('${product.name}')"><i class="fas fa-edit"></i></button>
                <button class="product-admin-btn" onclick="deleteProduct('${product.name}')"><i class="fas fa-trash"></i></button>
            </div>
            <div class="product-admin-img">${product.emoji}</div>
            <h4 style="font-weight: 600; margin-bottom: 4px;">${product.name}</h4>
            <p style="color: var(--primary); font-weight: 700; margin-bottom: 4px;">₹${product.price}</p>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Stock: ${product.stock} units</p>
        </div>
    `).join('');
}

function renderCustomers() {
    const grid = document.getElementById('customersGrid');
    if (!grid) return;

    grid.innerHTML = customers.map(customer => `
        <div class="customer-card">
            <div class="customer-avatar">${customer.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="customer-name">${customer.name}</div>
            <div class="customer-email">${customer.email}</div>
            <div class="customer-orders">${customer.orders} orders · ₹${customer.total.toLocaleString()}</div>
        </div>
    `).join('');
}

function renderDeliveries() {
    const grid = document.getElementById('deliveriesGrid');
    if (!grid) return;

    grid.innerHTML = deliveries.map(delivery => `
        <div class="delivery-card">
            <div class="delivery-header">
                <div class="delivery-driver">
                    <div class="delivery-driver-avatar">${delivery.driver.split(' ').map(n => n[0]).join('')}</div>
                    <div class="delivery-driver-info">
                        <h4>${delivery.driver}</h4>
                        <span>${delivery.vehicle} · ${delivery.orders} orders</span>
                    </div>
                </div>
                <div class="delivery-status">${delivery.status}</div>
            </div>
            <div class="delivery-progress">
                <div class="delivery-progress-bar">
                    <div class="delivery-progress-fill" style="width: ${delivery.progress}%"></div>
                </div>
            </div>
            <div class="delivery-details">
                <span>Progress: ${delivery.progress}%</span>
                <span>${delivery.orders} active orders</span>
            </div>
        </div>
    `).join('');
}

function initCharts() {
    initSalesChart();
    initOrderStatusChart();
    initRevenueChart();
    initCategoryChart();
    initDailyChart();
}

function initSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales (₹)',
                data: [45000, 52000, 48000, 61000, 58000, 72000, 65000],
                borderColor: '#2D7A3E',
                backgroundColor: 'rgba(45,122,62,0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#2D7A3E'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f0f0f0' } },
                x: { grid: { display: false } }
            }
        }
    });
}

function initOrderStatusChart() {
    const ctx = document.getElementById('orderStatusChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Delivered', 'Preparing', 'Out for Delivery', 'Pending', 'Cancelled'],
            datasets: [{
                data: [45, 20, 15, 12, 8],
                backgroundColor: ['#2D7A3E', '#2196F3', '#7B1FA2', '#FF8F00', '#E91E63'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 15 } } },
            cutout: '70%'
        }
    });
}

function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Revenue (₹)',
                data: [320000, 380000, 410000, 450000],
                backgroundColor: '#2D7A3E',
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f0f0f0' } },
                x: { grid: { display: false } }
            }
        }
    });
}

function initCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Millets', 'Pulses', 'Rice', 'Spices', 'Oils', 'Sweeteners'],
            datasets: [{
                label: 'Sales',
                data: [35, 25, 20, 30, 15, 10],
                backgroundColor: ['#2D7A3E', '#4CAF50', '#81C784', '#A5D6A7', '#C8E6C9', '#E8F5E9'],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: { legend: { display: false } },
            scales: { x: { beginAtZero: true }, y: { grid: { display: false } } }
        }
    });
}

function initDailyChart() {
    const ctx = document.getElementById('dailyChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 30}, (_, i) => i + 1),
            datasets: [{
                label: 'Daily Sales',
                data: Array.from({length: 30}, () => Math.floor(Math.random() * 20000) + 10000),
                borderColor: '#FF8F00',
                backgroundColor: 'rgba(255,143,0,0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true }, x: { display: false } }
        }
    });
}

function initSettingsTabs() {
    const tabs = document.querySelectorAll('.settings-tab');
    const panels = document.querySelectorAll('.settings-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            panels.forEach(p => p.classList.remove('active'));
            const panel = document.getElementById(targetTab + '-panel');
            if (panel) panel.classList.add('active');
        });
    });
}

// Actions
function viewOrder(id) {
    showToast(`Viewing order ${id}`);
}

function editOrder(id) {
    showToast(`Editing order ${id}`);
}

function editProduct(name) {
    showToast(`Editing ${name}`);
}

function deleteProduct(name) {
    if (confirm(`Delete ${name}?`)) {
        showToast(`${name} deleted`);
    }
}

function openAddProductModal() {
    document.getElementById('addProductModal').classList.add('active');
}

function closeAddProductModal() {
    document.getElementById('addProductModal').classList.remove('active');
}

function saveProduct() {
    showToast('Product added successfully!');
    closeAddProductModal();
}

function closeOrderDetailModal() {
    document.getElementById('orderDetailModal').classList.remove('active');
}

function exportOrders() {
    showToast('Orders exported to CSV!');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = '../index.html';
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toastMessage');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
