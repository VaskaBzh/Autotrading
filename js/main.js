$(function () {
    
    const swiper = new Swiper('.swiper-first', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.benefit__swiper__button-next',
          prevEl: '.benefit__swiper__button-prev',
        },
      });

      const secondSwiper = new Swiper('.swiper-second', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.lessons__swiper__button-next',
          prevEl: '.lessons__swiper__button-prev',
        },
      });

      const thirdSwiper = new Swiper(".feedback-swiper", {
        direction: 'horizontal',
        loop: true,
        
        autoplay: {
          delay: 5000,
        },
      });
    
       var btn = $('#button');

        $(window).scroll(function() {
          if (($(window).scrollTop() > 300) && ($(window).scrollTop() < 12700)) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });
        btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '5000');
        });

        var btn1 = $('#button1');

        btn1.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '5000');
        });

        // Валдиация формы
        $('.first__form').validate({
          errorClass: "invalid",
          rules: {
            // simple rule, converted to {required:true}
            userName: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
          messages: {
            userName: {
                required:"Введите имя",
                minlength:"Имя не короче двух символов",
                maxlength:"Имя не длиннее 15 символов"
            },
            userPhone: "Введите телефон",
            userEmail: {
              required: "Введите почту в формате: name@domain.com",
              email: "Введите корректный email, в формате: name@domain.com"
            },
            submitHandler: function(form) {
              $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                  alert('Фомра отправлена, мы свяжемся с вами через 10 минут');
                  $(form)[0].reset();
                },
                error: function (response) {
                  console.error('Ошибка запроса ' + response);
                }
              });
            }
          }
        });

        $('.first__form').validate({
          errorClass: "invalid",
          rules: {
            // simple rule, converted to {required:true}
            userName: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
          messages: {
            userName: {
                required:"Введите имя",
                minlength:"Имя не короче двух символов",
                maxlength:"Имя не длиннее 15 символов"
            },
            userPhone: "Введите телефон",
            userEmail: {
              required: "Введите в формате: name@domain.com",
              email: "Введите корректный email, в формате: name@domain.com"
            }
          },
          submitHandler: function(form) {
            $.ajax({
              type: "POST",
              url: "send.php",
              data: $(form).serialize(),
              success: function (response) {
                alert('Фомра отправлена, мы свяжемся с вами через 10 минут');
                $(form)[0].reset();
              },
              error: function (response) {
                console.error('Ошибка запроса ' + response);
              }
            });
          }
        });

        // маска для телефона

        $('[type=tel]').mask('+7(000) 000-00-00');

        // --
});