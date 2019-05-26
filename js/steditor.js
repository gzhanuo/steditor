function changeStyle(data){
    data.value ? document.execCommand(data.command, false, data.value) :
    document.execCommand(data.command, false, null);
}


$.fn.Heading = function() {
    let heading = $(this);
    $(".btn", heading).on("click", function(){
        $(".heading-list").show();
        return false;
    });

    $("body").on("click", function(){
        $(".heading-list").hide();
        return false;
    });
}


$(document).ready(function(){
    $(".btn-command").click(function(){
        changeStyle.call(this, this.dataset);
    });

    $(".heading").Heading();
});