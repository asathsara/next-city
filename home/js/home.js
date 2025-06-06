// pick the date input and all 12 value cells
const datePicker = document.getElementById('datePicker');
const cells      = document.querySelectorAll('.value');

datePicker.addEventListener('change', () => {
  cells.forEach(cell => {
    cell.textContent = Math.floor(Math.random() * 100); // 0-99
  });
});
