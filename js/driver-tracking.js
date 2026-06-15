// ===== Authentication JavaScript =====

// ===== DOM Elements =====
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ===== Form Switching =====
function switchForm(formType) {
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });

    if (formType === 'login') {
        document.getElementById('loginForm').classList.add('active');
    } else if (formType === 'register') {
        document.getElementById('registerForm').classList.add('active');
    } else if (formType === 'forgot') {
        document.getElementById('forgotForm').classList.add('active');
    }
}

// ===== Password Toggle =====
function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector('i');

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

// ===== Password Strength Checker =====
function checkPasswordStrength() {
    const password = document.getElementById('regPassword').value;
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');

    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;

    strengthBar.className = 'strength-bar';

    if (password.length === 0) {
        strengthText.textContent = 'Password strength';
    } else if (strength <= 1) {
        strengthBar.classList.add('weak');
        strengthText.textContent = 'Weak - Add more characters';
        strengthText.style.color = '#e74c3c';
    } else if (strength === 2) {
        strengthBar.classList.add('medium');
        strengthText.textContent = 'Medium - Add special characters';
        strengthText.style.color = '#FF8F00';
    } else {
        strengthBar.classList.add('strong');
        strengthText.textContent = 'Strong password!';
        strengthText.style.color = 'var(--primary)';
    }
}

// ===== Login Handler =====
function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const btn = e.target.querySelector('.btn-auth');
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');

    // Show loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        btn.disabled = false;

        showToast('Welcome back! Swagat hai! 🙏');

        // Redirect to home after delay
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    }, 2000);
}

// ===== Register Handler =====
function handleRegister(e) {
    e.preventDefault();

    const firstName = document.getElementById('regFirstName').value;
    const lastName = document.getElementById('regLastName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const btn = e.target.querySelector('.btn-auth');
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');

    // Validation
    if (password !== confirmPassword) {
        showToast('Passwords do not match!');
        return;
    }

    if (password.length < 8) {
        showToast('Password must be at least 8 characters');
        return;
    }

    // Show loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        btn.disabled = false;

        showToast(`Welcome ${firstName}! Account created successfully! Aapka swagat hai! 🎉`);

        // Switch to login after delay
        setTimeout(() => {
            switchForm('login');
        }, 2000);
    }, 2500);
}

// ===== Forgot Password Handler =====
function handleForgot(e) {
    e.preventDefault();

    const email = document.getElementById('forgotEmail').value;
    const btn = e.target.querySelector('.btn-auth');
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');

    // Show loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        btn.disabled = false;

        showToast('Reset link sent! Kripaya apna email check karein.');

        // Switch to login after delay
        setTimeout(() => {
            switchForm('login');
        }, 2000);
    }, 2000);
}

// ===== Social Login =====
function socialLogin(provider) {
    showToast(`Connecting to ${provider}...`);

    setTimeout(() => {
        showToast(`Successfully connected with ${provider}!`);
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    }, 2000);
}

// ===== Toast =====
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Check URL params for form type
    const urlParams = new URLSearchParams(window.location.search);
    const form = urlParams.get('form');
    if (form) {
        switchForm(form);
    }
});

// ===== Keyboard =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeForm = document.querySelector('.auth-form.active form');
        if (activeForm) {
            // Trigger form submit
        }
    }
});
