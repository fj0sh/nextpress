const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

function getRandomArbitrary(min, max) {
    
}

async function main(recepient) {
  // send mail with defined transport object
  try {
    const res =  Math.floor(Math.random() * (999999 - 100000) + 100000);
    console.log(res);
    
    const info = await transporter.sendMail({
      from: {
        name: 'TEST',
        address: process.env.MAILER_USER
      }, // sender address
      to: "22105112@usc.edu.ph", // list of receivers
      subject: "TEST", // Subject line
      text: "TEST", // plain text body
      html: `<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at aliquet leo, quis vestibulum turpis. Vestibulum in congue mi. Sed maximus lorem id ex vehicula, vel congue lectus sagittis. Donec finibus massa ex, non tincidunt massa varius in. Morbi sed mattis eros. Morbi congue est sit amet dui faucibus feugiat. Curabitur in dapibus erat, in aliquam tellus. Sed in sapien vestibulum, fringilla ${res} dolor sit amet, fringilla lorem. Sed fermentum lorem eu luctus dignissim.

      Donec nisi elit, imperdiet quis ultricies tristique, tincidunt vitae ligula. Nunc tincidunt neque nec dignissim consectetur. Fusce bibendum venenatis erat, vel rhoncus leo. Praesent porta a lorem sit amet imperdiet. Maecenas in venenatis metus. Praesent ultrices lacinia purus, id sodales turpis aliquet a. Nullam vel lacus in dui facilisis finibus a quis mauris. Aliquam eu sapien cursus, vulputate est vel, sagittis nulla. Nullam nisi nibh, auctor quis cursus at, viverra at neque. Etiam finibus elementum elit et tempus. Phasellus pellentesque, elit ut pretium pellentesque, sem felis placerat arcu, ac ornare augue nisl at ex. Praesent non varius nulla, non hendrerit felis.
      
      Integer mattis tortor mauris, ut rutrum eros pulvinar vel. Morbi sagittis metus at gravida cursus. Suspendisse consequat leo nulla, a fermentum metus pretium convallis. Nulla nunc velit, rhoncus et purus at, eleifend rutrum quam. Nulla tempor nibh eros, vitae tristique augue faucibus vel. Donec vulputate accumsan auctor. Maecenas porta lobortis nunc ut ultricies. Integer ullamcorper odio ut lacus laoreet, tristique viverra libero condimentum. Nullam ornare quam urna, eu semper erat gravida et. Cras a orci rhoncus, finibus tortor ac, luctus lectus. Sed porttitor tellus felis, id rhoncus ipsum viverra vel. Nam dapibus interdum nunc, non condimentum diam semper feugiat. In ac sapien nec augue lacinia ullamcorper.</div>`, // html body
    });
    console.log(info);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
// getRandomArbitrary(100000, 999999);

let x = 0

while(x <= 30){
    x++
    main("francisjoshuacutamora@gmail.com");
}


