
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
//var hobbies = ["soccer", "learning", "rpgs","math","software","warfilms","exercise","automation","hiphop","manchesterunited"];
var para1 = "I am a student at the University of Nevada, Las Vegas seeking a B.S in both mathematics and computer science."
var para2 = "I only recently discovered  my passion "+
            "for software development. Programming gives me an intellectual stimulus "+
            "that I thought only math provided, thus I am a bit late to the party!";
//var para3 = "are the things that I enjoy";
var para3 = "I love: soccer learning rpgs math software warfilms exercise automation hiphop manchesterunited"
var para4 = "Nonetheless, I seek company in creating products that will change how society thinks of the present and the future!"
var para5 = "Projects";
var para6 = "Wait, its empty here? Yes, I have only just found my desire for software engineering. I'm currently working on a peer-to-peer lending platform. Hopefully I have a minimum viable product by the time you're reading this.";

$(function (){
    $("#name2").addClass("animated slideInRight");
    $("#project").addClass("animated slideInRight");

    


    showText("#text1", para1, 0, 60).then(function(){
        showText("#text2", para2, 0, 60).then(function(){
            
           // $.each(hobbies, function(index, value){
             //   showText("#span" + String(index+1), hobbies[index], 0, 500)
            //})
            showText("#text3", para3, 0, 60).then(function(){
                showText("#text4", para4, 0, 60).then(function(){
                    showText("#text5", para5, 0, 200).then(function(){
                        showText("#text6", para6, 0, 60);
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