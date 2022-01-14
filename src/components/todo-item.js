import { renderTodo as renderToBoard } from './board/board.js'

const todo = (obj) => {
  const base = document.createElement('div');
  base.classList.add(
    "flex",
    "justify-between",
    "py-1", "px-3",
    "my-1",
    "rounded-lg",
    "hover:bg-zinc-700",
    "transition"
  )
  base.append(
    _title(obj.title),
    _properties(obj.priority, obj.dueDate)
  )
  return base;
}

const _checkpoint = (condition) => {
  // TODO
}
const _title = (text) => {
  const title = document.createElement('h3');
  title.textContent = text
  return title
}

const _priority = (priority) => {
  const base = document.createElement("div");
  const text = document.createElement("p");

  base.classList.add(
    "flex",
    "items-center",
    "bg-violet-600",
    "px-3",
    "text-sm",
    "rounded-full",
  )

  text.textContent = priority;
  base.append(text);

  return base;
}

const _dueDate = (dueDate) => {
  const base = document.createElement('div');
  const text = document.createElement('p');
  const icon = document.createElement('span')

  base.classList.add("flex", "items-center", "gap-2")

  icon.classList.add("iconify-inline");
  icon.dataset.icon = "fa-regular:clock";

  text.textContent = dueDate.toLocaleDateString();
  base.append(icon, text);
  return base;
}

const _properties = (priority, dueDate) => {
  const base = document.createElement('div');
  base.classList.add(
    'flex',
    'gap-5'
  )
  base.append(_priority(priority), _dueDate(dueDate))
  return base;
}

export function render(obj) {
  renderToBoard(todo(obj));
}

