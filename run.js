class CellDisplay {
  render(item) {
    return `<button type="button" class="btn btn-primary">${item}</button>`;
  }
}

class GenerateDisplay {
  constructor() {
    this.cellDisplay = new CellDisplay();
    this.numberItems = [];
    this.operatorItems = [];
    this.operators = ["+","-","x","/"]
  }

  createOperatorRows() {
    for (let i = 0; i < this.operators.length; i++) {
      // creates row to only push every three number
        let string = `<div class="row"><div class="col-md-3 key" id="${this.operators[i]}">${this.cellDisplay.render(this.operators[i])}</div></div>`;
        this.operatorItems.push(string);
      }
  }

  createNumberRows() {
    var string = '';
    for (var i = 1; i < 10; i++) {
      // creates row to only push every three number
      string += `<div class="col-md-3 key" id=${i}>${this.cellDisplay.render(i.toString())}</div>`;
      if (i % 3 === 0) {
        var htmlString = `<div class="row">${string}</div>`
        this.numberItems.push(htmlString);
        string = '';
      }
    }
  }

  addToHtml(html, element) {
    element.innerHTML = html;
  }

  render() {
    var numbersElement = document.getElementById("numbers");
    var joinedNumbersHtml = this.numberItems.join('');
    this.addToHtml(joinedNumbersHtml, numbersElement);

    var operatorsElement = document.getElementById("operators");
    var joinedOperatorsHtml = this.operatorItems.join('');
    this.addToHtml(joinedOperatorsHtml, operatorsElement);
  }
}

class Calucator {
  constructor() {
    this.n = new GenerateDisplay();
    this.n.createNumberRows();
    this.n.createOperatorRows();
    this.n.render();
    this.numbers = '';
    this.currentDisplay = '';
    this.num1 = null
    this.start = true;
    this.timesStart = true;
    this.lastOperator = '';
    this.total = 0;
  }

  addEventListenerToNumberButtons() {
    var buttonElements = document.getElementsByClassName('key');
    var totalElement = document.getElementById('total')
    var clearElement = document.getElementById('clear')
    for (var i = 0; i < buttonElements.length; i++) {
      buttonElements[i].addEventListener("click", this.display.bind(this))
    }
    totalElement.addEventListener("click", this.getTotal.bind(this))
    clearElement.addEventListener("click", this.clear.bind(this))
  }

  display(test) {
    var value = test.currentTarget.id;
    var element = document.getElementById("display");
    this.currentDisplay += value;
    if (!this.n.operators.includes(value)) {
      this.currentNumber = value
    }
    element.innerHTML = this.currentNumber;
    this.calculate(value);
  }

  getTotal() {
    this.calculate(this.lastOperator)
  }

  calculate(currentOperator) {
    var element = document.getElementById("display");

    switch (currentOperator) {
      case '+':
      this.total += parseInt(this.currentNumber, 10)
      element.innerHTML = this.total;
      this.lastOperator = '+'
      break;

      case '-':
        if (this.start) {
          this.total = parseInt(this.currentNumber, 10);
          this.start = false;
        }
        this.total -= parseInt(this.currentNumber, 10)
        element.innerHTML = this.total;
        this.lastOperator = '-';
        break

      case 'x':
        if (this.start) {
          this.total = 1;
          this.start = false;
        }
        this.total *= parseInt(this.currentNumber, 10)
        element.innerHTML = this.total;
        this.lastOperator = 'x';
        console.log(this.total, 'total');
        console.log(this.currentNumber, 'currentNumber');
        break

      case '/':
      if (this.start) {
        this.total  = this.total + 1 * this.currentNumber;
        this.start = false;
      }
      this.total /= parseInt(this.currentNumber, 10)
        element.innerHTML = this.total;
        console.log(this.currentNumber);
        console.log(this.total);
        break;
    default:
    }
    console.log(this.total, 'total');
  }

  clear() {
    this.numbers = '';
    this.currentDisplay = '';
    this.num1 = null
    this.start = true;
    this.timesStart = true;
    this.lastOperator = '';
    this.total = 0;
    document.getElementById("display").innerHTML = this.currentDisplay
  }

  // checkForOperators(currentValue) {
  //   if (currentValue === '+') {
  //     this.total += parseInt(this.numbers, 10)
  //     this.numbers = '';
  //   }
  //   console.log(this.numbers);
  //
  //
  //
  //   // }
  // }


}

window.onload = function(){
  var n = new Calucator();
  n.addEventListenerToNumberButtons();
}

class App {
  constructor() {

  }
}
