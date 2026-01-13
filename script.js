const facts = [
  "Penguins can drink seawater.",
  "Penguins 'fly' underwater.",
  "Emperor penguins can dive deep!"
];

document.getElementById('factBtn').addEventListener('click', () => {
  const i = Math.floor(Math.random() * facts.length);
  document.getElementById('penguinFact').innerText = facts[i];
});
