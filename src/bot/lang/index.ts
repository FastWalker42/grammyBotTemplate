import { TRANSLATIONS, Translation } from './templates/translations'
import { TEMPLATES } from './templates'
import { KEYBOARDS, Keyboards } from './keyboards'
import { InlineKeyboard } from 'grammy'
import { startProps } from './templates/props'

class Localization {
  private lang: string
  private translations: Translation
  private kb: Keyboards

  constructor(lang: string) {
    this.lang = lang
    this.translations = TRANSLATIONS[lang] || TRANSLATIONS['en']
    this.kb = KEYBOARDS[lang] || KEYBOARDS['en']
  }

  get msg() {
    return {
      start: (props: startProps) =>
        TEMPLATES.start(this.translations.start, props),
      premium: () => this.translations.premium.offerText,
    }
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
