import 'dotenv/config'
import bot from './bot'

bot.start({
  onStart: () => console.log('Bot started!'),
})
