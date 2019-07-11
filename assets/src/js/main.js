// Импортируем jQuery
//= jquery.min.js

// Импортируем Bootstrap 4
//= bootstrap.js

$('.dummy').on('click', function () {
    console.log('123');
    $(this).toggleClass('big');
    $('body').toggleClass('black');
});
