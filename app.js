var marks = prompt("Enter Your Matric Percentage?");
var test = prompt("Enter Your Entry Test Percentage?");
var marks = parseInt(marks);
var test = parseInt(test);
var total = 200;
var obtained = marks + test;
console.log("obtained =" + obtained);
Percentage = (obtained / total) * 100;
alert("You got "+Percentage+"%");
if (Percentage >= 70) {
  alert("You are Eligible for Admission");
} else {
  alert("You are not Eligible");
}
