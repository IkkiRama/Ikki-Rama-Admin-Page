$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// light slider
$(document).ready(function () {
    $("#adaptive").lightSlider({
        // autoWidth: true,
        auto: true,
        item: 1,
        pauseOnHover: true,
        slideMargin: 0,
        loop: true,
    });
});