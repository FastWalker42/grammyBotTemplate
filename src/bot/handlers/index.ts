import { Bot } from 'grammy'

import startHandler from './start'
import payHandler from './payment'
import msgHandler from './msg'

export default (bot: Bot) => {
  bot.command('start', startHandler)
  bot.command('pay', payHandler)
  bot.on('message', msgHandler)
}
