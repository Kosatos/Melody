$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $('.home-image path'); //каждый отдельный этаж в SVG
    let counterUp = $('.counter-up');  //кнопка увеличения этажа
    let counterDown = $('.counter-down');  //кнопка уменьшения этажа
    let buttonPrimary = $('.button-primary');
    let modal = $('.modal');
    let closeButton = $('.modal-close-button');
    let flatsItem = $('.flats-item');
    let flatsPath = $('.flats path')

    //функция при наведении мышки на этаж
    floorPath.on('mouseover', function() {  
        floorPath.removeClass('current-floor');  //удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor');  //получаем значение текущего этажа
        $('.counter').text(currentFloor);  //записываем значение этажа в счетчик
    })

    function openCloseModal() {
        modal.toggleClass('open-modal');
    }

    floorPath.on('click', openCloseModal);

    buttonPrimary.on('click', openCloseModal);

    closeButton.on('click', openCloseModal);

    //отслеживаем клик по кнопке ВВЕРХ
    counterUp.on('click', function() {
        if(currentFloor < 18) {  //проверяем значение этажа(не должно превышать 18)
            currentFloor++;  //прибавляем по одному этажу
            usCurrrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});  //форматируем переменную с этажом, чтобы у целого числа было два знака (1 - 01)
            $('.counter').text(usCurrrentFloor);  //записываем значение этажа в счетчик
            floorPath.removeClass('current-floor');  //удаляем активный класс
            $(`[data-floor = ${usCurrrentFloor}]`).toggleClass('current-floor');  //присваевыем класс этажам
        }
    })   
    
    counterDown.on('click', function() {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor = ${usCurrrentFloor}]`).toggleClass('current-floor');
        }
    }) 
    
    // flatsItem.on('mouseover', function() {  
    //     flatsPath.toggleClass('current-flat');  //удаляем активный класс у этажей
    // })
});