var visible = false;
function showAllCatetories() {
    $(".showmore > a > span").html("show simplified");
    $("li:gt(7)").show();
    
}

function showSimplifiedCategories() {
    $("li:gt(7)").hide();
    $(".showmore > a > span").html("show more");
}

$(document).ready(function () {
    showSimplifiedCategories();
    $(".showmore > a > span").click(function () {
        if (visible) {
            showSimplifiedCategories();
        }
        else {
            showAllCatetories();
        }
        visible = !visible;
    });
});