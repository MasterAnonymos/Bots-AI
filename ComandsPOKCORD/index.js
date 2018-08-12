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
        case "@3": //usa o 3 golpe do pokémon
            message.channel.sendMessage("p!use 3");
            break;
        case "@4": //usa o 4 golpe do pokémon
            message.channel.sendMessage("p!use 4");
            break;
        case "@info": //acessa a info do pokemon selecionado
            message.channel.sendMessage("p!info");
            break;
        case "@pokemon": //acessa a lista de pokémons do usuário
            message.channel.sendMessage("p!pokemon");
            break;   
        case "@fav": //acessa a lista de favoritos do usuário
            message.channel.sendMessage("p!fav");
            break;
        case "@next": //proximo da lista
            message.channel.sendMessage("p!next");
            break;
        case "@back": //acessa a lista de favoritos do usuário
            message.channel.sendMessage("p!back");
            break;          
    }
});

bot.on("message", function(message){ //shorts catch pokémons.
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0]){ //comands catch pokémon.
        case "001": //
            message.channel.sendMessage("p!catch Bulbasaur");
            break;
        case "002": //
            message.channel.sendMessage("p!catch Ivysaur");
            break;
        case "003": //
            message.channel.sendMessage("p!catch Venusaur");
            break;
        case "004": //
            message.channel.sendMessage("p!catch Charmander");
            break;    
        case "005": //
            message.channel.sendMessage("p!catch Charmeleon");
            break;  
        case "006": //
            message.channel.sendMessage("p!catch Charizard");
            break;  
        case "007": //
            message.channel.sendMessage("p!catch Squirtle");
            break;
        case "008": //
            message.channel.sendMessage("p!catch Wartortle");
            break; 
        case "009": //
            message.channel.sendMessage("p!catch Blastoise");
            break;
        case "010": //
            message.channel.sendMessage("p!catch Caterpie");
            break;
        case "011": //
            message.channel.sendMessage("p!catch Metapod");
            break; 
        case "012": //
            message.channel.sendMessage("p!catch Butterfree");
            break;
        case "013": //
            message.channel.sendMessage("p!catch Weedle");
            break; 
        case "014": //
            message.channel.sendMessage("p!catch Kakuna");
            break; 
        case "015": //
            message.channel.sendMessage("p!catch Beedrill");
            break;
        case "016": //
            message.channel.sendMessage("p!catch Pidgey");
            break; 
        case "017": //
            message.channel.sendMessage("p!catch Pidgeotto");
            break; 
        case "018": //
            message.channel.sendMessage("p!catch Pidgeot");
            break; 
        case "019": //
            message.channel.sendMessage("p!catch Rattata");
            break; 
        case "020": //
            message.channel.sendMessage("p!catch Raticate");
            break; 
        case "021": //
            message.channel.sendMessage("p!catch Spearow");
            break; 
        case "022": //
            message.channel.sendMessage("p!catch Fearow");
            break; 
        case "023": //
            message.channel.sendMessage("p!catch Ekans");
            break; 
        case "024": //
            message.channel.sendMessage("p!catch Arbok");
            break; 
        case "025": //
            message.channel.sendMessage("p!catch Pikachu");
            break; 
        case "026": //
            message.channel.sendMessage("p!catch Raichu");
            break; 
        case "027": //
            message.channel.sendMessage("p!catch Sandshrew");
            break; 
        case "028": //
            message.channel.sendMessage("p!catch Sandslash");
            break; 
        case "029": //
            message.channel.sendMessage("p!catch Nidoran");
            break; 
        case "030": //
            message.channel.sendMessage("p!catch Nidorina");
            break; 
        case "031": //
            message.channel.sendMessage("p!catch Nidoqueen");
            break; 
        case "032": //
            message.channel.sendMessage("p!catch Nidoran");
            break; 
        case "033": //
            message.channel.sendMessage("p!catch Nidorino");
            break; 
        case "034": //
            message.channel.sendMessage("p!catch Nidoking");
            break; 
        case "035": //
            message.channel.sendMessage("p!catch Clefairy");
            break; 
        case "036": //
            message.channel.sendMessage("p!catch Clefable");
            break;   
        case "037": //
            message.channel.sendMessage("p!catch Vulpix");
            break;   
        case "038": //
            message.channel.sendMessage("p!catch Ninetales");
            break;  
        case "039": //
            message.channel.sendMessage("p!catch Jigglypuff");
            break; 
        case "040": //
            message.channel.sendMessage("p!catch Wigglytuff");
            break; 
        case "041": //
            message.channel.sendMessage("p!catch Zubat");
            break; 
        case "042": //
            message.channel.sendMessage("p!catch Golbat");
            break; 
        case "043": //
            message.channel.sendMessage("p!catch Oddish");
            break; 
        case "044": //
            message.channel.sendMessage("p!catch Gloom");
            break; 
        case "045": //
            message.channel.sendMessage("p!catch Vileplume");
            break; 
        case "046": //
            message.channel.sendMessage("p!catch Paras");
            break; 
        case "047": //
            message.channel.sendMessage("p!catch Parasect");
            break; 
        case "048": //
            message.channel.sendMessage("p!catch Venonat");
            break; 
        case "049": //
            message.channel.sendMessage("p!catch Venomoth");
            break;
        case "050": //
            message.channel.sendMessage("p!catch Diglett");
            break;
        case "051": //
            message.channel.sendMessage("p!catch Dugtrio");
            break;
        case "052": //
            message.channel.sendMessage("p!catch Meowth");
            break; 
        case "053": //
            message.channel.sendMessage("p!catch Persian");
            break;  
        case "054": //
            message.channel.sendMessage("p!catch Psyduck");
            break;
        case "055": //
            message.channel.sendMessage("p!catch Golduck");
            break; 
        case "056": //
            message.channel.sendMessage("p!catch Mankey");
            break;
        case "057": //
            message.channel.sendMessage("p!catch Primeape");
            break; 
        case "058": //
            message.channel.sendMessage("p!catch Growlithe");
            break; 
        case "059": //
            message.channel.sendMessage("p!catch Arcanine");
            break;  
        case "060": //
            message.channel.sendMessage("p!catch Poliwag");
            break; 
        case "061": //
            message.channel.sendMessage("p!catch Poliwhirl");
            break; 
        case "062": //
            message.channel.sendMessage("p!catch Poliwrath");
            break;
        case "063": //
            message.channel.sendMessage("p!catch Abra");
            break;
        case "064": //
            message.channel.sendMessage("p!catch Kadabra");
            break; 
        case "065": //
            message.channel.sendMessage("p!catch Alakazam");
            break; 
        case "066": //
            message.channel.sendMessage("p!catch Machop");
            break;
        case "067": //
            message.channel.sendMessage("p!catch Machoke");
            break;
        case "068": //
            message.channel.sendMessage("p!catch Machamp");
            break; 
        case "069": //
            message.channel.sendMessage("p!catch Bellsprout");
            break;
        case "070": //
            message.channel.sendMessage("p!catch Weepinbell");
            break; 
        case "071": //
            message.channel.sendMessage("p!catch Victreebel");
            break;
        case "072": //
            message.channel.sendMessage("p!catch Tentacool");
            break;
        case "073": //
            message.channel.sendMessage("p!catch Tentacruel");
            break;
        case "074": //
            message.channel.sendMessage("p!catch Geodude");
            break;
        case "075": //
            message.channel.sendMessage("p!catch Graveler");
            break;   
        case "076": //
            message.channel.sendMessage("p!catch Golem");
            break;
        case "077": //
            message.channel.sendMessage("p!catch Ponyta");
            break; 
        case "078": //
            message.channel.sendMessage("p!catch Rapidash");
            break; 
        case "079": //
            message.channel.sendMessage("p!catch Slowpoke");
            break;
        case "080": //
            message.channel.sendMessage("p!catch Slowbro");
            break;
        case "081": //
            message.channel.sendMessage("p!catch Magnemite");
            break; 
        case "082": //
            message.channel.sendMessage("p!catch Magneton");
            break; 
        case "083": //
            message.channel.sendMessage("p!catch Farfetch'd");
            break;
        case "084": //
            message.channel.sendMessage("p!catch Doduo");
            break; 
        case "085": //
            message.channel.sendMessage("p!catch Dodrio");
            break;
        case "086": //
            message.channel.sendMessage("p!catch Seel");
            break; 
        case "087": //
            message.channel.sendMessage("p!catch Dewgong");
            break;
        case "088": //
            message.channel.sendMessage("p!catch Grimer");
            break;   
        case "089": //
            message.channel.sendMessage("p!catch Muk");
            break; 
        case "090": //
            message.channel.sendMessage("p!catch Shellder");
            break;
        case "091": //
            message.channel.sendMessage("p!catch Cloyster");
            break;
        case "092": //
            message.channel.sendMessage("p!catch Gastly");
            break;
        case "093": //
            message.channel.sendMessage("p!catch Haunter");
            break;
        case "094": //
            message.channel.sendMessage("p!catch Gengar");
            break;
        case "095": //
            message.channel.sendMessage("p!catch Onix");
            break;
        case "096": //
            message.channel.sendMessage("p!catch Drowzee");
            break;
        case "097": //
            message.channel.sendMessage("p!catch Hypno");
            break;
        case "098": //
            message.channel.sendMessage("p!catch Krabby");
            break;
        case "099": //
            message.channel.sendMessage("p!catch Kingler");
            break;
        case "100": //
            message.channel.sendMessage("p!catch Voltorb");
            break;
        case "101": //
            message.channel.sendMessage("p!catch Electrode");
            break;
        case "102": //
            message.channel.sendMessage("p!catch Exeggcute");
            break;
        case "103": //
            message.channel.sendMessage("p!catch Exeggutor");
            break;
        case "104": //
            message.channel.sendMessage("p!catch Cubone");
            break;
        case "105": //
            message.channel.sendMessage("p!catch Marowak");
            break;
        case "106": //
            message.channel.sendMessage("p!catch Hitmonlee");
            break;
        case "107": //
            message.channel.sendMessage("p!catch Hitmonchan");
            break;
        case "108": //
            message.channel.sendMessage("p!catch Lickitung");
            break;
        case "109": //
            message.channel.sendMessage("p!catch Koffing");
            break;
        case "110": //
            message.channel.sendMessage("p!catch Weezing");
            break;
        case "111": //
            message.channel.sendMessage("p!catch Rhyhorn");
            break;
        case "112": //
            message.channel.sendMessage("p!catch Rhydon");
            break;
        case "113": //
            message.channel.sendMessage("p!catch Chansey");
            break;
        case "114": //
            message.channel.sendMessage("p!catch Tangela");
            break;
        case "115": //
            message.channel.sendMessage("p!catch Kangaskhan");
            break;
        case "116": //
            message.channel.sendMessage("p!catch Horsea");
            break;
        case "117": //
            message.channel.sendMessage("p!catch Seadra");
            break;
        case "118": //
            message.channel.sendMessage("p!catch Goldeen");
            break;
        case "119": //
            message.channel.sendMessage("p!catch Seaking");
            break;
        case "120": //
            message.channel.sendMessage("p!catch Staryu");
            break;
        case "121": //
            message.channel.sendMessage("p!catch Starmie");
            break;
        case "122": //
            message.channel.sendMessage("p!catch Mr. Mime");
            break;
        case "123": //
            message.channel.sendMessage("p!catch Scyther");
            break;
        case "124": //
            message.channel.sendMessage("p!catch Jynx");
            break;
        case "125": //
            message.channel.sendMessage("p!catch Electabuzz");
            break;
        case "126": //
            message.channel.sendMessage("p!catch Magmar");
            break;
        case "127": //
            message.channel.sendMessage("p!catch Pinsir");
            break;
        case "128": //
            message.channel.sendMessage("p!catch Tauros");
            break;
        case "129": //
            message.channel.sendMessage("p!catch Magikarp");
            break;
        case "130": //
            message.channel.sendMessage("p!catch Gyarados");
            break;
        case "131": //
            message.channel.sendMessage("p!catch Lapras");
            break;
        case "132": //
            message.channel.sendMessage("p!catch Ditto");
            break;
        case "133": //
            message.channel.sendMessage("p!catch Eevee");
            break;
        case "134": //
            message.channel.sendMessage("p!catch Vaporeon");
            break;
        case "135": //
            message.channel.sendMessage("p!catch Jolteon");
            break;
        case "136": //
            message.channel.sendMessage("p!catch Flareon");
            break;
        case "137": //
            message.channel.sendMessage("p!catch Porygon");
            break;
        case "138": //
            message.channel.sendMessage("p!catch Omanyte");
            break;
        case "139": //
            message.channel.sendMessage("p!catch Omastar");
            break;
        case "140": //
            message.channel.sendMessage("p!catch Kabuto");
            break;
        case "141": //
            message.channel.sendMessage("p!catch Kabutops");
            break;
        case "142": //
            message.channel.sendMessage("p!catch Aerodactyl");
            break;
        case "143": //
            message.channel.sendMessage("p!catch Snorlax");
            break;
        case "144": //
            message.channel.sendMessage("p!catch Articuno");
            break;
        case "145": //
            message.channel.sendMessage("p!catch Zapdos");
            break;
        case "146": //
            message.channel.sendMessage("p!catch Moltres");
            break;
        case "147": //
            message.channel.sendMessage("p!catch Dratini");
            break;
        case "148": //
            message.channel.sendMessage("p!catch Dragonair");
            break;
        case "149": //
            message.channel.sendMessage("p!catch Dragonite");
            break;
        case "150": //
            message.channel.sendMessage("p!catch Mewtwo");
            break;
        case "151": //
            message.channel.sendMessage("p!catch Mew");
            break;
    }

    switch (args[0]){ //short catch pokémon IMAGENS.
        case "https://cdn.discordapp.com/attachments/459015415297736706/461177854303010837/PokecordSpawn.jpg": //#050
            message.channel.sendMessage("p!catch Diglett");
            break;
    }
});

bot.on("message", function(message){ //Batlle looping.
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){ //looping.
        case "@2": //usa o 1 golpe do pokémon
            message.channel.sendMessage("p!use 1");
            message.channel.sendMessage("@1");
            break;
        case "@1": //usa o 1 golpe do pokémon
            message.channel.sendMessage("@2");
            message.channel.sendMessage("p!duel <@457001276740468740>");
            break;    
        }        
             
});


bot.on("message",(message)=>{ //Up pokecord.
    
    bot.on("message", (message)=> { //Pokecord
       
        if(message.content == "$stop"){ //Command erro
            essage.channel.sendMessage("fudeu!");
        }
    })
        
    bot.on("message", (message)=> { //spwam pokecord
        if(message.content == "$Porque?$"){ 
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