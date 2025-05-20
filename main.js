//I'm going to send a message to the user to prompt them to enter their name and date of birth

console.log('Hello dear user, tell me your name and your date of birth, not including the year. eg. Mandeep January 12');

//This collects the relavent data from the arguments the user puts in when running the program
const userName = process.argv[2];
const monthInput = process.argv[3];
const day = parseInt(process.argv[4]);

//This function makes sure that whichever case the month is written in, it is converted to the same case
function formatMonth(monthInput) {
    if(!monthInput) {
        return null;
    }
    const lower = monthInput.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

const month = formatMonth(monthInput);

// This function checks that the birthday entered is valid
function isInputValid(month, day) {
    const months = {
        January: 31,
        February: 29,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    }

    return months[month] && day >= 1 && day <= months[month]; 
}

//This function figures out the star sign of the user depending on the birthday of the user
function defineStarSign(month, day) {
  
    switch(month) {
        case 'January':
            return day < 20 ? 'Capricorn' : 'Aquarius'
        case 'February':
            return day < 19 ? 'Aquarius' : 'Pisces'
        case 'March':
            return day < 21 ? 'Pisces' : 'Aries'
        case 'April':
            return day < 20 ? 'Aries' : 'Taurus'
        case 'May':
            return day < 21 ? 'Taurus' : 'Gemini'
        case 'June':
            return day < 21 ? 'Gemini' : 'Cancer'
        case 'July':
            return day < 23 ? 'Cancer' : 'Leo'
        case 'August':
            return day < 23 ? 'Leo' : 'Virgo'
        case 'September':
            return day < 23 ? 'Virgo' : 'Libra'
        case 'October':
            return day < 23 ? 'Libra' : 'Scorpio'
        case 'November':
            return day < 22 ? 'Scorpio' : 'Sagittarius'
        case 'December':
            return day < 22 ? 'Sagittarius' : 'Capricorn'
        default:
            return null
    }
};

//If any of the inputs are missing, the code will not execute
if(!userName || !month || !day) {
    console.log('Please enter your name, and your birthday in month/day format eg. Mandeep November 11');
    process.exit();
}

//As long as the date is valid this returns a string greeting the user and telling them their star sign
if(!isInputValid(month, day)) {
    console.log('Please enter a valid date of birth eg. November 11')
} else {
    const starSign = defineStarSign(month, day);
    console.log(`Hello ${userName}, your zodiac sign is ${starSign}`);
    console.log('Let me tell you what is written in the stars for you'); 
};





