import { Context } from 'grammy'

export default async (ctx: Context) => {
  await ctx.replyWithInvoice(
    'title',
    'desc',
    ctx.message!.from.id.toString(),
    'XTR',
    [{ label: 'ru', amount: 44 }]
  )
}
