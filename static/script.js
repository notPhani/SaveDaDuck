import { randReAds, randImAds } from './utils.js';

const bigAhhDiv = document.getElementById("bigAhhDiv");
let clientWidth_ = bigAhhDiv.clientWidth;
let clientHeight_ = bigAhhDiv.clientHeight;

let realAdCoords = randReAds(clientWidth_, clientHeight_, 200, 200, 20);
console.log(realAdCoords);

let fakeAdCoords = randImAds(clientWidth_, clientHeight_, 200, 200, 80);
console.log(fakeAdCoords);
