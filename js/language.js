const translations = {
    ru: {
        bedroom: 'Спальни',
        kitchen: 'Кухни',
        hallway: 'Прихожие',
        wardrobe: 'Гардеробные',
        closet: 'Шкафы',
        wardrobes: 'Шкафы-купе',
        livingRoom: 'Гостиные',
        kids: 'Детские'
    },
    uz: {
        bedroom: 'Yotoq xonasi',
        kitchen: 'Oshxonalar',
        hallway: 'Dahlizlar',
        wardrobe: 'Garderoblar',
        closet: 'Shkaflar',
        wardrobes: 'Shkaf-kupe',
        livingRoom: 'Mehmonxonalar',
        kids: 'Bolalar uchun'
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.querySelector('.language-selector');
    const btn = document.getElementById('languageBtn');
    const menu = document.getElementById('languageMenu');
    const currentLang = document.getElementById('currentLang');
    const currentFlag = document.getElementById('currentFlag');

    btn.addEventListener('click', () => {
        selector.classList.toggle('open');
    });

    menu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            currentLang.textContent = item.textContent;
            currentFlag.textContent = item.dataset.flag;

            selector.classList.remove('open');

            // 🔹 здесь твоя существующая логика смены языка
            // setLanguage(item.dataset.lang);
        });
    });

    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
            selector.classList.remove('open');
        }
    });
});
