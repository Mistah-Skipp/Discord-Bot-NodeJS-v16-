const { SlashCommandBuilder, IntegrationApplication } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rename')
		.setDescription('change a user nickname')
        .addStringOption(option =>
            option
                .setName('username')
                .setDescription('user to change')
                .setRequired(true))
        .addStringOption(option =>
            option
            .setName('nickname')
            .setDescription('nickName to be set')
            .setRequired(true))
    ,
	async execute(interaction) {
        console.log(interaction.options.getString('username') +"<--user || nickname -->"+ interaction.options.getString('nickname'))
        await interaction.reply(interaction.options.getString('username') +"<--user || nickname -->"+ interaction.options.getString('nickname'));
		//await interaction.execute(interaction.option.user.setNickname(interaction.option.nickname))
	},
};