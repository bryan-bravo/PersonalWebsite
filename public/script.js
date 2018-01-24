$(function() {
    //start
    $("#resume").hide();
    $("#portfolio").hide();
    $("#left-arrow").hide();
    $("#right-arrow").hide();

    //home to resume
    $("#resume-link").click(function() {
        $("#home-page").hide("slide", { direction: "right" }, function() {
            $("#resume").show("slide", { direction: "left" });
            $("#right-arrow").show();
        });
    });
    //home to portfolio
    $("#portfolio-link").click(function() {
        $("#home-page").hide("slide", { direction: "left" }, function() {
            $("#right-arrow").hide();
            $("#portfolio").show("slide", { direction: "right" });
            $("#left-arrow").show();
        });
    });
    //resume to home
    $("#right-arrow").click(function() {
        $("#resume").hide("slide", { direction: "left" }, function() {
            $("#home-page").show("slide", { direction: "right" });
            $("#right-arrow").hide();
        });
    });

    //portfolio to home
    $("#left-arrow").click(function() {
        $("#portfolio").hide("slide", { direction: "right" }, function() {
            $("#home-page").show("slide", { direction: "left" });
            $("#left-arrow").hide();
        });
    });
});