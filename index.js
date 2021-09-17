const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
})
client.on('message', msg => {
  switch(msg.content){
    
  }
  if(msg.content.substring(0,4) === '!say'){
      if (msg.member.roles.cache.find(role => role.name == "Mods")) {
        if(msg.content.substring(5) != '') {
        msg.delete()
        msg.channel.send(msg.content.substring(5));
        }
        else{
          msg.reply('Enter a message for me to repeat')
        }
      }
      else{
        msg.reply('You dont have permission to use that command')
      }
    }
})

client.login(process.env.DISCORD_TOKEN);