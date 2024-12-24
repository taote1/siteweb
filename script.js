// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки "Подробнее"
    const buttons = document.querySelectorAll('.details-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Находим родительский элемент card
            const card = button.parentElement;
            // Переключаем отображение скрытых элементов <p>
            const details = card.querySelectorAll('p');
            details.forEach(detail => {
                detail.style.display = detail.style.display === 'none' || detail.style.display === '' ? 'block' : 'none';
            });
            // Меняем текст кнопки
            button.textContent = button.textContent === 'Подробнее' ? 'Скрыть' : 'Подробнее';
        });
    });
});
