// Remember to install first the npm package "nodemailer" ---> npm install nodemailer

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mynodemails@gmail.com',
    pass: 'Aldebaran123666!'
  }
});
console.log(transporter);

var mailOptions = {
  from: 'mynodemails@gmail.com', // sender address
  to: 'daniel.salgado01@hotmail.com',  // list of receivers
  subject: 'My first sent Email using Node.js',  // Subject line
  text: 'That was easy! I love you ALEJOOOO'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});