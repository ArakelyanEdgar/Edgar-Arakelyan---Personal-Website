
//A function that will output a text letter by letter
var showText = function (target, message, index, interval) {
    return new Promise((resolve,reject) => {
        if (index < message.length) { 
            $(target).append(message[index++]); 
            setTimeout(function () {
                showText(target, message, index, interval).then(function(){
                    resolve();
                }); 
            }, interval); 
        } else {
            resolve();
        }

    });
}



$(function (){
    $("#name1").addClass("animated slideInLeft");
    $("#name2").addClass("animated slideInRight");

    var para1 = $("#exposition").text();
    var para2 = $("about1").text();
    var para2 = $("about2").text();
    var para2 = $("about3").text();
    var para2 = $("project1").text();
    var para2 = $("project2").text();


    showText("#exposition", para1, 0, 60).then(function(){
        showText("#about1", para2, 0, 60).then(function(){
            showText("#about2", para3, 0, 60).then(function(){
                showText("#about3", para4, 0, 60).then(function(){
                    showText("#project1", para5, 0, 60).then(function(){
                        showText("#project2", para6, 0, 60);
                    })
                })
            })
        });   
    })
})


//sliding in each character in Arakelyan one by one
//not working yet, fix later
/*
$(function () { 

    var arakelyan = $("#name2");
    var characters = arakelyan.text().split("");
    arakelyan.empty();
    var content = "";
    for (var i = 0; i < characters.length; i++){
        content += "<span class='animated slideInRight'>" + characters[i] + "</span>"
    }
    arakelyan.append(content);


});  
*/