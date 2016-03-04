var visible = false;
function showAllCatetories() {
    $(".showmore > a > span").html("show simplified");
    $("li:gt(7)").show();
    
}

function showSimplifiedCategories() {
    $("li:gt(5):not(:last)").hide();
    $(".showmore > a > span").html("show more");
}

$(document).ready(function () {
    
    var $categories = $(".SubCategoryBox > ul > li:gt(5):not(:last)");
    $categories.hide();
    $("div.showmore > a").click(function () {
        
        if ($categories.is(":visible")) {
            $categories.hide(200);
            $(".showmore > a > span").text("Show More");
        }
        else {
            $categories.show(200);
            $(".showmore > a > span").text("Show Less");
        }
        return false;
    });
    var $watermelon = $('<li title="watermelon">watermelon</li>');
    $watermelon.click(function () {
        alert($(this).attr("class"));

    });

    $("#append").click(function () {
        $("#fruits").append($watermelon.clone(true));
    });

    $("#prepend").click(function () {
        $("#fruits").prepend($('<li title="watermelon">watermelon</li>'));
    });
    $("#clear").click(function () {
        $("#fruits li[title=watermelon]").remove();
    });

    $("#next").click(function () {
        $("p").replaceWith("<strong>which one you dislike</strong>");
    });

    $("#wrap").click(function () {
        $("strong").wrap("<p></p>");
    });

    $("#wrap").click(function () {
        $("strong").wrapAll("<a></a>");
    });

    $("#removetitle").click(function () {
        $("li").removeAttr("title");
    });
});