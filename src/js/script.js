$(document).ready(function () {
  
    var menu = $(".header");
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top >= 150) {
            menu.css('background', '#212529');
        } else {
            menu.css("background", "");
        }
    }
    );
    
    document.addEventListener('DOMContentLoaded', function() {

        $('#btn').click(function() {
          $('#modal').modal('show');
        });
  
      });


      

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: jQuery.validator.format("Enter {0} symbols!")
                },
                phone: "Please enter your phone number",
                email: {
                    required: "Please enter your e-mail",
                    email: "Incorrect e-mail"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('#send_form').submit(function (e) {
        console.log('formmmmm');
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "your_url",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    $('.navbar ul li a').click(function () {
        var $currLink = $(this);
        $('.navbar ul li a').each(function () {
            $(this).removeClass("menu__link__active");
        })
        $currLink.addClass("menu__link__active");
    })
});