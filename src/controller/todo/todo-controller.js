import { render } from '../../components/todo-item.js'
import Todo from './todo-class.js'

let data = [
  new Todo("Hello World!", "Test", "12-10-22", "Urgent"),
  new Todo("Hello Rivo!", "Test", "12-10-22", "Urgent"),
  new Todo("Hello Regar!", "Test", "12-10-22", "Urgent"),
  new Todo("Hello Glen!", "Test", "12-10-22", "Urgent"),
]

export function test() {
  console.log(data);
  data.forEach(item => render(item));
}

