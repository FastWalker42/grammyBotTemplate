export interface Messages {
  start: (name: string) => string
}

export const MESSAGES: Record<string, Messages> = {
  en: {
    start: (name: string) => `Hello, ${name}!`,
  },
  ru: {
    start: (name: string) => `Привет, ${name}!`,
  },
}
