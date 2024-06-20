// script.js

function calculateAge() {
  const ageInput = document.getElementById("ageInput").value;
  const age = parseInt(ageInput);

  if (!isNaN(age)) {
    const currentDate = new Date();
    const birthDate = new Date(
      currentDate.getFullYear() - age,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    const ageInMilliseconds = currentDate - birthDate;

    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInWeek = millisecondsInDay * 7;
    const millisecondsInMonth = millisecondsInDay * (365.25 / 12); // average days in a month
    const millisecondsInYear = millisecondsInDay * 365.25; // average days in a year (considering leap years)

    const years = Math.floor(ageInMilliseconds / millisecondsInYear);
    const months = Math.floor(ageInMilliseconds / millisecondsInMonth);
    const weeks = Math.floor(ageInMilliseconds / millisecondsInWeek);
    const days = Math.floor(ageInMilliseconds / millisecondsInDay);
    const hours = Math.floor(ageInMilliseconds / millisecondsInHour);
    const minutes = Math.floor(ageInMilliseconds / millisecondsInMinute);
    const seconds = Math.floor(ageInMilliseconds / millisecondsInSecond);

    const result = `
          <p>You are approximately:</p>
          <ul>
              <li>${years} years</li>
              <li>${months} months</li>
              <li>${weeks} weeks</li>
              <li>${days} days</li>
              <li>${hours} hours</li>
              <li>${minutes} minutes</li>
              <li>${seconds} seconds</li>
          </ul>
      `;

    document.getElementById("result").innerHTML = result;
  } else {
    document.getElementById("result").innerHTML =
      "<p>Please enter a valid age.</p>";
  }
}
