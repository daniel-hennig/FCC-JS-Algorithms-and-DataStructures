const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const resultAlert = document.getElementById("result-alert");

function convertToRoman(num) {
    const romanNumerals = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      20: "XX",
      30: "XXX",
      40: "XL",
      50: "L",
      60: "LX",
      70: "LXX",
      80: "LXXX",
      90: "XC",
      100: "C",
      200: "CC",
      300: "CCC",
      400: "CD",
      500: "D",
      600: "DC",
      700: "DCC",
      800: "DCCC",
      900: "CM",
      1000: "M"
  };
  
    let objArr = [];
  
    // converting obj into an array
    for(let property in romanNumerals) {
      objArr.push(property);
    }

    // reverse the array
    objArr.sort((a, b) => b-a);
  
    let romanStr = "";
  
    objArr.forEach(val => {
      while(num >= val) {
        romanStr += romanNumerals[val];
        num -= val;
      }
      return romanStr;
    });  

    const regex = /^[0-9]*$/;

    if(regex.test(num)) {
      return resultAlert.innerText = romanStr;
    } else {
      return resultAlert.innerText = `"${numberInput.value}" is NOT a number!`;
    }
}

// Press Enter Event
numberInput.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
      let numberValue = numberInput.value;
      numberValue = parseInt(numberValue, 10);
      convertBtn.click();

      return convertToRoman(numberValue);
  }
});

// Click Event
convertBtn.addEventListener('click', () => {
  let numberValue = numberInput.value;
  numberValue = parseInt(numberValue, 10);

  return convertToRoman(numberValue);
});