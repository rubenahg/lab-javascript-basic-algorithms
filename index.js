// Iteration 1: Names and Input
const hacker1 = `Marcelo`;
console.log(`The driver's name is ${hacker1}`);
const hacker2 = `Ruben`;
console.log(`The navigator's name is ${hacker2}`);




// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}



// Iteration 3: Loops

// 3.1
let newName = ""
for (let i = 0; i < hacker1.length; i++) {
    if (i === 0) {
        newName += hacker1[0].toUpperCase();
    } else {
        newName += ` ${hacker1[i].toUpperCase()}`;
    }
}
console.log(`newName: ${newName}`);


// 3.2
let reverseName = ""
for (let i = (hacker1.length - 1); i >= 0 ; i--) {
    reverseName += hacker1[i];
}
console.log(`reverseName: ${reverseName}`);


// 3.3
if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}