const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`Banaantje eet een banaantje! (en is online BTW)`)
    bot.user.setActivity("Bananenpark", { type: "PLAYING" });
});

bot.on("message", async message => {
    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if (command === `${prefix}hallo`) {
        return message.channel.send("hoi!");
    }
    if (command === `${prefix}banana`) {
      var botIcon = bot.user.defaultAvatarURL;
        var botEmbed = new discord.RichEmbed()
            .setDescription("Discord bot info")
            .setColor("#ef2121")
            .setThumbnail(botIcon)
            .addField("Bot naam:", bot.user.username);
        return message.channel.send(botEmbed);
    }
    if (command === `${prefix}members`) {
        var icon = message.guild.iconURL;
        var serverEmbed = new discord.RichEmbed()
        .setDescription("Discord server info")
        .setColor("#ef2121")
        .setThumbnail(icon)
        .addField("Totaal Members:", message.guild.memberCount);
        
    return message.channel.send(serverEmbed);
        return;
    }
    if command == 

});
bot.login(botConfig.token);