const replace = require("replace");//npm i replace
const str_replace = require("str_replace"); // npm i str_replace
const Discord = require("discord.js");
const client  = new Discord.Client();
const moment = require("moment");// moment Package //
const pretty = require('pretty-ms'); // pretty-ms Package //
const Canvas = require(`canvas`)
const fs = require("fs"); //npm i fs
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
let config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
moment.locale('ar-TN');
var prefix = "!"
var lastmath = false ;
var lastmatha = false ;
var voteon = false ;
var botName = "KingDom";
var urlbot = "https://images-ext-2.discordapp.net/external/8OlDRtnHEEX_wIlANbGgwfGgi3zmgWdCRUvmq8wLrgQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/536005991851098112/662a62486dffcb1bd25a5c441fd33694.png";
fs.writeFile("./config.json", JSON.stringify(config), (err) => {
  if (err) console.log(err)
});
const char = [
     '÷',
     '+',
     '×',
     '-',
]



////////////////////////[
const gamestats = [`AcMBot+ | help!`,`AcMBot+ | solts!`,`AcMBot+ | id!`,`AcMBot+ | bot!`,`AcMBot+ | topinv!`,`AcMBot+ | math!`,`AcMBot+ | warn!`,`AcMBot+ | ban!`,`AcMBot+ | unban!`,`AcMBot+ | bans!`]
var index = 0
var timer = 10
client.on("ready", async ()=> {
         client.guilds.map((g) => {
        if(!config[g.id]["bc"]){config[g.id]["bc"] = "bc"}
        if(!config[g.id]){config[g.id] = {clear: "clear", points: "points", setStats: "setStats", prefix: "!",help: "help",solts: "solts",id: "id",bot: "bot",topinv: "topinv",math: "math",warn: "warn",ban: "ban",unban: "unban",bans: "bans"}};

        });
        await fs.writeFile("./config.json", JSON.stringify(config), (err) => {
          if (err) console.log(err)
        });

          setInterval(function(){
        client.user.setGame(`${gamestats[index]}`,'https://www.twitch.tv/ACMBOT') 
        index++
            if( index >= gamestats.length) index = 0 ;
        }, timer*1000);

});


/*
const gamestats = [`help!`,`bot!`,``,``]
var index = 0
var timer = 10 // الوقت بالثواني لتغير الستريمنق
client.on("ready", ()=> {
        setInterval(function(){
        client.user.setGame(`${gamestats[index]}`,'https://www.twitch.tv/ACMBOT') 
        index++
            if( index >= gamestats.length) index = 0 ;
        }, timer*1000);

});
*/
////////////////////////[

client.on("message", async msg=>{
  let cmd = msg.content.split(' ')[0]
  if(!cmd) return;
  if(msg.author.bot) return;
  var prefix = config[msg.guild.id]["prefix"]
  if(cmd.endsWith(prefix)){
    if(!msg.channel.guild) return ;
    //if(msg.channel.id !== '510780740636770325') { msg.delete(); msg.reply(`${client.channels.get("510780740636770325")}`).then(msgs => msgs.delete(3000)); return}

    var message = msg


////////////////////////////////////////////////////////////////SetR
    

        if( cmd === `${config[msg.guild.id]["setStats"]}${prefix}`){
          if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("you don't have permission").then(s => {s.delete(1600);})
          let args1 = msg.content.split(" ")[1];
          let args2 = msg.content.split(" ")[2];
          if(!args1 || !args2) return msg.reply(`setStats${prefix} <stats or command> <new start or command>`)
          let configO = config[msg.guild.id][args1];
          if(!configO) return msg.reply(` ! i Can't find ! stats (setStats${prefix} <stats or command> <new start or command>)`)
          config[msg.guild.id][args1] = args2
          var prefix = config[msg.guild.id][args1];
          msg.channel.send(`Done Change The stats <${args1}> To <${args2}>`)
          fs.writeFile("./config.json", JSON.stringify(config), (err) => {
            if (err) console.log(err)
          });
        };


        ////////////////////////////////////////////////////////////////HelpR


        if( cmd === `${config[msg.guild.id]["help"]}${prefix}`){
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
       .addField("topinv!",`توب انفايت
       
`)
       .addField("**اوامر ادارية**"," ‎ ")
       .addField("warn!","تحذير")
       .addField("ban!","حظر")
       .addField("bans!","قائمة المحظورين")
       .addField("unban!","فك الحظر")
       .setTimestamp()
       .setFooter(client.user.tag)
       msg.member.send(emberhelp);
   } 
    
    
////////////////////////////////////////////////////////////////BCR
    
    
    if(cmd === `${config[msg.guild.id]["bc"]}${prefix}`) {
      if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
      let args = msg.content.split(" ").slice(1);
      var argresult = args.join(' '); 
      if(!argresult) return msg.reply(`يجب عليك كتابة الرسالة bc${prefix} <Message>`).then( z=> z.delete(1600));
      msg.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
      let embedBC = new Discord.RichEmbed()
      .setThumbnail(msg.author.displayAvatarURL)
      .setTitle(`Broadcast`)
      .addField(`Server name`,msg.guild.name)
      .addField(`by`,msg.author.tag)
      .addField(`Meassage`,argresult)
      .setColor("RANDOM")
      .setFooter(client.user.username,client.user.displayAvatarURL)
      m.send(embedBC)
      })
      msg.channel.send(`\`${msg.guild.members.filter(m => m.presence.status !== 'all').size}\` **: عدد الاعضاء المستلمين**`); 
      msg.delete(); 
      };     
    
    
//////////////////////////////////////////////////////////////// clearR
    
    
    if ( cmd === `${config[msg.guild.id]["clear"]}${prefix}`){
  var args = msg.content.split(" ").slice(1);
 if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You need MANAGE_MESSAGES permission noob');
  if (args[0]) {if (isNaN(args[0])) return msg.reply("**الرجاء ادخال رقم**");args[0] = args[0]}else{args[0] = 100};
      msg.delete()
  msg.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor(0xF16104)
      .setDescription(`Cleared ${args[0]} messages.`)
    msg.channel.send({ embed }).then( z => z.delete(1600));

    const actionlog = msg.guild.channels.find('name', 'server-log');

    if (!actionlog) return msg.channel.send("Can't find action-log channel. Are you sure that this channel exists and I have permission to view it? CANNOT POST LOG.");
    const embedlog = new Discord.RichEmbed()
      .setDescription('~Clear~')
      .setColor(0xF16104)
      .addField('Clear By', `<@${msg.author.id}> with ID ${msg.author.id}`)
      .addField('Clear in', msg.channel)
      .addField('Time', msg.createdAt.toLocaleDateString());
    actionlog.send(embedlog);
   
  });
};
    
    
////////////////////////////////////////////////////////////////soltsR
    
    
    if( cmd === `${config[msg.guild.id]["solts"]}${prefix}`){
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
    
    
////////////////////////////////////////////////////////////////idR
    
    
        if( cmd == `${config[msg.guild.id]["id"]}${prefix}`){
        if(!msg.channel.guild) return msg.reply('** This command only for servers **');
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
    .addField(': دخولك لديسكورد قبل', `${moment(userd.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(userd.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(memberd.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(memberd.joinedAt).fromNow()}\``, true)    
      msg.reply(embed);
    }
    
    
    ////////////////////////////////////////////////////////////////botR
    
    
    if( cmd === `${config[msg.guild.id]["bot"]}${prefix}`){
            if(!msg.channel.guild) return msg.reply('** This command only for servers **');
      //  if (msg.author.bot) return;
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
      .addField(`CreatedAt`, `${moment(client.user.createdAt).fromNow()}`,true)
      .addField(`Uptime`, `${days}:${hours}:${minutes}:${seconds}`,true)
      
      msg.reply(embedbot);
    }
    
    
////////////////////////////////////////////////////////////////MathR
    
    
    if( cmd === `${config[msg.guild.id]["math"]}${prefix}`){
    if (!lastmath){
        while(!setnum(message)){};
let embedmath = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${botName}`,`${urlbot}`)
.addField("اجب عن السؤال التالي",lastmath)
message.channel.send(embedmath);
}else{ if(message) {message.delete();}; message.channel.send(`اجب عن السؤال السابق ${lastmath}`,{code: 'lua'}).then(msgs => msgs.delete(3000)); return};
};
    
    
////////////////////////////////////////////////////////////////ansR
    
    



////////////////////////////////////////////////////////////////topinvR
    
    
    if( cmd === `${config[msg.guild.id]["topinv"]}${prefix}`){
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

    
////////////////////////////////////////////////////////////////warnR
    
    
    if( cmd === `${config[msg.guild.id]["warn"]}${prefix}`){
         if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You need MANAGE_MESSAGES permission noob').then( msgs => msgs.delete(3000));
  let args = msg.content.split(" ").slice(1);
  let reason = args.join(" ").slice(22);
  
    let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!rUser) return msg.reply("Couldn't find users.");
  if(!reason) return msg.reply("Enter reason")
      let reportembed = new Discord.RichEmbed()
      .setDescription("Warn")
      .setColor("BLACK")
      .addField("Warn User", `${rUser} with ID: ${rUser.id}`)
      .addField("Warn By", `${msg.author} with ID: ${msg.author.id}`)
      .addField("Channel", msg.channel)
      .addField("Time",moment(msg.createdAt).fromNow())
      .addField("Reason",`${reason}`)
      toJson(points,[rUser.id],"warn",1);
      let reportchannel = msg.guild.channels.find(`name`,"server-log"); 
      if(!reportchannel) return msg.reply("Couldn't find `server-log` channel. ").then( msgs => msgs.delete(3000)); 
      
     // msg.delete().catch(O_o=>{});
      reportchannel.send(reportembed);
      rUser.send(reportembed);
      let role = msg.guild.roles.find(`name`, 'Warn'); 
      if(!role) return msg.reply("Could't find `Warn` role.").then( msgs => msgs.delete(3000)); 
      rUser.addRole(role);
      
          return;
        
    };
////////////////////////////////////////////////////////////////bansR
        
    if( cmd === `${config[msg.guild.id]["bans"]}${prefix}`){
    let bans = await msg.guild.fetchBans();
    let array = [];
     bans.forEach(async user=>{
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


////////////////////////////////////////////////////////////////banR
        
  
if(cmd === `${config[msg.guild.id]["ban"]}${prefix}`){
    let args = msg.content.split(" ").slice(1);

    let bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    let breason = args.join(" ").slice(22);
if(!bUser) return msg.reply("ban! @user reason");
if(!breason) return msg.reply("ban! @user reason");
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
};
        
        
////////////////////////////////////////////////////////////////unbanR
        
  
if( cmd === `${config[msg.guild.id]["unban"]}${prefix}`){
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
};
        
        
////////////////////////////////////////////////////////////////voteR
        
        
        if( cmd === `${config[msg.guild.id]["vote"]}${prefix}`){
        if(msg.author.bot) return;
        if(voteon) return msg.reply("انتضر لين ينتهي التصويت الاول").then(z => z.delete(1600));
            var id = require("ffmpeg-binaries");
            var emojis = require("ffmpeg-binaries");
            var rea1 = msg.content.split(" ").slice(1)[0];
            var countR = msg.content.split(" ").slice(2)[0];
            var args = msg.content.split(" ").slice(3)[0];
            if(!rea1) return msg.reply("vote! <emoji> <countOFVoute> <Text>");
            if(!countR) return msg.reply("vote! <emoji> <countOFVoute> <Text>");
            if (isNaN(countR)) return msg.reply("vote! <emoji> <countOFVoute> <Text>");
            if(!args) return msg.reply("vote! <emoji> <countOFVoute> <Text>"); 
            //let emoji = client.guilds.get(id).emojis.find(e => e.name === emojie_name)
            msg.channel.send(rea1).then( msgs =>{
                msgs.react(rea1).then(()=>{
                    const emoji = (reaction, user) => reaction.emoji.name === rea1 && user.id === msg.author.id;
                    const collector = msgs.createReactionCollector(emoji, {time: 120000});
                    collector.on("collect", collected => {
                    var countF = msgs.reactions.get(rea1).count;
                        if ( countF >= countR){
                            msgs.clearReactions()
                            //msg.channel.send("<@!everyone>")
                        };
                    });
                    });
                });
};      
        
        
////////////////////////////////////////////////////////////////pointsR


        if ( cmd === `${config[msg.guild.id]["points"]}${prefix}`){
          if(!points[msg.author.id]) return msg.reply("You don't Have Any Point").then( z => z.delete(1600));
          embedp = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`${botName}`,`${urlbot}`)
          .setThumbnail(`${urlbot}`)
          .setTitle("Your Points")
          .setTimestamp()
          .setFooter(client.user.tag)
          await Object.values(points[msg.author.id]).forEach( (p,index) =>{
           embedp.addField(Object.keys(points[msg.author.id])[index],p,true)});
           await msg.channel.send(embedp);
        };
///////////////////////////////////MathR
}else{
  if (lastmath && cmd == lastmatha) {
    if(!msg.channel.guild) return ;
    msg.reply(`اجابة صحيحة : ${lastmatha}`,{code: 'lua'});
    msg.channel.send(msg.author.id);
    toJson(points,[msg.author.id],"math",1);
   msg.reply(`Your Points in Math Game is ${points[msg.author.id]["math"]}`)

    lastmath = false ;
    lastmatha = false ;
};
}


///////////////////////////////////`splitR`
let wordsA3213 = [];

if ( cmd === `${config[msg.guild.id]["split"]}${prefix}`){
  let Words = ["همسة جاد بها فكري"/*, "قميص نفيسة نشف", "خميس خمش خشم حبش و حبش خمش خشم خميس", "شفتك شفتني ما شفتك شفتني","حوش خميس خوش حوش","عطوني غداي وغطو غداء عطية",*/]
  var args1 = msg.content.split(" ")[1];
  let mathNumber = Math.floor(Math.random() * Words.length)
  if(!args1) args1 = Words[mathNumber];
  var strings = "";
  for( let i = 0 ; i < args1.length ; i++){
  strings += " "+args1.slice(i,i+1);
  }
  strings = str_replace("  ","",strings,1000);
  wordsA3213[strings] = true;
  msg.channel.send(strings);
}

if(wordsA3213[msg.content]){
msg.channel.send("Nice");
}

///////////////////////////////////////////////////////////End
});






////////////////////////////
/////////////////////////////////




//////////////Wealcome
client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'general');
 
  if (!channel) return;
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${member.displayName}`, member.user.displayAvatarURL)
    .setThumbnail(member.user.avatarURL)
    .addField(`Wealcom to ${channel.guild.name}`," ‎ ",true)
    .addField(`${member.user.tag}`," ‎ ",true)
    .addField(': دخولك لديسكورد قبل', `${moment(member.user.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(member.user.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(member.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(member.joinedAt).fromNow()}\``, true)      
      channel.send(embed);
});
/*
client.on('guildMemberAdd', member => {
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    const days = createdAt.toFixed(0);
    if(!days) return;
    if( days < 30 ) { member.ban() };    
});
*/
//////////////////////////////////Function
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


function toJson(table,id,key,value){
  if(!table[id]) { table[id] = {math: 0,solts: 0, warn: 0,}};
  table[id][key] = table[id][key]+value
fs.writeFile("./points.json", JSON.stringify(table), (err) => {
  if (err) console.log(err)
});
};

function fromJson(table,id,key){
  if(!table[id]) { table[id] = {math: 0,solts: 0, warn: 0,}};
  return table[id][key]
};

//////////////anti Bitch
client.on('message', msg => {
     if(msg.content.includes("Reflecty")){
         msg.delete()   
    };
});
///////////////////////////////////////////////////
//////////////////////ForHelp
client.on("message", async msg =>{// ننشأ حدث
    let cmd = msg.content.split(' ')[0]//نجيب الكوماند
    if( cmd == `${prefix}colors`){// نتحقق من الكوماند
      if(msg.author.bot) return;// نتحقق ان الرسالة مو من بوت
        msg.guild.roles.forEach(role => {// لوب للرتب كلها
            if(/^\d+$/gi.test(role.name)) {// نتحقق انها رقم مود اسامي
                let roleColor = role.color;// لون الرتبة
                let roleName = role.name; // اسم الرتبة
                let embed = new Discord.RichEmbed()//إمبيد جديد
                .addField(role.name,".")
                .setColor(role.color)
                msg.channel.send(embed);
            };
    });
  }
  });
///////////////////////////////////////


client.login(process.env.BOT_TOKEN);





































  /*
  let name = JSON.parse(fs.readFileSync("./name.json", "utf8"));

client.on("message", msg =>{

  if(msg.content.startsWith(`${prefix}setNickname`)){
    let argsN = msg.content.split(" ").slice(1);
    let argsN2 = argsN.join(" ").slice(2);
if(!argsN[0]) return msg.reply(`${prefix}setNickname <on / off>`).then(z => z.delete(1600));
if(argsN[0] === "on"){
if(!argsN2) return msg.reply(`${prefix}setNickname <on> <new nickname>`).then(z => z.delete(1600));
msg.guild.members.forEach(r => {
  if(r.user.bot) return;
      if(!name[r.id]){ name[r.id] = {name: r.nickname}};
      name[r.id].name = r.nickname
  if(msg.content.includes("{user}")){
    r.setNickname(argsN2.replace('{user}', name[r.id].name));
    }else{ r.setNickname(`${argsN2}`); };
    nicknameforjoin = r.nickname;
});
}else{
  if(argsN[0] === "off"){
  msg.guild.members.forEach(r => {
    if(r.user.bot) return;
  if(!name[r.id]) return;
  r.setNickname(name[r.id].name)
});
nicknameforjoin = false
}else{
  msg.reply(`${prefix}setNickname <on / off>`).then(z => z.delete(1600))
}};
fs.writeFile("./name.json", JSON.stringify(name), (err) => {
  if (err) console.log(err)
});
}});



client.on('guildMemberAdd', r => {
if(!nicknameforjoin) return;
if(r.user.bot) return;
if(!name[r.id]){ name[r.id] = {name: r.nickname}};
name[r.id].name = r.nickname
r.setNickname(`${nicknameforjoin}`)
});
*/
