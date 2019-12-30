const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "viniciusw3c@gmail.com",
        pass: "vini&web"
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: 'suporte@cryptopay.com',
    to: 'viniciuskt0@gmail.com',
    subject: 'E-mail enviado usando Node!',
    html: `<h1>TESTE, HAHAHA</h1>`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });