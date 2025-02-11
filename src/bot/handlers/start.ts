import { Context } from 'grammy'
import { checkUser, getBalance, setBalance } from '../../db/methods'
import Localization from '../lang'

export default async (ctx: Context) => {
  console.time('Total Request Time')

  const startTime = performance.now()

  console.time('Extract user data')
  const { id, first_name, last_name, language_code } =
    ctx.message!.from!
  console.timeEnd('Extract user data')

  console.time('Initialize Localization')
  const T = new Localization(language_code!)
  console.timeEnd('Initialize Localization')

  console.time('Check User in DB')
  await checkUser(id, language_code!)
  console.timeEnd('Check User in DB')

  console.time('Get Balance from DB')
  let balance = await getBalance(id!)
  console.timeEnd('Get Balance from DB')

  console.time('Update Balance in DB')
  balance = await setBalance(id!, balance + 1)
  console.timeEnd('Update Balance in DB')

  console.time('Send Start Message')
  await ctx.reply(T.msg.start(first_name), {
    reply_markup: T.startKb(last_name!),
  })
  console.timeEnd('Send Start Message')

  console.time('Send Balance Message')
  await ctx.reply(balance.toString())
  console.timeEnd('Send Balance Message')

  console.time('Send Processing Time')
  const processTime = performance.now() - startTime
  await ctx.reply(`Время обработки: ${processTime.toFixed(2)} мс`)
  console.timeEnd('Send Processing Time')

  console.timeEnd('Total Request Time')
}
