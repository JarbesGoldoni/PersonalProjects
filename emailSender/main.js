import nodemailer from 'nodemailer'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askInput = (question) =>
  new Promise((resolve) => rl.question(question, resolve))

async function enterServer() {
  try {
    const user = await askInput('Enter your hotmail email: ')
    const pass = await askInput('Enter your hotmail password: ')
    return { user, pass }
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

async function createTransporter(user, pass) {
  return nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587,
    tls: { ciphers: 'SSLv3' },
    auth: { user, pass },
  })
}

async function sendEmail() {
  try {
    const { user, pass } = await enterServer()
    const transporter = await createTransporter(user, pass)

    const to = await askInput('To: ')
    const subject = await askInput('Subject: ')
    const text = await askInput('Text: ')
    rl.close()

    const html = `<h1>${subject}</h1><p>${text}</p>`

    const mailOptions = { from: user, to, subject, html }
    const info = await transporter.sendMail(mailOptions)
    console.log(`Message sent: ${info.response}`)
  } catch (err) {
    console.error(err)
    rl.close()
  }
}

sendEmail()
