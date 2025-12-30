document.addEventListener('DOMContentLoaded', function() {
    // Инициализация переключения изображений для всех карточек продуктов
    initProductImageGalleries();
    
    // Анимация появления карточек при скролле
    initScrollAnimations();
});

function initProductImageGalleries() {
    // Находим все карточки продуктов
    const productCards = document.querySelectorAll('.category-product-card');
    
    productCards.forEach((card, index) => {
        // Находим все миниатюры и основное изображение в текущей карточке
        const thumbnails = card.querySelectorAll('.thumbnail');
        const mainImage = card.querySelector(`#mainImage-${index + 1}`);
        
        if (thumbnails.length > 0 && mainImage) {
            // Добавляем обработчик клика для каждой миниатюры
            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', function() {
                    // Получаем URL большого изображения из data-атрибута
                    const newImageSrc = this.getAttribute('data-main');
                    
                    // Меняем основное изображение
                    mainImage.src = newImageSrc;
                    
                    // Обновляем активную миниатюру
                    thumbnails.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Плавная анимация смены изображения
                    mainImage.style.opacity = '0';
                    setTimeout(() => {
                        mainImage.style.transition = 'opacity 0.3s ease';
                        mainImage.style.opacity = '1';
                    }, 50);
                });
            });
            
            // Активируем первую миниатюру
            if (thumbnails[0]) {
                thumbnails[0].classList.add('active');
            }
        }
    });
}

function initScrollAnimations() {
    // Создаем Intersection Observer для анимации появления
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за всеми карточками продуктов
    document.querySelectorAll('.category-product-card').forEach(card => {
        observer.observe(card);
    });
}

// Добавляем стили для анимации
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .category-product-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .category-product-card.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .category-product-card:nth-child(1) { transition-delay: 0.1s; }
    .category-product-card:nth-child(2) { transition-delay: 0.2s; }
    .category-product-card:nth-child(3) { transition-delay: 0.3s; }
`;
document.head.appendChild(animationStyles);
