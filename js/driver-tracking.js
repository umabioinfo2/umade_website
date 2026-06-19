// ============================================
// UMADE DRIVER TRACKING JavaScript
// ============================================

function callDriver() {
    const modal = document.getElementById('contactModal');
    if (modal) modal.classList.add('active');
}

function messageDriver() {
    const modal = document.getElementById('contactModal');
    const chatArea = document.getElementById('chatArea');
    if (modal) modal.classList.add('active');
    if (chatArea) chatArea.classList.add('active');
}

function simulateCall() {
    showToast('Calling driver...');
    setTimeout(() => {
        const modal = document.getElementById('contactModal');
        if (modal) modal.classList.remove('active');
    }, 2000);
}

function openChat() {
    const chatArea = document.getElementById('chatArea');
    if (chatArea) chatArea.classList.add('active');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    if (!input || !messages) return;

    const text = input.value.trim();
    if (!text) return;

    messages.innerHTML += `
        <div class="chat-message user-msg">
            <p>${text}</p>
            <span class="msg-time">Just now</span>
        </div>
    `;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Auto reply from driver
    setTimeout(() => {
        messages.innerHTML += `
            <div class="chat-message driver-msg">
                <p>Thanks! I'll be there shortly. 🌿</p>
                <span class="msg-time">Just now</span>
            </div>
        `;
        messages.scrollTop = messages.scrollHeight;
    }, 1500);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Animate driver marker on map
function animateDriver() {
    const marker = document.getElementById('driverMarker');
    const distanceEl = document.getElementById('distanceRemaining');
    const timeEl = document.getElementById('timeRemaining');
    const speedEl = document.getElementById('driverSpeed');

    if (!marker) return;

    let progress = 0;
    let distance = 2.4;
    let timeLeft = 12;
    let speed = 24;

    const interval = setInterval(() => {
        progress += 1;
        if (progress > 100) {
            clearInterval(interval);
            // Mark as delivered
            const timelineItems = document.querySelectorAll('.timeline-item');
            if (timelineItems[3]) {
                timelineItems[3].classList.remove('active');
                timelineItems[3].classList.add('completed');
                timelineItems[3].querySelector('.timeline-dot').innerHTML = '<i class="fas fa-check"></i>';
            }
            if (timelineItems[4]) {
                timelineItems[4].classList.add('active');
                timelineItems[4].querySelector('.timeline-dot').innerHTML = '<i class="fas fa-home"></i>';
            }
            showToast('Your order has been delivered! 🎉');
            return;
        }

        // Move marker
        const top = 40 - (progress * 0.25);
        const left = 35 + (progress * 0.35);
        marker.style.top = Math.max(15, top) + '%';
        marker.style.left = Math.min(70, left) + '%';

        // Update stats
        distance = Math.max(0, (2.4 - (progress * 0.024)).toFixed(1));
        timeLeft = Math.max(0, Math.round(12 - (progress * 0.12)));
        speed = Math.max(0, Math.round(24 - (progress * 0.05)));

        if (distanceEl) distanceEl.innerHTML = distance + ' km <span data-lang="tracking.distance">away</span>';
        if (timeEl) timeEl.innerHTML = timeLeft + ' <span data-lang="tracking.time">min</span>';
        if (speedEl) speedEl.innerHTML = speed + ' <span data-lang="tracking.speed">km/h</span>';

        // Update route line opacity
        const routeLine = document.getElementById('routeLine');
        if (routeLine) {
            routeLine.style.opacity = Math.max(0.1, 0.4 - (progress * 0.004));
        }
    }, 3000);
}

// Close contact modal
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeContact');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const modal = document.getElementById('contactModal');
            const chatArea = document.getElementById('chatArea');
            if (modal) modal.classList.remove('active');
            if (chatArea) chatArea.classList.remove('active');
        });
    }

    // Chat input enter key
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // Start animation
    setTimeout(animateDriver, 1000);
});
