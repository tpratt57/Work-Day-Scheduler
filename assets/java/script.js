//function to display the current date
var currentDate = new Date();
var day = String(currentDate.getDate()).padStart(2,'0');
var month = String(currentDate.getMonth() + 1).padStart(2,'0');
var year = currentDate.getFullYear();

currentDate = day + '/' + month + '/' + year;
document.write(currentDate); //thank you stackoverflow!