const Discord = require("discord.js");
const token = ""
const prefix = "";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready");
});

bot.on("message", function(message){
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){ //short commands pokecord.
        case "@1": //usa o 1 golpe do pokémon.
            message.channel.sendMessage("p!use 1");
            break;
        case "x": //usa o 2 golpe do pokémon.
            message.channel.sendMessage("p!use 2");
            break;  
        case "c": //usa o 3 golpe do pokémon.
            message.channel.sendMessage("p!use 3");
            break;
        case "v": //usa o 4 golpe do pokémon.
            message.channel.sendMessage("p!use 4");
            break;
        case "go": //comando para o bot secundario aceitar combate.
            message.channel.sendMessage("p!accept");
            break;
        case "p!duel": //usa o 1 golpe do pokémon.
            message.channel.sendMessage("p!accept");
            break;
        case "$1": //usa o 1 golpe do pokémon.
            message.channel.sendMessage("p!use 1");
            break;
        
    }
});

bot.login(token);