# canvas-captcha

## Samples
  ![Example](https://cdn.discordapp.com/attachments/525909915915649034/541361548896239628/captcha.png)

```js
Const captcha = new Captcha(120, 50, 4);

Const {dataURL, text} = captcha.createCaptcha();
```

But support free combination, you can adjust ctx at any time, or add more operations.
```js
// captcha initialization
const captcha = new Captcha(150, 50, 5, { bgColor: "#fff", fontFamily: fontSize: 55, lineWidth: 2 });
const { canvas, ctx } = captcha.initCanvas();

captcha.drawLine(ctx);
const text = captcha.drawText(ctx);

canvas.toBuffer;
console.log(text);
```
