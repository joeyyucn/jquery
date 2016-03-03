$(document).ready(function () {

    /*
    // basic selector
    // select id
    $("#one").css("background", "#bbffaa");

    // select class
    $(".mini").css("background", "#bbffaa");

    // select tag
    $('div').css("background", "#bbffaa");

    // select all element
    $('*').css("background", "#bbffaa");

    // select span with id two 
    $('span, #two').css("backgroud", "#bbffaa");
    */

    // cascade selector
    //$("body div").css("background", "#bbffaa");

    //$('body > div').css("background", "#bbffaa");

    //$('.one + div').css("background", "#bbffaa");
    //$('.one').next("div").css("background", "#bbffaa");

    //$('#two ~ div').css("background", "#bbffaa");
    //$("#two").nextAll("div").css("background", "#bbffaa");


    // filte selector
    //$("div:first").css("background", "#ffbbaa");
    //$("div:last").css("background", "#ffbbaa");
    //$("div:not(.one)").css("background", "#ffbbaa");
    //$("div:even").css("background", "#ffbbaa");
    //$("div:odd").css("background", "#ffbbaa");
    //$("div:eq(3)").css("background", "#bbffaa");
    //$("div:gt(3)").css("background", "#bbffaa");
    //$("div:lt(3)").css("background", "#bbffaa");
    //$(":header").css("background", "#bbffaa");
    //$(":animated").css("background", "#bbffaa");

    // content filte selector
    //$("div:contains('element')").css("background", "#bbffaa");
    //$("div:empty").css("background", "#bbffaa");
    //$("div:has('div')").css("background", "#bbffaa");
    //$("div:parent").css("background", "#bbffaa");
    //$("div:visible").css("background", "#bbffaa");
    //$("div:hidden").show(3000);

    // attribute filte selector
    //$("div[title]").css("background", "#bbffaa");
    //$("div[title=test]").css("background", "#bbffaa");
    //$("div[title^=test]").css("background", "#bbffaa");
    //$("div[title!=test]").css("background", "#bbffaa");
    //$("div{title$=test]").css("background", "#bbffaa");

    // child element selector
    //$("div:first-child").css("background", "#bbffaa");
    //$("div:last-child").css("background", "#bbffaa");
    //$("div:only-child").css("background", "#bbffaa");
    //$("div:nth-child(1)").css("background", "#bbffaa");

    // form element selector
    $("#form1 input:enabled").val("changed!!");
    $("#form1 input:disabled").val("changed too!");
    
    $("#showresult").click(function () {
        alert($("#form1 :input").length);
    });
});