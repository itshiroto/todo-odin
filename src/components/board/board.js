const base = document.createElement('div');

export function clear() {
  base.innerHTML = "";
}

export function render(content) {
  base.append(content);
}

export function init() {
  base.classList.add(
    "bg-zinc-800",
    "px-24",
    "py-16",
    "h-screen",
    "flex-grow",
  );
  base.id = "board";
  return base;
}
