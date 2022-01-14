const renderTitle = (text) => {
  const el = document.createElement('h1');
  el.textContent = text;
  el.classList.add(
    "text-4xl",
    "font-bold",
    "mb-2",
  )
  return el;
}
const renderDesc = (text) => {
  const el = document.createElement('p');
  el.textContent = text;
  el.classList.add(
    "text-lg",
  )
  return el;
}

export default (title, desc = "") => {
  const head = document.createElement('div');

  head.classList.add(
    "mb-6"
  )
  head.append(
    renderTitle(title),
    renderDesc(desc)
  )
  return head;
}
