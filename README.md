# Captcha generator (canvas)

## Samples
  ![Example](https://cdn.discordapp.com/attachments/525909915915649034/541358189916979221/captcha.png)

```js
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
```

This captcha generator was based on [here](https://github.com/Claude-Ray/canvas-captcha). I removed "useless" features and added features to make customizing the captchas easier. One of the biggest additions was making the captchas easy to read.
