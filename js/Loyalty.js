// ===== Loyalty Points JavaScript =====

let userPoints = 2450;

function redeemPoints(points) {
    if (points > userPoints) {
        showToast('Not enough points! You need ' + points + ' points.');
        return;
    }

    const values = { 100: 50, 200: 125, 500: 350, 1000: 800 };
    const discount = values[points];

    userPoints -= points;
    document.getElementById('pointsBalance').textContent = userPoints.toLocaleString('en-IN');
    document.getElementById('pointsRedeemed').textContent = (parseInt(document.getElementById('pointsRedeemed').textContent.replace(/,/g, '')) + points).toLocaleString('en-IN');

    showToast('Successfully redeemed ' + points + ' points for ₹' + discount + ' off!');

    // Add to history
    const tbody = document.getElementById('historyTable');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
        <td><i class="fas fa-ticket-alt"></i> Redeemed - ₹${discount} Off</td>
        <td class="points-negative">-${points}</td>
        <td><span class="status-badge redeemed">Redeemed</span></td>
    `;
    tbody.insertBefore(newRow, tbody.firstChild);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Mobile menu
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// Navbar scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
