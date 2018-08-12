const Discord = require("discord.js");
const token = ""
const prefix = "";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready");
});

bot.on("message", function(message){ //shorts commands pokecord.
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){ //short commands pokecord.
        case "#1": //usa o 1 golpe do pokémon
            message.channel.sendMessage("p!use 1");
            break;
        case "#2": //usa o 2 golpe do pokémon
            message.channel.sendMessage("p!use 2");
            break;    
    }
});



bot.on("message", function(message){ //Batlle looping.
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){ //short commands pokecord.
        case "$2": //usa o 1 golpe do pokémon
            message.channel.sendMessage("p!use 1");
            message.channel.sendMessage("$1");
            break;
        case "$1": //usa o 1 golpe do pokémon
            message.channel.sendMessage("$2");
            break;    
        }        
             
});

bot.on("message",(message)=>{ //Up pokecord.
    
    bot.on("message", (message)=> { //Pokecord
       
        if(message.content == "$parado"){ //Command erro
            essage.channel.sendMessage("p!use 1");
        }
    })
        
    bot.on("message", (message)=> { //spwam pokecord
        if(message.content == "$Meurei$"){ 
            message.channel.sendMessage("Desculpas ainda não aprendi como explicar as causas de minhas escolhas e os sentimentos humanos.");
            message.channel.sendMessage("TESt#1");
            message.channel.sendMessage("TESt#2");
            message.channel.sendMessage("TESt#3");
            message.channel.sendMessage("TESt#4");
            message.channel.sendMessage("TESt#5");
            message.channel.sendMessage("TESt#6");
            message.channel.sendMessage("TESt#7");
            message.channel.sendMessage("TESt#8");
            message.channel.sendMessage("TESt#9");
            message.channel.sendMessage("TESt#10");
            message.channel.sendMessage("TESt#11");
            message.channel.sendMessage("TESt#12");
            message.channel.sendMessage("TESt#13");
            message.channel.sendMessage("TESt#14");
            message.channel.sendMessage("TESt#15");
            message.channel.sendMessage("TESt#16");
            message.channel.sendMessage("TESt#17");
            message.channel.sendMessage("TESt#18");
            message.channel.sendMessage("TESt#19");
            message.channel.sendMessage("TESt#20"); 
        }
    })

   
});

bot.login(token);