// Require Packages
const Captcha = require('../index.js');
const fs = require('fs');

// Generate Captcha
const captcha = new Captcha(150, 50, 5, { fontSize: 55 }); 
const { canvas, ctx } = captcha.initCanvas();
captcha.drawLine(ctx);
const text = captcha.drawText(ctx);

// Write Captcha
fs.writeFile('image.png', canvas.toBuffer(), (err) => {
  if (err) throw err;
  console.log('Generated!');
});