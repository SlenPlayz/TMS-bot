const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //client.user.setActivity({name:'FTE is over!!', type: 'PLAYING'});
})
client.on('message', msg => {
  switch (msg.content) {
    case '!periodic-table':
      msg.channel.send(`https://slenplayz.github.io/sl/sch/periodic-table.jpg`)
      msg.channel.send('Please click on the photo and click open original')
      break;
  }
  if (msg.content.substring(0, 4) === '!say') {
    if (msg.member.roles.cache.find(role => role.name == "Mods")) {
      if (msg.content.substring(5) != '') {
        msg.delete()
        msg.channel.send(msg.content.substring(5));
      }
      else {
        msg.reply('Enter a message for me to repeat')
      }
    }
    else {
      msg.reply('You dont have permission to use that command')
    }
  }
  if (msg.content.substring(0, 5) === '!eval') {
    if (msg.author.id = "517191312328491039") {
      try {
        eval(msg.content.substring(6));
        msg.channel.send('Done!')
      } catch (err) {
        msg.channel.send('Error!')
      }
    }
    else {
      msg.reply('You dont have permission to use that command')
    }
  }
})

client.login(process.env.DISCORD_TOKEN);