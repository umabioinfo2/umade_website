// ===== Payment / Checkout JavaScript =====

// ===== DOM Elements =====
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const processingOverlay = document.getElementById('processingOverlay');
const paymentSuccessModal = document.getElementById('paymentSuccessModal');
const cardNumber = document.getElementById('cardNumber');
const expiryDate = document.getElementById('expiryDate');
const cvv = document.getElementById('cvv');
const couponInput = document.getElementById('couponInput');
const couponMessage = document.getElementById('couponMessage');
const discountRow = document.getElementById('discountRow');
const discountAmount = document.getElementById('discountAmount');
const grandTotal = document.getElementById('grandTotal');
const deliveryFee = document.getElementById('deliveryFee');
const successTotal = document.getElementById('successTotal');

let currentTotal = 47.92;
let discount = 0;

// ===== Address Selection =====
document.querySelectorAll('.address-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.address-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        card.querySelector('input[type="radio"]').checked = true;
    });
});

// ===== New Address Toggle =====
function toggleNewAddress() {
    const form = document.getElementById('newAddressForm');
    form.classList.toggle('open');
}

function saveNewAddress() {
    toggleNewAddress();
    showToast('New address saved successfully!');
}

// ===== Delivery Option Selection =====
document.querySelectorAll('.delivery-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.delivery-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        option.querySelector('input[type="radio"]').checked = true;

        // Update delivery fee
        const price = option.querySelector('.option-price').textContent;
        if (price === 'FREE') {
            deliveryFee.textContent = '₹0.00';
            deliveryFee.classList.add('free');
        } else {
            deliveryFee.textContent = price;
            deliveryFee.classList.remove('free');
        }
        updateTotal();
    });
});

// ===== Payment Method Selection =====
document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
        method.classList.add('selected');
        method.querySelector('input[type="radio"]').checked = true;

        // Show/hide appropriate form
        const upiForm = document.getElementById('upiForm');
        const stripeForm = document.getElementById('stripeForm');
        const netbankingForm = document.getElementById('netbankingForm');
        const walletForm = document.getElementById('walletForm');

        // Hide all forms first
        upiForm.style.display = 'none';
        stripeForm.style.display = 'none';
        netbankingForm.style.display = 'none';
        walletForm.style.display = 'none';

        // Show selected form
        const methodType = method.dataset.method;
        if (methodType === 'upi') {
            upiForm.style.display = 'block';
        } else if (methodType === 'card') {
            stripeForm.style.display = 'block';
        } else if (methodType === 'netbanking') {
            netbankingForm.style.display = 'block';
        } else if (methodType === 'wallet') {
            walletForm.style.display = 'block';
        }
    });
});

// ===== UPI App Selection =====
function selectUpiApp(element) {
    document.querySelectorAll('.upi-app').forEach(app => app.classList.remove('selected'));
    element.classList.add('selected');
}

// ===== Bank Selection =====
function selectBank(element) {
    document.querySelectorAll('.bank-option').forEach(bank => bank.classList.remove('selected'));
    element.classList.add('selected');
}

// ===== Wallet Selection =====
function selectWallet(element) {
    document.querySelectorAll('.wallet-option').forEach(wallet => wallet.classList.remove('selected'));
    element.classList.add('selected');
}

// ===== Card Input Formatting =====
cardNumber.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '₹1 ');
    e.target.value = value;

    // Detect card type
    const visaIcon = document.getElementById('visaIcon');
    const mastercardIcon = document.getElementById('mastercardIcon');
    const amexIcon = document.getElementById('amexIcon');

    visaIcon.classList.remove('active');
    mastercardIcon.classList.remove('active');
    amexIcon.classList.remove('active');

    if (value.startsWith('4')) {
        visaIcon.classList.add('active');
    } else if (/^5[1-5]/.test(value.replace(/\s/g, ''))) {
        mastercardIcon.classList.add('active');
    } else if (/^3[47]/.test(value.replace(/\s/g, ''))) {
        amexIcon.classList.add('active');
    }
});

expiryDate.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
    }
    e.target.value = value;
});

cvv.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
});

// ===== Coupon =====
function applyCoupon() {
    const code = couponInput.value.trim().toUpperCase();

    if (!code) {
        showCouponMessage('Please enter a coupon code', 'error');
        return;
    }

    const validCoupons = {
        'UMADE20': 20,
        'SWADESHI15': 15,
        'DESI10': 10,
        'ORGANIC10': 10
    };

    if (validCoupons[code]) {
        discount = (currentTotal * validCoupons[code]) / 100;
        discountRow.style.display = 'flex';
        discountAmount.textContent = '-₹' + discount.toFixed(2);
        showCouponMessage(`Coupon applied! ${validCoupons[code]}% off`, 'success');
        updateTotal();
    } else {
        showCouponMessage('Invalid coupon code', 'error');
    }
}

function showCouponMessage(message, type) {
    couponMessage.textContent = message;
    couponMessage.className = 'coupon-message ' + type;
    setTimeout(() => {
        couponMessage.className = 'coupon-message';
    }, 3000);
}

function updateTotal() {
    updateTotalWithGST();
}



// ===== GST Calculation =====
function calculateGST(subtotal) {
    const gstRate = 0.05; // 5% GST for food items in India
    const cgstRate = 0.025; // 2.5% CGST
    const sgstRate = 0.025; // 2.5% SGST

    const cgst = Math.round(subtotal * cgstRate);
    const sgst = Math.round(subtotal * sgstRate);
    const gstTotal = cgst + sgst;

    return { cgst, sgst, gstTotal, total: subtotal + gstTotal };
}

// ===== Pincode-based Delivery Zones =====
const deliveryZones = {
    // Bengaluru Zones
    '560095': { zone: 'Koramangala Zone', express: true, time: '30-45 min', fee: 0 },
    '560034': { zone: 'Indiranagar Zone', express: true, time: '30-45 min', fee: 0 },
    '560001': { zone: 'MG Road Zone', express: true, time: '30-45 min', fee: 0 },
    '560076': { zone: 'HSR Layout Zone', express: true, time: '45-60 min', fee: 0 },
    '560102': { zone: 'Whitefield Zone', express: false, time: '60-90 min', fee: 49 },
    '560066': { zone: 'Yelahanka Zone', express: false, time: '60-90 min', fee: 49 },
    '560037': { zone: 'Electronic City Zone', express: false, time: '60-90 min', fee: 49 },
    '560100': { zone: 'Bannerghatta Zone', express: false, time: '60-90 min', fee: 49 },
    // Chennai Zones
    '600001': { zone: 'Chennai Central Zone', express: true, time: '30-45 min', fee: 0 },
    '600020': { zone: 'Adyar Zone', express: true, time: '45-60 min', fee: 0 },
    '600040': { zone: 'Anna Nagar Zone', express: true, time: '45-60 min', fee: 0 },
    '600087': { zone: 'T Nagar Zone', express: true, time: '30-45 min', fee: 0 },
    // Hyderabad Zones
    '500001': { zone: 'Hyderabad Central Zone', express: true, time: '45-60 min', fee: 0 },
    '500034': { zone: 'Jubilee Hills Zone', express: true, time: '45-60 min', fee: 0 },
    // Mumbai Zones
    '400001': { zone: 'Mumbai Central Zone', express: true, time: '45-60 min', fee: 0 },
    '400050': { zone: 'Bandra Zone', express: true, time: '45-60 min', fee: 0 },
    // Delhi Zones
    '110001': { zone: 'Connaught Place Zone', express: true, time: '45-60 min', fee: 0 },
    '110048': { zone: 'Greater Kailash Zone', express: true, time: '45-60 min', fee: 0 },
    // Default
    'default': { zone: 'Outskirts Zone', express: false, time: '90-120 min', fee: 99 }
};

function checkPincode() {
    const pincode = document.getElementById('pincodeInput').value.trim();
    const statusEl = document.getElementById('pincodeStatus');
    const zonesEl = document.getElementById('deliveryZones');
    const zoneNameEl = document.getElementById('zoneName');
    const zoneBadgeEl = document.getElementById('zoneBadge');
    const zoneTimeEl = document.getElementById('zoneTime');

    if (!pincode || pincode.length !== 6 || !/^\\d{6}$/.test(pincode)) {
        statusEl.textContent = 'Please enter a valid 6-digit pincode';
        statusEl.className = 'pincode-status unavailable';
        zonesEl.style.display = 'none';
        return;
    }

    const zone = deliveryZones[pincode] || deliveryZones['default'];

    statusEl.textContent = '✓ Delivery available in your area!';
    statusEl.className = 'pincode-status available';

    zonesEl.style.display = 'block';
    zoneNameEl.textContent = zone.zone;

    if (zone.express) {
        zoneBadgeEl.textContent = 'Express Available';
        zoneBadgeEl.style.background = 'var(--primary-lighter)';
        zoneBadgeEl.style.color = 'var(--primary)';
    } else {
        zoneBadgeEl.textContent = 'Standard Delivery';
        zoneBadgeEl.style.background = '#FFF8E1';
        zoneBadgeEl.style.color = '#FF8F00';
    }

    zoneTimeEl.textContent = zone.time;

    // Update delivery fee based on zone
    if (zone.fee > 0) {
        deliveryFee.textContent = '₹' + zone.fee;
        deliveryFee.classList.remove('free');
    } else {
        deliveryFee.textContent = 'FREE';
        deliveryFee.classList.add('free');
    }

    updateTotalWithGST();

    showToast('Delivery zone updated: ' + zone.zone);
}

// ===== Update Total with GST =====
function updateTotalWithGST() {
    const subtotal = 3999;
    const fee = deliveryFee.textContent === 'FREE' || deliveryFee.textContent === '₹0.00' ? 0 : parseInt(deliveryFee.textContent.replace('₹', ''));
    const gst = calculateGST(subtotal);
    const discount = window.discount || 0;

    const total = subtotal + fee + gst.gstTotal - discount;

    // Update display
    document.getElementById('subtotalAmount').textContent = '₹' + subtotal.toLocaleString('en-IN');
    document.getElementById('cgstAmount').textContent = '₹' + gst.cgst.toLocaleString('en-IN');
    document.getElementById('sgstAmount').textContent = '₹' + gst.sgst.toLocaleString('en-IN');
    document.getElementById('gstTotal').textContent = '₹' + gst.gstTotal.toLocaleString('en-IN');
    grandTotal.textContent = '₹' + total.toLocaleString('en-IN');
    successTotal.textContent = '₹' + total.toLocaleString('en-IN');

    // Update button price
    document.querySelector('.btn-price').textContent = '₹' + total.toLocaleString('en-IN');
}

// ===== Payment Processing =====
function processPayment() {
    const selectedMethod = document.querySelector('.payment-method.selected');
    const method = selectedMethod.dataset.method;

    if (method === 'upi') {
        const upiId = document.getElementById('upiId').value.trim();
        if (!upiId) {
            showToast('Please enter your UPI ID');
            return;
        }
        if (!upiId.includes('@')) {
            showToast('Please enter a valid UPI ID (e.g., name@upi)');
            return;
        }
    } else if (method === 'card') {
        const name = document.getElementById('cardholderName').value.trim();
        const number = cardNumber.value.trim();
        const expiry = expiryDate.value.trim();
        const cvvVal = cvv.value.trim();

        if (!name || !number || !expiry || !cvvVal) {
            showToast('Please fill in all card details');
            return;
        }

        if (number.replace(/\s/g, '').length < 16) {
            showToast('Please enter a valid card number');
            return;
        }
    } else if (method === 'netbanking') {
        const selectedBank = document.querySelector('.bank-option.selected');
        if (!selectedBank) {
            showToast('Please select your bank');
            return;
        }
    } else if (method === 'wallet') {
        const selectedWallet = document.querySelector('.wallet-option.selected');
        if (!selectedWallet) {
            showToast('Please select a wallet');
            return;
        }
    }

    // Show processing overlay
    processingOverlay.classList.add('open');

    // Update steps based on payment method
    const stepTexts = {
        'upi': ['Verifying UPI ID...', 'Requesting UPI PIN...', 'Payment confirmed!'],
        'card': ['Verifying card...', 'Processing payment...', 'Payment confirmed!'],
        'netbanking': ['Connecting to bank...', 'Redirecting to bank page...', 'Payment confirmed!'],
        'wallet': ['Verifying wallet...', 'Processing wallet payment...', 'Payment confirmed!'],
        'cod': ['Confirming order...', 'Preparing for delivery...', 'Order confirmed!']
    };

    const texts = stepTexts[method] || stepTexts['card'];

    document.querySelector('#step1 span').textContent = texts[0];
    document.querySelector('#step2 span').textContent = texts[1];
    document.querySelector('#step3 span').textContent = texts[2];

    // Simulate payment steps
    const steps = [
        { id: 'step1', delay: 1500, next: 'step2' },
        { id: 'step2', delay: 3000, next: 'step3' },
        { id: 'step3', delay: 4500, next: null }
    ];

    steps.forEach((step, index) => {
        setTimeout(() => {
            const currentStep = document.getElementById(step.id);
            currentStep.classList.add('active');
            currentStep.querySelector('i').className = 'fas fa-check-circle';
            currentStep.classList.add('completed');

            if (step.next) {
                const nextStep = document.getElementById(step.next);
                nextStep.classList.add('active');
            }

            if (index === steps.length - 1) {
                setTimeout(() => {
                    processingOverlay.classList.remove('open');
                    paymentSuccessModal.classList.add('open');
                    document.body.style.overflow = 'hidden';
                }, 800);
            }
        }, step.delay);
    });
}

// ===== Toast =====
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Mobile Menu =====
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===== Label Buttons =====
document.querySelectorAll('.label-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.label-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Set initial total with GST
    updateTotalWithGST();
});

// ===== Keyboard =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        paymentSuccessModal.classList.remove('open');
        document.body.style.overflow = '';
    }
});
