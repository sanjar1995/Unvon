// server/api/telegram.js
import dotenv from 'dotenv'
dotenv.config()
export default defineEventHandler(async (event) => {  
    const body = await readBody(event) // получаем данные из формы
    const token = process.env.VITE_BOT_TOKEN
    const chatId = process.env.VITE_BOT_ID
    const text = `Новое сообщение с сайта:Fayz.com\nИмя: ${body.name}\nEmail: ${body.email}\nНомер телефона: ${body.number}\Называние товара: ${body.product}\Артикул товара: ${body.articul}\nСообщение: ${body.text}`
  
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`
  
    const response = await $fetch(url)
    return response
  })
  