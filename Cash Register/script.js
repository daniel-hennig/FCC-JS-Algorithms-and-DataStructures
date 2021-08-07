const body = document.querySelector("body");
const depositBtn = document.getElementById("deposit-btn");
const registerContainer = document.getElementById("register-container");
const registerContent = document.getElementById("register-content");
const penny = document.getElementById('PENNY');
const nickel = document.getElementById('NICKEL');
const dime = document.getElementById('DIME');
const quarter = document.getElementById('QUARTER');
const one = document.getElementById('ONE');
const five = document.getElementById('FIVE');
const ten = document.getElementById('TEN');
const twenty = document.getElementById('TWENTY');
const oneHundred = document.getElementById('ONE-HUNDRED');

function errorMessage() {
  let invalidNumber = document.createElement("p");
  invalidNumber.setAttribute("id", "invalid-number");
  invalidNumber.innerText = "Please enter a valid number";
  invalidNumber.style.color = "red";

  return invalidNumber;
}

function invalidDollarValueMessage() {
  let invalidDollarValue = document.createElement("p");
  invalidDollarValue.setAttribute("id", "invalid-dollar-value");
  invalidDollarValue.innerText = "Please enter a correct dollar value";
  invalidDollarValue.style.color = "red";

  return invalidDollarValue;
}

// dynamically enable/ disable submit button
function buttonActivation() {
  const inputs = document.getElementsByTagName('input');
  const button = document.getElementsByTagName("button");
  let emptyCounter = 0;

  for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", (e) => {
      emptyCounter = 0;
      for(let j = 0; j < inputs.length; j++) {
        let value = inputs[j].value;
        button[0].disabled = false;
  
        if(value === "") {
          emptyCounter++;
        }
  
        if(emptyCounter === inputs.length) {
          button[0].disabled = true;
        }

        if(inputs.length === 2) {
          if(inputs[0].value === "" || inputs[1].value === "") {
            button[0].disabled = true;
          }
        }
      }  
    });
  }
}

function handleInputs() {
  const inputs = document.getElementsByTagName('input');
  const button = document.getElementsByTagName("button");
  const regex = /^\d+(,|.\d\d?)?$/;

  for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", (e) => {
      for(let j = 0; j < inputs.length; j++) {
        let value = inputs[j].value;
  
        if(value === "") {
          // remove error message below the VALID input number
          if(inputs[j].parentNode.lastChild.id === "invalid-number") {
            inputs[j].parentNode.lastChild.remove();
          }

          value = 0;
        } else {
          if(regex.test(value)) {
            value = value.replace(/,/, ".");
            value = parseFloat(value);

            // remove error message below the VALID input number
            if(inputs[j].parentNode.lastChild.id === "invalid-number") {
              inputs[j].parentNode.lastChild.remove();
            }  

          } else {
            // show error message below the INVALID input number + disable submit button
            if(inputs[j].parentNode.lastChild.id !== "invalid-number") {
              inputs[j].parentNode.appendChild(errorMessage());
            }

            button[0].disabled = true;
          }          
        }
      }  
    });
  }
}

buttonActivation();
handleInputs();

depositBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    let cid = [
      ["PENNY", penny.value], ["NICKEL", nickel.value], ["DIME", dime.value], ["QUARTER", quarter.value], ["ONE", one.value], ["FIVE", five.value], ["TEN", ten.value], ["TWENTY", twenty.value], ["ONE HUNDRED", oneHundred.value]
    ];

    const currencyVal = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    }

    cid.forEach(arr => {
      if((Math.ceil(arr[1]*100)) % (currencyVal[arr[0]] * 100) != 0) {
        switch (arr[0]) {
          case "PENNY":
            if(penny.parentNode.lastChild.id !== "invalid-dollar-value") {
              penny.parentNode.appendChild(invalidDollarValueMessage());
            }
            break;
          case "NICKEL":
            if(nickel.parentNode.lastChild.id !== "invalid-dollar-value") {
              nickel.parentNode.appendChild(invalidDollarValueMessage());
            }
            break;
          case "DIME":
            if(dime.parentNode.lastChild.id !== "invalid-dollar-value") {
              dime.parentNode.appendChild(invalidDollarValueMessage());
            }
            break;
          case "QUARTER":
            if(quarter.parentNode.lastChild.id !== "invalid-dollar-value") {
              quarter.parentNode.appendChild(invalidDollarValueMessage());
            }
            break;
          case "ONE":
            if(one.parentNode.lastChild.id !== "invalid-dollar-value") {
              one.parentNode.appendChild(invalidDollarValueMessage());
            }
            break;
          case "FIVE":
            if(five.parentNode.lastChild.id !== "invalid-dollar-value") {
              five.parentNode.appendChild(invalidDollarValueMessage());
            }
            break;
          case "TEN":
            if(ten.parentNode.lastChild.id !== "invalid-dollar-value") {
              ten.parentNode.appendChild(invalidDollarValueMessage());
            }
            break;
          case "TWENTY":
            if(twenty.parentNode.lastChild.id !== "invalid-dollar-value") {
              twenty.parentNode.appendChild(invalidDollarValueMessage());
            }
            break;
          case "ONE HUNDRED":
            if(oneHundred.parentNode.lastChild.id !== "invalid-dollar-value") {
              oneHundred.parentNode.appendChild(invalidDollarValueMessage());
            }
            break;
        }
      } else {
        switch (arr[0]) {
          case "PENNY":
            if(penny.parentNode.lastChild.id === "invalid-dollar-value") {
              penny.parentNode.lastChild.remove();
            }
            break;
          case "NICKEL":
            if(nickel.parentNode.lastChild.id === "invalid-dollar-value") {
              nickel.parentNode.lastChild.remove();
            }
            break;
          case "DIME":
            if(dime.parentNode.lastChild.id === "invalid-dollar-value") {
              dime.parentNode.lastChild.remove();
            }
            break;
          case "QUARTER":
            if(quarter.parentNode.lastChild.id === "invalid-dollar-value") {
              quarter.parentNode.lastChild.remove();
            }
            break;
          case "ONE":
            if(one.parentNode.lastChild.id === "invalid-dollar-value") {
              one.parentNode.lastChild.remove();
            }
            break;
          case "FIVE":
            if(five.parentNode.lastChild.id === "invalid-dollar-value") {
              five.parentNode.lastChild.remove();
            }
            break;
          case "TEN":
            if(ten.parentNode.lastChild.id === "invalid-dollar-value") {
              ten.parentNode.lastChild.remove();
            }
            break;
          case "TWENTY":
            if(twenty.parentNode.lastChild.id === "invalid-dollar-value") {
              twenty.parentNode.lastChild.remove();
            }
            break;
          case "ONE HUNDRED":
            if(oneHundred.parentNode.lastChild.id === "invalid-dollar-value") {
              oneHundred.parentNode.lastChild.remove();
            }
            break;
        }
      }
    });

    const itemContent = document.querySelectorAll(".item_content");
    let errCounter = 0;

    itemContent.forEach(item => {
      if(item.lastChild.id === "invalid-dollar-value") {
        errCounter++;
      }
    });

    if(errCounter === 0) {
      loadOrderPage();
    }

    function loadOrderPage() {
      registerContainer.innerHTML = `
          <h2 class="fs-5 fw-light mb-3 text-center">Order</h2>
          <form action="">
              <div class="register_content_seller" id="register-content-seller"></div>
              <div class="register_content_buyer" id="register-content-buyer"></div>
              <div class="d-grid col-md-6 mx-auto" id="button">
                  <button class="btn btn-primary btn-lg my-3 button_radius" tabindex="-1" role="button" aria-disabled="true" disabled id="sell-btn">Sell</button>
              </div>        
          </form>
      `;
  
      const registerContentSeller = document.getElementById("register-content-seller");
      const registerContentBuyer = document.getElementById("register-content-buyer");
      
      registerContentSeller.innerHTML = `
          <div class="mb-3">
              <label for="item" class="item mb-2">Seller</label>
              <input class="form-control item_dollar" id="price" placeholder="Enter price here" autocomplete="off"></input>
          </div>
      `;
  
      registerContentBuyer.innerHTML = `
          <div class="mb-3">
          <label for="item" class="item mb-2">Buyer</label>
          <input class="form-control item_dollar" id="cash" placeholder="Enter cash here" autocomplete="off"></input>
          </div>
      `;

      buttonActivation();
      handleInputs();
      cantAffordAlert();
    }

    function cantAffordAlert() {
      const inputs = document.getElementsByTagName('input');
      const sellBtn = document.getElementById("sell-btn");

      sellBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let price = inputs[0].value;
        let cash = inputs[1].value;
        price = price.replace(/,/, ".");
        cash = cash.replace(/,/, ".");
        price = parseFloat(price);
        cash = parseFloat(cash);

        if(price > cash) {
          let cantAffordOverlay = document.createElement("div");
          cantAffordOverlay.className = "overlay";

          let cantAffordWrapper = document.createElement("div");
          cantAffordWrapper.className = "d-flex align-items-center justify-content-center vw-100 vh-100 position-absolute";
          cantAffordWrapper.style.minHeight = "100vh";
          cantAffordWrapper.style.minWidth = "100vw";
          cantAffordWrapper.style.top = "0";

          let cantAffordContainer = document.createElement("div");
          cantAffordContainer.className = "d-flex flex-column align-items-center justify-content-center rounded-3 position-absolute";
          cantAffordContainer.style.height = "200px";
          cantAffordContainer.style.width = "50vw";
          cantAffordContainer.style.backgroundColor = "#eee";
          cantAffordContainer.style.zIndex = "100";
          
          let cantAffordText = document.createElement("p");
          cantAffordText.innerText = "In order to sell, you need more cash or a lower price!";
          cantAffordText.style.padding = "20px 20px 10px";
          cantAffordText.style.color = "black";

          let cantAffordBtn = document.createElement("button");
          cantAffordBtn.innerText = "OK";
          cantAffordBtn.className = "btn btn-primary";
          cantAffordBtn.addEventListener("click", (e) => {
            body.removeChild(cantAffordOverlay);
            body.removeChild(cantAffordWrapper);
            cantAffordWrapper.removeChild(cantAffordContainer);
            cantAffordContainer.removeChild(cantAffordText);
            cantAffordContainer.removeChild(cantAffordBtn);              
          });
          
          body.appendChild(cantAffordOverlay);
          body.appendChild(cantAffordWrapper);
          cantAffordWrapper.appendChild(cantAffordContainer);
          cantAffordContainer.appendChild(cantAffordText);
          cantAffordContainer.appendChild(cantAffordBtn);
        } else {
          loadChangePage(price, cash, cid);
        }          
      });
    }
    
    function loadChangePage(price, cash, cid) {
      registerContainer.innerHTML = `
          <h2 class="fs-5 fw-light mb-3 text-center">Change</h2>
          <p class="text-center" id="status"></p>
          <form action="">
              <div class="change_list" id="change-list"></div>
              <div class="d-grid col-md-6 mx-auto" id="button">
                  <button class="btn btn-primary btn-lg my-3 button_radius" id="reset-btn">Reset</button>
              </div>        
          </form>
      `;

      const changeList = document.getElementById("change-list");

      if(checkCashRegister(price, cash, cid).status === "OPEN") {
        const status = document.getElementById("status");
        status.innerText = "open";
        status.style.color = "green";

        let itemCounter = 0;
        
        checkCashRegister(price, cash, cid).change.forEach(item => {
          const regexOutput = /^\d+(,|.\d)$/;
          if(regexOutput.test(item[1])) {
            item[1] += "0";
          }

          if(itemCounter % 3 === 0 || itemCounter === 0) {
            changeList.innerHTML += `
              <div class="change_row row">
                <div class="text-center text-md-start col-md-4 mb-3 mb-md-4">
                  <label for="item" class="item mb-2">${item[0]}</label>
                  <p class="item_dollar fw-light" id="${item[0]}">$ ${item[1]}</p>
                </div>
              </div>
            `;
          } else {
            let newRow = document.querySelectorAll('.change_row');
            newRow[newRow.length-1].innerHTML += `
              <div class="text-center text-md-start col-md-4 mb-3 mb-md-4">
                  <label for="item" class="item mb-2">${item[0]}</label>
                  <p class="item_dollar fw-light" id="${item[0]}">$ ${item[1]}</p>
              </div>
            `;
          }

          itemCounter++;
        });
      }
      if(checkCashRegister(price, cash, cid).status === "CLOSED") {
        const status = document.getElementById("status");
        status.innerText = "closed";
        status.style.color = "red";

        let itemCounter = 0;
        
        checkCashRegister(price, cash, cid).change.forEach(item => {
          if(item[1] === "") {
            item[1] = 0;
          }

          const regexOutput = /^\d+[.]\d$/;
          if(regexOutput.test(item[1])) {
            item[1] += "0";
          }

          if(itemCounter % 3 === 0 || itemCounter === 0) {
            changeList.innerHTML += `
              <div class="change_row row">
                <div class="text-center text-md-start col-md-4 mb-3 mb-md-4">
                  <label for="item" class="item mb-2">${item[0]}</label>
                  <p class="item_dollar fw-light" id="${item[0]}">$ ${item[1]}</p>
                </div>
              </div>
            `;
          } else {
            let newRow = document.querySelectorAll('.change_row');
            newRow[newRow.length-1].innerHTML += `
              <div class="text-center text-md-start col-md-4 mb-3 mb-md-4">
                  <label for="item" class="item mb-2">${item[0]}</label>
                  <p class="item_dollar fw-light" id="${item[0]}">$ ${item[1]}</p>
              </div>
            `;
          }

          itemCounter++;
        });

      }    
      if(checkCashRegister(price, cash, cid).status === "INSUFFICIENT_FUNDS") {
        const status = document.getElementById("status");
        status.innerText = "INSUFFICIENT_FUNDS";
        status.style.color = "red";
      }    
    }
});

function checkCashRegister(price, cash, cid) {
  const cidCopy = JSON.parse(JSON.stringify(cid)); // JSON limitation might be slow, but for some reason even the faster solutions, like .slice(0) and the other ones, might not work without affecting the original array
  const revCid = cidCopy.reverse();

  const currencyVal = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }

  // convert cid-values from string to number
  cid.forEach(string => {
    return string[1] = parseFloat(string[1]);
  });

  cid.forEach(val => {
    if(isNaN(val[1])) {
      val[1] = 0;
    }
  });

  // sum up what we have in cash-in-drawer
  const cidSum = cid.reduce((acc, val) => {
    if(!isNaN(acc + val[1])) {
      return acc + val[1];
    }
  }, 0);

  // convert units in order to work aroung floating point number limitations
  function convertDollarToCent(val) {
    if(!Array.isArray(val) && typeof val === "object") {
      const currencyValCopy = {...val};

      for(let dollar in currencyValCopy) {
        currencyValCopy[dollar] *= 100;
      }
      return currencyValCopy;
    }
    if(Array.isArray(val)) {
      const currencyValCopy = [...val];

      currencyValCopy.forEach(dollar => {
        return dollar[1] *= 100;
      });
      return currencyValCopy;
    }
    else {
      return val * 100;
    }
  }

  const centPrice = convertDollarToCent(price);
  const centCash = convertDollarToCent(cash);
  const centUnit = convertDollarToCent(currencyVal);
  const centRevCid = convertDollarToCent(revCid);
  const centCidSum = convertDollarToCent(cidSum);
  let change = centCash - centPrice;

  let changeObj = {}

  function calculateChange() {
    for(let unit in centUnit) { // loop through each Currency Unit
      centRevCid.forEach(amount => {  // loop through each amount
        if(amount[1] >= centUnit[unit] && amount[0] === unit) { // check what I have in cash-in-drawer
          while(change - centUnit[unit] >= 0 && amount[1]) {
            // calculate the change and convert it into an object
            if(Object.keys(changeObj).length === 0 && changeObj.constructor === Object) {
              changeObj[unit] = centUnit[unit];
            } else {
              if(changeObj.hasOwnProperty(unit)) {
                changeObj[unit] += centUnit[unit];
              }
              if(!changeObj.hasOwnProperty(unit)) {
                changeObj[unit] = centUnit[unit];
              }
            }

            change -= centUnit[unit];
            amount[1] -= centUnit[unit];
          }
        }
      });
    }

    let changeArr = Object.entries(changeObj); // convert changeObj into an Array

    // convert the change-unit back from Cent into Dollar
    changeArr.forEach(cent => {
      return cent[1] /= 100;
    });

    return changeArr;
  }

  const sumChangeArr = calculateChange()
    .reduce((acc, val) => {
      if(!isNaN(acc + val[1])) {
        return acc + val[1] * 100;
      }
    }, 0);

  if(change < 0 || centCidSum - change <= 0 || change > sumChangeArr) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if(centCidSum === sumChangeArr) {
    return {status: "CLOSED", change: cid};
  } else {
    return {status: "OPEN", change: calculateChange()};
  }
}