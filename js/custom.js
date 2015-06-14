$(document).ready(function(){
    //Меню с плавающим переходом
    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html, body').animate( { scrollTop: destination - 0 }, 1100 );
        return false;
    });
    //Переключатель логотипов
    $('.switcher').click(function() {
        $('.switcher.active').removeClass('active');
        $(this).addClass('active');
        var arr = $(this).attr('class').split(' ');
        var selector = '.brands.' + arr[1];
        $('.brands.active').removeClass('active');
        $(selector).addClass('active');
    });
    //Событие при нажатии на вопрос
    $('.question').click(function(){
        if($(this).children('.inner-window').hasClass('active'))
            $(this).children('.inner-window').removeClass('active');
        else
            $(this).children('.inner-window').addClass('active');               
    });
    //Стрелки
    $('.left-arrow').click(function(){
        if(($('.slide.active').prev('.slide').length))
            $('.slide.active').removeClass('active').fadeOut().prev('.slide').addClass('active').fadeIn();  
        else {
            $('.slide.active').removeClass('active').fadeOut();
            $('.slide').last().addClass('active').fadeIn();
        }  

    });
    $('.right-arrow').click(function(){  
        if(($('.slide.active').next('.slide').length))
            $('.slide.active').removeClass('active').fadeOut().next('.slide').addClass('active').fadeIn();  
        else {
            $('.slide.active').removeClass('active').fadeOut();
            $('.slide').first().addClass('active').fadeIn();
        }                    
    });  
    
    var done = true;
    var hT = $('#result').offset().top;

    $(window).scroll(function() {
        if (($(this).scrollTop() > hT)&&(done)) {
            allEventsStart();
            console.log('Started....');
            done = false;
        }                
    });   
   
            
});


//Запуск всех событий!
function allEventsStart() {
    console.log('All Events');
    //Настройка анимации чисел
    $('.old-orders').animateNumber({ number: 20 },4000);
    $('.new-orders').animateNumber({ number: 130 },4000);
    $('.old-price').animateNumber({ number: 3270 },4000);
    $('.new-price')
        .prop('number', 3270)
        .animateNumber(
        {
            number: 260,
            numberStep: function(now, tween) {
                var target = $(tween.elem),
                    rounded_now = Math.round(now);

                target.text(now === tween.end ? '260' : rounded_now);
            }
        },
        4000,
        'linear'
    );
    $('.animated-circle').circleProgress({
        value: 1,
        size: 156,
        fill: {
            color: "#f0c500"
        },
        emptyFill: "#ffffff",
        thickness: 16,
        animation: { 
            duration: 4000
        }               

    });
    $('.filled-figure').animate({height: "181px"}, 5000);
}