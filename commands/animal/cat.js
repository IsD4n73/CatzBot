const api = require("../../clientHttp/client.js");
const cons = require("../../clientHttp/urls.js");
const { EmbedBuilder } = require('discord.js');

// CAT COMMAND 

async function catCommand(message) {
  // get the api response
  const url = await api.getRandomCat();

  // create embed
  const catEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: message.author.username})
	.setImage("https://" + cons.url.HOST + url.url + "." + url.mimetype.split("/")[1])
	.setTimestamp();

  // send embed
  message.channel.send({ embeds: [catEmbed] });
}

// export functions
module.exports = {catCommand};
