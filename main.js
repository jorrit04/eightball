let userName = '';

// greets the user
userName ? console.log(`Hello, ${userName}!`) 
: console.log(`Hello!`);


// lets user ask
const userQuestion = 'Should I work on a website?';
console.log(`${userName} has asked -> ${userQuestion}`);

// generates random number between 0-7
let randomNumber = Math.floor(Math.random() * 8);

// prints out the number
console.log(randomNumber);

// creates a variable for the 8ball
let eightBall = '';


// answers for the 8ball!!!
switch(randomNumber) {
    case 0:
        eightBall = 'It will ABSOLUTELY happen';
        break;
    case 1:
        eightBall = 'It will definitely happen';
        break;
    case 2:
        eightBall = 'Man idk';
        break;
    case 3:
        eightBall = 'Leave me alone I\'m not gonna answer that';
        break;
    case 4:
        eightBall = 'No';
        break;
    case 5:
        eightBall = 'Nah man';
        break;
    case 6:
        eightBall = 'Give up';
        break;                
}

// types out the answers :)
console.log(`The Eight Ball says: ${eightBall}`);



