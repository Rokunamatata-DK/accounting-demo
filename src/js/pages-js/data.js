// EmojioneArea
$(document).ready(function() {
    $("#send-text").emojioneArea({
    search: true,
    recentEmojis: true
    });
});
//New Employee's
$(document).ready(function(){
    $('#new-employees').DataTable({
        select: {
            style: 'multi'
        },
        "bJQueryUI": true,
        "aoColumnDefs": [
            { "sWidth": "10%", "aTargets": [-1] }
        ]
    });
});
// I-Check
$(document).ready(function () {
    $(document).ready(function () {
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
    });
});
