# canvas-captcha
[![Build Status](https://travis-ci.org/Claude-Ray/canvas-captcha.svg?branch=master)](https://travis-ci.org/Claude-Ray/canvas-captcha )

Based on [node-canvas@2.x] (https://github.com/Automattic/node-canvas), mainly as a demonstration, it can also be used directly for image verification code output.

> It is recommended to directly introduce the `node-canvas` to draw the verification code yourself. The project needs to be improved. Welcome to PR.

## Why
- Performance advantages based on C++ implementation of `node-canvas` compared to `gm` cli calls
- Canvas standard drawing, more friendly to front-end developers (~~may not have ~~)
- Better scalability

## Samples

- rjdx

  ![RJDX](docs/rjdx.jpg)

- hndd

  ![HNdD](docs/hndd.jpg)

## Install
```sh
Npm install canvas2-captcha
```

## Usage
The native method temporarily only supports jpeg base64 format output.

```js
Const captcha = new Captcha(120, 50, 4);

Const {dataURL, text} = captcha.createCaptcha();
```

But support free combination, you can adjust ctx at any time, or add more operations.
```js
// captcha initialization
Const captcha = new Captcha(120, 50, 4);

// canvasRenderingContext2D initialization
Const { canvas, ctx } = captcha.initCanvas();
// For example, attach an operation to ctx
ctx.globalAlpha = 0.8;
// draw text
Const text = captcha.drawText(ctx);
// interference line
captcha.drawLine(ctx);
// interference point
captcha.drawPoint(ctx);

// captcha or canvas can be used for image output
Const dataURL = captcha.toDataURL(canvas);
```
