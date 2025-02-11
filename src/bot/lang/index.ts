import { MESSAGES, Messages } from './messages'
import { KEYBOARDS, Keyboards } from './keyboards'
import { InlineKeyboard } from 'grammy'

class Localization {
  msg: Messages
  private kb: Keyboards

  constructor(lang: string) {
    this.msg = MESSAGES[lang] || MESSAGES['en']
    this.kb = KEYBOARDS[lang] || KEYBOARDS['en']
  }

  startKb(lastname: string): InlineKeyboard {
    const markup = this.kb.start

    const keyboard = new InlineKeyboard()
      .text(markup.greet, 'greet')
      .text(markup.ask, 'ask')
      .text(markup.tellLastName(lastname), 'tell_lastname')

    return keyboard
  }
}

export default Localization
