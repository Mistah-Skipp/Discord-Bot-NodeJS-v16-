/* 
TEST INFO:
clientID: 1017612126921166871
serverID: 795765474373009409
DEPLOY INFO:
clientID: 836766089505275954
serverID: 293850706987974656

*/
const { REST, SlashCommandBuilder, Routes } = require('discord.js');
//const { clientID, TOKEN } = require('./configT.json');

const commands = [
	new SlashCommandBuilder().setName('help').setDescription('list command names'),
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

rest.put(
	Routes.applicationCommands(process.env.clientID),
	{ body: commands }).then(data => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);