import header from './board-header.js'

const base = document.createElement('div');
const todoList = document.createElement('div');

const addButton = () => {
  const btn = document.createElement("div");
  const text = document.createElement("p");
  btn.classList.add(
    "w-full",
    "py-1",
    "mt-3",
    "rounded-lg",
    "border", "border-zinc-600",
    "text-center",
    "hover:bg-zinc-700",
    "hover:border-transparent",
    "transition",
    "cursor-pointer"
  )
  text.textContent = "Add Item";
  btn.append(text);
  return btn;
}

export function clearTodo() {
  todoList.innerHTML = "";
}

export function renderTodo(content) {
  todoList.append(content);
}

export function init() {
  base.classList.add(
    "bg-zinc-800",
    "py-16",
    "px-32",
    "h-screen",
    "flex-grow",
  );
  todoList.id = "board-todolist";
  base.id = "board"
  base.append(
    header("Default"),
    todoList,
    addButton()
  );
  return base;
}
