import { startArgs, premiumArgs } from './args'

export interface Translation {
  start: startArgs
  premium: premiumArgs
}

export const TRANSLATIONS: Record<string, Translation> = {
  ru: {
    start: {
      greet: 'Привет',
      mine: 'Шахта',
      mineDesc: 'Добудьте ресурсы...',
      invite: 'Пригласить друзей',
      inviteDesc: 'Получите бонус...',
      tasks: 'Задания',
      tasksDesc: 'Выполняйте квесты...',
      withDrawDesc: 'Вывод средств доступен!',
    },
    premium: {
      offerText: 'Купите премиум прямо сейчас!',
    },
  },
  en: {
    start: {
      greet: 'Hello',
      mine: 'Mine',
      mineDesc: 'Collect resources...',
      invite: 'Invite friends',
      inviteDesc: 'Get a bonus...',
      tasks: 'Tasks',
      tasksDesc: 'Complete quests...',
      withDrawDesc: 'Withdrawal is available!',
    },
    premium: {
      offerText: 'Buy premium right now!',
    },
  },
}
