
// write a for loop that prints your name 20 times

for(let i = 0; i < 20; i++) {
    console.log("Ahmed")
}


// write a while that prints your surname 20 times
let i = 0;
while (i < 20) {
    console.log("Dini");
    i++;
}


// write if/else if, chained code to check what day of the day it is and print something

let today = "monday";

if(today == "Monday") {
    console.log("It is Coding Day")
} else if (today == "Tuesday") {
    console.log("It is my off day")
} else {
    console.log("ask me personally which day")
}

// convert the above if/else to switch

switch (today) {
    case "Monday":
        console.log("It is Coding Day, from switch")
        break;
    case "Tuesday":
        console.log("It is my off day, from switch")
        break;

    default:
        console.log("ask me personally which day, from switch")
        break;
}

