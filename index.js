const { Client, Events, Intents, ActivityType, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');
const discord = require('discord.js')

//-----------------------------------------------//
//             New Client Instance               //
//-----------------------------------------------//

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//-----------------------------------------------//
//               Command Handler                 //
//-----------------------------------------------//



//-----------------------------------------------//
//           CLient Ready Console Log            //
//-----------------------------------------------//

client.once('ready', () => {
    console.log(`Successfully Logged in as ${client.user.displayName}`);

//-----------------------------------------------//
//                 Client Status                 //
//-----------------------------------------------//

client.user.setActivity("@ for help", { type: 'WATCHING'})
            
});

//-----------------------------------------------//
//                 /Ping                         //
//-----------------------------------------------//

client.on('messageCreate', messageCreate => {
    if (message.content === 'ping') {
        client.message.send('possssssng')
    }
})

//-----------------------------------------------//
//                 Client Login                  //
//-----------------------------------------------//

client.login(token);