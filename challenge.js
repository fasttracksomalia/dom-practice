for(let i = 0; i < 20; i++) {
    console.log("Ahmed")
}



let i = 0;
while (i < 20) {
    console.log("Dini");
    i++;
}


let today = "monday";

if(today == "Monday") {
    console.log("It is Coding Day")
} else if (today == "Tuesday") {
    console.log("It is my off day")
} else {
    console.log("ask me personally which day")
}


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