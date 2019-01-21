const Discord = require("discord.js");
const client  = new Discord.Client();
const prefix = "!"

////////////////////////[
client.on("ready", ()=> {
console.log("I love Myself");
client.user.setGame("Help!");
    

});
var botName = "AcMBot+";
var urlbot = "https://cdn.discordapp.com/avatars/330853341477470208/2d20efdea65bfd627a0cc20f02ed512e.jpg?size=128";
////////////////////////[


client.on("message", msg=>{
   if(msg.content.startsWith(`help${prefix}`)){
      if(!msg.channel.guild) return msg.reply('** This command only for servers **');
       let emberhelp = new Discord.RichEmbed()
       .setColor("RANDOM")
       .setAuthor(`${botName} Command`,"https://cdn.discordapp.com/avatars/330853341477470208/2d20efdea65bfd627a0cc20f02ed512e.jpg?size=128")
       .setThumbnail("https://cdn.discordapp.com/avatars/330853341477470208/2d20efdea65bfd627a0cc20f02ed512e.jpg?size=128")
       .addField("solts!","لعبة سولتس")
       .addField("clear!","مسح الشات <amount (defualt 100)>")
       .addField("bc!","برودكاست")
       .addField("id!","معلوماتك <@user (defualt @me)>")
       .addField("bot!","معلومات البوت")
       .addField("math!","لعبة الرياضيات")
       .addField("topinv!","توب انفايت")
       .addField("**اوامر ادارية**"," ‎ ")
       .addField("warn!","تحذير")
       .addField("ban!","حظر")
       msg.member.send(emberhelp);
   } 
    
    
    
});
////////////////////////[

////////////////////////[
client.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;
  let args = message.content.split(' ');
  if(args[0] === `bc${prefix}`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
  if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');

  let msgCount = 0;
  let errorCount = 0;
  let successCount = 0;
    let status;
    if(msgCount === message.guild.memberCount) {
        status = 'Sent';
    } else if(msgCount !== message.guild.memberCount) {
        status = 'Sending';
    }
  message.channel.send(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسلة**`).then(msg => {
    message.guild.members.forEach(g => {
        let embedcb = new Discord.RichEmbed()
       .setColor("RANDOM")
       .setAuthor(g.displayName, g.user.displayAvatarURL)
       .setThumbnail(g.avatarURL)
       .addField(`**${msg.guild.name}**

${args.slice(1).join(' ')}`,` ‎ 
${message.author.tag}`,false)
        
        
      g.send(embedcb).then(() => {
        successCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      }).catch(e => {
        errorCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      });
    });
  });
}
});
////////////////////////////////////]



client.on('message', message => {
     if(message.content.startsWith("clear" + prefix  )) {
         var args = message.content.split(" ").slice(1);
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need MANAGE_MESSAGES permission noob');
  if (!args[0]) args[0] = 100;

  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor(0xF16104)
      .setDescription(`Cleared ${args[0]} messages.`)
    message.channel.send({ embed });

    const actionlog = message.guild.channels.find('name', 'server-log');

    if (!actionlog) return message.channel.send("Can't find action-log channel. Are you sure that this channel exists and I have permission to view it? CANNOT POST LOG.");
    const embedlog = new Discord.RichEmbed()
      .setDescription('~Clear~')
      .setColor(0xF16104)
      .addField('Clear By', `<@${message.author.id}> with ID ${message.author.id}`)
      .addField('Clear in', message.channel)
      .addField('Time', message.createdAt.toLocaleDateString());
    actionlog.send(embedlog);
   
  });
};



////////////////////////////////////]



 client.on('message', msg => {
if(msg.content.startsWith(`solts${prefix}`)) {
    if(!msg.channel.guild) return msg.reply('** This command only for servers **');
  let slot1 = [':heart:', ':green_heart:', ':green_heart:', ':purple_heart:', ':broken_heart:', ':two_hearts:', ':blue_heart:', ':revolving_hearts:', ':heartbeat:'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = " : ** لقد فزت   ** ."
  } else {
    we = ": ** لقد خسرت  ** ."
  }
  msg.reply(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});


////////////////////////[



client.on("message", msg => {
    if(msg.content.startsWith(`id${prefix}`)){
        if(!msg.channel.guild) return msg.reply('** This command only for servers **');
       if(msg.channel.id !== '510780740636770325') { msg.delete(); msg.reply(`${client.channels.get("510780740636770325")}`).then(msgs => msgs.delete(3000)); return}
        var userd = msg.mentions.users.first();
        var memberd = msg.mentions.members.first();
        if (!userd) {   var userd = msg.author  }
        if (!memberd) {   var memberd = msg.member  }
      let embed = new Discord.RichEmbed()
      .setAuthor(userd.username, userd.displayAvatarURL)
      .setThumbnail(userd.avatarURL)
      .setColor("RANDOM")
      .addField(`Wealcom to ${msg.guild.name}`," ‎ ",true)
      .addField(`${userd.tag}`," ‎ ",true)
      .addField("تاريخ دخول الديسكورد",userd.createdAt.toLocaleDateString(), true)
      .addField("تاريخ دخول السيرفر",memberd.joinedAt.toLocaleDateString(), true)
      msg.reply(embed);
    }
  });


    ////////////////////////[


client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'chat');
 
  if (!channel) return;
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${member.displayName}`, member.user.displayAvatarURL)
    .setThumbnail(member.user.avatarURL)
    .addField(`Wealcom to ${channel.guild.name}`," ‎ ",true)
    .addField(`${member.user.tag}`," ‎ ",true)
    .addField("تاريخ دخول الديسكورد",`${member.user.createdAt.toLocaleDateString()}`, true)
    .addField("تتاريخ دخول السيرفر",`${member.joinedAt.toLocaleDateString()}`, true)
      channel.send(embed);
});

////////////////////////[
const moment = require("moment");// moment Package //
const pretty = require('pretty-ms'); // pretty-ms Package //
client.on("message", msg => {
    if(msg.content.startsWith(`bot${prefix}`)){
        if(!msg.channel.guild) return msg.reply('** This command only for servers **');
      // if(msg.channel.id !== '510780740636770325') { msg.delete(); msg.reply(`${client.channels.get("510780740636770325")}`).then(msgs => msgs.delete(3000)); return}
        if (msg.author.bot) return;
      var api = `${Math.round(client.ping)}`
              let uptime = client.uptime; let days = 0; let hours = 0; let minutes = 0; let seconds = 0; let notCompleted = true;
        while (notCompleted) {
            if (uptime >= 8.64e+7) {
                days++;
                uptime -= 8.64e+7;
            } else if (uptime >= 3.6e+6) {
                hours++;
                uptime -= 3.6e+6;
            } else if (uptime >= 60000) {
                minutes++;
                uptime -= 60000;
            } else if (uptime >= 1000) {
                seconds++;
                uptime -= 1000;
            }
            if (uptime < 1000) notCompleted = false;
        }
        moment.locale("en-ca")
      let embedbot = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${botName}`,`${urlbot}`)
      .setThumbnail(`${urlbot}`)
      .addField(`Servers online`,client.guilds.size, true)
      .addField(`Members`,client.users.size, true)
      .addField(`Channel online`,client.channels.size, true)
      .addField(`Ping Bot`, `${api}`,true)
      .addField(`Prefix`, `${prefix}`,true)
      .addField(`Id`, `${client.user.id}`,true)
      .addField(`RamUsage`, `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,true)
      .addField(`Node.js Version`, `${process.version}`,true)
      .addField(`CreatedAt`, `${client.user.createdAt.toLocaleDateString()}`,true)
      .addField(`Uptime`, `${days}:${hours}:${minutes}:${seconds}`,true)
      
      msg.reply(embedbot);
    }
  });

///////////////////////////////////
var lastmath = false ;
var lastmatha = false ;

const char = [
     '÷',
     /*'+',
     '×',
     '-',*/
]


client.on('message', message => {
  if (message.content === `math!`) {
    if (!lastmath){
        while(!setnum(message)){
            
            
        };
let embedmath = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${botName}`,`${urlbot}`)
.addField("قرب الجواب إلى اقرب قيمة",lastmath)
message.channel.send(embedmath);
    }else{ if(message) {message.delete();}; message.channel.send(`اجب عن السؤال السابق ${lastmath}`,{code: 'lua'}).then(msgs => msgs.delete(3000)); return};
}});

function setnum(message){
    var fn = Math.floor(Math.random()* 100) ;
    var sn = Math.floor(Math.random()* 100)+1 ;    
    var randomchar = char[Math.floor(Math.random() * char.length)] ;
    lastmath = fn+randomchar+sn;

    switch(randomchar) {
        case '+':
            lastmatha = fn+sn;
            return true;
        break;
        case '-':
            lastmatha = fn-sn;
            return true;
        break;
        case '×':
            lastmatha = fn*sn;
            return true;
        break;
        case '÷':
            lastmatha = fn/sn;
            if (Math.floor(lastmatha) === lastmatha){
                return true;
            }else{
                return false ;
            }
        break;
    };
}


client.on('message', message => {
  if (lastmath && message.content ==     lastmatha) {
        message.channel.send(`${message.author} اجابة صحيحة : ${lastmatha}`,{code: 'lua'}).then( msgs => msgs.delete(3000));
        lastmath = false ;
        lastmatha = false ;
    };
});
///////////////////////////////////////

client.on('message',message =>{
    if(message.content.startsWith('topinv'+prefix )) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter}${invs[inv.code]}`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`${botName}`,`${urlbot}`)
  .setThumbnail(`${urlbot}`)
  .setDescription(`${invites.join(`\n`)+'\n**By:** '+message.author}`)
   message.channel.send({ embed: embed });
   
  });
   
    }
  });
/////////////////////////////////////////
client.on("message", msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  let reason = args.join(" ").slice(22);
  if(cmd === `warn${prefix}`){//الامر
     if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You need MANAGE_MESSAGES permission noob').then( msgs => msgs.delete(3000));

    
  
    let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!rUser) return msg.reply("Couldn't find users.");
  if(!reason) return msg.reply("Enter reason")
      let reportembed = new Discord.RichEmbed()
      .setDescription("Warn")
      .setColor("BLACK")
      .addField("Warn User", `${rUser} with ID: ${rUser.id}`)
      .addField("Warn By", `${msg.author} with ID: ${msg.author.id}`)
      .addField("Channel", msg.channel)
      .addField("Time",msg.createdAt.toLocaleDateString())
      .addField("Reason",`${reason}`)
      
      
      let reportchannel = msg.guild.channels.find(`name`,"server-log"); 
      if(!reportchannel) return msg.reply("Couldn't find `server-log` channel. ").then( msgs => msgs.delete(3000)); 
      
     // msg.delete().catch(O_o=>{});
      reportchannel.send(reportembed);
      rUser.send(reportembed);
      let role = msg.guild.roles.find(`name`, 'Warn'); 
      if(!role) return msg.reply("Could't find `Warn` role.").then( msgs => msgs.delete(3000)); 
      rUser.addRole(role);
      
          return;
      }
      });

///////////////////////////////////////////////////////////

client.on('message', msg => {
     if(msg.content.includes("Reflecty")){
         msg.delete()   
    };
});
//////////////////////////
client.on('message', msg => {
     if(msg.content.startsWith(`unban${prefix}`)){
         var args = msg.content.split(" ").slice(1);
        if(!args[0]) return msg.reply(`unban! <id>`).then( msgs => msgs.delete(3000));
         if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.reply("you don't have permission").then(s => {s.delete(1600);})
            if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply("i don't have permission").then(z => {z.delete(1600);})    
        
            if(!msg.guild.unban(args[0])) return msg.reply("i can't find player id").then( z => z.delete(1600));
            let banembed = new Discord.RichEmbed()
            .setDescription("~unban~")
            .setColor("BLACK")
            .addField("unban User", ` ID: ${args[0]}`)
            .addField("unban By", `<@${msg.author.id}> with ID: ${msg.author.id}`)
            .addField("unban In", msg.channel)
            .addField("Time", msg.createdAt)
            let banChannel = msg.guild.channels.find("name","server-log");
            if(!banChannel) return ;
            msg.reply(`Done:white_check_mark:  `).then(z => z.delete(1600));
            banChannel.send(banembed)
}});
////////////////////////////////////
client.on('message', async msg => {
  let message = msg;
  if(msg.content.startsWith("bans"+prefix)){
    let bans = await msg.guild.fetchBans();
    let array = [];
    await bans.forEach(async user=>{
      array.push(user.id);
    });
    let page = 0;
    let pages = parseInt(`${array.length}`.slice(0,-1),10);
    const topembed = new Discord.RichEmbed()
      .setAuthor(`Banned Users`)
      .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
      .setColor('RANDOM')
      .setFooter(`Page ${page+1} of ${pages}`)
      .setTimestamp();
    message.channel.send(topembed).then(async topmessage=>{
      topmessage.react(`◀`).then(()=>{
        topmessage.react(`▶`).then(()=>{
          const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
          const backwards = topmessage.createReactionCollector(backwardsFilter, {time: 120000});
          const forwards = topmessage.createReactionCollector(forwardsFilter, {time: 120000});
          backwards.on("collect", r=>{
            r.remove(message.author);
            if(page <= 0) return;
            page--;
            let newembed = new Discord.RichEmbed()
              .setAuthor(`Banned Users`)
              .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
              .setColor("RANDOM")
              .setFooter(`Page ${page+1} of ${pages}`)
              .setTimestamp()
            topmessage.edit(newembed);
          })
          forwards.on("collect", r=>{
            r.remove(message.author);
            if(page === pages) return;
            page++;
            let newembed = new Discord.RichEmbed()
              .setAuthor(`Banned Users`)
              .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
              .setColor("RANDOM")
              .setFooter(`Page ${page+1} of ${pages}`)
              .setTimestamp()
            topmessage.edit(newembed);
          });
        });
      });
    });
  };
});
////////////////////////////////////////////////////
client.on("message", msg => {
    if(msg.author.bot) return;
if(msg.channel.type === 'dm') return;
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);

if(cmd === `ban${prefix}`){
    let bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!bUser) return msg.reply("ban! @user reason");
let breason = args.join(" ").slice(22);
if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.reply("you don't have permission").then(s => {
s.delete(1600);
})
 if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply("i don't have permission").then(z => {
z.delete(1600);
})
if(bUser.hasPermission("BAN_MEMBERS")) return msg.reply("You Can't").then(z => {z.delete(1600);});
let banembed = new Discord.RichEmbed()
.setDescription("~ban~")
.setColor("BLACK")
.addField("banned User", `${bUser} with ID: ${bUser.id}`)
.addField("banned By", `<@${msg.author.id}> with ID: ${msg.author.id}`)
.addField("banned In", msg.channel)
.addField("Time", msg.createdAt)
.addField("Reason", breason)
let banChannel = msg.guild.channels.find("name","server-log");
if(!banChannel) return ;
msg.guild.member(bUser).ban();
msg.reply(`Done:white_check_mark: `).then(z => z.delete(1600));
banChannel.send(banembed)
}});
//////////////////////////////////////////
    client.on('message', dark => {
    
    if (dark.content === "Check!") {
        setInterval(function(){
        dark.edit('**C**')    
        dark.edit('**Co**')    
        dark.edit('**Cod**')
        dark.edit('**Code**')
        }, 900)
    }
    
})
////////////////////////////////////////////////////////////
client.login(process.env.BOT_TOKEN);
