$(function(){
    //var t = $("p").text();
    //alert(t);
    //var imgSrc = $("img").attr("src");
    //alert(imgSrc);
    //$("img").attr("src", "images/OFFbulb.jpg")
    //$("h1").attr("class", "red");

    $("img").click(function(){
        var cv = $(this).attr("src");
        if(cv == "images/OFFbulb.jpg"){
            $(this).attr('src', 'images/ONbulb.jpg');
        }
        else{
            $(this).attr('src', 'images/OFFbulb.jpg');
        }
    });

    function changeBgColor(){
        $(this).css('background-color', 'yellow');
    }

    $('h1').dblclick(changeBgColor);

    //I do not know
});