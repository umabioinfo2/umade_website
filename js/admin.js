// ============================================
// Umade Admin Dashboard - Complete JavaScript
// ============================================

// ====== GLOBAL DATA STORES ======
var products = JSON.parse(localStorage.getItem('umade_products')) || [
    { id: 1, name: 'Organic Foxtail Millet', category: 'millets', rate: 85, gstRate: 5, gstAmount: 4.25, finalPrice: 89.25, oldPrice: 120, hsnCode: '1103', gstType: 'regular', igst: false, description: 'Premium organic foxtail millet from Salem farms', unitType: 'kg', netWeight: '500g', stock: 150, badge: 'organic', sku: 'UMD-MIL-001', barcode: '8901234567890', minQty: 1, maxQty: 10, status: 'active', image: null },
    { id: 2, name: 'Toor Dal Premium', category: 'pulses', rate: 120, gstRate: 5, gstAmount: 6, finalPrice: 126, oldPrice: 150, hsnCode: '0713', gstType: 'regular', igst: false, description: 'Premium toor dal from Gujarat', unitType: 'kg', netWeight: '1kg', stock: 200, badge: 'bestseller', sku: 'UMD-PUL-002', barcode: '8901234567891', minQty: 1, maxQty: 5, status: 'active', image: null },
    { id: 3, name: 'Cold Pressed Groundnut Oil', category: 'oils', rate: 280, gstRate: 5, gstAmount: 14, finalPrice: 294, oldPrice: 350, hsnCode: '1508', gstType: 'regular', igst: false, description: 'Cold pressed groundnut oil, 1L bottle', unitType: 'l', netWeight: '1L', stock: 80, badge: 'organic', sku: 'UMD-OIL-003', barcode: '8901234567892', minQty: 1, maxQty: 5, status: 'active', image: null },
    { id: 4, name: 'Organic Jaggery Powder', category: 'sweeteners', rate: 95, gstRate: 5, gstAmount: 4.75, finalPrice: 99.75, oldPrice: 130, hsnCode: '1701', gstType: 'regular', igst: false, description: 'Pure organic jaggery powder, 500g', unitType: 'g', netWeight: '500g', stock: 120, badge: 'popular', sku: 'UMD-SWT-004', barcode: '8901234567893', minQty: 1, maxQty: 10, status: 'active', image: null },
    { id: 5, name: 'Sambar Masala', category: 'spices', rate: 65, gstRate: 5, gstAmount: 3.25, finalPrice: 68.25, oldPrice: 85, hsnCode: '0910', gstType: 'regular', igst: false, description: 'Authentic sambar masala blend, 200g', unitType: 'g', netWeight: '200g', stock: 300, badge: 'bestseller', sku: 'UMD-SPC-005', barcode: '8901234567894', minQty: 1, maxQty: 20, status: 'active', image: null }
];

var categories = JSON.parse(localStorage.getItem('umade_categories')) || [
    { id: 1, name: 'Millets', slug: 'millets', parent: '', description: 'Organic millets and grains', gstRate: 5, order: 1, image: null, active: true, featured: true, menu: true, productCount: 24 },
    { id: 2, name: 'Pulses', slug: 'pulses', parent: '', description: 'Premium quality pulses and lentils', gstRate: 5, order: 2, image: null, active: true, featured: true, menu: true, productCount: 31 },
    { id: 3, name: 'Rice', slug: 'rice', parent: '', description: 'Organic and traditional rice varieties', gstRate: 5, order: 3, image: null, active: true, featured: false, menu: true, productCount: 18 },
    { id: 4, name: 'Spices', slug: 'spices', parent: '', description: 'Fresh and aromatic spices', gstRate: 5, order: 4, image: null, active: true, featured: true, menu: true, productCount: 42 },
    { id: 5, name: 'Oils', slug: 'oils', parent: '', description: 'Cold pressed and refined oils', gstRate: 5, order: 5, image: null, active: true, featured: false, menu: true, productCount: 15 },
    { id: 6, name: 'Sweeteners', slug: 'sweeteners', parent: '', description: 'Natural and organic sweeteners', gstRate: 5, order: 6, image: null, active: true, featured: false, menu: true, productCount: 12 },
    { id: 7, name: 'Flours', slug: 'flours', parent: '', description: 'Organic flours and atta', gstRate: 5, order: 7, image: null, active: true, featured: false, menu: false, productCount: 8 },
    { id: 8, name: 'Dry Fruits', slug: 'dry-fruits', parent: '', description: 'Premium dry fruits and nuts', gstRate: 12, order: 8, image: null, active: true, featured: false, menu: true, productCount: 6 }
];

var drivers = JSON.parse(localStorage.getItem('umade_drivers')) || [
    { id: 1, name: 'Rajesh Kumar', phone: '+91 98765 43210', email: 'rajesh@umade.com', dob: '1990-05-15', address: '12, Gandhi Street, Salem', vehicleType: 'bike', vehicleNumber: 'TN-09-AB-1234', licenseNumber: 'TN-1420110012345', licenseExpiry: '2027-03-20', rcNumber: 'RC-123456789', insuranceExpiry: '2026-12-31', deviceType: 'android', deviceId: 'IMEI-123456789012345', liveTracking: true, routeOptimization: true, geofencing: false, speedAlerts: true, employmentType: 'fulltime', workZone: 'salem', shiftTiming: 'morning', maxOrdersPerDay: 20, status: 'online', todayDeliveries: 8, rating: 4.8, photo: null },
    { id: 2, name: 'Arun Murugan', phone: '+91 98765 43211', email: 'arun@umade.com', dob: '1988-11-22', address: '45, Anna Nagar, Salem', vehicleType: 'scooter', vehicleNumber: 'TN-09-CD-5678', licenseNumber: 'TN-1420110056789', licenseExpiry: '2028-06-15', rcNumber: 'RC-987654321', insuranceExpiry: '2027-01-15', deviceType: 'android', deviceId: 'IMEI-987654321098765', liveTracking: true, routeOptimization: true, geofencing: true, speedAlerts: false, employmentType: 'fulltime', workZone: 'alagapuram', shiftTiming: 'evening', maxOrdersPerDay: 18, status: 'busy', todayDeliveries: 12, rating: 4.9, photo: null },
    { id: 3, name: 'Priya Selvam', phone: '+91 98765 43212', email: 'priya@umade.com', dob: '1995-02-10', address: '78, Thangavel Nagar, Salem', vehicleType: 'bike', vehicleNumber: 'TN-09-EF-9012', licenseNumber: 'TN-1420110090123', licenseExpiry: '2027-09-30', rcNumber: 'RC-456789012', insuranceExpiry: '2026-11-20', deviceType: 'ios', deviceId: 'IMEI-456789012345678', liveTracking: true, routeOptimization: false, geofencing: false, speedAlerts: true, employmentType: 'parttime', workZone: 'fairlands', shiftTiming: 'flexible', maxOrdersPerDay: 15, status: 'online', todayDeliveries: 5, rating: 4.7, photo: null },
    { id: 4, name: 'Michael Joseph', phone: '+91 98765 43213', email: 'michael@umade.com', dob: '1985-08-18', address: '23, Hasthampatti, Salem', vehicleType: 'van', vehicleNumber: 'TN-09-GH-3456', licenseNumber: 'TN-1420110034567', licenseExpiry: '2029-01-10', rcNumber: 'RC-789012345', insuranceExpiry: '2027-03-05', deviceType: 'gps', deviceId: 'GPS-789012345678901', liveTracking: true, routeOptimization: true, geofencing: true, speedAlerts: true, employmentType: 'contract', workZone: 'all', shiftTiming: 'morning', maxOrdersPerDay: 25, status: 'break', todayDeliveries: 15, rating: 4.6, photo: null }
];

var deliveries = [
    { id: 'UM-78432', driverId: 1, customer: 'Ramesh K.', address: '12, Gandhi Street, Salem', status: 'out_for_delivery', progress: 65, eta: '12 min', distance: '2.3 km', items: 3, total: 'Rs.456', started: '10:30 AM' },
    { id: 'UM-78433', driverId: 2, customer: 'Lakshmi V.', address: '45, Anna Nagar, Salem', status: 'picked_up', progress: 30, eta: '25 min', distance: '4.1 km', items: 5, total: 'Rs.789', started: '10:45 AM' },
    { id: 'UM-78435', driverId: 3, customer: 'Suresh P.', address: '78, Thangavel Nagar, Salem', status: 'nearby', progress: 90, eta: '3 min', distance: '0.2 km', items: 2, total: 'Rs.234', started: '10:15 AM' },
    { id: 'UM-78436', driverId: 1, customer: 'Kavitha R.', address: '56, Fairlands, Salem', status: 'out_for_delivery', progress: 45, eta: '18 min', distance: '3.5 km', items: 4, total: 'Rs.567', started: '11:00 AM' },
    { id: 'UM-78437', driverId: 4, customer: 'Gopal N.', address: '89, Hasthampatti, Salem', status: 'delayed', progress: 20, eta: '45 min', distance: '6.2 km', items: 6, total: 'Rs.890', started: '09:30 AM' }
];

var orders = [
    { id: 'UM-2026-78432', customer: 'Ramesh Kumar', date: '2026-06-20', items: 3, total: 'Rs.456', payment: 'COD', status: 'out_for_delivery' },
    { id: 'UM-2026-78433', customer: 'Lakshmi Venkat', date: '2026-06-20', items: 5, total: 'Rs.789', payment: 'UPI', status: 'preparing' },
    { id: 'UM-2026-78434', customer: 'Suresh Patel', date: '2026-06-20', items: 2, total: 'Rs.234', payment: 'Card', status: 'delivered' },
    { id: 'UM-2026-78435', customer: 'Kavitha Ravi', date: '2026-06-19', items: 4, total: 'Rs.567', payment: 'COD', status: 'pending' },
    { id: 'UM-2026-78436', customer: 'Gopal Nataraj', date: '2026-06-19', items: 6, total: 'Rs.890', payment: 'UPI', status: 'cancelled' }
];

var customers = [
    { id: 1, name: 'Ramesh Kumar', email: 'ramesh@email.com', phone: '+91 98765 43210', orders: 12, totalSpent: 'Rs.4,560', lastOrder: '2026-06-20', status: 'active' },
    { id: 2, name: 'Lakshmi Venkat', email: 'lakshmi@email.com', phone: '+91 98765 43211', orders: 8, totalSpent: 'Rs.3,240', lastOrder: '2026-06-20', status: 'active' },
    { id: 3, name: 'Suresh Patel', email: 'suresh@email.com', phone: '+91 98765 43212', orders: 25, totalSpent: 'Rs.12,800', lastOrder: '2026-06-20', status: 'active' },
    { id: 4, name: 'Kavitha Ravi', email: 'kavitha@email.com', phone: '+91 98765 43213', orders: 5, totalSpent: 'Rs.1,890', lastOrder: '2026-06-19', status: 'active' }
];

var topProducts = [
    { name: 'Organic Foxtail Millet', sales: 234, revenue: 'Rs.20,890', trend: 'up' },
    { name: 'Toor Dal Premium', sales: 198, revenue: 'Rs.24,948', trend: 'up' },
    { name: 'Cold Pressed Groundnut Oil', sales: 156, revenue: 'Rs.45,864', trend: 'up' },
    { name: 'Sambar Masala', sales: 142, revenue: 'Rs.9,690', trend: 'down' },
    { name: 'Organic Jaggery Powder', sales: 128, revenue: 'Rs.12,768', trend: 'up' }
];

// ====== UTILITY FUNCTIONS ======
function saveToStorage() {
    localStorage.setItem('umade_products', JSON.stringify(products));
    localStorage.setItem('umade_categories', JSON.stringify(categories));
    localStorage.setItem('umade_drivers', JSON.stringify(drivers));
}

function showToast(message, type) {
    type = type || 'success';
    var toast = document.getElementById('toast');
    var toastMessage = document.getElementById('toastMessage');
    var icon = toast.querySelector('i');

    toastMessage.textContent = message;
    if (type === 'success') icon.className = 'fas fa-check-circle';
    else if (type === 'error') icon.className = 'fas fa-times-circle';
    else if (type === 'warning') icon.className = 'fas fa-exclamation-circle';
    else icon.className = 'fas fa-info-circle';

    if (type === 'success') toast.style.background = '#2D7A3E';
    else if (type === 'error') toast.style.background = '#e11d48';
    else if (type === 'warning') toast.style.background = '#f59e0b';
    else toast.style.background = '#2196F3';

    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 3000);
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatCurrency(amount) {
    return 'Rs.' + parseFloat(amount).toFixed(2);
}

function getStatusBadge(status) {
    if (status === 'active') return '<span class="badge-active">Active</span>';
    if (status === 'inactive') return '<span class="badge-inactive">Inactive</span>';
    if (status === 'draft') return '<span class="badge-inactive">Draft</span>';
    if (status === 'online') return '<span class="badge-active">Online</span>';
    if (status === 'offline') return '<span class="badge-inactive">Offline</span>';
    if (status === 'busy') return '<span class="badge-featured">On Delivery</span>';
    if (status === 'break') return '<span style="background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:4px;font-size:11px;">On Break</span>';
    return status;
}

function getCategoryIcon(category) {
    if (category === 'millets') return 'fa-seedling';
    if (category === 'pulses') return 'fa-bowl-rice';
    if (category === 'rice') return 'fa-bowl-food';
    if (category === 'spices') return 'fa-pepper-hot';
    if (category === 'oils') return 'fa-bottle-droplet';
    if (category === 'sweeteners') return 'fa-cube';
    if (category === 'flours') return 'fa-wheat-awn';
    if (category === 'dry-fruits') return 'fa-apple-whole';
    if (category === 'honey') return 'fa-jar';
    if (category === 'pickles') return 'fa-jar';
    return 'fa-box';
}

function getVehicleIcon(type) {
    if (type === 'bike') return 'fa-motorcycle';
    if (type === 'scooter') return 'fa-motorcycle';
    if (type === 'auto') return 'fa-taxi';
    if (type === 'van') return 'fa-truck';
    if (type === 'bicycle') return 'fa-bicycle';
    return 'fa-truck';
}

// ====== PAGE NAVIGATION ======
function switchPage(pageName) {
    var pages = document.querySelectorAll('.admin-page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    var navs = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navs.length; i++) {
        navs[i].classList.remove('active');
    }

    var page = document.getElementById(pageName + '-page');
    var nav = document.querySelector('[data-page="' + pageName + '"]');

    if (page) page.classList.add('active');
    if (nav) nav.classList.add('active');

    var titles = {
        'dashboard': 'Dashboard Overview',
        'orders': 'Orders Management',
        'products': 'Products Management',
        'categories': 'Categories Management',
        'customers': 'Customers',
        'sales': 'Sales Report',
        'delivery': 'Delivery Tracking',
        'settings': 'Settings'
    };
    document.getElementById('pageTitle').textContent = titles[pageName] || 'Dashboard';

    if (pageName === 'products') renderProducts();
    if (pageName === 'categories') renderCategories();
    if (pageName === 'delivery') { renderDrivers(); renderDeliveries(); }
    if (pageName === 'orders') renderOrders();
    if (pageName === 'customers') renderCustomers();
    if (pageName === 'dashboard') renderDashboard();
}

// ====== DASHBOARD ======
function renderDashboard() {
    renderRecentOrders();
    renderTopProducts();
}

function renderRecentOrders() {
    var tbody = document.getElementById('recentOrdersTable');
    if (!tbody) return;
    var html = '';
    for (var i = 0; i < Math.min(5, orders.length); i++) {
        var order = orders[i];
        html += '<tr>' +
            '<td><strong>' + order.id + '</strong></td>' +
            '<td>' + order.customer + '</td>' +
            '<td>' + order.items + ' items</td>' +
            '<td><strong>' + order.total + '</strong></td>' +
            '<td><span class="status-badge status-' + order.status + '">' + order.status.replace(/_/g, ' ') + '</span></td>' +
            '<td><button class="btn btn-sm btn-outline" onclick="viewOrder('' + order.id + '')">View</button></td>' +
        '</tr>';
    }
    tbody.innerHTML = html;
}

function renderTopProducts() {
    var list = document.getElementById('topProductsList');
    if (!list) return;
    var html = '';
    for (var i = 0; i < topProducts.length; i++) {
        var p = topProducts[i];
        html += '<div class="top-product-item">' +
            '<span class="product-rank">' + (i + 1) + '</span>' +
            '<div class="product-info">' +
                '<span class="product-name">' + p.name + '</span>' +
                '<span class="product-sales">' + p.sales + ' sales - ' + p.revenue + '</span>' +
            '</div>' +
            '<span class="trend-' + p.trend + '"><i class="fas fa-arrow-' + p.trend + '"></i></span>' +
        '</div>';
    }
    list.innerHTML = html;
}

// ====== GST CALCULATIONS ======
function calculateGST() {
    var rate = parseFloat(document.getElementById('productRate').value) || 0;
    var gstRate = parseFloat(document.getElementById('gstRate').value) || 0;
    var gstAmount = (rate * gstRate / 100).toFixed(2);
    var finalPrice = (rate + parseFloat(gstAmount)).toFixed(2);

    document.getElementById('gstAmount').value = gstAmount;
    document.getElementById('finalPrice').value = finalPrice;

    var cgst = (parseFloat(gstAmount) / 2).toFixed(2);
    var sgst = cgst;

    document.getElementById('cgstAmount').textContent = 'Rs.' + cgst;
    document.getElementById('sgstAmount').textContent = 'Rs.' + sgst;
    document.getElementById('totalGstAmount').textContent = 'Rs.' + gstAmount;
}

function toggleIGST() {
    var isIGST = document.getElementById('igstToggle').checked;
    var igstGroup = document.getElementById('igstGroup');
    var gstRate = parseFloat(document.getElementById('gstRate').value) || 0;

    if (isIGST) {
        igstGroup.style.display = 'block';
        document.getElementById('igstRate').value = gstRate;
        document.getElementById('cgstAmount').textContent = 'Rs.0.00';
        document.getElementById('sgstAmount').textContent = 'Rs.0.00';
    } else {
        igstGroup.style.display = 'none';
        calculateGST();
    }
}

// ====== PRODUCTS CRUD ======
var editingProductId = null;

function openAddProductModal() {
    editingProductId = null;
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productRate').value = '';
    document.getElementById('gstRate').value = '12';
    document.getElementById('gstAmount').value = '';
    document.getElementById('finalPrice').value = '';
    document.getElementById('oldPrice').value = '';
    document.getElementById('hsnCode').value = '';
    document.getElementById('gstType').value = 'regular';
    document.getElementById('igstToggle').checked = false;
    document.getElementById('productDescription').value = '';
    document.getElementById('unitType').value = 'kg';
    document.getElementById('netWeight').value = '';
    document.getElementById('stockQuantity').value = '100';
    document.getElementById('productBadge').value = '';
    document.getElementById('skuCode').value = '';
    document.getElementById('barcode').value = '';
    document.getElementById('minOrderQty').value = '1';
    document.getElementById('maxOrderQty').value = '10';
    document.getElementById('productStatus').value = 'active';

    document.getElementById('cgstAmount').textContent = 'Rs.0.00';
    document.getElementById('sgstAmount').textContent = 'Rs.0.00';
    document.getElementById('totalGstAmount').textContent = 'Rs.0.00';

    document.getElementById('addProductModal').classList.add('active');
}

function closeAddProductModal() {
    document.getElementById('addProductModal').classList.remove('active');
}

function editProduct(id) {
    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) { product = products[i]; break; }
    }
    if (!product) return;

    editingProductId = id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productRate').value = product.rate;
    document.getElementById('gstRate').value = product.gstRate;
    document.getElementById('gstAmount').value = product.gstAmount;
    document.getElementById('finalPrice').value = product.finalPrice;
    document.getElementById('oldPrice').value = product.oldPrice || '';
    document.getElementById('hsnCode').value = product.hsnCode || '';
    document.getElementById('gstType').value = product.gstType;
    document.getElementById('igstToggle').checked = product.igst || false;
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('unitType').value = product.unitType;
    document.getElementById('netWeight').value = product.netWeight || '';
    document.getElementById('stockQuantity').value = product.stock;
    document.getElementById('productBadge').value = product.badge || '';
    document.getElementById('skuCode').value = product.sku || '';
    document.getElementById('barcode').value = product.barcode || '';
    document.getElementById('minOrderQty').value = product.minQty;
    document.getElementById('maxOrderQty').value = product.maxQty;
    document.getElementById('productStatus').value = product.status;

    calculateGST();
    document.getElementById('addProductModal').classList.add('active');
}

function saveProduct() {
    var name = document.getElementById('productName').value.trim();
    var category = document.getElementById('productCategory').value;
    var rate = parseFloat(document.getElementById('productRate').value) || 0;
    var gstRate = parseFloat(document.getElementById('gstRate').value) || 0;
    var gstAmount = parseFloat(document.getElementById('gstAmount').value) || 0;
    var finalPrice = parseFloat(document.getElementById('finalPrice').value) || 0;

    if (!name || !category || !rate) {
        showToast('Please fill all required fields!', 'error');
        return;
    }

    var oldImage = null;
    if (editingProductId) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === editingProductId) { oldImage = products[i].image; break; }
        }
    }

    var productData = {
        id: editingProductId || Date.now(),
        name: name,
        category: category,
        rate: rate,
        gstRate: gstRate,
        gstAmount: gstAmount,
        finalPrice: finalPrice,
        oldPrice: parseFloat(document.getElementById('oldPrice').value) || 0,
        hsnCode: document.getElementById('hsnCode').value,
        gstType: document.getElementById('gstType').value,
        igst: document.getElementById('igstToggle').checked,
        description: document.getElementById('productDescription').value,
        unitType: document.getElementById('unitType').value,
        netWeight: document.getElementById('netWeight').value,
        stock: parseInt(document.getElementById('stockQuantity').value) || 0,
        badge: document.getElementById('productBadge').value,
        sku: document.getElementById('skuCode').value,
        barcode: document.getElementById('barcode').value,
        minQty: parseInt(document.getElementById('minOrderQty').value) || 1,
        maxQty: parseInt(document.getElementById('maxOrderQty').value) || 10,
        status: document.getElementById('productStatus').value,
        image: oldImage
    };

    if (editingProductId) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === editingProductId) { products[i] = productData; break; }
        }
        showToast('Product updated successfully!');
    } else {
        products.push(productData);
        showToast('Product added successfully!');
    }

    saveToStorage();
    closeAddProductModal();
    renderProducts();
}

function deleteProduct(id) {
    if (!confirm('Are you sure you want to delete this product?')) return;
    var newProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].id !== id) newProducts.push(products[i]);
    }
    products = newProducts;
    saveToStorage();
    renderProducts();
    showToast('Product deleted successfully!');
}

function renderProducts() {
    var grid = document.getElementById('productsGridAdmin');
    if (!grid) return;

    var search = '';
    var searchEl = document.getElementById('productSearch');
    if (searchEl) search = searchEl.value.toLowerCase();

    var categoryFilter = 'all';
    var filterEl = document.getElementById('productCategoryFilter');
    if (filterEl) categoryFilter = filterEl.value;

    var filtered = [];
    for (var i = 0; i < products.length; i++) {
        var p = products[i];
        var matchSearch = p.name.toLowerCase().indexOf(search) !== -1 || p.sku.toLowerCase().indexOf(search) !== -1;
        var matchCategory = categoryFilter === 'all' || p.category === categoryFilter;
        if (matchSearch && matchCategory) filtered.push(p);
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var p = filtered[i];
        var badgeHtml = p.badge ? '<span class="product-badge ' + p.badge + '">' + p.badge + '</span>' : '';
        var oldPriceHtml = p.oldPrice ? '<span class="old-price">' + formatCurrency(p.oldPrice) + '</span>' : '';
        html += '<div class="product-card-admin">' +
            '<div class="product-image-admin">' +
                (p.image ? '<img src="' + p.image + '" alt="' + p.name + '">' : '<i class="fas ' + getCategoryIcon(p.category) + '"></i>') +
                badgeHtml +
            '</div>' +
            '<div class="product-info-admin">' +
                '<h4>' + p.name + '</h4>' +
                '<span class="product-category">' + p.category + '</span>' +
                '<div class="product-price-admin">' +
                    '<span class="price">' + formatCurrency(p.finalPrice) + '</span>' +
                    oldPriceHtml +
                '</div>' +
                '<div class="product-meta">' +
                    '<span><i class="fas fa-box"></i> Stock: ' + p.stock + '</span>' +
                    '<span><i class="fas fa-qrcode"></i> ' + p.sku + '</span>' +
                '</div>' +
                '<div class="product-gst-info">' +
                    '<span>GST: ' + p.gstRate + '%</span>' +
                    '<span>HSN: ' + (p.hsnCode || 'N/A') + '</span>' +
                '</div>' +
                '<div class="product-status">' +
                    getStatusBadge(p.status) +
                '</div>' +
            '</div>' +
            '<div class="product-actions-admin">' +
                '<button class="btn btn-sm btn-edit" onclick="editProduct(' + p.id + ')"><i class="fas fa-edit"></i> Edit</button>' +
                '<button class="btn btn-sm btn-delete" onclick="deleteProduct(' + p.id + ')"><i class="fas fa-trash"></i> Delete</button>' +
            '</div>' +
        '</div>';
    }

    if (filtered.length === 0) {
        html = '<div class="empty-state"><i class="fas fa-box-open"></i><p>No products found</p></div>';
    }
    grid.innerHTML = html;
}

// ====== CATEGORIES CRUD ======
var editingCategoryId = null;

function openAddCategoryModal() {
    editingCategoryId = null;
    document.getElementById('categoryName').value = '';
    document.getElementById('categorySlug').value = '';
    document.getElementById('parentCategory').value = '';
    document.getElementById('categoryDescription').value = '';
    document.getElementById('categoryGstRate').value = '12';
    document.getElementById('categoryOrder').value = '1';
    document.getElementById('categoryActive').checked = true;
    document.getElementById('categoryFeatured').checked = false;
    document.getElementById('categoryMenu').checked = true;

    document.getElementById('addCategoryModal').classList.add('active');
}

function closeAddCategoryModal() {
    document.getElementById('addCategoryModal').classList.remove('active');
}

function editCategory(id) {
    var cat = null;
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === id) { cat = categories[i]; break; }
    }
    if (!cat) return;

    editingCategoryId = id;
    document.getElementById('categoryName').value = cat.name;
    document.getElementById('categorySlug').value = cat.slug;
    document.getElementById('parentCategory').value = cat.parent;
    document.getElementById('categoryDescription').value = cat.description;
    document.getElementById('categoryGstRate').value = cat.gstRate;
    document.getElementById('categoryOrder').value = cat.order;
    document.getElementById('categoryActive').checked = cat.active;
    document.getElementById('categoryFeatured').checked = cat.featured;
    document.getElementById('categoryMenu').checked = cat.menu;

    document.getElementById('addCategoryModal').classList.add('active');
}

function saveCategory() {
    var name = document.getElementById('categoryName').value.trim();
    if (!name) {
        showToast('Category name is required!', 'error');
        return;
    }

    var slugInput = document.getElementById('categorySlug').value.trim();
    var slug = slugInput || name.toLowerCase().replace(/\s+/g, '-');

    var oldImage = null;
    var oldCount = 0;
    if (editingCategoryId) {
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].id === editingCategoryId) { 
                oldImage = categories[i].image; 
                oldCount = categories[i].productCount;
                break; 
            }
        }
    }

    var catData = {
        id: editingCategoryId || Date.now(),
        name: name,
        slug: slug,
        parent: document.getElementById('parentCategory').value,
        description: document.getElementById('categoryDescription').value,
        gstRate: parseInt(document.getElementById('categoryGstRate').value) || 12,
        order: parseInt(document.getElementById('categoryOrder').value) || 1,
        image: oldImage,
        active: document.getElementById('categoryActive').checked,
        featured: document.getElementById('categoryFeatured').checked,
        menu: document.getElementById('categoryMenu').checked,
        productCount: oldCount
    };

    if (editingCategoryId) {
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].id === editingCategoryId) { categories[i] = catData; break; }
        }
        showToast('Category updated successfully!');
    } else {
        categories.push(catData);
        showToast('Category added successfully!');
    }

    saveToStorage();
    closeAddCategoryModal();
    renderCategories();
    updateCategoryDropdowns();
}

function deleteCategory(id) {
    var cat = null;
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === id) { cat = categories[i]; break; }
    }
    if (cat && cat.productCount > 0) {
        showToast('Cannot delete category with products. Move products first!', 'warning');
        return;
    }
    if (!confirm('Are you sure you want to delete this category?')) return;
    var newCategories = [];
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].id !== id) newCategories.push(categories[i]);
    }
    categories = newCategories;
    saveToStorage();
    renderCategories();
    updateCategoryDropdowns();
    showToast('Category deleted successfully!');
}

function renderCategories() {
    var grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    var search = '';
    var searchEl = document.getElementById('categorySearch');
    if (searchEl) search = searchEl.value.toLowerCase();

    var filter = 'all';
    var filterEl = document.getElementById('categoryViewFilter');
    if (filterEl) filter = filterEl.value;

    var filtered = [];
    for (var i = 0; i < categories.length; i++) {
        var c = categories[i];
        var matchSearch = c.name.toLowerCase().indexOf(search) !== -1;
        var matchFilter = filter === 'all' || 
                       (filter === 'active' && c.active) ||
                       (filter === 'featured' && c.featured) ||
                       (filter === 'parent' && !c.parent) ||
                       (filter === 'sub' && c.parent);
        if (matchSearch && matchFilter) filtered.push(c);
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var c = filtered[i];
        var featuredBadge = c.featured ? '<span class="category-badge badge-featured">Featured</span>' : '';
        var menuBadge = c.menu ? '<span class="category-badge badge-active">Menu</span>' : '';
        var subBadge = c.parent ? '<span class="category-badge" style="background:#dbeafe;color:#1e40af;">Sub</span>' : '';
        html += '<div class="category-card">' +
            '<div class="category-card-header">' +
                '<div class="category-icon">' +
                    '<i class="fas ' + getCategoryIcon(c.slug) + '"></i>' +
                '</div>' +
                '<div class="category-info">' +
                    '<h4>' + c.name + ' ' + getStatusBadge(c.active ? 'active' : 'inactive') + '</h4>' +
                    '<span>/' + c.slug + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="category-stats">' +
                '<div class="category-stat">' +
                    '<strong>' + c.productCount + '</strong>' +
                    '<span>Products</span>' +
                '</div>' +
                '<div class="category-stat">' +
                    '<strong>' + c.gstRate + '%</strong>' +
                    '<span>GST</span>' +
                '</div>' +
                '<div class="category-stat">' +
                    '<strong>#' + c.order + '</strong>' +
                    '<span>Order</span>' +
                '</div>' +
            '</div>' +
            '<div class="category-badges">' + featuredBadge + menuBadge + subBadge + '</div>' +
            '<div class="category-actions">' +
                '<button class="btn-edit" onclick="editCategory(' + c.id + ')"><i class="fas fa-edit"></i> Edit</button>' +
                '<button class="btn-delete" onclick="deleteCategory(' + c.id + ')"><i class="fas fa-trash"></i> Delete</button>' +
            '</div>' +
        '</div>';
    }

    if (filtered.length === 0) {
        html = '<div class="empty-state"><i class="fas fa-folder-open"></i><p>No categories found</p></div>';
    }
    grid.innerHTML = html;

    document.getElementById('totalCategories').textContent = categories.length;
}

function updateCategoryDropdowns() {
    var selects = document.querySelectorAll('#productCategory, #parentCategory');
    for (var s = 0; s < selects.length; s++) {
        var select = selects[s];
        var currentValue = select.value;
        var isProduct = select.id === 'productCategory';
        select.innerHTML = isProduct ? '<option value="">Select Category</option>' : '<option value="">None (Top Level)</option>';
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].active) {
                select.innerHTML += '<option value="' + categories[i].slug + '">' + categories[i].name + '</option>';
            }
        }
        select.value = currentValue;
    }
}

// ====== DRIVERS CRUD ======
var editingDriverId = null;

function openAddDriverModal() {
    editingDriverId = null;
    document.getElementById('driverName').value = '';
    document.getElementById('driverPhone').value = '';
    document.getElementById('driverEmail').value = '';
    document.getElementById('driverDob').value = '';
    document.getElementById('driverAddress').value = '';
    document.getElementById('vehicleType').value = 'bike';
    document.getElementById('vehicleNumber').value = '';
    document.getElementById('licenseNumber').value = '';
    document.getElementById('licenseExpiry').value = '';
    document.getElementById('rcNumber').value = '';
    document.getElementById('insuranceExpiry').value = '';
    document.getElementById('deviceType').value = 'android';
    document.getElementById('deviceId').value = '';
    document.getElementById('enableLiveTracking').checked = true;
    document.getElementById('enableRouteOptimization').checked = true;
    document.getElementById('enableGeofencing').checked = false;
    document.getElementById('enableSpeedAlerts').checked = false;
    document.getElementById('employmentType').value = 'fulltime';
    document.getElementById('workZone').value = 'salem';
    document.getElementById('shiftTiming').value = 'morning';
    document.getElementById('maxOrdersPerDay').value = '20';

    document.getElementById('addDriverModal').classList.add('active');
}

function closeAddDriverModal() {
    document.getElementById('addDriverModal').classList.remove('active');
}

function editDriver(id) {
    var driver = null;
    for (var i = 0; i < drivers.length; i++) {
        if (drivers[i].id === id) { driver = drivers[i]; break; }
    }
    if (!driver) return;

    editingDriverId = id;
    document.getElementById('driverName').value = driver.name;
    document.getElementById('driverPhone').value = driver.phone;
    document.getElementById('driverEmail').value = driver.email || '';
    document.getElementById('driverDob').value = driver.dob || '';
    document.getElementById('driverAddress').value = driver.address || '';
    document.getElementById('vehicleType').value = driver.vehicleType;
    document.getElementById('vehicleNumber').value = driver.vehicleNumber;
    document.getElementById('licenseNumber').value = driver.licenseNumber;
    document.getElementById('licenseExpiry').value = driver.licenseExpiry || '';
    document.getElementById('rcNumber').value = driver.rcNumber || '';
    document.getElementById('insuranceExpiry').value = driver.insuranceExpiry || '';
    document.getElementById('deviceType').value = driver.deviceType;
    document.getElementById('deviceId').value = driver.deviceId || '';
    document.getElementById('enableLiveTracking').checked = driver.liveTracking;
    document.getElementById('enableRouteOptimization').checked = driver.routeOptimization;
    document.getElementById('enableGeofencing').checked = driver.geofencing;
    document.getElementById('enableSpeedAlerts').checked = driver.speedAlerts;
    document.getElementById('employmentType').value = driver.employmentType;
    document.getElementById('workZone').value = driver.workZone;
    document.getElementById('shiftTiming').value = driver.shiftTiming;
    document.getElementById('maxOrdersPerDay').value = driver.maxOrdersPerDay;

    document.getElementById('addDriverModal').classList.add('active');
}

function saveDriver() {
    var name = document.getElementById('driverName').value.trim();
    var phone = document.getElementById('driverPhone').value.trim();
    var vehicleNumber = document.getElementById('vehicleNumber').value.trim();
    var licenseNumber = document.getElementById('licenseNumber').value.trim();

    if (!name || !phone || !vehicleNumber || !licenseNumber) {
        showToast('Please fill all required fields!', 'error');
        return;
    }

    var oldStatus = 'offline';
    var oldDeliveries = 0;
    var oldRating = 5.0;
    var oldPhoto = null;
    if (editingDriverId) {
        for (var i = 0; i < drivers.length; i++) {
            if (drivers[i].id === editingDriverId) {
                oldStatus = drivers[i].status;
                oldDeliveries = drivers[i].todayDeliveries;
                oldRating = drivers[i].rating;
                oldPhoto = drivers[i].photo;
                break;
            }
        }
    }

    var driverData = {
        id: editingDriverId || Date.now(),
        name: name,
        phone: phone,
        email: document.getElementById('driverEmail').value,
        dob: document.getElementById('driverDob').value,
        address: document.getElementById('driverAddress').value,
        vehicleType: document.getElementById('vehicleType').value,
        vehicleNumber: vehicleNumber,
        licenseNumber: licenseNumber,
        licenseExpiry: document.getElementById('licenseExpiry').value,
        rcNumber: document.getElementById('rcNumber').value,
        insuranceExpiry: document.getElementById('insuranceExpiry').value,
        deviceType: document.getElementById('deviceType').value,
        deviceId: document.getElementById('deviceId').value,
        liveTracking: document.getElementById('enableLiveTracking').checked,
        routeOptimization: document.getElementById('enableRouteOptimization').checked,
        geofencing: document.getElementById('enableGeofencing').checked,
        speedAlerts: document.getElementById('enableSpeedAlerts').checked,
        employmentType: document.getElementById('employmentType').value,
        workZone: document.getElementById('workZone').value,
        shiftTiming: document.getElementById('shiftTiming').value,
        maxOrdersPerDay: parseInt(document.getElementById('maxOrdersPerDay').value) || 20,
        status: oldStatus,
        todayDeliveries: oldDeliveries,
        rating: oldRating,
        photo: oldPhoto
    };

    if (editingDriverId) {
        for (var i = 0; i < drivers.length; i++) {
            if (drivers[i].id === editingDriverId) { drivers[i] = driverData; break; }
        }
        showToast('Driver updated successfully!');
    } else {
        drivers.push(driverData);
        showToast('Driver added successfully!');
    }

    saveToStorage();
    closeAddDriverModal();
    renderDrivers();
}

function deleteDriver(id) {
    if (!confirm('Are you sure you want to delete this driver?')) return;
    var newDrivers = [];
    for (var i = 0; i < drivers.length; i++) {
        if (drivers[i].id !== id) newDrivers.push(drivers[i]);
    }
    drivers = newDrivers;
    saveToStorage();
    renderDrivers();
    showToast('Driver deleted successfully!');
}

function renderDrivers() {
    var grid = document.getElementById('driversGrid');
    if (!grid) return;

    var filter = 'all';
    var filterEl = document.getElementById('driverStatusFilter');
    if (filterEl) filter = filterEl.value;

    var filtered = [];
    for (var i = 0; i < drivers.length; i++) {
        if (filter === 'all' || drivers[i].status === filter) filtered.push(drivers[i]);
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var d = filtered[i];
        var trackingInfo = d.liveTracking ? 
            '<i class="fas fa-satellite-dish" style="color:#22c55e;"></i> Live GPS' : 
            '<i class="fas fa-satellite-dish" style="color:#94a3b8;"></i> No GPS';
        var routeOpt = d.routeOptimization ? ' - <i class="fas fa-route" style="color:#2196F3;"></i> Route Opt' : '';
        html += '<div class="driver-card">' +
            '<div class="driver-header">' +
                '<div class="driver-avatar">' +
                    '<i class="fas ' + (d.photo ? 'fa-user' : 'fa-user-circle') + '"></i>' +
                    '<span class="driver-status-indicator status-' + d.status + '"></span>' +
                '</div>' +
                '<div class="driver-info">' +
                    '<h4>' + d.name + '</h4>' +
                    '<span>' + d.phone + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="driver-meta">' +
                '<div class="driver-meta-item">' +
                    '<strong>' + d.todayDeliveries + '</strong>' +
                    '<span>Today</span>' +
                '</div>' +
                '<div class="driver-meta-item">' +
                    '<strong>' + d.rating + '<i class="fas fa-star" style="font-size:10px;color:#f59e0b;"></i></strong>' +
                    '<span>Rating</span>' +
                '</div>' +
                '<div class="driver-meta-item">' +
                    '<strong>' + d.maxOrdersPerDay + '</strong>' +
                    '<span>Max/Day</span>' +
                '</div>' +
            '</div>' +
            '<div class="driver-vehicle">' +
                '<i class="fas ' + getVehicleIcon(d.vehicleType) + '"></i>' +
                '<span>' + d.vehicleType.toUpperCase() + ' - ' + d.vehicleNumber + '</span>' +
            '</div>' +
            '<div class="driver-tracking-info" style="font-size:12px;color:#64748b;margin-bottom:12px;">' +
                '<span>' + trackingInfo + routeOpt + '</span>' +
            '</div>' +
            '<div class="driver-actions">' +
                '<button class="btn-track" onclick="trackDriver(' + d.id + ')"><i class="fas fa-map-marker-alt"></i> Track</button>' +
                '<button class="btn-call" onclick="callDriver('' + d.phone + '')"><i class="fas fa-phone"></i> Call</button>' +
                '<button class="btn-edit" onclick="editDriver(' + d.id + ')"><i class="fas fa-edit"></i> Edit</button>' +
            '</div>' +
            '<div style="margin-top:8px;display:flex;gap:8px;">' +
                '<button class="btn btn-sm btn-delete" style="flex:1;" onclick="deleteDriver(' + d.id + ')"><i class="fas fa-trash"></i> Remove</button>' +
            '</div>' +
        '</div>';
    }

    if (filtered.length === 0) {
        html = '<div class="empty-state"><i class="fas fa-users"></i><p>No drivers found</p></div>';
    }
    grid.innerHTML = html;

    var activeCount = 0;
    for (var i = 0; i < drivers.length; i++) {
        if (drivers[i].status === 'online' || drivers[i].status === 'busy') activeCount++;
    }
    document.getElementById('activeDriverCount').textContent = activeCount;
}

function trackDriver(id) {
    var driver = null;
    for (var i = 0; i < drivers.length; i++) {
        if (drivers[i].id === id) { driver = drivers[i]; break; }
    }
    if (!driver) return;
    if (!driver.liveTracking) {
        showToast('Live tracking is disabled for this driver!', 'warning');
        return;
    }
    showToast('Tracking ' + driver.name + '... Opening live map');
}

function callDriver(phone) {
    window.location.href = 'tel:' + phone;
}

function refreshTracking() {
    showToast('Refreshing live tracking data...');
    renderDeliveries();
    renderDrivers();
}

// ====== DELIVERIES ======
function renderDeliveries() {
    var grid = document.getElementById('deliveriesTrackingGrid');
    if (!grid) return;

    var filter = 'all';
    var filterEl = document.getElementById('deliveryFilter');
    if (filterEl) filter = filterEl.value;

    var filtered = [];
    for (var i = 0; i < deliveries.length; i++) {
        if (filter === 'all' || deliveries[i].status === filter) filtered.push(deliveries[i]);
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var d = filtered[i];
        var driver = null;
        for (var j = 0; j < drivers.length; j++) {
            if (drivers[j].id === d.driverId) { driver = drivers[j]; break; }
        }
        html += '<div class="delivery-track-card">' +
            '<div class="delivery-track-header">' +
                '<h4>Order #' + d.id + '</h4>' +
                '<span class="delivery-status-badge status-' + d.status + '">' + d.status.replace(/_/g, ' ') + '</span>' +
            '</div>' +
            '<div class="delivery-track-route">' +
                '<i class="fas fa-map-marker-alt"></i>' +
                '<span>' + d.address + '</span>' +
            '</div>' +
            '<div class="delivery-track-progress">' +
                '<div class="progress-bar">' +
                    '<div class="progress-fill" style="width: ' + d.progress + '%"></div>' +
                '</div>' +
                '<div class="progress-labels">' +
                    '<span>Picked Up</span>' +
                    '<span>Out for Delivery</span>' +
                    '<span>Delivered</span>' +
                '</div>' +
            '</div>' +
            '<div class="delivery-track-info">' +
                '<div class="track-info-item">' +
                    '<i class="fas fa-user"></i>' +
                    '<span>' + d.customer + '</span>' +
                '</div>' +
                '<div class="track-info-item">' +
                    '<i class="fas fa-clock"></i>' +
                    '<span>ETA: ' + d.eta + '</span>' +
                '</div>' +
                '<div class="track-info-item">' +
                    '<i class="fas fa-road"></i>' +
                    '<span>' + d.distance + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="track-info-item" style="margin-bottom:12px;">' +
                '<i class="fas fa-motorcycle"></i>' +
                '<span>Driver: ' + (driver ? driver.name : 'Unassigned') + '</span>' +
            '</div>' +
            '<div class="delivery-track-actions">' +
                '<button class="btn-live-track" onclick="trackDelivery('' + d.id + '')"><i class="fas fa-map-marked-alt"></i> Live Track</button>' +
                '<button class="btn-contact" onclick="contactCustomer('' + d.id + '')"><i class="fas fa-phone"></i> Contact</button>' +
                '<button class="btn-update" onclick="updateDeliveryStatus('' + d.id + '')"><i class="fas fa-sync"></i> Update</button>' +
            '</div>' +
        '</div>';
    }

    if (filtered.length === 0) {
        html = '<div class="empty-state"><i class="fas fa-truck"></i><p>No active deliveries</p></div>';
    }
    grid.innerHTML = html;

    var activeCount = 0;
    for (var i = 0; i < deliveries.length; i++) {
        if (deliveries[i].status !== 'delivered') activeCount++;
    }
    document.getElementById('activeDeliveryCount').textContent = activeCount;
}

function trackDelivery(id) {
    showToast('Tracking delivery ' + id + '...');
}

function contactCustomer(id) {
    showToast('Opening customer contact...');
}

function updateDeliveryStatus(id) {
    var statuses = ['picked_up', 'out_for_delivery', 'nearby', 'delivered', 'delayed'];
    var delivery = null;
    for (var i = 0; i < deliveries.length; i++) {
        if (deliveries[i].id === id) { delivery = deliveries[i]; break; }
    }
    if (!delivery) return;

    var currentIndex = -1;
    for (var i = 0; i < statuses.length; i++) {
        if (statuses[i] === delivery.status) { currentIndex = i; break; }
    }
    var nextIndex = (currentIndex + 1) % statuses.length;
    var nextStatus = statuses[nextIndex];
    delivery.status = nextStatus;
    delivery.progress = Math.min(100, delivery.progress + 25);

    renderDeliveries();
    showToast('Delivery ' + id + ' updated to ' + nextStatus.replace(/_/g, ' '));
}

// ====== ORDERS ======
function renderOrders() {
    var tbody = document.getElementById('allOrdersTable');
    if (!tbody) return;

    var statusFilter = 'all';
    var statusEl = document.getElementById('orderStatusFilter');
    if (statusEl) statusFilter = statusEl.value;

    var dateFilter = '';
    var dateEl = document.getElementById('orderDateFilter');
    if (dateEl) dateFilter = dateEl.value;

    var filtered = [];
    for (var i = 0; i < orders.length; i++) {
        var o = orders[i];
        var matchStatus = statusFilter === 'all' || o.status === statusFilter;
        var matchDate = !dateFilter || o.date === dateFilter;
        if (matchStatus && matchDate) filtered.push(o);
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var order = filtered[i];
        html += '<tr>' +
            '<td><input type="checkbox" class="table-checkbox"></td>' +
            '<td><strong>' + order.id + '</strong></td>' +
            '<td>' + order.customer + '</td>' +
            '<td>' + order.date + '</td>' +
            '<td>' + order.items + ' items</td>' +
            '<td><strong>' + order.total + '</strong></td>' +
            '<td>' + order.payment + '</td>' +
            '<td><span class="status-badge status-' + order.status + '">' + order.status.replace(/_/g, ' ') + '</span></td>' +
            '<td>' +
                '<button class="btn btn-sm btn-outline" onclick="viewOrder('' + order.id + '')"><i class="fas fa-eye"></i></button>' +
                '<button class="btn btn-sm btn-edit" onclick="editOrder('' + order.id + '')"><i class="fas fa-edit"></i></button>' +
                '<button class="btn btn-sm btn-delete" onclick="deleteOrder('' + order.id + '')"><i class="fas fa-trash"></i></button>' +
            '</td>' +
        '</tr>';
    }

    if (filtered.length === 0) {
        html = '<tr><td colspan="9" style="text-align:center;padding:20px;">No orders found</td></tr>';
    }
    tbody.innerHTML = html;
}

function viewOrder(id) {
    showToast('Viewing order ' + id);
    document.getElementById('orderDetailModal').classList.add('active');
    document.getElementById('detailOrderId').textContent = id;
}

function editOrder(id) {
    showToast('Editing order ' + id);
}

function deleteOrder(id) {
    if (!confirm('Delete this order?')) return;
    var newOrders = [];
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].id !== id) newOrders.push(orders[i]);
    }
    orders = newOrders;
    renderOrders();
    showToast('Order deleted');
}

function closeOrderDetailModal() {
    document.getElementById('orderDetailModal').classList.remove('active');
}

function exportOrders() {
    showToast('Exporting orders to CSV...');
}

// ====== CUSTOMERS ======
function renderCustomers() {
    var grid = document.getElementById('customersGrid');
    if (!grid) return;

    var search = '';
    var searchEl = document.getElementById('customerSearch');
    if (searchEl) search = searchEl.value.toLowerCase();

    var filtered = [];
    for (var i = 0; i < customers.length; i++) {
        var c = customers[i];
        if (c.name.toLowerCase().indexOf(search) !== -1 || 
            c.email.toLowerCase().indexOf(search) !== -1 ||
            c.phone.indexOf(search) !== -1) {
            filtered.push(c);
        }
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var c = filtered[i];
        html += '<div class="customer-card" style="background:#fff;border-radius:12px;padding:20px;border:1px solid #e2e8f0;transition:all 0.3s;">' +
            '<div class="customer-header" style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">' +
                '<div class="customer-avatar" style="width:48px;height:48px;border-radius:50%;background:#E8F5E9;display:flex;align-items:center;justify-content:center;color:#2D7A3E;font-size:20px;">' +
                    '<i class="fas fa-user-circle"></i>' +
                '</div>' +
                '<div class="customer-info">' +
                    '<h4 style="margin:0;font-size:16px;color:#1e293b;">' + c.name + '</h4>' +
                    '<span style="font-size:13px;color:#64748b;">' + c.email + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="customer-meta" style="display:flex;gap:16px;margin-bottom:16px;padding:12px 0;border-top:1px solid #f1f5f9;border-bottom:1px solid #f1f5f9;">' +
                '<div class="customer-meta-item" style="text-align:center;">' +
                    '<strong style="display:block;font-size:16px;color:#1e293b;">' + c.orders + '</strong>' +
                    '<span style="font-size:12px;color:#64748b;">Orders</span>' +
                '</div>' +
                '<div class="customer-meta-item" style="text-align:center;">' +
                    '<strong style="display:block;font-size:16px;color:#1e293b;">' + c.totalSpent + '</strong>' +
                    '<span style="font-size:12px;color:#64748b;">Spent</span>' +
                '</div>' +
                '<div class="customer-meta-item" style="text-align:center;">' +
                    '<strong style="display:block;font-size:16px;color:#1e293b;">' + c.lastOrder + '</strong>' +
                    '<span style="font-size:12px;color:#64748b;">Last Order</span>' +
                '</div>' +
            '</div>' +
            '<div class="customer-phone" style="font-size:13px;color:#64748b;margin-bottom:12px;">' +
                '<i class="fas fa-phone"></i> ' + c.phone +
            '</div>' +
            '<div class="customer-actions" style="display:flex;gap:8px;">' +
                '<button class="btn btn-sm btn-outline" onclick="viewCustomer(' + c.id + ')"><i class="fas fa-eye"></i> View</button>' +
                '<button class="btn btn-sm btn-edit" onclick="editCustomer(' + c.id + ')"><i class="fas fa-edit"></i> Edit</button>' +
                '<button class="btn btn-sm btn-delete" onclick="deleteCustomer(' + c.id + ')"><i class="fas fa-trash"></i> Delete</button>' +
            '</div>' +
        '</div>';
    }

    if (filtered.length === 0) {
        html = '<div class="empty-state"><i class="fas fa-users"></i><p>No customers found</p></div>';
    }
    grid.innerHTML = html;
}

function viewCustomer(id) {
    showToast('Viewing customer #' + id);
}

function editCustomer(id) {
    showToast('Editing customer #' + id);
}

function deleteCustomer(id) {
    if (!confirm('Delete this customer?')) return;
    var newCustomers = [];
    for (var i = 0; i < customers.length; i++) {
        if (customers[i].id !== id) newCustomers.push(customers[i]);
    }
    customers = newCustomers;
    renderCustomers();
    showToast('Customer deleted');
}

// ====== SETTINGS ======
function initSettings() {
    var tabs = document.querySelectorAll('.settings-tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(e) {
            e.preventDefault();
            var tabName = this.dataset.tab;

            var allTabs = document.querySelectorAll('.settings-tab');
            for (var j = 0; j < allTabs.length; j++) {
                allTabs[j].classList.remove('active');
            }
            var allPanels = document.querySelectorAll('.settings-panel');
            for (var j = 0; j < allPanels.length; j++) {
                allPanels[j].classList.remove('active');
            }

            this.classList.add('active');
            var panel = document.getElementById(tabName + '-panel');
            if (panel) panel.classList.add('active');
        });
    }
}

// ====== SIDEBAR & UI ======
function initSidebar() {
    var sidebar = document.getElementById('adminSidebar');
    var toggle = document.getElementById('sidebarToggle');

    if (toggle) {
        toggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }

    var navItems = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function(e) {
            if (this.getAttribute('onclick')) return;
            e.preventDefault();
            var page = this.dataset.page;
            if (page) switchPage(page);
        });
    }
}

function setCurrentDate() {
    var dateEl = document.getElementById('currentDate');
    if (dateEl) {
        var now = new Date();
        dateEl.textContent = now.toLocaleDateString('en-IN', { 
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
        });
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        showToast('Logging out...');
        setTimeout(function() {
            window.location.href = 'admin-logout.html';
        }, 1000);
    }
}

// ====== FILE UPLOAD HANDLERS ======
function initFileUploads() {
    var catUpload = document.getElementById('categoryImageUpload');
    if (catUpload) {
        catUpload.addEventListener('click', function() {
            document.getElementById('categoryImage').click();
        });
        document.getElementById('categoryImage').addEventListener('change', function() {
            if (this.files[0]) {
                catUpload.innerHTML = '<i class="fas fa-check-circle" style="color:#2D7A3E;"></i><span>' + this.files[0].name + '</span>';
            }
        });
    }

    var uploadIds = ['driverPhotoUpload', 'aadhaarUpload', 'licenseUpload', 'rcUpload'];
    var inputIds = ['driverPhoto', 'aadhaarDoc', 'licenseDoc', 'rcDoc'];
    for (var i = 0; i < uploadIds.length; i++) {
        var upload = document.getElementById(uploadIds[i]);
        if (upload) {
            (function(upl, inpId) {
                upl.addEventListener('click', function() {
                    document.getElementById(inpId).click();
                });
                document.getElementById(inpId).addEventListener('change', function() {
                    if (this.files[0]) {
                        upl.innerHTML = '<i class="fas fa-check-circle" style="color:#2D7A3E;"></i><span>' + this.files[0].name + '</span>';
                    }
                });
            })(upload, inputIds[i]);
        }
    }
}

// ====== SEARCH & FILTER HANDLERS ======
function initSearchFilters() {
    var productSearch = document.getElementById('productSearch');
    if (productSearch) productSearch.addEventListener('input', renderProducts);

    var productCategoryFilter = document.getElementById('productCategoryFilter');
    if (productCategoryFilter) productCategoryFilter.addEventListener('change', renderProducts);

    var categorySearch = document.getElementById('categorySearch');
    if (categorySearch) categorySearch.addEventListener('input', renderCategories);

    var categoryViewFilter = document.getElementById('categoryViewFilter');
    if (categoryViewFilter) categoryViewFilter.addEventListener('change', renderCategories);

    var driverStatusFilter = document.getElementById('driverStatusFilter');
    if (driverStatusFilter) driverStatusFilter.addEventListener('change', renderDrivers);

    var deliveryFilter = document.getElementById('deliveryFilter');
    if (deliveryFilter) deliveryFilter.addEventListener('change', renderDeliveries);

    var orderStatusFilter = document.getElementById('orderStatusFilter');
    if (orderStatusFilter) orderStatusFilter.addEventListener('change', renderOrders);

    var orderDateFilter = document.getElementById('orderDateFilter');
    if (orderDateFilter) orderDateFilter.addEventListener('change', renderOrders);

    var customerSearch = document.getElementById('customerSearch');
    if (customerSearch) customerSearch.addEventListener('input', renderCustomers);
}

// ====== CHARTS ======
function initCharts() {
    var salesCtx = document.getElementById('salesChart');
    if (salesCtx && typeof Chart !== 'undefined') {
        new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Sales (Rs.)',
                    data: [45000, 52000, 48000, 61000, 55000, 72000, 68000],
                    borderColor: '#2D7A3E',
                    backgroundColor: 'rgba(45, 122, 62, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    var orderCtx = document.getElementById('orderStatusChart');
    if (orderCtx && typeof Chart !== 'undefined') {
        new Chart(orderCtx, {
            type: 'doughnut',
            data: {
                labels: ['Delivered', 'Processing', 'Pending', 'Cancelled'],
                datasets: [{
                    data: [65, 20, 10, 5],
                    backgroundColor: ['#2D7A3E', '#2196F3', '#FF8F00', '#E91E63']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } }
            }
        });
    }

    var revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx && typeof Chart !== 'undefined') {
        new Chart(revenueCtx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Revenue',
                    data: [125000, 145000, 138000, 162000],
                    backgroundColor: '#2D7A3E'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }
            }
        });
    }

    var categoryCtx = document.getElementById('categoryChart');
    if (categoryCtx && typeof Chart !== 'undefined') {
        new Chart(categoryCtx, {
            type: 'pie',
            data: {
                labels: ['Millets', 'Pulses', 'Rice', 'Spices', 'Oils', 'Others'],
                datasets: [{
                    data: [25, 30, 20, 15, 5, 5],
                    backgroundColor: ['#2D7A3E', '#2196F3', '#FF8F00', '#E91E63', '#9C27B0', '#607D8B']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    var dailyCtx = document.getElementById('dailyChart');
    if (dailyCtx && typeof Chart !== 'undefined') {
        new Chart(dailyCtx, {
            type: 'line',
            data: {
                labels: ['1st', '5th', '10th', '15th', '20th', '25th', '30th'],
                datasets: [{
                    label: 'Daily Sales',
                    data: [28000, 32000, 29000, 35000, 31000, 38000, 42000],
                    borderColor: '#2196F3',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }
            }
        });
    }
}

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
    setCurrentDate();
    initSettings();
    initCharts();
    initFileUploads();
    initSearchFilters();
    updateCategoryDropdowns();
    renderDashboard();
    renderProducts();
    renderCategories();
    renderDrivers();
    renderDeliveries();
    renderOrders();
    renderCustomers();

    var modals = document.querySelectorAll('.admin-modal');
    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', function(e) {
            if (e.target === this) this.classList.remove('active');
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            var allModals = document.querySelectorAll('.admin-modal');
            for (var i = 0; i < allModals.length; i++) {
                allModals[i].classList.remove('active');
            }
        }
    });
});

// ====== ADMIN LOGOUT ======
function adminLogout() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear all admin session data
        localStorage.removeItem('umade_admin_logged_in');
        localStorage.removeItem('umade_admin_session_expiry');
        localStorage.removeItem('umade_admin_user');

        showToast('Logging out...');

        setTimeout(function() {
            window.location.href = 'admin-login.html';
        }, 1000);
    }
}

// ====== SESSION EXPIRY CHECK ======
function checkSessionExpiry() {
    var sessionExpiry = localStorage.getItem('umade_admin_session_expiry');
    if (!sessionExpiry || new Date().getTime() > parseInt(sessionExpiry)) {
        localStorage.removeItem('umade_admin_logged_in');
        localStorage.removeItem('umade_admin_session_expiry');
        localStorage.removeItem('umade_admin_user');
        window.location.href = 'admin-login.html';
        return false;
    }
    return true;
}

// Check session every 5 minutes
setInterval(checkSessionExpiry, 300000);
