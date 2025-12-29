const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Открытие модального окна
function openModal() {
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Закрытие модального окна
function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Обработчики событий
if (openModalBtn) {
    openModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Закрытие при клике вне модального окна
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Закрытие по Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Открытие модального окна для всех кнопок "Связаться"
document.querySelectorAll('.slide-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });
});
