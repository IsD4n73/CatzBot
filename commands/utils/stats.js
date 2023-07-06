
const { EmbedBuilder } = require('discord.js');

// STATS COMMAND

async function statsCommand(message) {

    var serverIcon = message.guild.iconURL();
    // create embed
    const statsEmbed = new EmbedBuilder()
        .setTitle("Statistiche Server")
        .setColor(0xff0000)
        .setThumbnail(serverIcon)
        .addFields(
            {name: "Nome Server", value: message.guild.name.toString()},
            {name: "Server Creato il", value: message.guild.createdAt.toString()},
            {name: "Sei Entrato il", value: message.member.joinedAt.toString()},
            {name: "Membri Totali", value: message.guild.memberCount.toString()},
        )
        .setTimestamp();

    // send embed
    message.channel.send({ embeds: [statsEmbed] });
}

// export functions
module.exports = {statsCommand};

