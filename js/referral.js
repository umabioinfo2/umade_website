// ============================================
// UMADE REFERRAL PAGE JavaScript
// ============================================

function copyCode() {
    const codeEl = document.getElementById('referralCode');
    if (!codeEl) return;

    const code = codeEl.textContent.trim();

    if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
            showCopiedFeedback();
        }).catch(() => {
            fallbackCopy(code);
        });
    } else {
        fallbackCopy(code);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showCopiedFeedback();
    } catch (err) {
        showToast('Could not copy code. Please copy manually.');
    }

    document.body.removeChild(textarea);
}

function showCopiedFeedback() {
    const btn = document.querySelector('.btn-copy');
    if (!btn) return;

    btn.classList.add('copied');
    btn.innerHTML = '<i class="fas fa-check"></i> <span data-lang="referral.copied">Copied!</span>';
    showToast('Referral code copied to clipboard!');

    setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = '<i class="fas fa-copy"></i> <span data-lang="referral.copy">Copy</span>';
    }, 2000);
}

function shareWhatsApp() {
    const code = document.getElementById('referralCode')?.textContent.trim() || 'UMADE-RAHUL-2026';
    const text = `Join me on Umade! Use my referral code ${code} and get ₹100 off your first order. Fresh organic millets & groceries delivered to your door! 🌾`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function shareSMS() {
    const code = document.getElementById('referralCode')?.textContent.trim() || 'UMADE-RAHUL-2026';
    const text = `Join Umade! Use code ${code} for ₹100 off your first order. Fresh organic millets & groceries. Order now!`;
    window.open(`sms:?body=${encodeURIComponent(text)}`, '_blank');
}

function shareEmail() {
    const code = document.getElementById('referralCode')?.textContent.trim() || 'UMADE-RAHUL-2026';
    const subject = 'Join Umade - Get ₹100 off your first order!';
    const body = `Hi!

I wanted to share Umade with you - it's an amazing organic millets and groceries delivery service.

Use my referral code: ${code}

You'll get ₹100 off your first order!

They deliver fresh organic millets like Foxtail (Thinai), Pearl (Bajra), Finger (Ragi), and more directly from farms to your doorstep.

Order now at https://umade.com

Cheers!`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
