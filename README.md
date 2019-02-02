# Captcha generator (canvas)

## Samples
  ![Example](https://cdn.discordapp.com/attachments/525909915915649034/541358189916979221/captcha.png)

```js
// captcha initialization
const captcha = new Captcha(150, 50, 5, { bgColor: "#fff", fontFamily: fontSize: 55, lineWidth: 2 });
const { canvas, ctx } = captcha.initCanvas();

captcha.drawLine(ctx);
const text = captcha.drawText(ctx);

canvas.toBuffer;
console.log(text);
```
