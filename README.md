# Captcha generator (canvas)

## Samples
  ![Example](https://cdn.discordapp.com/attachments/525909915915649034/541358189916979221/captcha.png)

```js
// Require Packages
const Captcha = new (require('../index.js'))(150, 50, 5, { fontSize: 55 }); // Define Captcha Template
const fs = require('fs');

// Generate Captcha
const { buffer, text } = Captcha.createCaptcha();

// Write Captcha
fs.writeFile('image.png', buffer, (err) => {
  if (err) throw err;
  console.log('[Generated] Text:', text);
})
```

This captcha generator was based on [here](https://github.com/Claude-Ray/canvas-captcha). I removed "useless" features and added features to make customizing the captchas easier. One of the biggest additions was making the captchas easy to read.
