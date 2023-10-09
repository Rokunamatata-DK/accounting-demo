/*
 *
 *   Adminos - Responsive Admin Theme
 *   version 0.0.1
 *
 */

$(document).ready(function () {
    //Page Wrapper Fixed height with size of sidebar
    $(window).resize(function(e) {
        alert(e.val());
        $('canvas').css("width","100%");
        $('svg').css("width","100%");
    });
    // Add body-small class if window less than 768px
    if ($(window).width() < 769) {
        $('body').addClass('body-small');
    } else if ($(window).width() > 769){
        $('body').removeClass('body-small');
    }
    // Top centered menu less than 868px
    if ($(window).width() <= 991) {
        $('body.top-navigation').addClass('body-medium');
    } else if ($(window).width() > 991){
        $('body.top-navigation').removeClass('body-medium');
    }
    //Fix Height On load resize or scroll
    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });
    //Fixed Top Navbar
    $('#fixed-top-navbar').click(function () {
        $('#topNavbar').toggleClass('navbar-fixed-top');
        $('#page-wrapper').toggleClass('topMargin');
        $('body').toggleClass('navbar-fixed');
    });
    //Fixed Sidebar Button
    $('#fixed-sidebar').click(function () {
        $('body').toggleClass('canvas-menu');
    });
    //Fixed Footer
    $('#fixed-footer').click(function () {
        $('.footer').toggleClass('fixed');
    });
    //RTL Layout Button
    $('#RTL-layout').click(function (e) {
        var item=$(this);    
        if(item.is(":checked"))
        {
            window.open("././rtl_top_center_layout.html", "_self");  
        }    
    });
    //Show Notifications Button
    $('#show-notifications').click(function () {
        if (this.checked == true) {
            toastr.success('Hi, welcome to Adminos. This is example of Toastr notifications box.');
        } else {
            toastr.remove();
        }
    });
    //Collapsed Charts
    $('#collapsed-panels').click(function () {
        var panel_box = $(this).closest('div.panel-box');
        var button = $(this).find('i');
        var content = $('.panel-box-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        panel_box.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            panel_box.resize();
            panel_box.find('[id^=map-]').resize();
        }, 50);
        //card collapse 
        var card = $('.card-body');
        card.slideToggle(200);
    });
    //Disable Chat
    $('#disableChat').click(function () {
        if (this.checked == true) {
            $(".bottom_wrapper").addClass('disabled-chat');
        } else {
            $(".bottom_wrapper").removeClass('disabled-chat');
        }
    });
    // MetisMenu
    $('#side-menu').metisMenu();
    // Collapse panel-box function
    $('.collapse-link').on('click', function () {
        var panel_box = $(this).closest('div.panel-box');
        var button = $(this).find('i');
        var content = panel_box.children('.panel-box-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        panel_box.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            panel_box.resize();
            panel_box.find('[id^=map-]').resize();
        }, 50);
    });
    // Close panel-box function
    $('.close-link').on('click', function () {
        var content = $(this).closest('div.panel-box');
        content.remove();
    });
    // Fullscreen panel-box function
    $('.fullscreen-link').on('click', function () {
        var panel_box = $(this).closest('div.panel-box');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-panel-box-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        panel_box.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });
    // Close menu in canvas mode
    $('.close-canvas-menu').on('click', function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });
    // Close Top Centered Menu 
    $("#toggle-top-menu").on("click", function() {
      $("body").toggleClass("close-top-menu open-top-menu");
      SmoothlyMenu();
    });
    // Close Top Centered Menu
    $("#close-top-menu").on("click", function() {
      $("body").toggleClass("open-top-menu close-top-menu");
      SmoothlyMenu();
    });
    //Off Canvas Sidebar Button
    $('#mini-sidebar-menu').click(function () {
        var item=$(this);    
        if(item.is(":checked"))
        {
            window.open("././mini-sidebar.html", "_self");  
        }   
    });
    // Open Chat List
    $('.show-chat-list').on('click', function () {
        var show_chat_class = $('#chat').attr('class');
        if ($('body').hasClass('rtls')) {
            if (show_chat_class == 'sticky-top chat-open slideInLeft animated') {
                $('#chat').removeAttr('class');
                $('#chat').addClass('sticky-top chat-open slideOutLeft animated');
            } else {
                $('#chat').removeAttr('class');
                $('#chat').addClass('sticky-top chat-open slideInLeft animated');
            }
        } else {
            if (show_chat_class == 'sticky-top chat-open slideInRight animated') {
                $('#chat').removeAttr('class');
                $('#chat').addClass('sticky-top chat-open slideOutRight animated');
            } else {
                $('#chat').removeAttr('class');
                $('#chat').addClass('sticky-top chat-open slideInRight animated');
            }
        }
    });
    // Open Notification Menu
    $('.show-notification').on('click', function () {
        var show_notify_class = $('#notification-menu').attr('class');
        if ($('body').hasClass('rtls')) {
            if (show_notify_class == 'sticky-top chat-open slideInLeft animated') {
                $('#notification-menu').removeAttr('class');
                $('#notification-menu').addClass('sticky-top chat-open slideOutLeft animated');
            } else {
                $('#notification-menu').removeAttr('class');
                $('#notification-menu').addClass('sticky-top chat-open slideInLeft animated');
            }
        } else {
            if (show_notify_class == 'sticky-top chat-open slideInRight animated') {
                $('#notification-menu').removeAttr('class');
                $('#notification-menu').addClass('sticky-top chat-open slideOutRight animated');
            } else {
                $('#notification-menu').removeAttr('class');
                $('#notification-menu').addClass('sticky-top chat-open slideInRight animated');
            }
        }
    });
    // Close Notification Menu 
    $("#close-notification").on('click', function(){
        if ($('body').hasClass('rtls')) {
            $('#notification-menu').removeAttr('class');
            $('#notification-menu').addClass('sticky-top chat-open slideOutLeft animated');
        } else {
            $('#notification-menu').removeAttr('class');
            $('#notification-menu').addClass('sticky-top chat-open slideOutRight animated');
        }
    });
    // Close Notification Menu
    $('.close-notification').on('click', function () {
        $('#notification-menu').removeClass('chat-open');
    });
    // Open Chat Messages
    $('.show-chat-msg').on('click', function () {
        if ($('body').hasClass('rtls')) {
            var chat_msg_class = $('#chat-messages').attr('class');
            if (chat_msg_class == 'sticky-top chat-open slideInLeft animated') {
                $('#chat-messages').removeAttr('class');
                $('#chat-messages').addClass('sticky-top chat-open slideOutLeft animated ');
            } else {
                $('#chat-messages').removeAttr('class');
                $('#chat-messages').addClass('sticky-top chat-open slideInLeft animated');
            }
        } else {
            var chat_msg_class = $('#chat-messages').attr('class');
            if (chat_msg_class == 'sticky-top chat-open slideInRight animated') {
                $('#chat-messages').removeAttr('class');
                $('#chat-messages').addClass('sticky-top chat-open slideOutRight animated ');
            } else {
                $('#chat-messages').removeAttr('class');
                $('#chat-messages').addClass('sticky-top chat-open slideInRight animated');
            }
        }
    });
    // Close Chat Messages
    $('.close-chat-msg').on('click', function () {
        if ($('body').hasClass('rtls')) {
            var chat_msg_class = $('#chat-messages').attr('class');
            if (chat_msg_class == 'sticky-top chat-open slideInLeft animated') {
                $('#chat-messages').removeAttr('class');
                $('#chat-messages').addClass('sticky-top chat-open slideOutLeft animated ');
            } else {
                $('#chat-messages').removeAttr('class');
                $('#chat-messages').addClass('sticky-top chat-open slideInLeft animated');
            }
        } else {
            var chat_msg_class = $('#chat-messages').attr('class');
            if (chat_msg_class == 'sticky-top chat-open slideInRight animated') {
                $('#chat-messages').removeAttr('class');
                $('#chat-messages').addClass('sticky-top chat-open slideOutRight animated ');
            } else {
                $('#chat-messages').removeAttr('class');
                $('#chat-messages').addClass('sticky-top chat-open slideInRight animated');
            }
        }
    });
    // Open & close right sidebar
    $('.selector-toggle').on('click', function () {
        var right_sidebar_class = $('#right-sidebar').attr('class');
        if ($('body').hasClass('rtls')) {
            if (right_sidebar_class == 'sticky-top sidebar-open slideInLeft animated') {
                $('#right-sidebar').removeAttr('class');
                $('#right-sidebar').addClass('sticky-top sidebar-open slideOutLeft animated');
                $('.right-sidebar-toggle i').removeClass('fa fa-close');
                $('.right-sidebar-toggle i').addClass('feather icon-settings rotate-icon');
            } else {
                $('#right-sidebar').removeAttr('class');
                $('#right-sidebar').addClass('sticky-top sidebar-open slideInLeft animated');
                $('.right-sidebar-toggle i').removeClass('feather icon-settings rotate-icon');
                $('.right-sidebar-toggle i').addClass('fa fa-close');
            }
        } else {
            if (right_sidebar_class == 'sticky-top sidebar-open slideInRight animated') {
                $('#right-sidebar').removeAttr('class');
                $('#right-sidebar').addClass('sticky-top sidebar-open slideOutRight animated');
                $('.right-sidebar-toggle i').removeClass('fa fa-close');
                $('.right-sidebar-toggle i').addClass('feather icon-settings rotate-icon');
            } else {
                $('#right-sidebar').removeAttr('class');
                $('#right-sidebar').addClass('sticky-top sidebar-open slideInRight animated');
                $('.right-sidebar-toggle i').removeClass('feather icon-settings rotate-icon');
                $('.right-sidebar-toggle i').addClass('fa fa-close');
            }
        }
    });
    //Setting Btn 
    $('.setting-btn').on('click', function () {
        var right_sidebar_class = $('#right-sidebar').attr('class');
        if ($('body').hasClass('rtls')) {
            if (right_sidebar_class == 'sticky-top sidebar-open slideInLeft animated') {
                $('#right-sidebar').removeAttr('class');
                $('#right-sidebar').addClass('sticky-top sidebar-open slideOutLeft animated');
                $('.right-sidebar-toggle i').removeClass('fa fa-close');
                $('.right-sidebar-toggle i').addClass('feather icon-settings rotate-icon');
            } else {
                $('#right-sidebar').removeAttr('class');
                $('#right-sidebar').addClass('sticky-top sidebar-open slideInLeft animated');
                $('.right-sidebar-toggle i').removeClass('feather icon-settings rotate-icon');
                $('.right-sidebar-toggle i').addClass('fa fa-close');
            }
        } else {
            if (right_sidebar_class == 'sticky-top sidebar-open slideInRight animated') {
                $('#right-sidebar').removeAttr('class');
                $('#right-sidebar').addClass('sticky-top sidebar-open slideOutRight animated');
                $('.right-sidebar-toggle i').removeClass('fa fa-close');
                $('.right-sidebar-toggle i').addClass('feather icon-settings rotate-icon');
            } else {
                $('#right-sidebar').removeAttr('class');
                $('#right-sidebar').addClass('sticky-top sidebar-open slideInRight animated');
                $('.right-sidebar-toggle i').removeClass('feather icon-settings rotate-icon');
                $('.right-sidebar-toggle i').addClass('fa fa-close');
            }
        }
    });
    // Open close small chat
    $('.open-small-chat').on('click', function () {
        $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
        $('.mini-chat-box').toggleClass('active');
    });
    // Initialize slimscroll for small chat
    $('.mini-chat-box .content').slimScroll({
        height: '240px',
        railOpacity: 0.4
    });
    // Small todo handler
    $('.check-link').on('click', function () {
        var button = $(this).find('i');
        var label = $(this).next('span');
        button.toggleClass('fa-check-square').toggleClass('fa-square-o');
        label.toggleClass('todo-completed');
        return false;
    });
    // Minimalize menu
    $('.navbar-mini').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("mini-navbar");
        $(".navbar-mini i").toggleClass("icon-toggle-left icon-toggle-right");
    });
    // Tooltips demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });
    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");
        var navbarheight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();
        if (navbarheight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarheight + "px");
        }
        if (navbarheight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }
        if ($('body').hasClass('fixed-nav')) {
            if (navbarheight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarheight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }
    }
    function resizeAll(){
        // Initialize slimscroll for online friends
        $('.online-friends').slimScroll({
            height: $(window).height() - 260,
            size: '6px',
            position: 'right',
            distance: '5px',
            railOpacity: 0.4,
            wheelStep: 10,
            useFixedHeight: true,
            fixedHeight: 50,
            opacity: 0.1
        });
        // Initialize slimscroll for online chat messages
        $('.online-friends-chat').slimScroll({
            height: $(window).height() - 200,
            size: '6px',
            position: 'right',
            distance: '5px',
            railOpacity: 0.4,
            wheelStep: 10,
            useFixedHeight: true,
            fixedHeight: 50,
            opacity: 0.1
        });
        // Sidebar Container Scroll
        $('.themes-scroll').slimScroll({
            height: $(window).height() - 344,
            railOpacity: 0.4,
            wheelStep: 10,
            opacity: 0.1
        });
        // Sidebar Container Scroll
        $('.setting-scroll').slimScroll({
            height: $(window).height() - 290,
            railOpacity: 0.4,
            wheelStep: 10,
            opacity: 0.1
        });
        // Initialize slimscroll for small chat
        $('.mini-chat-box .content').slimScroll({
            height: $(window).height(),
            railOpacity: 0.4,
            opacity: 0.1
        });
        // Initialize slimscroll for small notification menu
        $('.notify-scroll').slimScroll({
            height: $(window).height(),
            railOpacity: 0.4,
            opacity: 0.1
        });
    }
    setInterval(function () {
        fix_height();
        //Add Resize All function to fit with screen size
        resizeAll();
    }, 1000);

    $(window).bind("load", function () {
        if ($("body").hasClass('mini-body')) {
            sidebarScroll();
        }else{
            $("body").removeClass('mini-body');
        }
    });
    // Move right sidebar top after scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
            $('#chat').addClass('sidebar-top');
            $('#chat-messages').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
            $('#chat').removeClass('sidebar-top');
            $('#chat-messages').removeClass('sidebar-top');
        }
    });
    $("[data-toggle=popover]")
        .popover();

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%',
        opacity: 0.1
    });
    //Enable Disable Sidebar Menu Click
    $('#disable-click').on('click', function () {
        $('#side-menu').toggleClass('disabled-div');
        $('#disable-click span').toggleClass('feather icon-eye feather icon-eye-off');
    });
    // Tooltips demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });
    //CSS Animations
    $(document).ready(function () {
        $('.animation_select').click(function () {
            $('#animation_box').removeAttr('class').attr('class', '');
            var animation = $(this).attr("data-animation");
            $('#animation_box').addClass('animated');
            $('#animation_box').addClass(animation);
            return false;
        });
    });
    // Minimalize menu when screen is less than 768px
    $(window).bind("resize", function () {
        if ($(this).width() < 769) {
            $('body').addClass('body-small')
        } else {
            $('body').removeClass('body-small')
        }
    });
    //Add Scroll to sidebar Function 
    sidebarScroll();
    function sidebarScroll(){
        $(".navbar-static-side").css('overflow-y', 'scroll');
        $(".top-navbar-static-side").css('overflow-y', 'scroll');
    }
    //Remove Sidebar scroll 
    function removeSidebarScroll(){
        $(".top-navbar-static-side").css('overflow', 'hidden');
        var sidebar_height = $('.sidebar-collapse').css('height', '100%');
        $("#page-wrapper").css("height", sidebar_height + "px");
    }
    // Minimalize menu when screen is less than 768px
    $(window).bind("resize", function () {
        if ($(this).width() < 769) {
            $('body').addClass('body-small')
        } else {
            $('body').removeClass('body-small')
        }
    });
    // Local Storage functions
    // Set proper body class and plugins based on user configuration
    $(document).ready(function () {
        if (localStorageSupport()) {
            var collapse = localStorage.getItem("collapse_menu");
            var fixedsidebar = localStorage.getItem("fixedsidebar");
            var fixednavbar = localStorage.getItem("fixednavbar");
            var boxedlayout = localStorage.getItem("boxedlayout");
            var fixedfooter = localStorage.getItem("fixedfooter");
            var body = $('body');
            if (fixedsidebar == 'on') {
                body.addClass('fixed-sidebar');
                $('.sidebar-collapse').slimScroll({
                    height: '100%',
                    railOpacity: 0.9
                });
            }
            if (collapse == 'on') {
                if (body.hasClass('fixed-sidebar')) {
                    if (!body.hasClass('body-small')) {
                        body.addClass('mini-navbar');
                    }
                } else {
                    if (!body.hasClass('body-small')) {
                        body.addClass('mini-navbar');
                    }

                }
            }
            if (fixednavbar == 'on') {
                $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
                body.addClass('fixed-nav');
            }
            if (boxedlayout == 'on') {
                body.addClass('boxed-layout');
            }
            if (fixedfooter == 'on') {
                $(".footer").addClass('fixed');
            }
        }
    });
    // check if browser support HTML5 local storage
    function localStorageSupport() {
        return (('localStorage' in window) && window['localStorage'] !== null)
    }
    // For demo purpose - animation css script
    function animationHover(element, animation) {
        element = $(element);
        element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
    }
    function SmoothlyMenu() {
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 200);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 100);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    }
    // Top Navbar Themes JS //
    $('.btn-header-theme').click(function () {
        var color = $(this).attr('data-myattr');
        var result = [
            {"theme":"topNav-blue-theme"},{"theme":"topNav-brown-theme"},
            {"theme":"topNav-dark-gray-theme"},{"theme":"topNav-dark-pink-theme"},
            {"theme":"topNav-default-theme"},{"theme":"topNav-gray-theme"},
            {"theme":"topNav-green-theme"},{"theme":"topNav-light-blue-theme"},
            {"theme":"topNav-light-green-theme"},{"theme":"topNav-orange-theme"},
            {"theme":"topNav-purple-theme"},{"theme":"topNav-red-theme"},
            {"theme":"topNav-sky-theme"},{"theme":"topNav-yellow-theme"},
            {"theme":"topNav-white-theme"},
        ]
        result.forEach(function(e) {
            $('#topNavbar').removeClass(e.theme);
            if (color == e.theme){
            $('#topNavbar').addClass(color);
            } 
        });
    });
    //White Theme
    $('.btn-white-topNav-theme').click(function () {
        $('#topNavbar').removeAttr('class');
        $('#topNavbar').attr('class');
        $('#topNavbar').addClass('navbar navbar-static-top navbar-fixed-top topNav-white-theme');
    });
    // Top Centered Toggle Sidebar Menu Themes JS //
    $('.btn-sidebar-theme').click(function () {
        var color = $(this).attr('data-myattr');
        var result = [
            {"theme":"blue-theme"},{"theme":"brown-theme"},
            {"theme":"dark-gray-theme"},{"theme":"dark-pink-theme"},
            {"theme":"default-theme"},{"theme":"gray-theme"},
            {"theme":"green-theme"},{"theme":"light-blue-theme"},
            {"theme":"light-green-theme"},{"theme":"orange-theme"},
            {"theme":"purple-theme"},{"theme":"red-theme"},
            {"theme":"sky-theme"},{"theme":"yellow-theme"},
            {"theme":"white-theme"},
        ]
        result.forEach(function(e) {
            $('#top-navbar-static-side').removeClass(e.theme);
            $('#mySidenav').removeClass(e.theme);
            if (color == e.theme){
            $('#top-navbar-static-side').addClass(color);
            $('#mySidenav').addClass(color);
            } 
        });
    });
    //#endregion
    // Sidebar Search 
    $(".toggle-btn").on('click', function () {
        if ($(".sidebar-header .user-profile-info").css("display") == 'none') {
            $(".sidebar-header .user-profile-info").css('display', 'block');
            $(".sidebar-header .profile-bg").css('display', 'block');
            $(".sidebar-header").css("height", "200px");
            $(".sidebar-nav-search").css('display', 'none');
            $(".search-toggle").css("top", "-30px");
            $(".search-toggle i").toggleClass("feather icon-chevron-down feather icon-chevron-up");
        } else {
            $(".sidebar-header .user-profile-info").css('display', 'none');
            $(".sidebar-header .profile-bg").css('display', 'none');
            $(".sidebar-header").css("height", "150px");
            $(".sidebar-nav-search").css('display', 'block');
            $(".search-toggle").css("top", "-84px");
            $(".search-toggle i").toggleClass("feather icon-chevron-down feather icon-chevron-up");
        }
    });
    //#endregion
    $(".search-btn").on('click', function () {
        $(".main-search").addClass('open');
        $('.main-search .form-control').animate({
            'width': '200px',
        });
    });
    $(".search-close").on('click', function () {
        $('.main-search .form-control').animate({
            'width': '0',
        });
        setTimeout(function () {
            $(".main-search").removeClass('open');
        }, 300);
    });
    //Search In Menu 
    $(document).ready(function () {
        $("#search-menu").on("keyup", function () {
            if (this.value.length > 0) {
                $(".top-navbar-static-side .nav > li.nav-item").hide().filter(function () {
                    return $(this).text().toLowerCase().indexOf($("#search-menu").val().toLowerCase()) != -1;
                }).css("top", "200px").show();
            } else {
                $('.top-navbar-static-side .nav > li').show();
            }
        });
    });
    //Search In Menu 
    $(document).ready(function () {
        $("#search-users").on("keyup", function () {
            if (this.value.length > 0) {
                $(".friends").hide().filter(function () {
                    return $(this).text().toLowerCase().indexOf($("#search-users").val().toLowerCase()) != -1;
                }).css("top", "200px").show();
            } else {
                $('.friends').show();
            }
        });
    });
    //Sidebar Toggle Button //
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    });
    //#endregion
    //Complete Date JS 
    $(document).ready(function () {
        // Create two variables with names of months and days of the week in the array
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        // Create an object newDate()
        var newDate = new Date();
        // Retrieve the current date from the Date object
        newDate.setDate(newDate.getDate());
        // At the output of the day, date, month and year    
        $('#Date').html(dayNames[newDate.getDay()] + ', ' + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());

        setInterval(function () {
            // Create an object newDate () and extract the second of the current time
            var seconds = new Date().getSeconds();
            // Add a leading zero to the value of seconds
            $("#sec").html((seconds < 10 ? "0" : "") + seconds);
        }, 1000);

        setInterval(function () {
            // Create an object newDate () and extract the minutes of the current time
            var minutes = new Date().getMinutes();
            // Add a leading zero to the minutes
            $("#min").html((minutes < 10 ? "0" : "") + minutes);
        }, 1000);

        setInterval(function () {
            // Create an object newDate () and extract the clock from the current time
            var hours = new Date().getHours();
            // Add a leading zero to the value of hours
            $("#hours").html((hours < 10 ? "0" : "") + hours);
        }, 1000);
    });
    // Sidebar Menu Toggle JS //
    $('.components').metisMenu();
    $(".drop").on('click', function (eventData) {
        var $listItem = $(this).closest('li');
        $listItem.find('ul').toggle();
        $listItem.addClass('show');
        $.cookie('open_items', 'the_value');
        openItems = new Array();
        $(".drop").each(function (index, item) {
            if ($(item).hasClass('show')) {
                openItems.push(index);
            }
        });
        $.cookie('open_items', openItems.join(','));
    });
    if ($.cookie('open_items') && $.cookie('open_items').length > 0) {
        previouslyOpenItems = $.cookie('open_items');
        openItemIndexes = previouslyOpenItems.split(',');
        $(openItemIndexes).each(function (index, item) {
            $(".drop").eq(item).addClass('show').find('ul').toggle();
        });
    }
    //#endregion
    // Active Tab 
    $('ul.nav.nav-tabs > li').click(function (e) {
        e.preventDefault();
    });
    $("#homeNav").click(function () {
        $("#homeNav").addClass('active');
        $("#themeNav").removeClass('active');
        $("#settingNav").removeClass('active');
    });
    $("#themeNav").click(function () {
        $("#themeNav").addClass('active');
        $("#homeNav").removeClass('active');
        $("#settingNav").removeClass('active');
    });
    $("#settingNav").click(function () {
        $("#settingNav").addClass('active');
        $("#homeNav").removeClass('active');
        $("#themeNav").removeClass('active');
    });
    //#endregion
});
// FullScreen Toggle Button JS
function toggleFullScreen() {
    if ($(window).width() <= 800) {
        //If width < 800 don't toggle full screen
    } else if ($(window).width() > 769){
    var a = $(window).height() - 10;
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    $('#top-full-screen').toggleClass('feather icon-maximize full-screen');
    $('#top-full-screen').toggleClass('feather full-screen icon-minimize');
    $('#full-screen').toggleClass('feather icon-maximize full-screen');
    $('#full-screen').toggleClass('feather full-screen icon-minimize');
    feather.replace();
    }
}
