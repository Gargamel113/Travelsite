const formContact = $("#form-contact");

formContact.hide()

$("#form-button").click(() => {
    formContact.slideToggle();
})

$(".ctb").click(() => {
        $("#form-contact").slideDown();
})
