
function validateEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
var params = [];
var query = location.search.substr(1); 
var A = query.split("&");
var qwe;
for (var j=0; j<A.length; j++){ qwe = A[j].split("="); params[qwe[0]] = qwe[1]; }

function send_data(){
    name = '#username';
    email = '#useremail';
    phone = '#userphone';
    business = '#userbusiness';
    if ($(name).val().length==0) { alert("Пожалуйста, введите своё имя"); return;}
    if ($(phone).val().length==0) { alert("Пожалуйста, введите свой номер телефона"); return;}
    if ($(email).val().length==0) { alert("Пожалуйста, введите свой адрес электронной почты"); return;}
    if (!validateEmail($(email).val())) { alert("Пожалуйста, введите корректный адрес электронной почты"); return;}
    
    var data = { 
      name: $(name).val(),
      email: $(email).val(),
      phone: $(phone).val(),
      business: $(business).val()
    }

    data['utm_content'] = params['utm_content'];
    data['utm_campaign'] = params['utm_campaign'];
    data['utm_source'] = params['utm_source'];
    data['utm_term'] = params['utm_term'];
    data['utm_medium'] = params['utm_medium'];

    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "ajax-proxy",
      data: data
    })
    .done(function( msg ) {
        console.log(msg);
    });
    alert('Отправлено!')
}

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
    // $('.question').click(function(){
    //     if($(this).children('.inner-window').hasClass('active'))
    //         $(this).children('.inner-window').removeClass('active');
    //     else
    //         $(this).children('.inner-window').addClass('active');               
    // });
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

    $("#form_button").on('click', function(e){
        e.preventDefault();
        send_data();
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