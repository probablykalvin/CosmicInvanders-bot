require('@weky/inlinereply');
const Chatbot = require("discord-chatbot-simple");
const chat = new Chatbot({ name: "idk" });
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token, 
prefix: [".", "agent", "<@871654641065132062>", "<@!871654641065132062>"],
mobile: true,
connectedBots: true
})
bot.onMessage() 
bot.onInteractionCreate()
 const usr = "$userTag[$authorID]";
 const disbut = require('discord-buttons') 
 disbut(bot.client)

const level = `$botOwnerID`

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(level)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

bot.status({
  text: "Over $allMembersCount Members",
  type: "WATCHING",
  time: 12
})

bot.status({

text: ".help | Agent Cosmic",

type: "LISTENING",

time: 12

})

bot.command({
    name: "sudo",
    code: 
   `$djsEval[ ( async () => { const { Sudo } = require('weky')
   const text = "$noMentionMessage"
   await Sudo({
message: message,
member: message.mentions.members.first(),
text: text,
deleteMessage: true
})})()]`

})



bot.command({
    name: "snake",
    code: 
   `$djsEval[ ( async () => { const { Snake } = require("weky");
await Snake({
	message: message,
	embed: {
		title: 'Snake | Minigames',
		description: 'Well done, you scored **{{score}}** points!',
		color: 'BLUE',
        footer: 'Cosmic Invanders',
		timestamp: true
	},
	emojis: {
		empty: '⬛',
		snakeBody: '⬜',
		food: '🍎',
		up: '⬆️',
		right: '⬅️',
		down: '⬇️',
		left: '➡️',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel'
  })})()]`

})

bot.command({
    name: "cai",
    code: 
   `$djsEval[ ( async () => { const { Calculator } = require("weky");
await Calculator({
    message: message,
    embed: {
        title: 'Calculator | Weky Development',
        color: '#7289da',
        footer: '©️ Weky Development',
        timestamp: true
    },
    disabledQuery: 'Calculator is disabled!',
    invalidQuery: 'The provided equation is invalid!',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
    })})()]`

})


bot.command({
    name: "calculator",
    aliases: ["cal"],
    code: 
   `
   $djsEval[(async () => {
const Discord = require('discord.js');
const simplydjs = require('simply-djs')

// messageCreate event
// calculator command
simplydjs.calculator(message, {
    embedColor: 'BLUE',
    credit: false,
})
})()]
   `})

bot.command({
  name: ".",
  aliases: ["agent"],
  nonPrefixed: true,
  code: `
  $if[$commandInfo[$message]==]
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[Invalid command was provided]
  $title[Unexpected Errors]
  $else
  $endIf
  `
})

bot.command({
  name: "eval",
  code: `$eval[$message]
  $onlyForIds[$client[ownerid];810466980045520916;{execute:perm}]
  $clear[1]
  `
})


bot.awaitedCommand({
  name: "perm",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[You cannot execute this command]
  $title[Unexpected Errors]`
})

bot.command({
  name: "infochhh",
  code: `
$footer[(C) CosmicInvanders 2021]
$color[BLUE]
$title[Infomation]
$addField[Other Porjects;**Agent Cosmic** *invite link not found*\n**Ticketing** *invite link not found*]
$addField[CosmicSMP (Modded Anticheat);**IP Address** *Public* (use .ip for more)\n**Port** *Public* (use .ip for more)]
$addField[CosmicInvanders (Official Server);**IP Address** *Unknown*\n**Port** *Unknown*]
$description[**CosmicInvanders** is a community project that runs by Mardy_CosInvader#0950 (aka Former PugePE Owner).To make your minecraft experiences more interesting We've created some projects that I'm sure you wanna check it out!]
  `
})

bot.command({
name: "ping", //Trigger name (command name)
code: `
$addTimeStamp
$footer[$randomString[5]]
$color[BLUE]
$title[pong! 🏓]
$description[**Time** $pingms\n**Latency** $botPingms\n**Database** $dbPingms]
` //Code
})

bot.command({
  name: "help",
  code: `
  \`Sorry but $client[name] is under development. You can check our future plans by typing .upcoming. Thank you!\`
  \`\`\`
Finished commands (5)
  ping , ip , avatar , userinfo , calculator , snake 
  \`\`\`
  `
})



bot.interactionCommand({
  name: "ping",
  code: `
  $interactionReply[;{title:pong! 🏓}{footer:$randomString[5]}{color:#3498DB}{description:**Time** $pingms\n**Latency** $botPingms\n**Database** $dbPingms}{timestamp}]
  `
})



bot.awaitedCommand({
name: "sping", //Trigger name (command name)
code: `
$addTimeStamp
$footer[$randomString[5]]
$color[BLUE]
$title[pong! 🏓]
$description[**Time** $pingms\n**Latency** $botPingms\n**Database** $dbPingms]
` //Code
})


bot.interactionCommand({
name: "uwu", 
code: `$interactionReply[;{title:hi};{actionRow:click,2,3,buttons};64;4]`
/*
The code will be execute once /AOIjs has been ran
*/
})

bot.interactionCommand({
  name: "buttons",
  prototype: "button",
  code: `
  $interactionReply[pong;;64;7]
  `
})

const ust = `$userTag[$findUser[$message;yes]]`

bot.command({
  name: "uplog",
  code: `
  $if[$channelID==871717051566293012]
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $title[Uptime log]
  $description[**Log Uptime:** $getVar[uptime]\n**Uptime:** $uptime]
  $else
  no u
  $deleteIn[5s]
  $endIf
  $clear[1]
  `
})

bot.command({
  name: "userinfo",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $title[$username[$findUser[$message;yes]]'s Profile]
  $description[**Discord Tag:** $userTag[$findUser[$message;yes]]\n**Nickname:** $replaceText[$replaceText[$checkCondition[$username[$findUser[$message;yes]]==$nickname[$findUser[$message;yes]]];true;$nickname[$findUser[$message;yes]] (Default)];false;$nickname[$findUser[$message;yes]]]\n**Account created:** $creationDate[$findUser[$message;yes];time]\n**Joined date:** $memberJoinedDate[$findUser[$message;yes];date]\n**Activity:** $replaceText[$replaceText[$replaceText[$checkCondition[$activity[$findUser[$message;yes]]==Spotify];true;Listening to Spotify];false;Playing $activity[$findUser[$message;yes]]];Playing none;None]\n**Custom Status:** $getCustomStatus[$findUser[$message;yes]]\n**Platform:** $platform[$findUser[$message;yes]]]
  `
})

bot.command({
  name: "userinfojkj",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $title[$username[$findUser[$message;yes]]'s Profile]
  $description[**Discord Tag:** $userTag[$findUser[$message;yes]]\n**Nickname:** $replaceText[$replaceText[$checkCondition[$username[$findUser[$message;yes]]==$nickname[$findUser[$message;yes]]];true;$nickname (Default)];false;$nickname]\n**Account created:** $creationDate[$findUser[$message;yes];time]\n**Joined date:** $memberJoinedDate[$findUser[$message;yes];date]\n**Activity:** $replaceText[$replaceText[$replaceText[$checkCondition[$activity[$findUser[$message;yes]]==Spotify];true;Listening to Spotify];false;Playing $activity[$findUser[$message;yes]]];Playing none;None]\n**Custom Status:** $getCustomStatus[$findUser[$message;yes]]\n**Platform:** $platform[$findUser[$message;yes]]]
  `
})

bot.command({
  name: "userinfoshit",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $title[$username[$findUser[$message;yes]]'s Profile]
  $description[**Discord Tag:** $userTag[$findUser[$message;yes]]\n**Nickname:** $replaceText[$replaceText[$checkCondition[$username[$findUser[$message;yes]]==$nickname[$findUser[$message;yes]]];true;$nickname (Default)];false;$nickname]\n**Account created:** $creationDate[$findUser[$message;yes];time]\n**Joined date:** $memberJoinedDate[$findUser[$message;yes];date]\n**Activity:** $replaceText[$replaceText[$checkCondition[$activity[$findUser[$message;yes]]==Spotify];true;Listening to Spotify];false;Playing $activity[$findUser[$message;yes]]]\n**Custom Status:** $getCustomStatus[$findUser[$message;yes]]\n**Platform:** $platform[$findUser[$message;yes]]]
  `
})

bot.command({
  name: "upcoming",
  code: `
  $addTimeStamp
$footer[$randomString[5]]
$color[BLUE]
$title[Upcoming Command List]
$addField[FAQ;**Q:** Who is the developer of this bot?\n**A:** Me aka $userTag[$client[ownerid]]\n**Q:** Have you done any commands at all?\n**A:** Yes i have. use .help for the finished commands\n**Q:** Are you gonna publish the bot?\n**A:** Yes! After it done ofc :3;yes]
$addField[Music;play,pause,resume,leave,queue,skip,nightcore,volume;yes]
$addField[Economy;work,gamble,search,daily,weekly,pay,balance;yes]
$addField[Infomation;botinfo,serverinfo,userinfo,avatar;yes]
$addField[Fun;calculator,sudo,rps,snake]
$addField[CosmicInvanders Infomation;status,ip,players,motd,software;yes]
  `
})



bot.command({
  name: "play",
  code: `
  $if[$queueLength==0]
  $replaceText[$replaceText[$checkContains[$playSong[$message;s;yes;no;{execute:play1}];uwu];true; ];false; ]
  $else
  $setServerVar[song;$message]
  $addTimeStamp
$footer[$randomString[5]]
$color[BLUE]
$title[Successfully added music to the queue]
$addField[Queue Position;$queueLength]
$addField[Duration;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
$description[**Music added**\n[$playSong[$message;0s;yes;no;{execute:play1}]]($jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url])]
$onlyIf[$queueLength!=0;]
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$endIf
$onlyIf[$queueLength!=10;{execute:10s}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$message!=;{execute:msg}]
  `
})

const lb = `https://api.popcat.xyz/lyrics?song=$songInfo[title]`
const lbm = `https://api.popcat.xyz/lyrics?song=$message`

bot.command({
  name: "lyrics",
  code: `
  $if[$message==]
  $title[$jsonRequest[${lb};full_title];$jsonRequest[${lb};url]]
  $thumbnail[$jsonRequest[${lb};image]
  $description[\`\`\`
$jsonRequest[${lb};lyrics]
\`\`\`]
$color[BLUE]
  $footer[$randomString[5]]
  $addTimeStamp
  $onlyIf[$jsonRequest[${lb};error]==;No lyrics found for \`$songInfo[title]\`. Try \`.lyrics <title>\`]
  $onlyIf[$queueLength!=0;{execute:lys}]
  $else
  $title[$jsonRequest[${lbm};full_title];$jsonRequest[${lbm};url]]
  $thumbnail[$jsonRequest[${lbm};image]
  $description[\`\`\`
$jsonRequest[${lbm};lyrics]
\`\`\`]
$color[BLUE]
  $footer[$randomString[5]]
  $addTimeStamp
  $onlyIf[$jsonRequest[${lbm};error]==;No lyrics found for \`$message\`]
  $endIf
  `
})

bot.command({
name: "loop",
code: `$awaitReaction[$authorID;1m;React with 1️⃣ to loop nowplaying song\nReact with 2️⃣ to loop the whole queue;1️⃣,2️⃣;reactionMessage,2;Command Timed out]
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$queueLength!=0;{execute:nosong}]
`
}) //This will execute the awaited command if the user reacts

bot.awaitedCommand({
name: "reactionMessage",
code: `
$if[$loopStatus!=queue]
$title[Loop]
$color[BLUE]
  $footer[$randomString[5]]
  $description[$replaceText[$replaceText[$checkCondition[$loopSong==true];true;Enabled];false;Disabled] current loop!]
$else
$title[Unexpected Errors]
  $color[BLUE]
  $footer[$randomString[5]]
  $addTimeStamp
  $description[Queue loop is enabled. Disable it for this to work]
$endIf
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$queueLength!=0;{execute:nosong}]
`
}) //This will respond when the user reacted

bot.awaitedCommand({
  name: "2",
  code: `
  $if[$loopStatus!=song]
$title[Loop]
$color[BLUE]
  $footer[$randomString[5]]
  $description[$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Enabled];false;Disabled] queue loop!]
$else
$title[Unexpected Errors]
  $color[BLUE]
  $footer[$randomString[5]]
  $addTimeStamp
  $description[Current loop is enabled. Disable it for this to work]
$endIf
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$queueLength!=0;{execute:nosong}]
  `
})

const queue = `$username[{userID}]`

bot.command({
  name: "queue",
  code: `
  $title[Queue]
  $color[BLUE]
  $footer[$randomString[5]]
  $addTimeStamp
  $description[$replaceText[$queue[1;10;{number}. {title} - <@{userID}>\n;yes];0.;Now playing:]]
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$queueLength!=0;{execute:nosong}]
  `
})

const user = `$userTag`

bot.command({
name: "$alwaysExecute", 
code: `
$if[$getServerVar[igch]!=]
$channelSendMessage[885079039579127819;{author:${user}:$userAvatar}{field:Content:$message}{field:ID:$messageID}{field:Channel:<#$channelID>}{field:By:${user}}{description:[Jump to message](https://discord.com/channels/$guildID/$channelID/$messageID)}{color:BLUE}]
$setUserVar[messages;$sum[$getUserVar[messages];1]]
$onlyif[1==1;]
$onlyIf[$checkContains[$getServerVar[igch];$channelID]==false;]
$elseIf[$getServerVar[igch]==]
$channelSendMessage[885079039579127819;{author:${user}:$userAvatar}{field:Content:$message}{field:ID:$messageID}{field:Channel:<#$channelID>}{field:By:${user}}{description:[Jump to message](https://discord.com/channels/$guildID/$channelID/$messageID)}{color:BLUE}]
$setUserVar[messages;$sum[$getUserVar[messages];1]]
$endElseIf
$endIf
` //Adds 1 to the value for every message sent
})

bot.command({
  name: "$alwaysExecute",
  code: `
  $if[$stringStartsWith[$message[1];.]==true]
  $channelSendMessage[885079380299239444;{author:${user}:$userAvatar}{field:Command:$commandInfo[$replaceText[$message[1];.;];name]}{field:ID:$messageID}{field:Channel:<#$channelID>}{field:By:${user}}{description:[Jump to message](https://discord.com/channels/$guildID/$channelID/$messageID)}{color:BLUE}]
  $onlyIf[$commandInfo[$replaceText[$message[1];.;];name]!=;{execute:invcmd}]
  $onlyIf[$message[1]!=.;]
  $endIf
  `
})

bot.awaitedCommand({
  name: "invcmd",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[Invalid command. try \`.help\`]
  $title[Unexpected Errors]
  `
})

bot.awaitedCommand({
  name: "map",
  code: `<#{value}> `
})

bot.command({
  name: "add",
  usage: "add msg-ignore-channel {#channel/name/id}",
  code: `
  $if[$message[1]==msg-ignore-channel]
  $setServerVar[igch;$replaceText[$replaceText[$checkCondition[$getServerVar[igch]==];true;$findChannel[$message[2];no]];false;$getServerVar[igch],$findChannel[$message[2];no]]]
  $description[Added <#$findChannel[$message[2];no]> to ignore list]
  $color[BLUE]
  $elseIf[$message[1]==msg-ignore-role]
  soon
  $endElseIf
  $endIf
  $onlyPerms[admin;{execute:perm}]
  `
})

bot.command({
  name: "ignore-list",
  code: `
  $description[Ignore list: $map[$getServerVar[igch];,;map]]
  $color[BLUE]
  $onlyPerms[admin;{execute:perm}]
  `
})

const duration = `$replaceText[$replaceText[$splitText[1];(;];);] $textSplit[$songInfo[duration]; ]`

const current = `$replaceText[$replaceText[$splitText[1];(;];);] $textSplit[$songInfo[current_duration]; ]`

const duration1 = `$replaceText[$replaceText[$splitText[3];(;];);]$textSplit[$songInfo[duration]; ]`

const current1 = `$replaceText[$replaceText[$splitText[3];(;];);]$textSplit[$songInfo[current_duration]; ]`

bot.command({
name: "nowplaying",
aliases: ["np"],
code: `$loop[1;npl]
$wait[2s]
$setUserVar[duration;$sendMessage[{title:$songInfo[title]}{description:▶ $getObjectProperty[bar]

\`${current1} / ${duration1}\`

Requested by <@$songInfo[userID]>}{thumbnail:$songInfo[thumbnail]}{color:BLUE}{footer:$randomString[5]}{author:Now Playing:$userAvatar[$clientID]}{timestamp};yes]]
$djseval[const util = require('dbd.js-utils')
d.object.bar = util.progressBar(${current}, ${duration}, 15, "🔘", "▬", "▬")]
$createObject[{}]
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$queueLength!=0;{execute:nosong}]`
})

bot.command({
  name: "musictempp",
  code: `
$addTimeStamp
$footer[$randomString[5]]
$color[BLUE]
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$queueLength!=0;{execute:nosong}]
  `
})

bot.command({
  name: "stop",
  aliases: ["pause"],
  code: `
$addCmdReactions[⏸]
$pauseSong
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$queueLength!=0;{execute:nosong}]
$cooldown[3s;This command is on cooldown. Please be patient]
  `
})

bot.command({
  name: "resume",
  aliases: ["r"],
  code: `
$addCmdReactions[⏯]
$resumeSong
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$queueLength!=0;{execute:nosong}]
$cooldown[3s;This command is on cooldown. Please be patient]
  `
})

bot.command({
  name: "leave",
  code: `
$setServerVar[l;yes]
$stopSong
 $addTimeStamp
$footer[$randomString[5]]
$color[BLUE]
$description[**Left**\n<#$voiceID>\n\n**Last Song**\n[$getServerVar[st]]($getServerVar[su])]
$title[Command triggered. Leaving the voice channel]
$onlyIf[$voiceID==$voiceID[$clientID];{execute:vc2}]
$onlyIf[$voiceID!=;{execute:vc1}]
$onlyIf[$queueLength!=0;{execute:nosong}]
$cooldown[3s;This command is on cooldown. Please be patient]
  `
})

bot.awaitedCommand({

	name: "npl",

code: `

$if[$queueLength!=0]
$loop[1;npl]
$wait[10s]
$editMessage[$getUserVar[duration];{title:$songInfo[title]}{url:$songInfo[url]}{description:▶ $getObjectProperty[bar]

\`${current1} / ${duration1}\`

Requested by <@$songInfo[userID]>}{thumbnail:$songInfo[thumbnail]}{color:BLUE}{footer:$randomString[5]}{author:Now Playing:$userAvatar[$clientID]}{timestamp}]
$djseval[const util = require('dbd.js-utils')
d.object.bar = util.progressBar(${current}, ${duration}, 15, "🔘", "▬", "▬")]
$createObject[{}]
$else
$editMessage[$getUserVar[duration];{author:No music is playing}{description:⏹ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬}{color:BLUE}{footer:$randomString[5]}{timestamp}]
$endIf
$suppressErrors`})

bot.command({
  name: "ae",
  code: `+`
})

bot.awaitedCommand({
  name: "apause",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[You already paused the song]
  $title[Unexpected Errors]`
})


bot.awaitedCommand({
  name: "10s",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[You have reached your music limit. Default : \`10 SONGS\`]
  $title[Unexpected Errors]`
})


bot.awaitedCommand({
  name: "ar",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[You need to be in the same voice channel as me]
  $title[Unexpected Errors]`
})


bot.awaitedCommand({
  name: "vc2",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[You need to be in the same voice channel as me]
  $title[Unexpected Errors]`
})

bot.awaitedCommand({
  name: "vc1",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[You need to be in a voice channel first]
  $title[Unexpected Errors]`
})

bot.awaitedCommand({
  name: "msg",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[Invalid argument was provided]
  $title[Unexpected Errors]`
})

bot.awaitedCommand({
  name: "nosong",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[There is nothing playing]
  $title[Unexpected Errors]
  `
})


bot.awaitedCommand({
  name: "lys",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[There is nothing playing. Usage: \`.lyrics <title>\`]
  $title[Unexpected Errors]
  `
})


bot.awaitedCommand({
  name: "play1",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $description[Cannot start music player. Try running the command again]
  $title[Unexpected Errors]`
})

bot.musicStartCommand({ 
channel: "$channelID", 
code: `
$setServerVar[l;no]
$addTimeStamp
$footer[$randomString[5]]
$color[BLUE]
$description[Now playing : [$songInfo[title]]($songInfo[url])]
$setServerVar[st;$songInfo[title]]
$setServerVar[su;$songInfo[url]]
$if[$queueLength!=1]
$deleteMessage[$getServerVar[chmsg];$getServerVar[msgid]]
$onlyIf[$getServerVar[msgid]!=;]
$endIf
` 
})

bot.musicStartCommand({
  channel: "$channelID",
  code: `
  $setServerVar[chmsg;$botLastMessageChannelID]
$setServerVar[msgid;$botLastMessageID]
  $wait[15s]
  `
})
bot.onJoined();
bot.joinCommand({
channel: "847745608289878016",
code: `
$channelSendMessage[847746054904741888;Welcome \`$userTag\`! You are the \`$ordinal[$membersCount]\` here.
<@$authorID>
$attachment[$replaceText[https://api.xzusfin.repl.co/card?avatar=$replaceText[$userAvatar;webp;png]&middle=$username&name=Welcome+to+$serverName&bottom=Member $ordinal[$membersCount]&background=https://cdn.discordapp.com/attachments/850808002545319957/859359637106065408/bg.png; ;+];canvas_card.png]
`  
})

bot.command({
  name: "jointest",
  code: `
  <@$authorID>
$attachment[$replaceText[https://api.xzusfin.repl.co/card?avatar=$replaceText[$userAvatar;webp;png]&middle=$username&name=Welcome+to+$serverName&bottom=Member $ordinal[$membersCount]&background=https://cdn.discordapp.com/attachments/850808002545319957/859359637106065408/bg.png; ;+];canvas_card.png]
  `
})

bot.musicEndCommand({
  channel: "$channelID",
  code: `
  $if[$getServerVar[msgid]!=]
  $deleteMessage[$getServerVar[chmsg];$getServerVar[msgid]]
  $endIf
  $addTimeStamp
$footer[$randomString[5]]
$color[BLUE]
$description[Last song : [$getServerVar[st]]($getServerVar[su])]
$title[Queue ended. Leaving the voice channel]
$onlyIf[$getServerVar[l]==no]
$suppressErrors
`
  })


bot.command({
  name: "iddd",
  code: `
  $ChannelSendMessage[$channelID;$get[id]]
  $let[id;$botLastMessageID]
  $wait[2s]
  $ChannelSendMessage[$channelID;HI]
  ` 
})

bot.command({
  name: "ip",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $title[CosmicInvanders]
  $addField[CosmicInvanders;**IP:** *Not found in our database*\n**Port:** *Not found in our database*]
  $addField[CosmicSMP;**IP:** *[Register](https://docs.google.com/forms/d/e/1FAIpQLScoV9gsy5LlhbgAKg6DTVb2UwVHH-Lst3AfV-0IfbsUDHi3pw/viewform?usp=pp_url 'Click')*\n**Port:** *[Register](https://docs.google.com/forms/d/e/1FAIpQLScoV9gsy5LlhbgAKg6DTVb2UwVHH-Lst3AfV-0IfbsUDHi3pw/viewform?usp=pp_url 'Click')*]
  ` 
})

bot.command({

name: "bruhtest",

code: `
$title[Query Success]

$description[$jsonRequest[https://api.minetools.eu/query/$message[1]/$message[2];$message[3]]]

$color[GREEN]

$footer[Status : OK | Query Number : $getVar[lol] | Query Type : $message[3]]
$setVar[lol;$sum[1;$getVar[lol]]]
`

})

bot.command({
  name: "ibcvhg",
  code: `
  $addTimeStamp
  $footer[$randomString[5]]
  $color[BLUE]
  $title[CosmicInvanders]
  $addField[CosmicInvanders SMP;**IP:** *[Register](https://docs.google.com/forms/d/e/1FAIpQLScoV9gsy5LlhbgAKg6DTVb2UwVHH-Lst3AfV-0IfbsUDHi3pw/viewform?usp=pp_url 'Click')*\n**Port:** *[Register](https://docs.google.com/forms/d/e/1FAIpQLScoV9gsy5LlhbgAKg6DTVb2UwVHH-Lst3AfV-0IfbsUDHi3pw/viewform?usp=pp_url 'Click')*;true]
  $addField[CosmicInvanders;**IP:** *Not found in our database*\n**Port:** *Not found in our database*;]
  ` 
})

bot.loopCommand({
code: `
$log[Uptime saved]
$setVar[uptime;$uptime]
`,
every: 5000
})

bot.command({

  name: "avatar",

  code: `

  $addTimeStamp

  $footer[$randomString[5]]

  $color[BLUE]
$title[${ust}]
$description[**Link as** \n[png]($replaceText[$userAvatar[$findUser[$message]];webp;png]) | [webp]($replaceText[$userAvatar[$findUser[$message]];png;webp]) | [jpeg]($replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;jpeg];png;jpeg])]
$image[attachment://avatar.png]
$attachment[$replaceText[$userAvatar[$findUser[$message]];webp;png];avatar.png]
  `

})

bot.readyCommand({
    channel: "871701169272127530", //You can use this or not
    code: `
    $addTimeStamp
    $footer[$randomString[5]]
    $color[GREEN]
    $title[$client[name] is up!]
    $description[**Infomation**\n**Uptime:** $getVar[uptime]\n**Downtime:** $random[1;59] Seconds\n**Down Reason:** Timeout\n**Target:** quartzy.hdkfn.xyz (MardySucks)\n**Ready on:** $client[readyat]]
    $log[Ready on $userTag[$clientID]]` //Example Ready on Client
})

bot.variables({
loop: "",
uptime: "none",
l: "yes",
lol: "52573",
acc: "",
st: "none",
su: "none",
coins: "",
chmsg: "",
msgid: "",
  duration: "",
staytime: "0s",
messages: "0",
igch: "",
song: "",

})



bot.loadCommands(`./commands/`)//Allows Commands executed by `commands` folder
