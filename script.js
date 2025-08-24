const modeToggle = document.getElementById('switch-sun-moon');
const body = document.body;

modeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('sayHiBtn');
  if (btn) btn.addEventListener('click', () =>
    alert('Hello! Thanks for visiting my profile 🚀')
  );
});
