// got this switch from proto.io/freebies/onoff
function nightMode(){
    var checkBox = document.getElementById("myonoffswitch");
    var text = document.getElementById("main");
    if (checkBox.checked != true){
        $('div.card').toggleClass('dark');
        $('section').toggleClass('dark');
    }
    else{
        $('div.card').toggleClass('dark');
        $('section').toggleClass('dark');
    }
}