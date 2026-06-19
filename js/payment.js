// ============================================
// UMADE PAYMENT / CHECKOUT JavaScript
// ============================================

const deliveryZones = {
    '560001': { zone: 'Bengaluru Central', express: true, time: '30-45 min', fee: 0 },
    '560002': { zone: 'Bengaluru Central', express: true, time: '30-45 min', fee: 0 },
    '560003': { zone: 'Bengaluru Central', express: true, time: '30-45 min', fee: 0 },
    '560004': { zone: 'Bengaluru Central', express: true, time: '30-45 min', fee: 0 },
    '560005': { zone: 'Bengaluru Central', express: true, time: '30-45 min', fee: 0 },
    '560034': { zone: 'Bengaluru South', express: true, time: '30-45 min', fee: 0 },
    '560095': { zone: 'Bengaluru South', express: true, time: '30-45 min', fee: 0 },
    '560076': { zone: 'Bengaluru South', express: true, time: '30-45 min', fee: 0 },
    '560068': { zone: 'Bengaluru South', express: true, time: '30-45 min', fee: 0 },
    '560070': { zone: 'Bengaluru South', express: true, time: '30-45 min', fee: 0 },
    '560037': { zone: 'Bengaluru East', express: true, time: '30-45 min', fee: 0 },
    '560048': { zone: 'Bengaluru East', express: true, time: '30-45 min', fee: 0 },
    '560066': { zone: 'Bengaluru East', express: true, time: '30-45 min', fee: 0 },
    '560067': { zone: 'Bengaluru East', express: true, time: '30-45 min', fee: 0 },
    '560024': { zone: 'Bengaluru North', express: true, time: '30-45 min', fee: 0 },
    '560032': { zone: 'Bengaluru North', express: true, time: '30-45 min', fee: 0 },
    '560045': { zone: 'Bengaluru North', express: true, time: '30-45 min', fee: 0 },
    '560064': { zone: 'Bengaluru North', express: true, time: '30-45 min', fee: 0 },
    '600001': { zone: 'Chennai Central', express: true, time: '30-45 min', fee: 0 },
    '600020': { zone: 'Chennai Central', express: true, time: '30-45 min', fee: 0 },
    '600040': { zone: 'Chennai Central', express: true, time: '30-45 min', fee: 0 },
    '600087': { zone: 'Chennai Central', express: true, time: '30-45 min', fee: 0 },
    '500001': { zone: 'Hyderabad Central', express: true, time: '45-60 min', fee: 0 },
    '500034': { zone: 'Hyderabad Central', express: true, time: '45-60 min', fee: 0 },
    '500081': { zone: 'Hyderabad Central', express: true, time: '45-60 min', fee: 0 },
    '400001': { zone: 'Mumbai Central', express: true, time: '45-60 min', fee: 0 },
    '400050': { zone: 'Mumbai Central', express: true, time: '45-60 min', fee: 0 },
    '400051': { zone: 'Mumbai Central', express: true, time: '45-60 min', fee: 0 },
    '400052': { zone: 'Mumbai Central', express: true, time: '45-60 min', fee: 0 },
    '110001': { zone: 'Delhi Central', express: true, time: '45-60 min', fee: 0 },
    '110048': { zone: 'Delhi Central', express: true, time: '45-60 min', fee: 0 },
    '110017': { zone: 'Delhi Central', express: true, time: '45-60 min', fee: 0 },
    '110092': { zone: 'Delhi Central', express: true, time: '45-60 min', fee: 0 },
};

// GST Rate (5% = CGST 2.5% + SGST 2.5%)
const GST_RATE = 0.05;

let subtotal = 554;
let deliveryFee = 0;
let discount = 0;

function checkPincode() {
    const input = document.getElementById('pincodeInput');
    const status = document.getElementById('pincodeStatus');
    const zones = document.getElementById('deliveryZones');
    const pincode = input.value.trim();

    if (!pincode || pincode.length !== 6) {
        status.className = 'pincode-status error';
        status.innerHTML = '<i class="fas fa-times-circle"></i> Please enter a valid 6-digit pincode';
        status.style.display = 'block';
        zones.style.display = 'none';
        return;
    }

    if (deliveryZones[pincode]) {
        const z = deliveryZones[pincode];
        status.className = 'pincode-status success';
        status.innerHTML = '<i class="fas fa-check-circle"></i> Delivery available in your area!';
        status.style.display = 'block';
        zones.style.display = 'block';
        document.getElementById('zoneName').textContent = z.zone;
        document.getElementById('zoneTime').textContent = z.time;
        document.getElementById('zoneBadge').textContent = z.express ? 'Express Available' : 'Standard Delivery';
    } else {
        status.className = 'pincode-status error';
        status.innerHTML = '<i class="fas fa-times-circle"></i> Sorry, we do not deliver to this pincode yet.';
        status.style.display = 'block';
        zones.style.display = 'none';
    }
}

function toggleNewAddress() {
    const form = document.getElementById('newAddressForm');
    if (form) {
        form.style.display = form.style.display === 'block' ? 'none' : 'block';
    }
}

function saveNewAddress() {
    showToast('Address saved successfully!');
    const form = document.getElementById('newAddressForm');
    if (form) form.style.display = 'none';
}

function selectUpiApp(el) {
    document.querySelectorAll('.upi-app').forEach(a => a.classList.remove('selected'));
    el.classList.add('selected');
}

function selectBank(el) {
    document.querySelectorAll('.bank-option').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
}

function selectWallet(el) {
    document.querySelectorAll('.wallet-option').forEach(w => w.classList.remove('selected'));
    el.classList.add('selected');
}

function applyCoupon() {
    const input = document.getElementById('couponInput');
    const msg = document.getElementById('couponMessage');
    const discountRow = document.getElementById('discountRow');
    const code = input.value.trim().toUpperCase();

    if (code === 'ORGANIC20') {
        discount = 50;
        msg.textContent = 'Coupon ORGANIC20 applied! You saved ₹50';
        msg.className = 'coupon-message success';
        if (discountRow) discountRow.style.display = 'flex';
        document.getElementById('discountAmount').textContent = '-₹50';
    } else if (code === 'MILLETS10') {
        discount = Math.round(subtotal * 0.10);
        msg.textContent = 'Coupon MILLETS10 applied! You saved ₹' + discount;
        msg.className = 'coupon-message success';
        if (discountRow) discountRow.style.display = 'flex';
        document.getElementById('discountAmount').textContent = '-₹' + discount;
    } else if (code === 'WELCOME100') {
        discount = 100;
        msg.textContent = 'Coupon WELCOME100 applied! You saved ₹100';
        msg.className = 'coupon-message success';
        if (discountRow) discountRow.style.display = 'flex';
        document.getElementById('discountAmount').textContent = '-₹100';
    } else {
        discount = 0;
        msg.textContent = 'Invalid coupon code. Try ORGANIC20, MILLETS10, or WELCOME100';
        msg.className = 'coupon-message error';
        if (discountRow) discountRow.style.display = 'none';
    }

    updateTotals();
}

function updateTotals() {
    const cgst = Math.round(subtotal * 0.025);
    const sgst = Math.round(subtotal * 0.025);
    const gstTotal = cgst + sgst;
    const grandTotal = subtotal + deliveryFee + gstTotal - discount;

    document.getElementById('subtotalAmount').textContent = '₹' + subtotal;
    document.getElementById('cgstAmount').textContent = '₹' + cgst;
    document.getElementById('sgstAmount').textContent = '₹' + sgst;
    document.getElementById('gstTotal').textContent = '₹' + gstTotal;
    document.getElementById('grandTotal').textContent = '₹' + grandTotal;
    document.getElementById('successTotal').textContent = '₹' + grandTotal;

    const btnPrice = document.querySelector('.btn-price');
    if (btnPrice) btnPrice.textContent = '₹' + grandTotal;
}

function processPayment() {
    const btn = document.getElementById('placeOrderBtn');
    const overlay = document.getElementById('processingOverlay');
    const success = document.getElementById('paymentSuccessModal');

    if (!btn || !overlay) return;

    btn.disabled = true;
    overlay.classList.add('active');

    // Simulate payment steps
    setTimeout(() => {
        const step2 = document.getElementById('step2');
        if (step2) {
            step2.classList.add('active');
            step2.querySelector('i').className = 'fas fa-check-circle';
        }
    }, 1500);

    setTimeout(() => {
        const step3 = document.getElementById('step3');
        if (step3) {
            step3.classList.add('active');
            step3.querySelector('i').className = 'fas fa-check-circle';
        }
    }, 3000);

    setTimeout(() => {
        overlay.classList.remove('active');
        if (success) success.classList.add('active');
        btn.disabled = false;

        // Reset steps
        document.querySelectorAll('.p-step').forEach((step, i) => {
            if (i > 0) {
                step.classList.remove('active');
                step.querySelector('i').className = 'fas fa-circle';
            }
        });
    }, 4000);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Payment method selection
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
            method.classList.add('selected');
            method.querySelector('input').checked = true;

            const methodType = method.dataset.method;
            const upiForm = document.getElementById('upiForm');
            const stripeForm = document.getElementById('stripeForm');
            const netbankingForm = document.getElementById('netbankingForm');
            const walletForm = document.getElementById('walletForm');

            if (upiForm) upiForm.style.display = methodType === 'upi' ? 'block' : 'none';
            if (stripeForm) stripeForm.style.display = methodType === 'card' ? 'block' : 'none';
            if (netbankingForm) netbankingForm.style.display = methodType === 'netbanking' ? 'block' : 'none';
            if (walletForm) walletForm.style.display = methodType === 'wallet' ? 'block' : 'none';
        });
    });

    // Delivery option selection
    document.querySelectorAll('.delivery-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.delivery-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            const radio = opt.querySelector('input');
            if (radio) radio.checked = true;

            const price = opt.querySelector('.option-price');
            if (price) {
                deliveryFee = price.textContent.includes('FREE') ? 0 : 7.99;
                updateTotals();
            }
        });
    });

    // Initialize totals
    updateTotals();
});
