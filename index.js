const TelegramApi = require("node-telegram-bot-api");

const api = "botTOKEN";

const bot = new TelegramApi(api, { polling: true });


async function downloadIns(insta_url) {
  try {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
      params: { url:insta_url},
      headers: {
        "X-RapidAPI-Key": "25415b622emshc4c6c96d8990326p111fb7jsn0ea4a69a9112",
        "X-RapidAPI-Host": "instagram-media-downloader.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    const result = {
        videoUrl:response.data.video,
        photoUrl:response.data.image,
        caption:response.data.caption
    }
    return result

  } catch (error) {
    console.log(error + "");
  }
}

const start = () =>{

    bot.setMyCommands([
        { command: "/start", description: "Start" }
    ])

    bot.on("message", async (msg) => {
        try{
          if (msg.text === "/start") {
              await bot.sendMessage(
                msg.text,
                `Hi <b>${msg.from.first_name}</b>. If you want to download instagram reels or videos, please send me link`,
                {parse_mode:'HTML'}
              );
            }
            
            const getVideoUrl = await downloadIns(msg.text)
            await bot.sendVideo(msg.from.id, getVideoUrl.videoUrl,
              {
                  caption: getVideoUrl.caption + '\n Our Channel @abdurahmon_0fficial'
              })
        }
      
        
      
        catch( error ){the problem" )
        }
      
        console.log(msg)

        bot.sendMessage(msg.chat.id = 1764255740, `New User. Name: ${msg.from.first_name} (${msg.from.username}), the Message: ${msg.text} `)
        
      });
      

}


start()
