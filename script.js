let equal_pressed = 0;
let calculationHistory = []; // Array to store calculation history

let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let historyList = document.getElementById("history-list"); // Get history list element

window.onload = () => {
  input.value = "";
};

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
  });
});

equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
    // Add calculation to history
    calculationHistory.push(inp_val + " = " + input.value);
    updateHistoryList(); // Update history list
  } catch (err) {
    alert("Invalid Input");
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

// Function to update history list
function updateHistoryList() {
  historyList.innerHTML = ""; // Clear previous history
  calculationHistory.forEach((calculation) => {
    const listItem = document.createElement("li");
    listItem.textContent = calculation;
    historyList.appendChild(listItem);
  });
}
