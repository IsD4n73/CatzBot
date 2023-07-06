const { Client, GatewayIntentBits, Partials, ActivityType } = require('discord.js');
var cron = require("cron");
require("dotenv").config();


const config = require("./config.json");
const clientHttp = require(`./clientHttp/client.js`);
const commands = require("./commands/commandsHelper.js");

// init client
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});


// bot ready
client.on("ready", async function(){
  console.log("Bot start");
  require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000);
  // get cat count
  var count = await clientHttp.getCatCount();
  // setup daily cat
  let job1 = new cron.CronJob('00 00 14 * * *', () => commands.commandHelper("dailyCat", "", client));
  job1.start();


  // set the presenece
  const presences = [
    `${count.number} Gatti!`,
    `${config.nCommand} Comandi!`
  ];

  setInterval(() => {
    const status = presences[Math.floor(Math.random() * presences.length)];
    
    client.user.setPresence({
      activities: [
        { name: `${status}`, type: ActivityType.Watching },
      ],
      status: "online",
    });
  }, 5000);

  
});

client.on('guildMemberAdd', member => {
  member.guild.channels.get('1121817466939658361').send("Benvenutooooooooooo!!!"); 
});


client.on("messageCreate", async function(message) {

    //ignore bot
    if (message.author.bot) return;


    //ignore without prefix
    if (!message.content.startsWith(config.prefix)) return;

    // get the command
    const commandBody = message.content.slice(config.prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    //commands function
    await commands.commandHelper(command, args, message, client).then(() => message.delete());



  

});


// login
client.login(process.env.BOT_TOKEN);
