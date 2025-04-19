"use strict";
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const jasperImage = new Image(128, 128);
jasperImage.src = './build/jasper.png';
const jasper = { x: 0, y: 0, vel: { x: 5, y: -5 }, w: 128, h: 128 };
function main() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(jasperImage, jasper.x, jasper.y, jasper.w, jasper.h);
    jasper.x += jasper.vel.x;
    jasper.y += jasper.vel.y;
    // if (jasper.x < 0 || jasper.x > canvas.width - jasper.w) jasper.vel.x = -jasper.vel.x;
    // if (jasper.y < 0 || jasper.y > canvas.height - jasper.h) jasper.vel.y = -jasper.vel.y;
    if (jasper.x < 0) {
        jasper.x = 0;
        jasper.vel.x = -jasper.vel.x;
    }
    if (jasper.x > canvas.width - jasper.w) {
        jasper.x = canvas.width - jasper.w;
        jasper.vel.x = -jasper.vel.x;
    }
    if (jasper.y < 0) {
        jasper.y = 0;
        jasper.vel.y = -jasper.vel.y;
    }
    if (jasper.y > canvas.height - jasper.h) {
        jasper.y = canvas.height - jasper.h;
        jasper.vel.y = -jasper.vel.y;
    }
}
let width = window.innerWidth;
let height = window.innerHeight - window.innerHeight * 0.125;
canvas.width = width;
canvas.height = Math.floor(height);
window.addEventListener('resize', _ => {
    width = window.innerWidth;
    height = window.innerHeight - window.innerHeight * 0.125;
    canvas.width = width;
    canvas.height = Math.floor(height);
    console.log('resized');
});
setInterval(() => {
    main();
}, 1000 / 60);
