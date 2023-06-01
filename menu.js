$(document).ready(function() {
    // Ждем, пока документ полностью загрузится

    $('.menu-toggle').click(function() {
        // При клике на элемент с классом 'menu-toggle'

        $(this).toggleClass('close');
        // Переключаем класс 'close' для текущего элемента (кнопки)

        $('.menu-content').slideToggle();
        // Переключаем отображение элемента с классом 'menu-content' с анимацией скольжения
    });
});
