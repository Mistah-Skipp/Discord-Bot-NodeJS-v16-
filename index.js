//const keepAlive = require("./keepAlive.js");
import { Client, GatewayIntentBits, Options, Collection } from './node_modules/discord.js';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildPresences] });

client.commands = new Collection();
const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}
console.log("commands loaded!")




client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('online');
    client.user.setActivity("")
});

client.on("messageDelete", message =>{
    if (message.author.bot) {return;}
        message.channel.send(message.member.user.username + " Has deleted message: \n"+message.content);
});//EOF MESSAGEDELETE

client.on('messageCreate', message =>{
    if(message.author.bot) {return;}
    let args = message.content.toLowerCase().split(" ");

    if(message.content.includes("@836766089505275954")){
        message.channel.send({files:["./imgs/pinged.gif"]}).catch;
    }
    console.log(message.content);
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
    }//EOF ONE OFF RESPONSES
    // RESPONSE CODE BELOW
    var chanceResp = Math.floor((Math.random() * 100) + 1);
    var respChoice = Math.floor((Math.random() * 100) + 1);

    if(message.member.roles.cache.some(r => r.name === "guys")) {
        //debug line
        console.log("chance to respond: "+chanceResp +"\nChosen response: "+respChoice);
        
        if (chanceResp < 10){
            //specific @guys response

            console.log(message.member.user.id);
            
            switch(message.member.user.id){
               case("296404969387720705")://ALEX
                    var car = Math.floor((Math.random() * 10) + 5);
                    message.reply("go roll your "+ car +"th car");
                    break;
               case("163810266625081345")://BRYAN
                    if(respChoice == 69){
                        message.reply("god who let this cutie in?:heart_eyes::heart_eyes:")
                    }   else {
                        message.reply("Says the token gay guy");
                    }  
                    break;
                case("242037517241548801")://CHRIS
                    message.reply("I cant insult my wittle pogchamp");
                    break;
                case("263457606645972995")://GEORGE
                    message.reply("Whatever Mr. $4000 bed");
                    break;
                case("312399825637212160")://JAKE
                    message.reply("Dont care, didnt ask, L, Mald, Cope, Seeth");
                    break;
                case("174377288903688192")://JOSH
                    if(respChoice == 69){
                        message.reply("let me seem them kappers clappers :weary:")                   
                    }else {
                        message.reply("OK Elite preferred species");
                    }
                    break;
                case("324612052532592641")://MATT
                    message.reply("your the only one i like out of these bumbling retards");
                    break;
                case("249772372201177088")://ROSE
                    if(respChoice == 69){
                        message.reply("!quote 6");
                    }else {    
                        message.reply("dont get her started on the illegals");
                    }
                    break;
                default:
                    message.channel.send("who the fuck is the new guy?");
                    break;
            }
            /*
            role.id
            GUYS ID == 354004613797511169
            TEST ID == 904427618219204679

            user.id
            ALEX:296404969387720705
            BRYAN:163810266625081345
            CHRIS:242037517241548801
            GEORGE:263457606645972995
            JAKE:312399825637212160
            JOSH:174377288903688192
            MATT:324612052532592641
            ROSE:249772372201177088 
            */ 
        } else if(chanceResp >= 10 && chanceResp < 20){
            //general response 
            if(respChoice == 69){
                message.channel.send("haha Nice");
            }else if(respChoice <10){
                message.channel.send(message.content + " is a dumb fucking message");
            }else if (respChoice >= 10 && respChoice < 20){
                message.channel.send("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.");
            }else if (respChoice >= 20 && respChoice < 30){
                message.channel.send("I hope you die in your sleep");
            }else if (respChoice >= 30 && respChoice < 40){
                message.channel.send("no i dont do coke regularly");
            }else if (respChoice >= 40 && respChoice < 50) {
                message.channel.send("trying to sell a gently used pallet of bricks, wanna buy?");
            }else if (respChoice >= 50 && respChoice < 60){
                message.channel.send("To be fair, you have to have a very high IQ to understand Rick and Morty. The humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head.");
            }else if (respChoice >= 60 && respChoice < 70){
                message.channel.send("The fuck did you say to me little shit? How are you not at fucking school, do you kiss your mother with that mouth? you shut up when im talking to you ");
            }else if (respChoice >= 70 && respChoice < 80){
                message.channel.send("i swear im contributing to the conversation i swear");
            }else if (respChoice >= 80 && respChoice < 90){
                message.channel.send("bad coder cant think of funny");
            }else if (respChoice >= 90 && respChoice < 100){
                message.channel.send("fortnite $19 vbucks card avaliable for limited time offer, send DM for info");
            }else if (respChoice >= 100){
                message.channel.send("I Joe Carpinone am going to do something drastic to the US capital");
            }
               
            
        }//closing brace on chance to respond
    }//closing brace for role check

});//EOF MESSAGECREATE

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);
    if(!command) return;

    try{
        await command.execute(interaction);
    } catch(err) {
        console.log(err);
        await interaction.reply("error executing command");
    }

});

client.login(process.env.TOKEN);

//FUNCTIONS



//https://discord.js.org/#/docs/discord.js/main/general/welcome



/* 
PLANS:
-add log for when response goes off
-add name of user to deleted message (audit logs?)
-add alt message to guys roles
-add credit score system
-add command to allow users to change eachother name (essentially bypass role priority)
*/