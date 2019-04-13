'use strict';

const wordList = ['TEA', 'EAT', 'TEE', 'PEA', 'PET', 'APE', 'HIP', 'AAA'];
const wordLength = wordList[0].length;
let guesses = [];
let guessedList = [];
let secretWord = {};
const turns = {};
const lastMatch = {};

//1st function is to get an answer
function chooseSecretWord() {
  secretWord.chosen = wordList[Math.floor(Math.random() * wordList.length)] .toUpperCase();
  turns.count = 0;
  return secretWord.chosen;
}

function codeNumber(inputWord) {
  return wordList.indexOf(inputWord);
}
// 2nd one is to check if it match
function match(guessed) {
  guessed = guessed.toUpperCase();
  if(guessed === secretWord.chosen) {
    return true;
  } 
}

// count match letters
function addGuess(guessed) {
  guessed = guessed.toUpperCase();
  console.log("guessed to upper case" + guessed)
  let matchLetters = 0;
  const freq = [];
  // if invalide word
  if( !wordList.includes(guessed)) {
    console.log(guessed + " is not a valide word");
    return false;
  }
  console.log(guessedList);
  // check repeated message;
  if( guessedList.includes(guessed)) {
    console.log(guessed + " is already guessed! Try another one!");
    return false;
  }
  for(let i = 0; i < secretWord.chosen.length; i++) {
    if(freq[secretWord.chosen.charAt(i)] == null ) {
      freq[secretWord.chosen.charAt(i)] = 1;
    } else {
      freq[secretWord.chosen.charAt(i)]++;
    }
  }
  for(let i = 0; i < guessed.length; i++) {
    if(freq[guessed.charAt(i)] != null && freq[guessed.charAt(i)] != 0) {
      matchLetters++;
      freq[guessed.charAt(i)]--;
    }
  }
  console.log("matchletters: " + matchLetters);
  guesses.push({'guessed':guessed, 'matchLetters':matchLetters});
  guessedList.push(guessed);
  console.log("guess pushed");
  console.log(Object.values(guesses));
  lastMatch.count = matchLetters;
  turns.count++;
  return true;
}

const word = {
  wordList,
  guessedList,
  wordLength,
  guesses,
  secretWord,
  turns,
  chooseSecretWord,
  codeNumber,
  match,
  addGuess,
  lastMatch
};

module.exports = word;