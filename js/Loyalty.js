// ============================================
// UMADE LOYALTY REWARDS JavaScript
// ============================================

function redeemPoints(points) {
    const balanceEl = document.getElementById('pointsBalance');
    if (!balanceEl) return;

    const balance = parseInt(balanceEl.textContent.replace(/,/g, ''));

    if (balance < points) {
        showToast('Not enough points! Keep shopping to earn more. 🌾');
        return;
    }

    const values = { 100: '₹50', 200: '₹125', 500: '₹350', 1000: '₹800' };
    const discount = values[points] || '₹50';

    showToast(`Redeemed ${points} points for ${discount} off! Coupon added to your account. 🎉`);

    // Update balance visually
    const newBalance = balance - points;
    balanceEl.textContent = newBalance.toLocaleString();

    // Add to history table
    const historyTable = document.getElementById('historyTable');
    if (historyTable) {
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const newRow = `
            <tr>
                <td>${dateStr}</td>
                <td><i class="fas fa-ticket-alt"></i> Redeemed - ${discount} Off</td>
                <td class="points-negative">-${points}</td>
                <td><span class="status-badge redeemed">Redeemed</span></td>
            </tr>
        `;
        historyTable.insertAdjacentHTML('afterbegin', newRow);
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
