$(document).ready(function () {
    function ratingEnable() {
        $('#example-1to10').barrating('show', {
            theme: 'bars-1to10'
        });
        $('#example-movie').barrating('show', {
            theme: 'bars-movie'
        });
        $('#example-movie').barrating('set', 'Mediocre');

        $('#example-square').barrating('show', {
            theme: 'bars-square',
            showValues: true,
            showSelectedRating: false
        });
        $('#example-pill').barrating('show', {
            theme: 'bars-pill',
            initialRating: 'A',
            showValues: true,
            showSelectedRating: false,
            allowEmpty: true,
            emptyValue: '-- no rating selected --',
            onSelect: function (value, text) {
                alert('Selected rating: ' + value);
            }
        });
        $('#example-reversed').barrating('show', {
            theme: 'bars-reversed',
            showSelectedRating: true,
            reverse: true
        });
        $('#example-horizontal').barrating('show', {
            theme: 'bars-horizontal',
            reverse: true,
            hoverState: false
        });
        $('#example-fontawesome').barrating({
            theme: 'fontawesome-stars',
            showSelectedRating: false
        });
        $('.rating-star').barrating({
            theme: 'css-stars',
            showSelectedRating: false
        });
        $('#example-bootstrap').barrating({
            theme: 'bootstrap-stars',
            showSelectedRating: false
        });
        var currentRating = $('#example-fontawesome-o').data('current-rating');
        $('.stars-example-fontawesome-o .current-rating')
            .find('span')
            .html(currentRating);
        $('.stars-example-fontawesome-o .clear-rating').on('click', function (event) {
            event.preventDefault();

            $('#example-fontawesome-o')
                .barrating('clear');
        });
        $('#example-fontawesome-o').barrating({
            theme: 'fontawesome-stars-o',
            showSelectedRating: false,
            initialRating: currentRating,
            onSelect: function (value, text) {
                if (!value) {
                    $('#example-fontawesome-o')
                        .barrating('clear');
                } else {
                    $('.stars-example-fontawesome-o .current-rating')
                        .addClass('hidden');

                    $('.stars-example-fontawesome-o .your-rating')
                        .removeClass('hidden')
                        .find('span')
                        .html(value);
                }
            },
            onClear: function (value, text) {
                $('.stars-example-fontawesome-o')
                    .find('.current-rating')
                    .removeClass('hidden')
                    .end()
                    .find('.your-rating')
                    .addClass('hidden');
            }
        });
    }
    function ratingDisable() {
        $('select').barrating('destroy');
    }
    $('.rating-enable').on('click', function (event) {
        event.preventDefault();
        ratingEnable();
        $(this).addClass('deactivated');
        $('.rating-disable').removeClass('deactivated');
    });
    $('.rating-disable').on('click', function (event) {
        event.preventDefault();
        ratingDisable();
        $(this).addClass('deactivated');
        $('.rating-enable').removeClass('deactivated');
    });
    ratingEnable();
});
$(document).ready(function () {
    var quantitiy = 0;
    $('.quantity-right-plus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity-1').val());
        // If is not undefined
        $('#quantity-1').val(quantity + 1);
        // Increment
    });
    $('.quantity-left-minus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity-1').val());
        // If is not undefined
        // Increment
        if (quantity > 0) {
            $('#quantity-1').val(quantity - 1);
        }
    });
    $('.quantity-right-plus-2').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity-2').val());
        // If is not undefined
        $('#quantity-2').val(quantity + 1);
        // Increment
    });
    $('.quantity-left-minus-2').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity-2').val());
        // If is not undefined
        // Increment
        if (quantity > 0) {
            $('#quantity-2').val(quantity - 1);
        }
    });
});
//Slick Carousel
$(document).ready(function () {
    // slick carousel js for left
    $('#big_banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '#small_banner'
    });
    $('#small_banner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#big_banner',
        dots: false,
        centerMode: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        responsive: [, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        ]
    });
    // slick carousel js for left
    // slick carousel js for right
    $('#big_banner-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '#small_banner-2'
    });
    $('#small_banner-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#big_banner-2',
        dots: false,
        centerMode: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        responsive: [, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        ]
    });
    // slick carousel js for right
});