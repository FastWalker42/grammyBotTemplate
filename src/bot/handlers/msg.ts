import { Context } from 'grammy'

export default async (ctx: Context) => {
  await ctx.reply(ctx.message!.text!)
}
