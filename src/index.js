const body = document.querySelector('#content');
import './css/index.css';

const nav = (() => {
  const menu = [
    'Home',
    'Contact',
    'Projects'
  ]
  const base = () => {
    const el = document.createElement('div');
    el.classList.add("sticky", "top-0", "w-full", "bg-slate-900")
    return el;
  }
  const addChild = () => {
    const base = document.createElement('div');
    menu.forEach(el => {
      const button = document.createElement('div');
      const text = document.createElement('p');
      text.textContent = el;
      text.classList.add('text-white')
      button.classList.add('w-48', 'text-center')
      button.appendChild(text);
      base.appendChild(button);
    })
    base.classList.add("flex", "flex-auto", "justify-center")
    return base;
  }
  return () => {
    const bar = base();
    bar.appendChild(addChild());
    return bar;
  }
})()

body.appendChild(nav());
