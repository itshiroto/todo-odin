import sidebar from '../components/sidebar/sidebar.js'
import { init as board } from '../components/board/board.js'
import test from './todo/todo-controller.js'

import '../css/index.css';

const body = document.querySelector('#content');


export function init() {
  console.log("executed")
  body.classList.add(
    "flex",
    "text-white"
  );
  body.appendChild(sidebar())
  body.appendChild(board())
  test();
}

