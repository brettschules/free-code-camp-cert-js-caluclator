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
  }

  createOperatorRows() {
    const operators= ["+","-","X","/"]
    for (let i = 0; i < operators.length; i++) {
      // creates row to only push every three number
        let string = `<div class="row"><div class="col-md-3 key" id="${operators[i]}">${this.cellDisplay.render(operators[i])}</div></div>`;
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
  }

  addEventListenerToNumberButtons() {
    var buttonElements = document.getElementsByClassName('key');
    for (var i = 0; i < buttonElements.length; i++) {
      buttonElements[i].addEventListener("click", this.display.bind(this))
    }
  }

  display(test) {
    var value = test.currentTarget.id;
    var element = document.getElementById("display");
    element.innerHTML = value;
  }
}

window.onload = function(){
  var n = new Calucator();
  n.addEventListenerToNumberButtons();
}

class App {
  constructor() {

  }
}
