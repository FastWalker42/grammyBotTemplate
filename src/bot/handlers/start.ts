import { Context } from 'grammy'
import { checkUser, getBalance, setBalance } from '../../db/methods'
import Localization from '../lang'

export default async (ctx: Context) => {
  console.time('Request Time')

  const { id, first_name, last_name, language_code } =
    ctx.message!.from!

  const T = new Localization(language_code!)

  await checkUser(id, language_code!)

  let balance = await getBalance(id!)
  balance = await setBalance(id!, balance + 1)

  await ctx.replyWithSticker(
    'CAACAgIAAxkBAAExqoBnq7r7XxNxa27G7hk7DmMtgnWBuAAC72oAAvc3SEkQARFLH_VphjYE'
  )
  await ctx.reply(T.msg.start({ first_name: first_name }), {
    reply_markup: T.startKb(last_name!),
  })
  console.timeEnd('Request Time')
}
