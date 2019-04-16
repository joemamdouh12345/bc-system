const Discord = require('discord.js');
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
const Canvas = require("canvas");
const prefix = "."
let profile = JSON.parse(fs.readFileSync("profile.json", "utf8"))

client.on('ready', () => {
  console.log('|===================================|');
  console.log(`|  Users Size ${client.users.size}  |`);
  console.log(`| Guilds Size ${client.guilds.size} |`);
  console.log(`|===================================|`);
  console.log(`|          ${client.user.tag}       |`);
  console.log(`|===================================|`);
  console.log(`|              Im Ready !           |`);
  console.log(`|===================================|`);
});

   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('هذا الأمر فقط للسيرفرات').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send(':no_entry: | You dont have ADMINISTRATOR Permission!' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(محتوى الرساله ${args})
.setDescription(برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست)
if (!args) return message.reply('يجب عليك كتابة كلمة او جملة لإرسال البرودكاست');message.channel.send(BcList).then(msg => {
msg.react(':pencil:')
.then(() => msg.react(':pencil2:'))
.then(() =>msg.react(':pencil:'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === ':pencil:' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === ':pencil2:' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(:ballot_box_with_check: تم ارسال الرساله بنجاح).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
  .setTitle('-Broadcast-')
.setAuthor(Server : ${message.guild.name})
.setFooter(Sender : ${message.author.username})
.setDescription(Message : ${args})
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(:ballot_box_with_check: تم ارسال الرساله بنجاح).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});
client.login(process.env.BOT_TOKEN);
