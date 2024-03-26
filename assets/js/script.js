
$(document).ready(function () {

    $('[data-bs-toggle="tooltip"]').tooltip();

    $('#enviarCorreo').click(function () {

        alert('El correo fue enviado correctamente...');
    });

    $("#ingredientes").dblclick(function () {
        $(this).css({
            "color": "red"
        });
    });
    $("#preparacion").dblclick(function () {
        $(this).css({
            "color": "red"
        });
    });

    $(".card-title").click(function () {
        $(this).next('.card-text').toggle();
    });


});

