const { AttachmentBuilder } = require('discord.js');
const DIG = require("discord-image-generation");

// JAIL COMMAND 

async function jailCommand(message){

    // get user or mention
    let user = message.mentions.users.first() || message.author;

    // Get the avatarUrl of the user
    let avatar = user.displayAvatarURL({
        forceStatic: true,
        extension: 'png'
    });

    // Make the image
    let img = await new DIG.Jail().getImage(avatar);
    let attach = new AttachmentBuilder(img).setName("jail.png");


    // send embed
    message.channel.send({ files: [attach] });


}

// export functions
module.exports = {jailCommand};