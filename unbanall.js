const Discord = require("discord.js")
const client = new Discord.Client();
const config = require('../config.json')

//comando pra desbanir todos os usuários
module.exports.run = async (client, message) => {
    if(message.author.id !== 'seu_id') return;
    message.delete(); // apaga a mensagem após o uso do comando

        message.channel.send('Desbanindo todos os usuários deste servidor...') 
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
            console.log(`Usuários a serem desbanidos\n ${user.tag}`)
            user.send(`teste`) 
            message.guild.unban(user) // desbane os usuários
            if (error) { // se o bot não tiver permissões, ele envia no chat que não tem permissões para desbanir
                console.log(`[BOT] Preciso de permissões`)
                message.channel.send(`Estou sem permissões para completar esta ação.`);
                return;
            }
        })
        })

    };
