const { AttachmentBuilder } = require('discord.js');
const DIG = require("discord-image-generation");

// SLAP COMMAND 

async function slapCommand(message){

    if(message.mentions.users.first() == null){
        // send embed
        message.reply("Devi taggare qualcuno da schiaffeggiare **!slap @user**");
        return;
    }

    // Get the avatarUrl of the user
    let avatar = message.author.displayAvatarURL({
        forceStatic: true,
        extension: 'png'
    });

    // Get the avatarUrl of the user
    let slapped = message.mentions.users.first().displayAvatarURL({
        forceStatic: true,
        extension: 'png'
    });

    // Make the image
    let img = await new DIG.Batslap().getImage(avatar, slapped);
    let attach = new AttachmentBuilder(img).setName("slap.png");


    // send embed
    message.channel.send({ files: [attach] });


}

// export functions
module.exports = {slapCommand};