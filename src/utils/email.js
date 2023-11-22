import nodemailer from 'nodemailer'

 const sendEmail = async ({from=process.env.EMAIL , to ,cc,bcc,subject,text,html,attachments=[]}={})=>{
    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    
      const info = await transporter.sendMail({
        from: `"Academy App" <${from}>`, // sender address
        to, 
        cc,
        bcc,// list of receivers
        subject, // Subject line
        text, // plain text body
        html, // html body
        attachments
      });
      // console.log(info)
}

export default sendEmail