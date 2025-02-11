export interface Keyboards {
  start: {
    greet: string
    ask: string
    tellLastName: (name: string) => string
  }
}

export const KEYBOARDS: Record<string, Keyboards> = {
  en: {
    start: {
      greet: 'Hello bot!',
      ask: 'How`s it going bro?',
      tellLastName: (lastname: string) => `im ${lastname}`,
    },
  },

  ru: {
    start: {
      greet: 'Привет бот!',
      ask: 'Как дела, братан?',
      tellLastName: (lastname: string) => `я ${lastname}`,
    },
  },
}
