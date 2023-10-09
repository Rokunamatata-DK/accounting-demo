// Todo Notes //
$(document).ready(function () {
    $('#add-note').click(function (e) {
        e.preventDefault();
        var note_title = $('#note-title1').val();
        var note_description = $('#note-description1').val();
        var addTask = ' <div class="panel-box todo-notes">'+
        '<div class="panel-box-title">'+
        '<h5>'+ note_title +'</h5>'+
        '<a href="#" class="btn btn-secondary btn-sm pt-0 pb-0 float-right delete-note" data-toggle="tooltip" title="Click to close todo note">x</a>'+
    '</div>'+
    '<div class="panel-box-content p-3">'+
        '<p>'+ note_description +
        '</p>' +
    '</div>'+
    '</div>';
        if (note_title.length == 0) {
            alert('Please enter a task note title');
        }
        else if (note_description.length == 0) {
            alert('Please enter a task note description');
        } else {
            $('#todo-notes').prepend(addTask);
        }
    });
    $('#add-note-with-modal').click(function (e) {
        e.preventDefault();
        var note_title = $('.modal-body #note-title2').val();
        var note_description = $('.modal-body #note-description2').val();
        var addTask = ' <div class="panel-box todo-notes">'+
        '<div class="panel-box-title">'+
        '<h5>'+ note_title +'</h5>'+
        '<a href="#" class="btn btn-secondary btn-sm pt-0 pb-0 float-right delete-note" data-toggle="tooltip" title="Click to close todo note">x</a>'+
    '</div>'+
    '<div class="panel-box-content p-3">'+
        '<p>'+ note_description +
        '</p>' +
    '</div>'+
    '</div>';
        if (note_title.length == 0) {
            alert('Please enter a task note title');
        }
        else if (note_description.length == 0) {
            alert('Please enter a task note description');
        } else {
            $('#todo-notes').prepend(addTask);
        }
    });
});
$(document).on('click', '#todo-notes .panel-box .panel-box-title a', function(e){
    $(this).closest('.todo-notes').remove();
});