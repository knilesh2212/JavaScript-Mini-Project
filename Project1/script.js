// script.js

function checkAge() {
  const ageInput = document.getElementById("ageInput").value;
  const age = parseInt(ageInput);

  if (!isNaN(age)) {
    if (age >= 18) {
      document.getElementById("result").innerHTML = "<p>You can drive 🚗🤘</p>";
    } else {
      const yearsLeft = 18 - age;
      document.getElementById(
        "result"
      ).innerHTML = `<p>You are too young, wait another ${yearsLeft} years 😊</p>`;
    }
  } else {
    document.getElementById("result").innerHTML =
      "<p>Please enter a valid age.</p>";
  }
}
