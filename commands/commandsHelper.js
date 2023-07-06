const cat = require("./animal/cat.js");
const fox = require("./animal/fox.js");
const dog = require("./animal/dog.js");
const doggo = require("./animal/doggo.js");
const bird = require("./animal/bird.js");
const duck = require("./animal/duck.js");
const quokka = require("./animal/quokka.js");
const dailyCat = require("./animal/dailyCat.js");

const insult = require("./fun/insult.js");

const stats = require("./utils/stats.js");
const help = require("./utils/help.js");
const uptime = require("./utils/uptime.js");


const coffee = require("./image/coffee.js");
const gay = require("./image/gay.js");
const trigger = require("./image/triggered.js");
const slap = require("./image/slap.js");
const confuseStonks = require("./image/confuseStonks.js");
const stonks = require("./image/stonks.js");
const notStonks = require("./image/notStonks.js");
const del = require("./image/delete.js");
const jail = require("./image/jail.js");
const rip = require("./image/rip.js");
const wanted = require("./image/wanted.js");
const trash = require("./image/trash.js");


// select the command
async function commandHelper(command, args, message, client){
  switch (command.toLowerCase()) {
    case "cat":
      cat.catCommand(message);
      break;
    case "fox":
      fox.foxCommand(message);
      break;
    case "dog":
      dog.dogCommand(message);
      break;
    case "doggo":
     doggo.doggoCommand(message);
     break;
    case "quokka":
      quokka.quokkaCommand(message);
      break;
    case "bird":
      bird.birdCommand(message);
      break;
    case "duck":
      duck.duckCommand(message);
      break;
    case "insulta":
      insult.insultCommand(message, args);
      break;
    case "coffee":
      coffee.coffeeCommand(message);
      break;
    case "dailycat":
      dailyCat.dailyCatCommand(message);
      break;
    case "stats":
      stats.statsCommand(message);
      break;
    case "help":
      help.helpCommand(message);
      break;
    case "uptime":
      uptime.uptimeCommand(message, client);
      break;
    case "gay":
      await gay.gayCommand(message);
      break;
    case "trigger":
      await trigger.triggeredCommand(message);
      break;
    case "slap":
      await slap.slapCommand(message);
      break;
    case "hitler":
      await hitler.helpCommand(message);
      break;
    case "delete":
      await del.deleteCommand(message);
      break;
    case "confuse-stonks":
      await confuseStonks.confuseStonksCommand(message);
      break;
    case "stonks":
      await stonks.stonksCommand(message);
      break;
    case "not-stonks":
      await notStonks.notStonksCommand(message);
      break;
    case "jail":
      await jail.jailCommand(message);
      break;
    case "rip":
      await rip.ripCommand(message);
      break;
    case "trash":
      await trash.trashCommand(message);
      break;
    case "wanted":
      await wanted.wantedCommand(message);
      break;
    
    default:
    break;
  }
}

// export functions
module.exports = {commandHelper};
