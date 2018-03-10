const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = bot.user.displayAvatarURL;
    let help = new Discord.RichEmbed()
    .setDescription("Help")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Commandes de modération:", '.')
    .addField("Ban:", '!ban <@Pseudo> <raison>')
    .addField("Kick:", '!kick <@Pseudo> <raison>')
    .addField("addrank:", '!addrank <@Pseudo> <rank>')
    .addField("removerank:", '!removerank <@Pseudo> <rank>')
    .addField("tempmute:", '!tempmute <@Pseudo> <raison> <temps>')
    .addField("serverinfos:", '!serverinfos')
    .addField("report:", '!report <@Pseudo> <raison>')
    .addField("Warn:", ' !warn <@pseudo> <raison>');

    message.channel.send(help);
}

module.exports.help = {
  name:"help"
}