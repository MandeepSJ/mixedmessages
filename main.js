//I'm going to send a message to the user to prompt them to enter their name and date of birth

console.log('Hello dear user, tell me your name and your date of birth, not including the year. eg. Mandeep January 12')

//This collects the relavent data from the arguments the user puts in when running the program
const userName = process.argv[2];
const month = process.argv[3];
const day = process.argv[4];

//The code below figures out the horoscope of the user and logs another message to the console
let starSign = 'nil'

function defineStarSign(month, day) {
    if(month === 'January') {
    if(day < 20) {
        return starSign = 'Capricorn';
    } else {
        return starSign = 'Aquarius';
    }
}
};

defineStarSign(month, day);
console.log(`${starSign}`);




