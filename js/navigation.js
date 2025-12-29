const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('mobile-active');
    });
}

// Закрытие меню при клике вне его
document.addEventListener('click', function(event) {
    if (mainNav && mainNav.classList.contains('mobile-active')) {
        if (!mainNav.contains(event.target) && event.target !== mobileMenuBtn) {
            mainNav.classList.remove('mobile-active');
        }
    }
});

// Изменение стиля шапки при прокрутке
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});
