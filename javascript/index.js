
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


$("#name1").addClass("animated slideInLeft");
$("#name2").addClass("animated slideInRight");


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