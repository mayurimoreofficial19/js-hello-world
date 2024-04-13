/*  
Welcome, new coder. 
Enter your code on line 7 to print 'Hello, World!' 
to the console (the panel on the right)
*/

console.log('Hi,I started learning this program')
console.log(1+1)
console.log('launchcode')

console.log("Arithmatic Calculation")
let num1 = 2;
let num2 = 6;

console.log(num1 + num2);

console.log("Arithmatic Calculation")
num1 = 7;
num2 = 6;
let reminder = num1 / num2;

console.log(reminder)

console.log(2 ** 2 ** 3 * 3)

console.log(1 + 5 % 3)

console.log(16 - 2 * 5 / 3 + 1)

console.log("launch" + "code");

console.log(1 + 1 + 1)

console.log("1" + 1 + 1)

const input = require('readline-sync');

let info = input.question("please enter your age");

console.log(typeof info);

console.log("Calculate a space mission!")
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 22500000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

console.log(shuttleName + " will take " + daysToMars +  " days to reach Mars.")
/*  
Next, PLAY! 
Modify your code on line 7 to try to accomplish the tasks listed below:

   1. Change the message that is printed.
   2. Figure out what the parentheses do. Will the code work without them?
   3. Remove one or both quotation marks. Do we need to include both opening and closing quote marks? Is there a difference between using a single or a double quote (' vs. ")?
   4. Remove the semi-colon, ;.
   5. Print a number. (Bonus: Print two numbers added together).
   6. Print multiple messages one after the other.
   7. Print two messages on the same line.
   8. Print a message that contains quote marks, such as Quoth the Raven "Nevermore".
   9. Other. You choose!
*/