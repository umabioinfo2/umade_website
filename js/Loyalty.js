function redeemPoints(points) {
    const balance = parseInt(document.getElementById('pointsBalance').textContent.replace(',', ''));
    
    if (balance < points) {
        showToast('Not enough points! Keep shopping to earn more.');
        return;
    }
    
    const values = { 100: '₹50', 200: '₹125', 500: '₹350', 1000: '₹800' };
    showToast(`Redeemed ${points} points for ${values[points]} off! Coupon added to your account.`);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
