const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();


router.post('/send-email',(req,res) =>{
    const {name, email, phone, enterprice, description} = req.body;
    //Este es el formato de nuestro correo
    contentHMTL = `
    <h1>User information: </h1>
    <ul>
        <li>Username: ${name}</li>
        <li>User Email: ${email}</li>
        <li>User phone: ${phone}</li>
        <li>User enterprice: ${enterprice}</li>
        <li>User description: ${description}</li>
    </ul>
    <p>Message</p>
    `;
    /*
    const transporter = nodemailer.createTransport({
        //Aqui van los datos del host de nuestro correo el cual contratamos
        host: 'mail.digitalsupport.com',
        port: 26,
        //Aqui se determina si seran con SSL(true) o sin SSL(false)
        secure: false,
        //en auth utilizaremos 
        auth:{
            user: 'contact@digitalsupport.com',
            pass: 'password'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
   const info =  await transporter.sendMail({
        from: "'DigitalSupport <contact@digitalsupport.com>'",
        to: email,
        subject: 'Nos complace ponernos en contacto con usted',
        html: contentHMTL
    });
    console.log("Mesagge sent", info.messageId);
*/
    res.redirect("/");
});

module.exports = router;