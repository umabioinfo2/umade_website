// ===== Admin Dashboard JavaScript =====

// ===== Sample Data =====
const orders = [
    { id: 'UM-2026-78432', customer: 'Priya Sharma', email: 'priya@email.com', date: '2026-06-08', items: 8, total: 2845, payment: 'UPI', status: 'out_for_delivery' },
    { id: 'UM-2026-78431', customer: 'Rahul Kumar', email: 'rahul@email.com', date: '2026-06-08', items: 5, total: 1899, payment: 'Paytm', status: 'delivered' },
    { id: 'UM-2026-78430', customer: 'Ananya Patel', email: 'ananya@email.com', date: '2026-06-08', items: 12, total: 7899, payment: 'PhonePe', status: 'preparing' },
    { id: 'UM-2026-78429', customer: 'Vikram Singh', email: 'vikram@email.com', date: '2026-06-07', items: 3, total: 1650, payment: 'COD', status: 'delivered' },
    { id: 'UM-2026-78428', customer: 'Neha Gupta', email: 'neha@email.com', date: '2026-06-07', items: 6, total: 4830, payment: 'UPI', status: 'pending' },
    { id: 'UM-2026-78427', customer: 'Arjun Reddy', email: 'arjun@email.com', date: '2026-06-07', items: 4, total: 2575, payment: 'Net Banking', status: 'delivered' },
    { id: 'UM-2026-78426', customer: 'Meera Iyer', email: 'meera@email.com', date: '2026-06-06', items: 9, total: 5920, payment: 'Card', status: 'cancelled' },
    { id: 'UM-2026-78425', customer: 'Rohan Mehta', email: 'rohan@email.com', date: '2026-06-06', items: 7, total: 3880, payment: 'Google Pay', status: 'delivered' },
    { id: 'UM-2026-78424', customer: 'Sanya Kapoor', email: 'sanya@email.com', date: '2026-06-06', items: 2, total: 1499, payment: 'UPI', status: 'out_for_delivery' },
    { id: 'UM-2026-78423', customer: 'Karthik Nair', email: 'karthik@email.com', date: '2026-06-05', items: 10, total: 6745, payment: 'Paytm', status: 'delivered' }
];

const topProducts = [
    { name: 'Finger Millet (Ragi)', sales: 342, revenue: 26958, emoji: '🌾' },
    { name: 'Moringa Leaf Powder', sales: 298, revenue: 44402, emoji: '🌿' },
    { name: 'Neem & Tulsi Soap', sales: 267, revenue: 21093, emoji: '🧼' },
    { name: 'Toor Dal (Arhar)', sales: 245, revenue: 36505, emoji: '🫘' },
    { name: 'Jaggery Laddu', sales: 198, revenue: 29502, emoji: '🍬' }
];

const customers = [
    { name: 'Priya Sharma', email: 'priya@email.com', orders: 24, total: 124550, since: 'Jan 2026' },
    { name: 'Rahul Kumar', email: 'rahul@email.com', orders: 18, total: 98730, since: 'Feb 2026' },
    { name: 'Ananya Patel', email: 'ananya@email.com', orders: 15, total: 87645, since: 'Mar 2026' },
    { name: 'Vikram Singh', email: 'vikram@email.com', orders: 12, total: 65420, since: 'Jan 2026' },
    { name: 'Neha Gupta', email: 'neha@email.com', orders: 10, total: 54380, since: 'Apr 2026' },
    { name: 'Arjun Reddy', email: 'arjun@email.com', orders: 9, total: 43215, since: 'Feb 2026' }
];

const deliveries = [
    { driver: 'Ramesh Kumar', vehicle: 'Electric Bike', orders: 4, progress: 75, status: 'On Route', eta: '6:50 PM' },
    { driver: 'Priya Nair', vehicle: 'Electric Scooter', orders: 3, progress: 45, status: 'Picking Up', eta: '7:15 PM' },
    { driver: 'Arjun Reddy', vehicle: 'Car', orders: 6, progress: 90, status: 'Almost There', eta: '6:45 PM' },
    { driver: 'Meera Sharma', vehicle: 'Electric Bike', orders: 2, progress: 20, status: 'Starting', eta: '7:30 PM' }
];

const adminProducts = [
    // Organic Food
    { id: 1, name: 'Foxtail Millet (Thinai) 500g', category: 'millets', price: 89, stock: 156, emoji: '🌾' },
    { id: 2, name: 'Pearl Millet (Bajra) 1kg', category: 'millets', price: 129, stock: 234, emoji: '🌾' },
    { id: 3, name: 'Finger Millet (Ragi) 500g', category: 'millets', price: 79, stock: 89, emoji: '🌾' },
    { id: 4, name: 'Jaggery Laddu 250g', category: 'sweets', price: 149, stock: 112, emoji: '🍬' },
    { id: 5, name: 'Neem & Tulsi Soap 100g', category: 'soaps', price: 79, stock: 245, emoji: '🧼' },
    { id: 6, name: 'Amla Shikakai Shampoo 200ml', category: 'shampoo', price: 199, stock: 178, emoji: '🧴' },
    { id: 7, name: 'Moringa Leaf Powder 100g', category: 'herbs', price: 149, stock: 134, emoji: '🌿' },
    { id: 8, name: 'Ragi Biscuits 150g', category: 'biscuits', price: 59, stock: 312, emoji: '🍪' },
    // Groceries
    { id: 9, name: 'Toor Dal (Arhar) 1kg', category: 'pulses', price: 149, stock: 123, emoji: '🫘' },
    { id: 10, name: 'Brown Basmati Rice 1kg', category: 'rice', price: 199, stock: 89, emoji: '🍚' },
    { id: 11, name: 'Turmeric Powder 250g', category: 'spices', price: 79, stock: 267, emoji: '🌶️' },
    { id: 12, name: 'Groundnut Oil 1L', category: 'oils', price: 249, stock: 156, emoji: '🫒' }
];

// ===== DOM Elements =====
const sidebarToggle = document.getElementById('sidebarToggle');
const adminSidebar = document.getElementById('adminSidebar');
const navItems = document.querySelectorAll('.nav-item');
const adminPages = document.querySelectorAll('.admin-page');
const pageTitle = document.getElementById('pageTitle');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

const pageTitles = {
    'dashboard': 'Dashboard Overview',
    'orders': 'Order Management',
    'products': 'Product Management',
    'customers': 'Customer Management',
    'sales': 'Sales Analytics',
    'delivery': 'Delivery Tracking',
    'settings': 'Settings'
};

// ===== Navigation =====
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        if (!page) return;
        switchPage(page);
    });
});

function switchPage(page) {
    // Update nav items
    navItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-page="₹{page}"]`)?.classList.add('active');

    // Update pages
    adminPages.forEach(p => p.classList.remove('active'));
    document.getElementById(`₹{page}-page`)?.classList.add('active');

    // Update title
    pageTitle.textContent = pageTitles[page] || 'Dashboard';

    // Close sidebar on mobile
    adminSidebar.classList.remove('open');

    // Initialize charts if needed
    if (page === 'dashboard') {
        setTimeout(initDashboardCharts, 100);
    } else if (page === 'sales') {
        setTimeout(initSalesCharts, 100);
    }
}

// ===== Sidebar Toggle =====
sidebarToggle.addEventListener('click', () => {
    adminSidebar.classList.toggle('open');
});

// ===== Date Display =====
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// ===== Render Recent Orders =====
function renderRecentOrders() {
    const tbody = document.getElementById('recentOrdersTable');
    tbody.innerHTML = orders.slice(0, 5).map(order => `
        <tr>
            <td><strong>₹{order.id}</strong></td>
            <td>
                <div style="display:flex;align-items:center;gap:10px;">
                    <div style="width:32px;height:32px;background:var(--primary-lighter);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--primary);font-weight:700;font-size:12px;">
                        ₹{order.customer.split(' ').map(n => n[0]).join('')}
                    </div>
                    ₹{order.customer}
                </div>
            </td>
            <td>₹{order.items} items</td>
            <td><strong>₹₹{order.total.toFixed(2)}</strong></td>
            <td>₹{getStatusBadge(order.status)}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn-sm" onclick="viewOrder('₹{order.id}')" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn-sm" onclick="editOrder('₹{order.id}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ===== Render All Orders =====
function renderAllOrders(filter = 'all') {
    const tbody = document.getElementById('allOrdersTable');
    let filtered = orders;
    if (filter !== 'all') {
        filtered = orders.filter(o => o.status === filter);
    }

    tbody.innerHTML = filtered.map(order => `
        <tr>
            <td><input type="checkbox" class="table-checkbox"></td>
            <td><strong>₹{order.id}</strong></td>
            <td>
                <div style="display:flex;align-items:center;gap:10px;">
                    <div style="width:32px;height:32px;background:var(--primary-lighter);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--primary);font-weight:700;font-size:12px;">
                        ₹{order.customer.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                        <div style="font-weight:600;">₹{order.customer}</div>
                        <div style="font-size:12px;color:var(--text-light);">₹{order.email}</div>
                    </div>
                </div>
            </td>
            <td>₹{order.date}</td>
            <td>₹{order.items} items</td>
            <td><strong>₹₹{order.total.toFixed(2)}</strong></td>
            <td>₹{order.payment}</td>
            <td>₹{getStatusBadge(order.status)}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn-sm" onclick="viewOrder('₹{order.id}')" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn-sm" onclick="editOrder('₹{order.id}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn-sm" onclick="deleteOrder('₹{order.id}')" title="Delete" style="color:#e74c3c;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function getStatusBadge(status) {
    const labels = {
        'pending': 'Pending',
        'preparing': 'Preparing',
        'out_for_delivery': 'Out for Delivery',
        'delivered': 'Delivered',
        'cancelled': 'Cancelled'
    };
    return `<span class="status-badge status-₹{status}"><span class="status-dot"></span>₹{labels[status]}</span>`;
}

// ===== Render Top Products =====
function renderTopProducts() {
    const container = document.getElementById('topProductsList');
    container.innerHTML = topProducts.map((product, index) => `
        <div class="top-product-item">
            <div class="top-product-rank ₹{index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : ''}">₹{index + 1}</div>
            <div class="top-product-info">
                <div class="top-product-name">₹{product.emoji} ₹{product.name}</div>
                <div class="top-product-sales">₹{product.sales} sold</div>
            </div>
            <div class="top-product-price">₹₹{product.revenue.toFixed(2)}</div>
        </div>
    `).join('');
}

// ===== Render Products Grid =====
function renderProductsGridAdmin() {
    const container = document.getElementById('productsGridAdmin');
    container.innerHTML = adminProducts.map(product => {
        const stockClass = product.stock > 100 ? 'in-stock' : product.stock > 30 ? 'low-stock' : 'out-stock';
        const stockLabel = product.stock > 100 ? 'In Stock' : product.stock > 30 ? 'Low Stock' : 'Out of Stock';
        return `
        <div class="admin-product-card">
            <div class="admin-product-img">₹{product.emoji}</div>
            <div class="admin-product-name">₹{product.name}</div>
            <div class="admin-product-category">₹{product.category}</div>
            <div class="admin-product-price">₹₹{product.price.toFixed(2)}</div>
            <div class="admin-product-stock">
                <span class="stock-label">Stock:</span>
                <span class="stock-value ₹{stockClass}">₹{product.stock} - ₹{stockLabel}</span>
            </div>
            <div class="admin-product-actions">
                <button class="action-btn-sm" onclick="editProduct(₹{product.id})" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn-sm" onclick="duplicateProduct(₹{product.id})" title="Duplicate">
                    <i class="fas fa-copy"></i>
                </button>
                <button class="action-btn-sm" onclick="deleteProduct(₹{product.id})" title="Delete" style="color:#e74c3c;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `}).join('');
}

// ===== Render Customers =====
function renderCustomers() {
    const container = document.getElementById('customersGrid');
    container.innerHTML = customers.map(customer => `
        <div class="customer-card">
            <div class="customer-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="customer-name">₹{customer.name}</div>
            <div class="customer-email">₹{customer.email}</div>
            <div class="customer-stats">
                <div class="customer-stat">
                    <span class="customer-stat-value">₹{customer.orders}</span>
                    <span class="customer-stat-label">Orders</span>
                </div>
                <div class="customer-stat">
                    <span class="customer-stat-value">₹₹{customer.total.toFixed(0)}</span>
                    <span class="customer-stat-label">Spent</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Render Deliveries =====
function renderDeliveries() {
    const container = document.getElementById('deliveriesGrid');
    container.innerHTML = deliveries.map(delivery => `
        <div class="delivery-card">
            <div class="delivery-header">
                <div class="delivery-driver">
                    <div class="delivery-driver-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="delivery-driver-info">
                        <h4>₹{delivery.driver}</h4>
                        <span>₹{delivery.vehicle}</span>
                    </div>
                </div>
                <span class="delivery-status" style="background: ₹{delivery.progress > 70 ? 'var(--primary-lighter)' : delivery.progress > 40 ? '#FFF8E1' : '#E3F2FD'}; color: ₹{delivery.progress > 70 ? 'var(--primary)' : delivery.progress > 40 ? '#FF8F00' : '#2196F3'};">₹{delivery.status}</span>
            </div>
            <div class="delivery-progress">
                <div class="delivery-progress-bar">
                    <div class="delivery-progress-fill" style="width: ₹{delivery.progress}%"></div>
                </div>
                <div class="delivery-progress-info">
                    <span>₹{delivery.progress}% Complete</span>
                    <span>ETA: ₹{delivery.eta}</span>
                </div>
            </div>
            <div class="delivery-orders">
                <i class="fas fa-shopping-bag"></i> ₹{delivery.orders} orders assigned
            </div>
        </div>
    `).join('');
}

// ===== Charts =====
let salesChart, orderStatusChart, revenueChart, categoryChart, dailyChart;

function initDashboardCharts() {
    // Sales Chart
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx && !salesChart) {
        salesChart = new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Revenue (₹)',
                    data: [265600, 373500, 315400, 431600, 506300, 647400, 572700],
                    borderColor: '#2D7A3E',
                    backgroundColor: 'rgba(45, 122, 62, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: '#2D7A3E'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0,0,0,0.05)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Order Status Chart
    const statusCtx = document.getElementById('orderStatusChart');
    if (statusCtx && !orderStatusChart) {
        orderStatusChart = new Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: ['Delivered', 'Preparing', 'Out for Delivery', 'Pending', 'Cancelled'],
                datasets: [{
                    data: [65, 15, 10, 8, 2],
                    backgroundColor: ['#2D7A3E', '#2196F3', '#FF8F00', '#9E9E9E', '#e74c3c'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { boxWidth: 12, padding: 15, font: { size: 11 } }
                    }
                }
            }
        });
    }
}

function initSalesCharts() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx && !revenueChart) {
        revenueChart = new Chart(revenueCtx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'This Month',
                    data: [1037500, 1261600, 1145400, 1568700],
                    backgroundColor: '#2D7A3E',
                    borderRadius: 6
                }, {
                    label: 'Last Month',
                    data: [913000, 1120500, 996000, 1328000],
                    backgroundColor: '#E8F5E9',
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    y: { grid: { color: 'rgba(0,0,0,0.05)' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Category Chart
    const categoryCtx = document.getElementById('categoryChart');
    if (categoryCtx && !categoryChart) {
        categoryChart = new Chart(categoryCtx, {
            type: 'pie',
            data: {
                labels: ['Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Beverages', 'Pantry'],
                datasets: [{
                    data: [28, 22, 18, 12, 10, 10],
                    backgroundColor: ['#2D7A3E', '#4CAF50', '#8BC34A', '#FF8F00', '#2196F3', '#9C27B0']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 12, padding: 10 } }
                }
            }
        });
    }

    // Daily Chart
    const dailyCtx = document.getElementById('dailyChart');
    if (dailyCtx && !dailyChart) {
        dailyChart = new Chart(dailyCtx, {
            type: 'line',
            data: {
                labels: ['1st', '5th', '10th', '15th', '20th', '25th', '30th'],
                datasets: [{
                    label: 'Daily Sales',
                    data: [45, 52, 38, 61, 55, 72, 68],
                    borderColor: '#FF8F00',
                    backgroundColor: 'rgba(255, 143, 0, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { grid: { color: 'rgba(0,0,0,0.05)' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
}

// ===== Order Actions =====
function viewOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById('detailOrderId').textContent = orderId;
    document.getElementById('orderDetailBody').innerHTML = `
        <div class="order-detail-grid">
            <div class="detail-section">
                <h4>Customer Information</h4>
                <p><strong>Name:</strong> ₹{order.customer}</p>
                <p><strong>Email:</strong> ₹{order.email}</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Main St, Farm City, FC 12345</p>
            </div>
            <div class="detail-section">
                <h4>Order Information</h4>
                <p><strong>Date:</strong> ₹{order.date}</p>
                <p><strong>Payment:</strong> ₹{order.payment}</p>
                <p><strong>Status:</strong> ₹{getStatusBadge(order.status)}</p>
                <p><strong>Total:</strong> <span style="color:var(--primary);font-weight:700;font-size:18px;">₹₹{order.total.toFixed(2)}</span></p>
            </div>
        </div>
        <div class="detail-section" style="margin-top:20px;">
            <h4>Order Items</h4>
            <table class="orders-table">
                <thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
                <tbody>
                    <tr><td>🥑 Avocado Hass</td><td>2</td><td>₹5.99</td><td>₹11.98</td></tr>
                    <tr><td>🥬 Organic Spinach</td><td>1</td><td>₹3.49</td><td>₹3.49</td></tr>
                    <tr><td>🥚 Free-Range Eggs</td><td>1</td><td>₹6.99</td><td>₹6.99</td></tr>
                </tbody>
            </table>
        </div>
        <div style="margin-top:20px;display:flex;gap:12px;">
            <button class="btn btn-primary" onclick="updateOrderStatus('₹{orderId}')">Update Status</button>
            <button class="btn btn-outline" onclick="printOrder('₹{orderId}')">Print Invoice</button>
        </div>
    `;

    document.getElementById('orderDetailModal').classList.add('open');
}

function closeOrderDetailModal() {
    document.getElementById('orderDetailModal').classList.remove('open');
}

function editOrder(orderId) {
    showToast(`Editing order ₹{orderId}`);
}

function deleteOrder(orderId) {
    if (confirm('Are you sure you want to delete this order?')) {
        showToast(`Order ₹{orderId} deleted`);
    }
}

function updateOrderStatus(orderId) {
    showToast(`Status updated for ₹{orderId}`);
}

function printOrder(orderId) {
    showToast(`Printing invoice for ₹{orderId}`);
}

function exportOrders() {
    showToast('Exporting orders to CSV...');
    setTimeout(() => {
        showToast('Orders exported successfully!');
    }, 1500);
}

// ===== Product Actions =====
function openAddProductModal() {
    document.getElementById('addProductModal').classList.add('open');
}

function closeAddProductModal() {
    document.getElementById('addProductModal').classList.remove('open');
}

function saveProduct() {
    closeAddProductModal();
    showToast('Product added successfully!');
}

function editProduct(id) {
    showToast(`Editing product ₹{id}`);
}

function duplicateProduct(id) {
    showToast(`Product ₹{id} duplicated`);
}

function deleteProduct(id) {
    if (confirm('Are you sure?')) {
        showToast(`Product ₹{id} deleted`);
    }
}

// ===== Settings Tabs =====
document.querySelectorAll('.settings-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = tab.dataset.tab;

        document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        document.querySelectorAll('.settings-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(`₹{tabName}-panel`).classList.add('active');
    });
});

// ===== Toast =====
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Logout =====
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        showToast('Logged out successfully');
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    }
}

// ===== Order Filter =====
document.getElementById('orderStatusFilter')?.addEventListener('change', (e) => {
    renderAllOrders(e.target.value);
});

// ===== Product Filter =====
document.getElementById('productCategoryFilter')?.addEventListener('change', (e) => {
    renderProductsGridAdmin();
});

document.getElementById('productSearch')?.addEventListener('input', (e) => {
    renderProductsGridAdmin();
});

// ===== Chart Filter Buttons =====
document.querySelectorAll('.chart-filter').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.querySelectorAll('.chart-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderRecentOrders();
    renderAllOrders();
    renderTopProducts();
    renderProductsGridAdmin();
    renderCustomers();
    renderDeliveries();
    initDashboardCharts();
});

// ===== Keyboard =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAddProductModal();
        closeOrderDetailModal();
    }
});

// ===== Modal Overlay Click =====
document.querySelectorAll('.admin-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });
});
