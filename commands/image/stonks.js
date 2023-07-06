const { AttachmentBuilder } = require('discord.js');
const DIG = require("discord-image-generation");

// STONKS COMMAND 

async function stonksCommand(message){

    // get user or mention
    let user = message.mentions.users.first() || message.author;

    // Get the avatarUrl of the user
    let avatar = user.displayAvatarURL({
        forceStatic: true,
        extension: 'png'
    });

    // Make the image
    let img = await new DIG.Stonk().getImage(avatar);
    let attach = new AttachmentBuilder(img).setName("stonks.png");


    // send embed
    message.channel.send({ files: [attach] });


}

// export functions
module.exports = {stonksCommand};