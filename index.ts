// Import stylesheets
import './style.css';

class Foo {
  static instanceCount = 0;
  constructor() {
    Foo.instanceCount++;
  }
}

const foo1 = new Foo();
const foo2 = new Foo();
const foo3 = new Foo();

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Number of Foo instances: ${Foo.instanceCount}</h1>`;