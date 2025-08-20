class Coords {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function randReAds(clientWidth, clientHeight, adWidth = 200, adHeight = 200, numAds = 20) {
  let realAdCoords = [];

  while (realAdCoords.length < numAds) {
    let x = Math.random() * (clientWidth - adWidth);
    let y = Math.random() * (clientHeight - adHeight);

    let newCoord = new Coords(x, y);
    let overlaps = realAdCoords.some(c => {
      return !(newCoord.x + adWidth < c.x || // to the left
               newCoord.x > c.x + adWidth || // to the right
               newCoord.y + adHeight < c.y || // above
               newCoord.y > c.y + adHeight);  // below
    });

    if (!overlaps) {
      realAdCoords.push(newCoord);
    }
  }

  return realAdCoords;
}

