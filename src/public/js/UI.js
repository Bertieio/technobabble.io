$("#facebook").hover(function () {
    console.log("test");
    $("#footer").css("background-color", "#3b5998");
}, function () {
    console.log("test out");
    $("#footer").css("background-color", "#424242");
});