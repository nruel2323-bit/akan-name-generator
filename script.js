console.log("JS is connected");

document.getElementById("akanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let dateOfBirthInput = document.getElementById("dateOfBirth").value;
    let genderInput = document.querySelector('input[name="gender"]:checked')?.value;

    let date = new Date(dateOfBirthInput);

    let DD = date.getDate();
    let MM = date.getMonth() + 1;
    let YYYY = date.getFullYear();

    let CC = Math.floor(YYYY / 100);
    let YY = YYYY % 100;

    let d = Math.floor(
        ((CC / 4) - (2 * CC) - 1 + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD)
    ) % 7;

    if (d < 0) d += 7;

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let dayName = days[d];

    let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    let akanName;

    if (genderInput === "male") {
        akanName = maleNames[d];
    } else {
        akanName = femaleNames[d];
    }

    document.getElementById("result").innerText =
    "You were born on a " + dayName + ". Your Akan name is " + akanName + ".";
});