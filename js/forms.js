const callbackForm = document.getElementById('callbackForm');

if (callbackForm) {
    callbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const phoneInput = document.getElementById('modal-phone');
        const phone = phoneInput.value;
        
        // Валидация телефона
        if (!validatePhone(phone)) {
            showNotification('Пожалуйста, введите корректный номер телефона', 'error');
            return;
        }
        
        // Отправка данных (здесь можно добавить AJAX запрос)
        showNotification(`Спасибо! Мы перезвоним вам по номеру ${phone} в ближайшее время.`, 'success');
        
        // Очистка формы
        callbackForm.reset();
        
        // Закрытие модального окна
        setTimeout(() => {
            closeModal();
        }, 2000);
    });
}

// Форма заказа на странице товара
const orderForm = document.getElementById('orderForm');

if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = orderForm.querySelector('[name="name"]').value;
        const phone = orderForm.querySelector('[name="phone"]').value;
        const comment = orderForm.querySelector('[name="comment"]').value;
        
        // Валидация
        if (!name || !phone) {
            showNotification('Пожалуйста, заполните все обязательные поля', 'error');
            return;
        }
        
        if (!validatePhone(phone)) {
            showNotification('Пожалуйста, введите корректный номер телефона', 'error');
            return;
        }
        
        // Отправка данных
        showNotification(`Спасибо, ${name}! Ваша заявка принята. Мы свяжемся с вами по номеру ${phone} в ближайшее время.`, 'success');
        
        // Очистка формы
        orderForm.reset();
    });
}

// Валидация номера телефона
function validatePhone(phone) {
    // Простая проверка на узбекский номер
    const phoneRegex = /^\+998\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Показ уведомлений
function showNotification(message, type = 'info') {
    // Создание элемента уведомления
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Стили уведомления
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 20px 30px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        font-size: 16px;
    `;
    
    document.body.appendChild(notification);
    
    // Автоматическое удаление
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Добавление стилей для анимации уведомлений
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(notificationStyles);

// Автозаполнение префикса +998 для телефонных полей
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '+998';
        }
    });
    
    input.addEventListener('input', function() {
        // Удаление всего, кроме цифр и +
        let value = this.value.replace(/[^\d+]/g, '');
        
        // Обеспечение начала с +998
        if (!value.startsWith('+998')) {
            value = '+998';
        }
        
        // Ограничение длины
        if (value.length > 13) {
            value = value.substring(0, 13);
        }
        
        this.value = value;
    });
});
