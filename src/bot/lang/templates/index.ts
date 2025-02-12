import { startArgs } from './args'
import { startProps } from './props'

export const TEMPLATES = {
  start: (args: startArgs, props: startProps) =>
    `${args.greet}, ${props.first_name}

<b>${args.mine}</b>
<blockquote>💎⛏♻️ 
${args.mineDesc}</blockquote>

<b>${args.invite}</b>
<blockquote>👥👔🔗 
${args.inviteDesc}</blockquote>

<b>${args.tasks}</b>
<blockquote>🎯💼🚀 
${args.tasksDesc}</blockquote>

💸 ${args.withDrawDesc} 🔰.`,
}
