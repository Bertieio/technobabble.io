$(function () {
    $("#facebook").hover(function () {
        $("#footer").removeClass("footerDefault");
        $("#footer").addClass("footerFB");
        $('.socialText').html("Facebook:");
    }, function () {
        $("#footer").removeClass("footerFB");
        $("#footer").addClass("footerDefault");
        $('.socialText').html("Find us on:");
    });
    $("#twitter").hover(function () {
        $("#footer").removeClass("footerDefault");
        $("#footer").addClass("footerTW");
        $('.socialText').html("Twitter:");
    }, function () { 
        $("#footer").removeClass("footerTW");
        $("#footer").addClass("footerDefault");
        $('.socialText').html("Find us on:");
    });
    $("#instagram").hover(function () {
        $("#footer").removeClass("footerDefault");
        $("#footer").addClass("footerIN");
        $('.socialText').html("Instagram:");
    }, function () {
        $("#footer").removeClass("footerIN");
        $("#footer").addClass("footerDefault");
        $('.socialText').html("Find us on:");
    });
    $("#github").hover(function () {
        $("#footer").removeClass("footerDefault");
        $("#footer").addClass("footerGH");
        $('.socialText').html("Github:");
    }, function () {
        $("#footer").removeClass("footerGH");
        $("#footer").addClass("footerDefault");
        $('.socialText').html("Find us on:");
    });

});