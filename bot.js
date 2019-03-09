﻿const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = "%";
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('🌐 **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('🌍 ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField('🎖** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('👤** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('✅** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('📝** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('🔊** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('👑** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('🆔** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField('📅** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      .addField('😴** روم AFK**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField('🙃** الايموجيات :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });///////////////ALPHA CODES //// MAHMOUD QUSTYLE
var prefix = "%";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.toLowerCase().startsWith(prefix + `help`)) { //TPG_Community
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: Tycket Help`)
    .setColor(0xCF40FA)
    .setDescription(`مرحبا!  ، و Discord commands=بوت لأشياء تذكرة دعم أكثر من رائع وأكثر! وهنا أوامر بلدي:`)
    .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
    .addField(`Other`, `[${prefix}help]() > Shows you this help menu your reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about mohamedamine#1068`)
    message.channel.send({ embed: embed });
  }
 
  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`#ping`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}
 
if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم ** ** هنا قريباً لمساعدتك.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج قناة التذاكر.`);
 
    message.channel.send(`هل أنت واثق؟ بمجرد التأكيد ، لا يمكنك عكس هذا الإجراء!\للتأكيد ، اكتب \`%close\`. سوف يتم الغاء امر بعد 20 ثواني ان لم تقم بكتابة تاكيد.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '%close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
 
});
client.on('message', function(message) {

    if (message.channel.type === "dm") {

        if (message.author.id === client.user.id) return;

        var stewart = new Discord.RichEmbed()

            .setColor('RANDOM')

            .setTimestamp()

            .setTitle('``رساله جديده في خاص البوت``')

            .setThumbnail(`${message.author.avatarURL}`)

            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)

            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)

        client.channels.get("554033337920913454").send({ embed: stewart });

    }

})
client.on("message", msg => {//Alpha Codes SoEdit
        let msgarray = msg.content.split(" ");//Alpha Codes SoEdit
        let cmd = msgarray[0];//Alpha Codes SoEdit
        let args = msgarray.slice(1); //Alpha Codes SoEdit
        let Alpha = '%';//البرفكس      
if(cmd === `${Alpha}dm`){//Alpha Codes SoEdit
        let mentions = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));//Alpha Codes SoEdit
        if(!mentions) return msg.reply("**منشن العضو**").then(men => {//Alpha Codes SoEdit
            men.delete(2222)//Alpha Codes SoEdit
            msg.delete()
        })
        let args2 = args.join(" ").slice(22);
        if(!args2) return msg.reply("**اكتب الرسالة**").then(am => {
            am.delete(2222)
            msg.delete()
        })
    let emb = new Discord.RichEmbed()
    .setTitle("**DM**")//Alpha Codes SoEdit
    .addField("**الرسالة**", args2)//Alpha Codes SoEdit
    .addField("**الرسالة لـ**", mentions)//Alpha Codes SoEdit
    .addField("**من قبل**", msg.author)//Alpha Codes SoEdit
    .setDescription(`**هل انت متاْكد برسالتك؟
    ✔ | نعم
 
    ❌ | لا**`)//Alpha Codes SoEdit
    msg.channel.send(emb).then(od => {//Alpha Codes SoEdit
        od.react("✔")
        .then(()=> od.react("✔"))
        .then(()=> od.react("❌"))
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 
let reaction1 = od.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = od.createReactionCollector(reaction2Filter, { time: 12000 });
reaction2.on("collect", r => {
msg.reply("**تم الغاء رسل رسالتك بنجاح**").then(cn => {
    cn.delete(2222)
    msg.delete()
})
od.delete(2222)
})
reaction1.on("collect", r => {
let embd = new Discord.RichEmbed()//Alpha Codes SoEdit
.setTitle("**DM**")
.setDescription(`** الرسالة نوع وش؟ :arrow_down:
🚩 | امبد
 
✨ | بدون امبد
**`)
 msg.delete()
od.delete(2222)
msg.channel.send(embd).then(bo => {
    bo.react("🚩")
    .then(() => bo.react("🚩"))
    .then(() => bo.react("✨"))
    let r1 = (reaction, user) => reaction.emoji.name === '🚩' && user.id === msg.author.id;
    let r2 = (reaction, user) => reaction.emoji.name === '✨' && user.id === msg.author.id;
   
    let rec1 = bo.createReactionCollector(r1, { time: 12000 });
    let rec2 = bo.createReactionCollector(r2, { time: 12000 });
    rec1.on("collect", r => {
    let embde = new Discord.RichEmbed()
    .setTitle("**رسالة**")
    .addField("**الرسالة**", args2)
    .addField("**من قبل**", msg.author)
    bo.delete(2222)
    msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(op => {
        op.delete(2222)
        msg.delete()
    })
    mentions.send(embde)
    })
    rec2.on("collect", r => {
        mentions.send(args2)
        msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(ede => {
            ede.delete(2222)
            bo.delete(2222)
            msg.delete()
           
        })//Alpha Codes SoEdit
        })//Alpha Codes SoEdit
     
})//Alpha Codes SoEdit
 
}) //Alpha Codes SoEdit
})//Alpha Codes SoEdit
    }//Alpha Codes SoEdit
})//Alpha Codes SoEdit
var prefix = "%";
client.on('message',async message => {//new msg event
if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'Rainbow')) {//to create the rainbow role
   let role = message.guild.roles.find('name', 'Rainbow Rank')
   if(role) return message.channel.send(`هاي الرتبة موجودة !`)//if the role already created return with this msg
 //start of create role 
 if(!role){
   rainbow =  message.guild.createRole({
  name: "Rainbow Rank",//the role will create name
  color: "#000000",//the default color
  permissions:[]//the permissions
//end of create role
})

}
message.channel.send('تم')//if the step completed
}})
client.on('ready', () => {//new ready event
 setInterval(function(){
     client.guilds.forEach(g => {
                 var role = g.roles.find('name', 'Rainbow Rank');//rainbow role name
                 if (role) {
                     role.edit({color : "RANDOM"});
                 };
     });
 }, 1000);//the rainbow time
})
client.login(process.env.BOT_TOKEN);
