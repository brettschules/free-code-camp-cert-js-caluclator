class CellDisplay {
  render(item) {
    return `<button type="button" class="btn btn-primary">${item}</button>`;
  }
}

class GenerateDisplay {
  constructor() {
    this.numberItems = [];
  }

  createNumberRows() {
    var cellDisplay = new CellDisplay();
    var newRow = false;
    var string = '';
    for (var i = 1; i < 10; i++) {
      // creates row to only push every three number
      string += `<div class="col-md-3 key" id=${i}>${cellDisplay.render(i.toString())}</div>`;
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
    var calucatorElement = document.getElementById("calucator");
    var joinedHtml = this.numberItems.join('');
    this.addToHtml(joinedHtml, calucatorElement);
    return calucatorElement
  }
}





class Calucator {
  constructor() {
    this.n = new GenerateDisplay();
    this.n.createNumberRows();
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
