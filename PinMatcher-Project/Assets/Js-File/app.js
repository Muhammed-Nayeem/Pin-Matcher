//Pin Generate Function:
/** 
  function RandomPinGenerate() {
    const randomPin = Math.random() * 10000;
    const getPin = (randomPin + "").split(".")[0];
    if (getPin.length === 4) {
    return getPin;
    } else {
      return RandomPinGenerate();
    }
  }
*/

//Pin Generate Alternate Function:
function RandomPinGenerate() {
  const randomPin = Math.floor(Math.random() * 10000);
  const getPin = randomPin + "";
  if (getPin.length === 4) {
    return getPin;
  } else {
    return RandomPinGenerate();
  }
}

//Pin Generator Button Function:
function pinGenerateButton() {
  //Display the Generated Pin:
  const pinDisplay = document.getElementById("pin-display");
  pinDisplay.value = RandomPinGenerate();
}

//Typed in Input Field section:
const buttonContainer = document.getElementById("button-container");
buttonContainer.addEventListener("click", function (event) {
  const digit = event.target.innerText;
  if (isNaN(digit)) {
    //Backspace handler:
    if (digit === "B") {
      let valueGet = document.getElementById("typed-input-display").value;
      document.getElementById("typed-input-display").value = valueGet.substr(0, valueGet.length - 1);
    }
    //Clear handler:
    if (digit === "C") {
      document.getElementById("typed-input-display").value = "";
    }
  } else {
    const typedInputDisplay = document.getElementById("typed-input-display");
    typedInputDisplay.value = typedInputDisplay.value + digit;
  }
});

//Submit Button: Verified the tow display numbers is matching or not!
function verifyInputNumber() {
  const pin = document.getElementById("pin-display").value;
  const typedPin = document.getElementById("typed-input-display").value;
  if (pin !== 4 && typedPin === "") {
    alert("Please Enter 4 Digit Codes.");
  } else if (pin === typedPin) {
    displayStyleSet("block", "none");
  } else {
    displayStyleSet("none", "block");
    howManyTryLeft();
  }
}

//Display Style set Function:
function displayStyleSet(correctMatch, wrongMatch) {
  const correct = document.getElementById("correct-matching");
  correct.style.display = correctMatch;
  const wrong = document.getElementById("wrong-matching");
  wrong.style.display = wrongMatch;
}

//How Many Try Left Function:
function howManyTryLeft() {
  let count = parseInt(document.getElementById("try-left").innerText - 1);
  if (count >= 0) {
    document.getElementById("try-left").innerText = count;
  } else {
    const submitButton = document.getElementById("submit-btn");
    submitButton.disabled = "true";
  }
}