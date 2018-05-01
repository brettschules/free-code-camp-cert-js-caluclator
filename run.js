class CellDisplay {

  render(item) {
    return `<div>${item}</div>`
  }
}

class Operators {

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
      string += `<div class="col-md-3">${cellDisplay.render(i.toString())}</div>`;
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

window.onload = function(){
  var n = new GenerateDisplay();
  n.createNumberRows();

  console.log(n.render());
}



class Calucator {

}

class App {
  constructor() {

  }
}
