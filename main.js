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

const starSign = defineStarSign(month, day);

//As long as the date is valid this returns a string greeting the user and telling them their star sign
if(!isInputValid(month, day)) {
    console.log('Please enter a valid date of birth eg. November 11')
} else {
    console.log(`Hello ${userName}, your zodiac sign is ${starSign}`);
    console.log('Let me tell you what is written in the stars for you'); 
};

function getRandomIndex() {
    return Math.round(Math.random());
}

//A function that will return a random horoscope for each star sign
function randomHoroscopeReading(starSign) {
    
    const horoscopes = {
    Aries: [`Listen ${userName} thinks ain't looking good. You are in danger are making rash decisions. Fix up.`, `Your lust for challenges is about to pay off in a big big way, take some big swings`],
    Taurus: [`Listen ${userName} stop being so stubborn, you're about to get yourself in a real pickle. Don't cut off your nose to spite your face`, `Your loyalty to those close to you is going to pay dividends in the months to come, someone is about to bail you out of a very sticky situation`],
    Gemini: [`Listen ${userName} make a bloody decision, you've been dilly dallying for years weighing up your options. Get moving.`, `Your about to meet someone very special ${userName}, keep putting the feelers out there`],
    Cancer: [`It's about to be a stormy few months ${userName} get ready for some emotional waves 🏄‍♂️`, `Your home is about to bloom and flourish this month, enjoy yourself and be grateful ${userName}`],
    Leo: [`Your attention seeking have already put you in the frying pan, now you're about to jump straight into the fire 🔥, wind your neck in`, `${userName} I hope you enjoy fame, your public profile is about to go through the roof`],
    Virgo: [`Your procrastination has created a tidal wave that is about to crash upon the shores of your peaceful little life, brace yourself`, `The chess moves that you've been making have put you in a powerful position it's time to attack the king ♟️`],
    Libra: [`The barbarians are at the gate ${userName} stop avoiding conflict`, `After a period of turmoil the storm is about to settle and the clouds will part to a clear blue sky`],
    Scorpio: [`You're about to deploy the depths of your spite on an unsuspecting victim, think twice about it ${userName}`, `${userName} you're breaking through the cocoon right now, keep pushing`],
    Sagittarius: [`Watch your mouth ${userName} many a time in life a man's mouth has broke his nose`, `A season of exploration awaits, take that flight 🌏`],
    Capricorn: [`Loosen up ${userName}, you're getting a reputation for having a stick up your ass`, `All that hardwork is about to pay off, don't give up now, keep hammering 🔨`],
    Aquarius: [`Keep your wits about you ${userName} the vultures are circling 🦅`, `The unique moves that you've been making may draw some funny looks but don't worry you're about to reap the rewards`],
    Pisces: [`Get your head out the clouds ${userName} it's mental down here!`, `Keep expressing yourself creatively people are starting to notice and appreciate your gifts`]
    }

    const index = getRandomIndex()

    return horoscopes[starSign][index];

}

const horoscope = randomHoroscopeReading(starSign);

console.log(horoscope);

