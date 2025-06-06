// pick the date input and all 12 value cells
const datePicker = document.getElementById('datePicker');
const cells = document.querySelectorAll('.value');

datePicker.addEventListener('change', () => {
  cells.forEach(cell => {
    cell.textContent = Math.floor(Math.random() * 100); // 0-99
  });
});

const toCitySelect = document.getElementById("toCity");
const fromCell = document.querySelector(".from");
const toCell = document.querySelector(".to");
const distanceCell = document.querySelector(".distance");
const timeCell = document.querySelector(".time");
const modeCell = document.querySelector(".mode");


const routeData = {
  "Colombo": { distance: 30, time: "45 mins - 1 hr 15 mins", mode: "Bus/Car/Train" },
  "Negombo": { distance: 22, time: "35 - 50 mins", mode: "Bus/Car" },
  "Minuwangoda": { distance: 12, time: "20 - 30 mins", mode: "Bus/Car" },
  "Ja-Ela": { distance: 16, time: "25 - 40 mins", mode: "Bus/Car/Train" },
  "Wattala": { distance: 23, time: "40 mins - 1 hr", mode: "Bus/Car" },
  "Kelaniya": { distance: 20, time: "35 - 55 mins", mode: "Bus/Car" },
  "Ragama": { distance: 15, time: "25 - 40 mins", mode: "Train/Bus/Car" },
  "Kadawatha": { distance: 10, time: "20 - 30 mins", mode: "Bus/Car" },
  "Kiribathgoda": { distance: 17, time: "30 - 45 mins", mode: "Bus/Car" },
  "Veyangoda": { distance: 8, time: "15 - 25 mins", mode: "Car/Train/Bus" },
  "Divulapitiya": { distance: 18, time: "30 - 45 mins", mode: "Bus/Car" },
  "Seeduwa": { distance: 16, time: "25 - 40 mins", mode: "Train/Car/Bus" },
  "Yakkala": { distance: 5, time: "10 - 15 mins", mode: "Bus/Car" }
};

toCitySelect.addEventListener("change", () => {
  const selectedCity = toCitySelect.value;
  const data = routeData[selectedCity];
  
  fromCell.textContent = "Gampaha";
  toCell.textContent = selectedCity;
  distanceCell.textContent = data.distance + " km";
  timeCell.textContent = data.time;
  modeCell.textContent = data.mode;
});
