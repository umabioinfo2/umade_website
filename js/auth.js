// ============================================
// UMADE AUTH (LOGIN / SIGNUP) JavaScript
// ============================================

function switchForm(formType) {
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    const target = document.getElementById(formType + 'Form');
    if (target) target.classList.add('active');
}

function handleLogin(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-auth');
    const text = btn.querySelector('.btn-text');
    const loading = btn.querySelector('.btn-loading');

    if (text) text.style.display = 'none';
    if (loading) loading.style.display = 'flex';

    setTimeout(() => {
        showToast('Login successful! Welcome back to Umade. 🌿');
        window.location.href = '../index.html';
    }, 1500);
}

function handleRegister(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-auth');
    const text = btn.querySelector('.btn-text');
    const loading = btn.querySelector('.btn-loading');

    if (text) text.style.display = 'none';
    if (loading) loading.style.display = 'flex';

    setTimeout(() => {
        showToast('Account created successfully! Welcome to Umade. 🌿');
        switchForm('login');
        if (text) text.style.display = 'inline';
        if (loading) loading.style.display = 'none';
    }, 1500);
}

function handleForgot(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-auth');
    const text = btn.querySelector('.btn-text');
    const loading = btn.querySelector('.btn-loading');

    if (text) text.style.display = 'none';
    if (loading) loading.style.display = 'flex';

    setTimeout(() => {
        showToast('Password reset link sent to your email!');
        if (text) text.style.display = 'inline';
        if (loading) loading.style.display = 'none';
    }, 1500);
}

function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector('i');
    if (!input || !icon) return;

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function checkPasswordStrength() {
    const password = document.getElementById('regPassword')?.value || '';
    const strengthBar = document.getElementById('passwordStrength');
    if (!strengthBar) return;

    const bar = strengthBar.querySelector('.strength-bar');
    const text = strengthBar.querySelector('.strength-text');
    if (!bar || !text) return;

    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    bar.className = 'strength-bar';
    if (strength <= 2) {
        bar.classList.add('weak');
        text.textContent = 'Weak password';
    } else if (strength <= 3) {
        bar.classList.add('medium');
        text.textContent = 'Medium strength';
    } else {
        bar.classList.add('strong');
        text.textContent = 'Strong password';
    }
}

function socialLogin(provider) {
    showToast(`Connecting to ${provider.charAt(0).toUpperCase() + provider.slice(1)}...`);
    setTimeout(() => {
        showToast(`Logged in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`);
        window.location.href = '../index.html';
    }, 2000);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Check URL for form parameter on load
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('form') === 'register') {
        switchForm('register');
    }
});
