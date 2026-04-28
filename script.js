// test if console works
console.log("JS is connected");

document.getElementById("akanForm").addEventListener("submit", function(event) {
    // stop the form from submitting and refreshing the page
    event.preventDefault();
// get the date entered by the user
    let dateOfBirthInput = document.getElementById("dateOfBirth").value;
    // get the selected gender
    let genderInput = document.querySelector('input[name="gender"]:checked')?.value;
   
    if (!dateOfBirthInput || !genderInput) {
    alert("Please enter a valid date and select your gender.");
    return;
}
    // convert input into a JavaScript date object
    let date = new Date(dateOfBirthInput);
// Input Validation
    if (isNaN(date.getTime())) {
        alert("Please enter a valid date.");
        return;
    }
// Extract day, month and year from the date object
    let DD = date.getDate();
    let MM = date.getMonth() + 1;
    let YYYY = date.getFullYear();
// Split year into century and year digits
    let CC = Math.floor(YYYY / 100);
    let YY = YYYY % 100;
// Calculate the day of the week using the formula
    let d = Math.floor(
        ((CC / 4) - (2 * CC) - 1 + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD)
    ) % 7;
// Fix negative values
    if (d < 0) d += 7;
// Array of days of the week
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// Find actual day name
    let dayName = days[d];
// Male Akan names and female Akan names arrays
    let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    let akanName;
// Choose name based on gender
    if (genderInput === "male") {
        akanName = maleNames[d];
    } else {
        akanName = femaleNames[d];
    }
// Display result on the page
document.getElementById("result").innerText =
"You were born on a " + dayName + ". Your Akan name is " + akanName + ".";

// Display popup alert
alert("Your Akan name is " + akanName + "!");
});