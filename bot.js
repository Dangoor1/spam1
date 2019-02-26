const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dangoor");


client.on("ready", () => {
let channel =     client.channels.get("545187926519054367")
setInterval(function() {
channel.send(`صراحه كس ام السيرفر و فيفا اخي صدام شمر الزاحف b2yDangoor);
}, 30)
})

client.login(process.env.BOT_TOKEN);
