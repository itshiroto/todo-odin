import render from '../../components/todo-item.js'
import Todo from './todo-class.js'

let test = [
    new Todo("Hello World!", "Test", "12-10-22", "Urgent"),
    new Todo("Hello Rivo!", "Test", "12-10-22", "Urgent"),
    new Todo("Hello Regar!", "Test", "12-10-22", "Urgent"),
    new Todo("Hello Glen!", "Test", "12-10-22", "Urgent"),
  ]

export default(obj) => {
  console.log(test);
  test.forEach(item => render(item));
}

