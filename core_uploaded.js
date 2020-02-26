/*
------------------------------------------------------------------------------------------------

    본 소스 코드는 감자봇 프로잭트의 core.js 파일 중 일부만 올라와 있습니다.
    토큰이나 키가 적혀있지 않으며, 일반 채팅 명령어도 공개되지 않습니다.
    본 소스 코드를 편집하지 않고 작동을 하면 작동되지 않습니다.
    감자봇은 오픈 소스 소프트웨어로 누구나 이 소스를 열람 및 편집, 재배포를 할 수 있습니다.
    
    This source code is uploaded only a part of Core.js file, potatoBot Project.
    No Token and API Key is inserted and chatting command is not reveiled.
    You can't run this code without inserting Token and API Key in line 26 and 30.
    PotatoBot is an Open Source Software, so anyone can see and edit the code or redistribute.

    문의(Content me): hackg179@gmail.com / potato179#8362
    디스코드(Korean Discord Server): https://discord.gg/ecsApMn
    페이스북(Facebook): https://facebook.com/potato179bot

------------------------------------------------------------------------------------------------ 
*/
const Discord = require("discord.js")
const {Client, Util} = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Client({ disableEveryone: true });
const GOOGLE_API_KEY = "" //NOT REVEILED
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

client.login('');
client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => {
	console.log('감자봇 준비 완료!')
	client.user.setActivity("감자봇 베타 제작중입니다. '감자야 도움'을 입력해 보세요!", {type: 1})
});
client.on('disconnect', () => console.log('감자봇 음악 연결이 해제되었습니다.'));
client.on('reconnecting', () => console.log('감자봇 음악이 다시 연결되었습니다.'));


client.on("message", async message => {
    if(message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
        if(message.content.startsWith("감자야 도움" || "감자도움")){
        let help = new Discord.RichEmbed()
        .setTitle('**감자봇 도움말**')
        .addField('감자를 부르는 방법" `감자야 {할 말}`', '감자봇에는 다음과 같은 기능들을 지원합니다!!')
        .addField('`감자야 {할 말}`로 대화를 해 보세요!', '`감자야 안녕`, `감자야 놀아줘`, `감자야 감자는?` 등등...')
        .addField('<:music:511059373989167114> 유튜브에서 음악을 틀어드립니다!', '`감자야 플레이(감자플) {검색어}`, `감자야 닥쳐(감자닥)`, `감자야 꺼져(감자정)`, `감자야 볼륨(감자볼)`, `감자야 뭐해?(감자뭐)`, `감자야 목록(감자큐)`, `감자야 일시정지(감자퍼)`, `감자야 다시(감자리)`')
        .addField('<:user:511059279164342272> 직접 서버를 관리해 보세요!', '`감자야 신고 {유저언급} {사유}`, `감자야 경고(감자경) {유저언급} {사유}`, `감자야 추방(감자킥) {유저언급} {사유}`, `감자야 차단(감자벤) {유저언급} {사유}`')
        .addField('<:magic:511059373729251331> 그 외 편리기능!', '`감자야 핑(감자핑)`, `감자야 도박`, `감자야 주사위`, `감자야 카드` 등등...')
        .addField('문의', '제작자: potato179#8362 | 디스코드 서버: https://discord.gg/ecsApMn | 페이스북 페이지: https://facebook.com/106653707477261')
        .setColor('#d92be0')
        .setFooter('감자봇 - 도움말')
        message.channel.send(help) 
    }
    
    if(message.content.startsWith("감자야 안녕") || message.content.startsWith("감자야 하이") || message.content.startsWith("감자야 ㅎㅇ") || message.content.startsWith("감자하")){
        var messagesend = Math.floor(Math.random() * 4);
        if(messagesend === 0) message.channel.send("안반가운데");
        if(messagesend === 1) message.channel.send("누구세요?");
        if(messagesend === 2) message.channel.send("ㅎㅇㅎㅇ");
        if(messagesend === 3) message.channel.send("또왔네..");
    }
    if(message.content.startsWith("감자야 잘가") || message.content.startsWith("감자야 바이") || message.content.startsWith("감자야 ㅂㅇ") || message.content.startsWith("감자바")){
        var messagesend = Math.floor(Math.random() * 2);
        if(messagesend === 0) message.channel.send("그레\n다시오지마");
        if(messagesend === 1) message.channel.send("ㅇㅇ ㅂㅂ");
    }

    if(message.content.startsWith("감자야 나가") || message.content.startsWith("감자야 꺼져")) message.channel.send("https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png")
    if(message.content.startsWith("감자야 감자는?")) message.channel.send("위대하다.");
    if(message.content.startsWith("감자야 감자봇은?")) message.channel.send("위대하다.");
    if(message.content.startsWith("감자야 PMH는?") || message.content.startsWith("감자야 pmh는?")) message.channel.send("행신중을 \"먹는거\"라고 주장한 사람");
    if(message.content.startsWith("감자야 직각은?")) message.channel.send("_**쁘뤄그**_");
    if(message.content.startsWith("감자야 오아시스는?")) message.channel.send("```오아시스는 안위대합니다. 아니라고요? 어쩌라고요?```");
    if(message.content.startsWith("감자야 숙제해줘")) message.channel.send("워터봇한테 시키샘");
    if(message.content.startsWith("감자야 워터봇은?")) message.channel.send("Zzz... Zzz...");
    if(message.content.startsWith("감자야 뮤봇은?")) message.channel.send("사행성 봇");
    if(message.content.startsWith("감자야 노트봇은?")) message.channel.send(":notes:");
    if(message.content.startsWith("감자야 말넘심") || message.content.startsWith("감자야 그건좀")) message.channel.send("미안해...");
    if(message.content.startsWith("감자야 놀아줘")) message.channel.send("싫어");
    if(message.content.startsWith("감자야 심심해")) message.channel.send("같이 코딩하실?");
    if(message.content.startsWith("감자야 배그하자")) message.channel.send("어떡해 배그 계정이 없네");
    if(message.content.startsWith("감자야 옵치하자")) message.channel.send("어떡해 옵치 계정이 없네");
    if(message.content.startsWith("감자야 롤하자")) message.channel.send("어떡해 롤 정지당했네");
    if(message.content.startsWith("감자야 코딩하자")) message.channel.send("너랑은 급이 달라서 하기싫음");
    if(message.content.startsWith("감자야 해킹하자")) message.channel.send("너랑은 급이 달라서 안할거임 ㅅㄱ");
    if(message.content.startsWith("감자야 죽어")) message.channel.send("대한민국 형법 제250조 \n```① 사람을 살해한 자는 사형, 무기 또는 5년 이상의 징역에 처한다. ② 자기 또는 배우자의 직계존속을 살해한 자는 사형, 무기 또는 7년 이상의 징역에 처한다.```");
    if(message.content.startsWith("감자야 이상형")) message.channel.send("3상형");
    if(message.content.startsWith("감자야 사랑해") || message.content.startsWith("감자야 사귀자") || message.content.startsWith("감자야 결혼하자")) message.channel.send("난 너 싫어하고 난 사람도 아님 ㅅㄱ");
    if(message.content.startsWith("감자야 감져") || message.content.startsWith("감자야 고구마")) message.channel.send("감자가 더 맛있는데");
    if(message.content.startsWith("감자야 돈줘") || message.content.startsWith("감자야 돈내놔")) message.channel.send("돈이 없어요...");

    if(message.content.startsWith("감자야 주사위" || "감자주")) {
        var rand = Math.floor(Math.random() * 6) + 1;        
        message.channel.send(":game_die: 주사위를 던졌습니다: " + rand);
    }
    if(message.content.startsWith("감자야 카드")) {
        var randnum = Math.floor(Math.random() * 13);
        var randshape = Math.floor(Math.random() * 4);
        if(randnum === 0) var cardnum = ":regional_indicator_a:";
        if(randnum === 1) var cardnum = ":two:";
        if(randnum === 2) var cardnum = ":three:";
        if(randnum === 3) var cardnum = ":four:";
        if(randnum === 4) var cardnum = ":five:";
        if(randnum === 5) var cardnum = ":six:";
        if(randnum === 6) var cardnum = ":seven:";
        if(randnum === 7) var cardnum = ":eight:";
        if(randnum === 8) var cardnum = ":nine:";
        if(randnum === 9) var cardnum = ":keycap_ten: ";
        if(randnum === 10) var cardnum = ":regional_indicator_j:";
        if(randnum === 11) var cardnum = ":regional_indicator_q:";
        if(randnum === 12) var cardnum = ":regional_indicator_k:";       
        if(randshape === 0) var cardshape = ":spades:";
        if(randshape === 1) var cardshape = ":diamonds:";
        if(randshape === 2) var cardshape = ":hearts:";
        if(randshape === 3) var cardshape = ":clubs:";
        message.channel.send(cardnum + cardshape);
    }
    if(message.content.startsWith("감자야 도박")) {
        var bet1 = Math.floor(Math.random() * 12);
        var bet2 = Math.floor(Math.random() * 12);
        var bet3 = Math.floor(Math.random() * 12);
        if(bet1 === 0) betres1 = ":a:";
        if(bet1 === 1) betres1 = ":b:";
        if(bet1 === 2) betres1 = ":one:";
        if(bet1 === 3) betres1 = ":two:";
        if(bet1 === 4) betres1 = ":three:";
        if(bet1 === 5) betres1 = ":four:";
        if(bet1 === 6) betres1 = ":five:";
        if(bet1 === 7) betres1 = ":six:";
        if(bet1 === 8) betres1 = ":seven:";
        if(bet1 === 9) betres1 = ":eight:";
        if(bet1 === 10) betres1 = ":nine:";
        if(bet1 === 11) betres1 = ":zero:";
        if(bet2 === 0) betres2 = ":a:";
        if(bet2 === 1) betres2 = ":b:";
        if(bet2 === 2) betres2 = ":one:";
        if(bet2 === 3) betres2 = ":two:";
        if(bet2 === 4) betres2 = ":three:";
        if(bet2 === 5) betres2 = ":four:";
        if(bet2 === 6) betres2 = ":five:";
        if(bet2 === 7) betres2 = ":six:";
        if(bet2 === 8) betres2 = ":seven:";
        if(bet2 === 9) betres2 = ":eight:";
        if(bet2 === 10) betres2 = ":nine:";
        if(bet2 === 11) betres2 = ":zero:";
        if(bet3 === 0) betres3 = ":a:";
        if(bet3 === 1) betres3 = ":b:";
        if(bet3 === 2) betres3 = ":one:";
        if(bet3 === 3) betres3 = ":two:";
        if(bet3 === 4) betres3 = ":three:";
        if(bet3 === 5) betres3 = ":four:";
        if(bet3 === 6) betres3 = ":five:";
        if(bet3 === 7) betres3 = ":six:";
        if(bet3 === 8) betres3 = ":seven:";
        if(bet3 === 9) betres3 = ":eight:";
        if(bet3 === 10) betres3 = ":nine:";
        if(bet3 === 11) betres3 = ":zero:";
        if(bet1 === bet2 || bet1 === bet3 || bet2 === bet3){
            message.channel.send("**:1234: 도박 결과** \n\n" + betres1 + betres2 + betres3 + "\n\n<:okay:511059374043561994> 완벽하진 않지만 도박에 성공했어! 기능 테스트 중이라서 아직 보상은 없어 \n```과도한 도박은 중독을 일으킬 수 있습니다.```");
        }
        if(bet1 === bet2 && bet1 === bet2 && bet1 === bet3){
            message.channel.send("**:1234: 도박 결과** \n\n" + betres1 + betres2 + betres3 + "\n\n:thumbsup: 완벽하게 도박에 성공했어! 기능 테스트 중이라서 아직 보상은 없어 \n```과도한 도박은 중독을 일으킬 수 있습니다.```");
        }
        if(bet1 !== bet2 && bet2 !== bet3 && bet1 !== bet3){
            message.channel.send("**:1234: 도박 결과** \n\n" + betres1 + betres2 + betres3 + "\n\n<:no:511056028364832779> 도박 실패... 다음 기회에... \n```과도한 도박은 중독을 일으킬 수 있습니다.```");
        }
    }

    if(message.content.startsWith("감자야 핑") || message.content.startsWith("감자핑")) {
        message.channel.send(client.ping + ' ms')
    }
}); 


client.on("message", async message => {
	if (!message.content.startsWith('감자')) return undefined;

	const args = message.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith('감자플') || message.content.startsWith('감자야 플레이') || message.content.startsWith('감자야 틀어줘')) {
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('음성 채널에 입장한 후 다시 시도해봐!');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) return message.channel.send(':mute: 음성 채널에 입장할 권한이 없어. 다른 채널에서 시도하거나 서버 관리자에게 문의해봐!');
		if (!permissions.has('SPEAK')) return message.channel.send(':mute: 그곳에서 말할 권한이 없어. 다른 채널에서 시도하거나 서버 관리자에게 문의해봐!');

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, message, voiceChannel, true);
			}
			return message.channel.send(`<:okay:511059374043561994> **${playlist.title}**를 재생목록에 추가했어!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					message.channel.send(`
__**<검색결과>**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
1~10 중 원하는 것을 10초 이내로 골라줘.
					`);
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);		
						return message.channel.send(`:timer: 시간이 초과됐어. 다시 시도해줘.`);
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);	
					return message.channel.send(`:thinking: 검색 결과가 없어. 다른 검색어로 시도해줘.`);
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
	}
	 else if (message.content.startsWith('감자닥') || message.content.startsWith('감자야 다음') || message.content.startsWith('감자야 스킵')) {
		if (!message.member.voiceChannel) return message.channel.send('https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png');
		if (!serverQueue) return message.channel.send('https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png');		
		serverQueue.connection.dispatcher.end(`<:next:511059373691502614> 다음곡 ㄱㄱ`);
		return undefined;
	} 

	else if (message.content.startsWith('감자정') || message.content.startsWith('감자야 꺼져') || message.content.startsWith('감자야 정지')) {
		if (!message.member.voiceChannel) return message.channel.send('https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png');
		if (!serverQueue) return message.channel.send('https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png');
		serverQueue.songs = [];		
		serverQueue.connection.dispatcher.end('<:leave:511059373540507649> 음악을 멈추고 재생목록을 비웠어. ㅂㅂ');
		return undefined;
	}

	else if (message.content.startsWith('감자볼') || message.content.startsWith('감자야 소리') || message.content.startsWith('감자야 볼륨')) {
		if (!message.member.voiceChannel) return message.channel.send('https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png');
		if (!serverQueue) return message.channel.send('https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png');
		if (!args[1]) {
			return message.channel.send(`:sound: 현재 볼륨: ${serverQueue.volume}`)
		}
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`:loud_sound: 볼륨을 ${args[1]}으로 설정했어!`)
	} 

	else if (message.content.startsWith('감자뭐') || message.content.startsWith('감자야 지금') || message.content.startsWith('감자야 뭐해')) {
		if (!serverQueue) return message.channel.send('너랑 채팅하는데');
		return message.channel.send(`지금 ${serverQueue.songs[0].title}을(를) 부르고 있어!`)
	} 

	else if (message.content.startsWith('감자큐') || message.content.startsWith('감자야 목록')) {
		if (!serverQueue) return message.channel.send('https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png');
		let queue = new Discord.RichEmbed()
			.setTitle('**<:note:511059373670400001> 재생목록**')
            .addField(`재생 목록`, `${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`)
            .addField(`현재 재생곡`, `${serverQueue.songs[0].title}`)
			.setColor('#d92be0')
			.setFooter('감자봇 - 음악')
		return message.channel.send(queue)
	} 

	else if (message.content.startsWith('감자퍼') || message.content.startsWith('감자야 잠만') || message.content.startsWith('감자야 일시정지')) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause(`:pause_button: 음악을 일시정지했어! \`감자야 다시\`로 다시 틀 수 있어.`);
		}
		return message.channel.send('https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png');
	} 
	
	else if (message.content.startsWith('감자리') || message.content.startsWith('감자야 다시') || message.content.startsWith('감자야 재생')) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send(`:play_pause: 음악을 다시 틀어줄게!`)
		}
		return message.channel.send('https://media.discordapp.net/attachments/490326928037904394/563268376797904908/3.png');
	}

	return undefined;
});

async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			let time = new Discord.RichEmbed()
				.setTitle('**<:warn:511059374073053184> ERROR!**')
				.addField(`${error}(으)로 인해 음악을 재생할 수 없어. 제작자에게 보고됐어.`)
				.setColor('#d92be0')
				.setFooter('감자봇 - 음악')			
			return message.channel.send(time);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`<:okay:511059374043561994> **${song.title}** 을 재생목록에 추가했어.`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send(`<:music:511059373989167114> **${song.title}** 틀어줄게!`);
    }

client.on("message", async message => {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    if(message.content.startsWith("감자야 신고")){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("사용법 : ");
        let reason = args.join(" ").slice(22);
        let reportEmbed = new Discord.RichEmbed()
            .setTitle("신고")
            .setColor("#15f153")
            .addField("신고받은 유저", `${rUser}`)
            .addField("시각", message.createdAt)
            .addField("사유", reason);
            
        let reportschannel = message.guild.channels.find(`name`, "🚨신고");
        if(!reportschannel) return message.channel.send("본 서버에서는 아직 신고 기능을 사용할 수 없습니다. 조금만 기다려 주세요!");
        reportschannel.send(reportEmbed);
        message.channel.send(`${rUser} (을)를 [${reason}](이)라는 사유로 신고했습니다.`
        );
    }
});
