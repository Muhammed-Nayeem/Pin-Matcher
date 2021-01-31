//Pin Generate Function:
function pinGenerate() {
  const randomPin = Math.random() * 10000;
  const getPin = (randomPin + "").split(".")[0];
  if (getPin.length === 4) {
    return getPin;
  } else {
    return pinGenerate();
  }
}

/**
 * Pin Generate Alternate Function:
function pinGenerate() {
  const randomPin = Math.floor(Math.random() * 10000);
  const getPin = randomPin + "";
  if (getPin.length === 4) {
    return getPin;
  } else {
    return pinGenerate();
  }
}
*/

//Pin Generator Button Function:
const pinGeneratorButton = document.getElementById("pin-generator");
pinGeneratorButton.addEventListener("click", function () {
  //Display the Generated Pin:
  const pinDisplay = document.getElementById("pin-display");
  pinDisplay.value = pinGenerate();
});
