// Todo list Agile Board //
$(document).ready(function () {
    //Simple Add Task
    $("#todo, #inprogress, #Doned").sortable({
        connectWith: ".connectList",
        update: function (event, ui) {
            var todo = $("#todo").sortable("toArray");
            var inprogress = $("#inprogress").sortable("toArray");
            var Doned = $("#Doned").sortable("toArray");
            $('.output').html("ToDo: " + window.JSON.stringify(todo) + "<br/>" + "In Progress: " + window.JSON.stringify(inprogress) + "<br/>" + "Doned: " + window.JSON.stringify(Doned));
        }
    }).disableSelection();
    $('#add-task').click(function (e) {
        e.preventDefault();
        var task_text = $('.task-text').val();
        var addTask = '<li class="warning-element ui-sortable-handle" id="task9">' + task_text +
            '<div class="agile-detail">' +
            ' <a class="btn btn-sm btn-danger" href="#"><i class="feather icon-x text-white"></i></a>' +
            ' <a class="btn btn-sm btn-warning btn-done mr-1" href="#"><i class="feather icon-bookmark text-white"></i> Pendding</a>' +
            ' <i class="fa fa-clock-o"></i> 12.10.2015' +
            '</div>' +
            '</li>';
        if (task_text.length == 0) {
            alert('Please enter a task');
        } else {
            $('#todo').prepend(addTask);
        }
    });
    //For Add Task With Modal
    $("#todo2, #inprogress, #Doned").sortable({
        connectWith: ".connectList",
        update: function (event, ui) {
            var todo = $("#todo").sortable("toArray");
            var inprogress = $("#inprogress").sortable("toArray");
            var Doned = $("#Doned").sortable("toArray");
            $('.output').html("ToDo: " + window.JSON.stringify(todo) + "<br/>" + "In Progress: " + window.JSON.stringify(inprogress) + "<br/>" + "Doned: " + window.JSON.stringify(Doned));
        }
    }).disableSelection();
    $('#modal-add-task').click(function (e) {
        e.preventDefault();
        var task_text = $('.modal-body .task-text').val();
        var addTask = '<li class="warning-element ui-sortable-handle" id="task9">' + task_text +
            '<div class="agile-detail">' +
            ' <a class="btn btn-sm btn-danger" href="#"><i class="feather icon-x text-white"></i></a>' +
            ' <a class="btn btn-sm btn-warning btn-done mr-1" href="#"><i class="feather icon-bookmark text-white"></i> Pendding</a>' +
            ' <i class="fa fa-clock-o"></i> 12.10.2015' +
            '</div>' +
            '</li>';
        if (task_text.length == 0) {
            alert('Please enter a task');
        } else {
            $('#todo').prepend(addTask);
        }
    });
});
//For Simple Todo List
$(document).on('click', '#todo li', function (e) {
    e.preventDefault();
    $(this).toggleClass('task-done').toggleClass('warning-element success-element');
    $(this).find('a.btn-done').toggleClass('btn-warning btn-success');
    ($(this).find('a.btn-done').hasClass('btn-warning')) ? $(this).find('a.btn-done').html('<i class="feather icon-bookmark text-white"></i> Pendding') : $(this).find('a.btn-done').html('<i class="feather icon-check text-white"></i> Done');
});
$(document).on('click', '#todo li a.btn-danger', function(e) {
    e.preventDefault();
    $(this).closest('li').remove();
});
$(document).on('click', '#todo2 li a.btn-danger', function(e) {
    e.preventDefault();
    $(this).closest('li').remove();
});
