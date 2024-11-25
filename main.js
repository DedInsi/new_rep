const sliderContent = document.querySelector('.slider-content');
const sliderWindow = document.querySelector('.slider-window');
const slideLeftButton = document.getElementById('slideLeft');
const slideRightButton = document.getElementById('slideRight');

// Переменные для управления слайдером
let currentPosition = 0; // Текущее смещение слайдов
const slideWidth = 402 + 10; // Ширина слайда + отступ
const visibleWidth = 1185; // Видимая ширина зоны
const totalSlides = document.querySelectorAll('.project_rectangle').length;
const maxPosition = -(slideWidth * totalSlides - visibleWidth); // Максимальное смещение

// Обработчик кнопки "Влево"
slideLeftButton.addEventListener('click', () => {
    currentPosition += slideWidth; // Сдвигаем вправо
    if (currentPosition > 0) currentPosition = 0; // Ограничение слева
    sliderContent.style.transform = `translateX(${currentPosition}px)`;
});

// Обработчик кнопки "Вправо"
slideRightButton.addEventListener('click', () => {
    currentPosition -= slideWidth; // Сдвигаем влево
    if (currentPosition < maxPosition) currentPosition = maxPosition; // Ограничение справа
    sliderContent.style.transform = `translateX(${currentPosition}px)`;
});

// Обработчик прокрутки вниз
const buttons = document.querySelectorAll('.header_but');
const sections = {
    "Обо мне": document.getElementById('about'),
    "Проекты": document.getElementById('projects'),
    "Навыки": document.getElementById('skills'),
    "Контакты": document.getElementById('contacts')
};

// Добавляем обработчик события к каждой кнопке
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const section = sections[button.textContent]; // Находим нужную секцию по названию кнопки
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Плавный скролл к секции
        }
    });
});