const checkBtn = document.getElementById("check-btn");
const numInput = document.getElementById("num-input");
const resultAlert = document.getElementById("result-alert");


function telephoneCheck(str) {
  const regex = /^([1]{1}[ -]?)?([(]\d{3}[)]|\d{3})[ -]?\d{3}[ -]?\d{4}$/;

  if(regex.test(str)) {
    return changeAlertTrue();
  } else {
    return changeAlertFalse();
  }
}

function changeAlertTrue() {
  resultAlert.innerText = `"${numInput.value}" is a valid UK Telephone Number!`;
  resultAlert.className = "alert alert-success my-4";
}

function changeAlertFalse() {
  resultAlert.innerText = `"${numInput.value}" is an unvalid UK Telephone Number!`;
  resultAlert.className = "alert alert-danger my-4";
}

// Press Enter Event
numInput.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
      let numValue = numInput.value;
      checkBtn.click();

      return telephoneCheck(numValue);
  }
});

// Click Event
checkBtn.addEventListener('click', () => {
  let numValue = numInput.value;

  return telephoneCheck(numValue);
});