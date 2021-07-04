const checkBtn = document.getElementById("check-btn");
const phraseInput = document.getElementById("phrase-input");
const resultAlert = document.getElementById("result-alert");

function palindrome(str) {
    const regex = /[^\W_]/g;
    const nonAlphaNumCharArr = str.match(regex);
  
    const newStr = nonAlphaNumCharArr
      .join("")
      .toLowerCase();
  
    const reverseStr = nonAlphaNumCharArr
      .reverse()
      .join("")
      .toLowerCase();
    
    if(newStr === reverseStr) {
        return changeAlertTrue();
    } else {
        return changeAlertFalse();
    }
}

function changeAlertTrue() {
    resultAlert.innerText = `Your phrase "${phraseInput.value}" is a Palindrome!`;
    resultAlert.className = "alert alert-success my-4";
}

function changeAlertFalse() {
    resultAlert.innerText = `Your phrase "${phraseInput.value}" is NOT a Palindrome!`;
    resultAlert.className = "alert alert-danger my-4";
}

// Press Enter Event
phraseInput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        let phraseValue = phraseInput.value;
        checkBtn.click();

        return palindrome(phraseValue);
    }
});

// Click Event
checkBtn.addEventListener('click', () => {
    let phraseValue = phraseInput.value;

    return palindrome(phraseValue);
});