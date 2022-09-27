
const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { clientID, TOKEN } = require('./config.json');
const rest = new REST({ version: '10' }).setToken(TOKEN);
//const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
const path = require('node:path');
const fs = require('node:fs');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}





rest.put(
	Routes.applicationCommands(clientID),
	{ body: commands }).then(data => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
/*
rest.put(
	Routes.applicationCommands(process.env.clientID),
	{ body: commands }).then(data => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);

	*/


/* 
TEST INFO:
clientID: 1017612126921166871
serverID: 795765474373009409
DEPLOY INFO:
clientID: 836766089505275954
serverID: 293850706987974656

*/