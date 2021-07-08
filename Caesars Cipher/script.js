const charInput = document.getElementById("char-input");
const convertBtn = document.getElementById("convert-btn");
const resultAlert = document.getElementById("result-alert");


function rot13(str) {
  let charArr = [];
  let regex = /[A-Z]/;

  str = str
    .toUpperCase()
    .split("")
    .forEach(char => {
      if(regex.test(char)) {
          charArr.push(char.charCodeAt(0));
      } else {
          charArr.push(char);
      }
      return charArr;
    });

  let cipher = charArr.map(num => {
    return convertAlgorithm(num);
  });

  function convertAlgorithm(num) {
    if(/\d/.test(num)) {
        return convertToChar();
    } else {
        return num;
    }
    
    function convertToChar() {
      num = (num + 13) % 91;

      if(num < 65 && num !== 45) {
          return num + 65;
      } else {
          return num;
      }
    }
  };

  let newStrArr = [];
  let newStr = cipher.forEach(val => {
    if(/\d/.test(val)) {
        newStrArr.push(String.fromCharCode(val));
    } else {
        newStrArr.push(val);
    }
  });

  newStr = newStrArr.join("");

  return resultAlert.innerText = newStr;
}

// Press Enter Event
charInput.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
      let charValue = charInput.value;
      convertBtn.click();

      return rot13(charValue);
  }
});

// Click Event
convertBtn.addEventListener('click', () => {
  let charValue = charInput.value;

  return rot13(charValue);
});