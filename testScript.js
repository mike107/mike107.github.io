window.onload = function(){
    $.get("nav.html", function(data){
        $("#include").html(data);
    })
}