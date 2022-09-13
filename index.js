const keepAlive = require("./keepAlive.js");
const { Client, GatewayIntentBits} = require('discord.js');
const fs = require('node:fs');
//const { REST } = require('@discordjs/rest');


const client = new Client({ intents: [
    GatewayIntentBits.Guilds,                                   GatewayIntentBits.GuildMessages,                            GatewayIntentBits.MessageContent,                           GatewayIntentBits.GuildPresences] });


client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('online');
});

client.on('messageCreate', message =>{
    if(message.author.bot) {return;}
    console.log(message.content);
    let args = message.content.toLowerCase().split(" ");
    var cntr = 0;
    var length = message.content.length;
    //console.log(length);
    while (length >= cntr){
        switch(args[cntr]){
            case "69":
                message.channel.send("nice :smiley:");
                cntr++;
                break;
            case "420":
                message.channel.send("W33D");
                cntr++;
                break;
            case "star":
                if(args[cntr+1] == "wars"){
                message.channel.send({files:["./imgs/atsts.gif"]});
                }
                cntr++;
                break;
            default:
                cntr++;
                break;
        }
    }
    
/*
rewrite @guys replys (add rose, silence women, dont get her 
 started on the illegals)
set them as replys rather than msg
GUYS ID == 354004613797511169
TEST ID == 904427618219204679
*/
   // message.channel.send(message.content.author);
    //console.log(message.member.roles.cache);
    var chanceResp = Math.floor((Math.random() * 100) + 1);
    var respChoice = Math.floor((Math.random() * 100) + 1);

    if(message.member.roles.cache.some(r => r.name === "new role")) {
        message.channel.send("chance to respond: "+chanceResp +"\nChosen response: "+respChoice);
        if(chanceResp < 10){
            message.channel.send("you beat the 10% chance");
        }else if (chanceResp >=10 && chanceResp < 20){
            message.channel.send("take2");
        }
    
    
    }

});

client.login(process.env['TOKEN_2']);
//karp bot == token_1     test bot == token_2
/*
guild == server
Guild.Memeber == ppl in server


properties == describe something
method == does something


https://discord.js.org/#/docs/discord.js/main/general/welcome
*/