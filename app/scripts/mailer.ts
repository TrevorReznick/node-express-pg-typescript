import nodemailer = require('nodemailer')
import Mail = require('nodemailer/lib/mailer')
import {MailMessage} from '../interfaces/MailerModel'
import { TransportOptions } from '../interfaces/MailerModel'

export function mail_message(): MailMessage {
    return new MailMessage({
        to: 'enzonav@yahoo.it',
        from: 'double.facessss@gmail.com',
        subject: 'Test Message',
        text: 'Hi, if you read this message it means that the mailer of the application runs!'
    })
}

const email = new MailMessage({
    to: 'enzonav@yahoo.it',
    from: 'double.facessss@gmail.com',
    subject: 'Test Message',
    text: 'Hi, if you read this message it means that the mailer of application runs!'
})

export {email}




/*
export class TransportsOpt {
    
    constructor(data: TransportOptions) {
        this.host = data.host
        this.port = data.port
        this.auth = data.auth
    }

    host: string
    port: number
    auth: object

    public mail_message(_to: string, _subject: string, _text:string): object {
        let email = {
            from: 'no-reply@dominiagency.com',
            to: _to,
            subject: _subject,
            text: _text
        }
        console.log('debug email object function...')
        return email        
    }
}




async function main() {

    const hostname = process.env.MAIL_HOST
    const username = process.env.MAIL_AUTH_USER
    const password = process.env.MAIL_AUTH_PASSWORD

    const transporter = nodemailer.createTransport({
        host: hostname,
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: username,
          pass: password,
        },
        logger: true
    })
    
    const info = await transporter.sendMail({
        from: '"Sender Name" <from@example.net>',
        to: "enzonav@yahoo.it",
        subject: "Hello from node",
        text: "Hello world?",
        html: "<strong>Hello world?</strong>",
        headers: { 'x-myheader': 'test header' }
    })    
    console.log("Message sent: %s", info.response);
}

//main()

/*
const mail = (_to, _subject, _text) => {
    let email = {
      from: 'no-reply@dominiagency.com',
      to: _to,
      subject: _subject,
      text: _text
    }
    console.log('debug email object function...')
    return email  
}

const do_mail = async (obj) => {
  await wrapedSendMail(obj) // my_obj 
  //console.log(obj)
}

const wrapedSendMail = async (obj) => {
  //console.log(email)
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'double.facessss@gmail.com',
        pass: 'rpsrjefefgfxsddx'
      },
      logger: true,
      //debug: true 
    })
    //let email = mail(to, subject, text)
    let email = mail(obj.email, obj.titolo, obj.testo)
    transporter.sendMail(email, function(error, info){
      console.log(email)
      if (error) {
        console.log("error is " + error)        
        resolve(false); // or use rejcet(false) but then you will have to handle errors
      } else {
        console.log('Email sent: ' + info.response)
        resolve(true)
      }
    })
  })
}

exports.mailer = async () => {
  console.log('mailer function')   
  const _sql = _q.selectNotificationsToSend
  await _f.doGetNotificheQuery(_sql(null), do_mail, null)
}
exports.sendmail = async () => {
  let resp = await wrapedSendMail(mail)
  return resp
}
*/



/*
const transporter_options = new TransportsOpt({
    host: process.env.MAIL_PORT,
    port: process.env.MAIL_PORT,
    secure: false, // or 'STARTTLS'
    auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASSWORD
    }
})
*/

/*
const user = new Model({
    id: 1,
    name: 'John',
    email: 'john@email.com'
})
await Model.create(user)
*/

/*
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_PORT,
    port: process.env.MAIL_PORT,
    secure: false, // or 'STARTTLS'
    auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASSWORD
    }
})

const mailOptions = {
    from: "your_email@gmail.com",
    to: "recipient@example.com",
    subject: "Hello from Nodemailer",
    text: "This is a test email sent using Nodemailer."
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Error sending email: ", error);
    } else {
        console.log("Email sent: ", info.response);
    }
});

*/