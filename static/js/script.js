let flameSize = 4;

function myFunction() {
  const flame = document.querySelector('.flame');
  console.log(flame);
  flameSize = ++flameSize;
  flame.style.setProperty(
    'transform',
    `scale(${flameSize})
    translate(-13px, -15px)`,
  );

  if(flameSize > 12){
    console.log("in flames.....");    
  }
}

