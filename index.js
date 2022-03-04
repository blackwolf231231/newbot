const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMyMzI0MDU4MzM3NTI1OTIw.YeRUcQ.fiP3Zeejqlx3FeXwIIm3RN2Ynzo"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Make by 𐌱Ľ𐌻⊂𐌺ʷᵒˡᶠ#2252')
})

client.login(process.env.TOKEN)