//$("h1").css("color","red");

//$("h1").addClass("big-title");

//$("button").html("<em>Hey</em>");

//$("a").attr("href","https://www.yahoo.com");

$("h1").click(function() {
    $("h1").css("color","purple");
});

$("button").click(function(){
    $("h1").css("color","purple");
});

// $("input").keypress(function(){
//     console.log(event.key);
// });

// $(document).keypress(function(){
//     console.log(event.key);
// });

$(document).keypress(function(){
    $("h1").text(event.key);
});
