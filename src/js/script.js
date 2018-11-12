require (`a-frame`);
const images = [`img_2, img_5`];
const scene = document.querySelector(`#a-entity`);
const camera = document.querySelector(`#cameraWrapper`);
let count = 34;
//const startPos = document
//const mainScene = document.querySelector(`.a-scene`);
const init = () => {

  //const shelf = document.querySelector(`.shelf`);
  
  for (let i = 0; i < 20; i++) {
    const offset = -5 + i * 2;
    console.log(offset);
    const newShelfLeft = document.createElement(`a-entity`);
    newShelfLeft.setAttribute(`geometry`, {
      primitive: `box`,
      height: 4,
      width: 2,
      depth: .3,
    });

    newShelfLeft.setAttribute(`multisrc`, {
      src4: `#img_2`,
    });
 

    newShelfLeft.setAttribute(`buffer`, true);
    newShelfLeft.object3D.position.set(4.5, 2, offset);
    //newShelf.setAttribute(`position`, {x: 0, y: 0, z: 0});
    console.log(newShelfLeft);
    scene.appendChild(newShelfLeft);
    
    const newShelfRight = document.createElement(`a-entity`);
    newShelfRight.setAttribute(`geometry`, {
      primitive: `box`,
      height: 4,
      width: 2,
      depth: .3,
    });

    newShelfRight.setAttribute(`multisrc`, {
      src4: `#img_5`,
    });
    newShelfRight.setAttribute(`buffer`, true);
    newShelfRight.object3D.position.set(-4.5, 2, offset);
    scene.appendChild(newShelfRight);
  }
  console.log(scene);
  window.addEventListener(`touchstart`, handleTouch);
  window.addEventListener(`click`, handleTouch);

  window.addEventListener(`touchend`, handleTouchOff);
 
};

const handleTouch = () => {
  
  // if (mouseUp === false ) {
    
  // }

  count--;
  camera.object3D.position.set(0, 0, count);
  //zoomInInterval = window.setInterval(handleTouch, 1000);
};

const handleTouchOff = () => {
  
  // if (mouseDown === false ) {
  //   count ++;  
  //   //zoomInInterval = window.setInterval(handleTouchOff, 1000);
  // }
 
  console.log(mouseDown);
  camera.object3D.position.set(0, 0, count);
  //zoomInInterval = window.setInterval(handleTouch, 1000);
};


const animate = s => {
  count += s;
  //console.log(count);
  count * .5;
  camera.object3D.position.set(0, 0, count);
  window.setInterval(animate, 6000);
};

init();