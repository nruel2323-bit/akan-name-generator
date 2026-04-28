document.getElementById("AkanNameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent webpage from refreshing on form submission
});
let dateOfBirthInput = document.getElementById("dateOfBirth").value;
let genderInput = document.getElementById("gender").value;
letDD=dateOfBirthInput.getDate();
letMM=dateOfBirthInput.getMonth() + 1; // Months are zero-based, so add 1
letYYYY=dateOfBirthInput.getFullYear();
let d =Math.floor(((CC/4)-(2*CC)-1+(5*YY/4)+(26*(MM+1)/10)+DD)%7);
if(d<0)d+=7;
let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
letdayName =days[d];