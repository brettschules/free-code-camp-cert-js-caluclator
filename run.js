class CellDisplay {

  render(item) {
    return `<div>${item}</div>`
  }
}

class Operators {

}

class Numbers {
  constructor() {
    this.arrayOfItems = [];
  }

  createNumberRows() {
    var cellDisplay = new CellDisplay();
    var newRow = false;
    for (var i = 1; i < 10; i++) {
      // create row to only push every three number
      this.arrayOfItems.push(`<div>${cellDisplay.render(i.toString())}</div>`)
    }
  }

  render() {
    this.arrayOfItems;
    debugger
  }
}

var n = new Numbers();
n.createNumberRows();

console.log(n.render());

class Calucator {

}

class App {
  constructor() {

  }
}
