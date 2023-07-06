const api = require("../../clientHttp/client.js");
const cons = require("../../clientHttp/urls.js");
const { EmbedBuilder } = require('discord.js');

// DAILY CAT COMMAND
async function dailyCatCommand(client){
  console.log("Daily Cat Send");

  // get the cat api
  const url = await api.getRandomCat();

  // create embed
  const catEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setImage("https://" + cons.url.HOST + url.url + "." + url.mimetype.split("/")[1])
	.setTimestamp();

  // get server and channel
  const guild = client.guilds.cache.get('1121817465404526592');
  const channel = guild.channels.cache.get('1121817466939658361');

  channel.send({ embeds: [catEmbed] });
}

// export functions
module.exports = { dailyCatCommand };
