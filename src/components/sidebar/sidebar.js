import { clear as boardClear } from '../board/board.js'
let menu = ["Primary", "Today", "Upcoming"];

const base = () => {
  const el = document.createElement('div');
  el.classList.add(
    "w-80",
    "h-screen",
    "p-5",
    "bg-zinc-600",
    "text-white"
  );
  return el;
}

const mainMenu = () => {
  const base = document.createElement('div');
  base.classList.add("mt-5");
  menu.forEach(item => base.append(button(item)));
  return base;
}

const button = (item) => {
  const button = document.createElement('div');
  const text = document.createElement('p');

  button.classList.add("btn-primary");
  text.textContent = item;
  button.onclick = () => boardClear();
  button.append(text);

  return button;
}

export default function render() {
  const sidebar = base();
  sidebar.id = "sidebar";
  sidebar.append(mainMenu())
  return sidebar;
}
