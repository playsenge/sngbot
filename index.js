const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const superagent = require("superagent");
const PREFIX = ".";

var odpowiedzi8BALL = [
	"Tak.",
	"Nie.",
	"Może...",
	"Raczej nie...",
	"Oczywiscie!",
	"Skąd mam to wiedzieć???",
	"Nie wiem!",
	"Raczej tak...",
	"Nie ma takiej opcji!",
	"Nawet nie pytaj!",
	"Wiadomo że tak!",
	"Wiadomo że nie!",
	"Nikt tego nie wie!",
	"Tez chciałbym wiedzieć!",
	"Bez wątpienia.",
	"Bardzo prawdopodobne.",
	"Skoncentruj się i spytaj ponownie.",
	"Odpowiedź niejasna, spróbuj ponownie.",
	"Punkt dla tak.",
	"Bardzo wątpliwe.",
	"Rokowania są dobre.",
	"Z tego co widzę, tak.",
	"Z tego co widzę, nie.",
	"Kiepsko to wygląda.",
    "Wypij piwko i spytaj się ponownie.",
    "Nie odpowiem ci."
];

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("SengeCore.EU - Twoj MegaDrop!");
    console.log("BOT ON!");
});

bot.on("message", async (message) => {
	if (message.author.equals(bot.user)) return;
	
	if(!message.content.startsWith(PREFIX)) return;
	
	var args = message.content.substring(PREFIX.length).split(" ");
	
	switch (args[0].toLowerCase()) {
		case "8ball":
			if (args[1]) {
				var embed = new Discord.RichEmbed()
                    .addField("Twoja odpowiedź to:", odpowiedzi8BALL[Math.floor(Math.random() * odpowiedzi8BALL.length)])
					.setColor("#0de57d")
					.setThumbnail(message.author.avatarURL)
					.setFooter("Copyright © senge1337")
				message.channel.sendEmbed(embed);
			}
			else {
				var embed = new Discord.RichEmbed()
					.addField("Poprawne użycie:", ".8ball <pytanie>")
				message.channel.sendEmbed(embed);
				}
			break;
		case "info":
			var sicon = message.guild.iconURL;
		    var embed = new Discord.RichEmbed()
				.setColor("#0de57d")
				.setThumbnail(sicon)
				.addField("Nazwa serwera:", message.guild.name)
				.addField("Stworzony:" , message.guild.createdAt)
				.addField("Dołączyłes:", message.member.joinedAt)
				.addField("Wszyscy uzytkownicy:", message.guild.memberCount)
				.setFooter("Copyright © senge1337")
		    message.channel.sendEmbed(embed);
			break;
		case "kot":
			var { body } = await superagent
		   .get('thecatapi.com/api/images/get?format=src&type=gif');
		   var embed = new Discord.RichEmbed()
			   .addField("Oto twoj kot!", "")
			   .setColor("#0de57d")
			   .setThumbnail(message.author.avatarURL)
			   .setFooter("Copyright © senge1337")
			   .setImage(body.file)
		   message.channel.sendEmbed(embed);
		default:
			var embed = new Discord.RichEmbed()
					.addField("Nieznana komenda!", "Wszystkie komendy znajdują się pod komendą .pomoc!")
					.setColor("#0de57d")
					.setThumbnail(message.author.avatarURL)
					.setFooter("Copyright © senge1337")
                message.channel.sendEmbed(embed);
	}
})

bot.login(process.env.BOT_TOKEN);
