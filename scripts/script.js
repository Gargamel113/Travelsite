$("#form-contact").hide()
$("#form-button").click(() => {
    if ($("#form-contact").is(":hidden")) {
        $("#form-contact").slideDown();
    } else {
        $("#form-contact").slideUp();
    }
})

$(".ctb").click(() => {
    if ($("#form-contact").is(":hidden")) {
        $("#form-contact").slideDown();
    }
})