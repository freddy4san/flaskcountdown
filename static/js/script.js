let flameSize = 4;

function myFunction() {
  const flame = document.querySelector('.flame');
  console.log(flame);
  if(flameSize < 12){
    flameSize = ++flameSize;
    flame.style.setProperty(
      'transform',
      `scale(${flameSize})
      translate(-13px, -15px)`,
    );
  }

  if(flameSize == 10){
    console.log("in flames.....");
    const textelement = document.getElementById("flashtext");

    fetch('/message')
    .then(function (response) {
        return response.text ();
    }).then(function (text) {
        textelement.innerHTML = '<span class="type" style="--n:200">'+text+'</span>';
    });    
  }
}

