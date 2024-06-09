import inquirer from "inquirer";
// import Choice from "inquirer/lib/objects/choice.js";
// import Choices from "inquirer/lib/objects/choices.js";
console.log("Enter your choice");
const input = await inquirer.prompt([
    { message: "Player 1: ", type: "list", name: "plyr1", choices: ["Rock", "Paper", "Scisor"] },
    { message: "Player 2: ", type: "list", name: "plyr2", choices: ["Rock", "Paper", "Scisor"] },
]);
if ((input.plyr1 === "Rock" && input.plyr2 === "Scisor") || (input.plyr1 === "Scisor" && input.plyr2 === "Paper") ||
    (input.plyr1 === "Paper" && input.plyr2 === "Rock")) {
    console.log("Player 1 wins!");
}
else if ((input.plyr1 === "Scisor" && input.plyr2 === "Rock") || (input.plyr1 === "Paper" && input.plyr2 === "Scisor") ||
    (input.plyr1 === "Rock" && input.plyr2 === "Paper")) {
    console.log("Player 2 wins!");
}
else {
    console.log("tie");
}
