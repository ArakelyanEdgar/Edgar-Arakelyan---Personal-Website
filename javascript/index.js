/*
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

$(function () { 
    showText("#text1", para1, 0, 60).then(function(){
        showText("#text2", para1, 0, 60).then(function(){
            showText("#text3", para1, 0, 60)
        });   
    })
});  

*/
$("#name2").addClass("animated slideInLeft");

