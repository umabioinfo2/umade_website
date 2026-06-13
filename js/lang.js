// ===== MULTI-LANGUAGE SYSTEM (ENGLISH + TAMIL) =====

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.shop': 'Shop',
        'nav.categories': 'Categories',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.search_placeholder': 'Search organic products...',
        'hero.badge': '100% Organic & Fresh',
        'hero.title_1': 'Farm to Table,',
        'hero.title_2': 'Delivered to Your Door',
        'hero.subtitle': 'Discover the freshest organic millets, traditional grains, and groceries sourced directly from local farms.',
        'hero.stat_farms': 'Partner Farms',
        'hero.stat_products': 'Organic Products',
        'hero.stat_delivery': 'Fast Delivery',
        'categories.tag': 'Browse by Category',
        'categories.title': 'Shop Our Organic Collection',
        'categories.subtitle': 'From organic millets to traditional grains, pulses, and pantry essentials.',
        'categories.millets': 'Organic Millets',
        'categories.pulses': 'Pulses',
        'categories.rice': 'Organic Rice',
        'categories.spices': 'Spices',
        'categories.oils': 'Cold-Pressed Oils',
        'categories.sweeteners': 'Natural Sweeteners',
        'products.tag': 'Popular Products',
        'products.title': 'Fresh from the Farm',
        'products.subtitle': 'Handpicked organic produce delivered fresh to your doorstep.',
        'products.all': 'All',
        'cart.title': 'Your Cart',
        'cart.total': 'Total:',
        'cart.checkout': 'Checkout',
        'cart.clear': 'Clear Cart',
        'footer.description': 'Bringing the freshest organic produce from local farms to your table.',
        'footer.contact_us': 'Contact Us',
        'footer.categories': 'Categories',
        'footer.quick_links': 'Quick Access',
        'footer.phone': '+91 917200558060 / +91 9994014301',
        'footer.email': 'hello@umadebioorganic.com',
        'footer.hours': 'Mon - Sun: 7:00 AM - 10:00 PM',
        'footer.copyright': 'All rights reserved. Made with love for healthy living.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.cookies': 'Cookie Policy',
        'language': 'EN'
    },
    
    ta: {
        'nav.home': 'முகப்பு',
        'nav.shop': 'வாங்க',
        'nav.categories': 'வகைகள்',
        'nav.about': 'பற்றி',
        'nav.contact': 'தொடர்புக்கு',
        'nav.search_placeholder': 'கரிம பொருட்களைத் தேடவும்...',
        'hero.badge': '100% கரிம & புதிய',
        'hero.title_1': 'பண்ணைக்கிருந்து மேசைக்கு,',
        'hero.title_2': 'உங்கள் வாசலுக்கு வழங்கப்படுகிறது',
        'hero.subtitle': 'நேரடியாக உள்ளூர் பண்ணைகளிலிருந்து தயாரிக்கப்பட்ட புதிய கரிம சிறுதானியங்களைக் கண்டறியுங்கள்.',
        'hero.stat_farms': 'பங்குதாரர் பண்ணைகள்',
        'hero.stat_products': 'கரிம பொருட்கள்',
        'hero.stat_delivery': 'வேகமான விநியோகம்',
        'categories.tag': 'வகைப்படி பாருங்கள்',
        'categories.title': 'எங்களின் கரிம சேகரணை வாங்குங்கள்',
        'categories.subtitle': 'கரிம சிறுதானியங்கள் முதல் பாரம்பரிய தானியங்கள், பருப்பு வகைகள் மற்றும் பாத்திரம் முக்கியமான.',
        'categories.millets': 'கரிம சிறுதானியங்கள்',
        'categories.pulses': 'பருப்பு வகைகள்',
        'categories.rice': 'கரிம அரிசி',
        'categories.spices': 'மசாலா',
        'categories.oils': 'குளிர்-அழுத்த எண்ணெய்கள்',
        'categories.sweeteners': 'இயற்கை இனிப்பூட்டிகள்',
        'products.tag': 'பிரபலமான பொருட்கள்',
        'products.title': 'பண்ணையிலிருந்து புதிய',
        'products.subtitle': 'கையால் தேர்ந்தெடுக்கப்பட்ட கரிம பொருட்கள் உங்கள் வாசலுக்கு வழங்கப்படுகிறது.',
        'products.all': 'அனைத்து',
        'cart.title': 'உங்கள் கூடை',
        'cart.total': 'மொத்தம்:',
        'cart.checkout': 'செலுத்தவும்',
        'cart.clear': 'கூடையை அழிக்கவும்',
        'footer.description': 'உள்ளூர் பண்ணைகளிலிருந்து புதிய கரிம பொருட்களை உங்கள் மேசைக்கு கொண்டுவருகிறது.',
        'footer.contact_us': 'தொடர்பு கொள்ளவும்',
        'footer.categories': 'வகைகள்',
        'footer.quick_links': 'விரைவு அணுக்கம்',
        'footer.phone': '+91 917200558060 / +91 9994014301',
        'footer.email': 'hello@umadebioorganic.com',
        'footer.hours': 'திங் - நிலை: 7:00 AM - 10:00 PM',
        'footer.copyright': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன. ஆரோக்கியமான வாழ்க்கையுடன் செய்யப்பட்டது.',
        'footer.privacy': 'தனியுரிமை கொள்கை',
        'footer.terms': 'சেவைகளின் வசன்',
        'footer.cookies': 'குக்கி கொள்கை',
        'language': 'TA'
    }
};

let currentLanguage = 'en';

// Get language from localStorage or default to English
function initLanguage() {
    const savedLang = localStorage.getItem('umadeLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
    }
    updateLanguageDisplay();
}

// Update language display
function updateLanguageDisplay() {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[currentLanguage][key] || key;
    });
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ta' : 'en';
    localStorage.setItem('umadeLanguage', currentLanguage);
    
    // Update language toggle button
    const langToggle = document.querySelector('.lang-current');
    if (langToggle) {
        langToggle.textContent = translations[currentLanguage].language;
    }
    
    updateLanguageDisplay();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initLanguage);
