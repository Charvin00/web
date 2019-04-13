'use strict';

const express = require('express');
const app = express();
const PORT = 4000;

const word = require('./word');

app.use(express.static('./public'));

//page reload
app.get('/reload', (req, res) => {
  
  word.chooseSecretWord();
  console.log("server side, page reload")
  console.log("answer is " + word.secretWord.chosen)
  while(word.guesses.length > 0) {
    word.guesses.pop();
}
  res.json("reloaded");
});

//fetch wordList
app.get('/wordList/', (req, res) => {
  // chose a word;
  res.json(word.wordList);
  // console.log(word.secretWord);
});
// return for fetching the code number and turns; 
app.get('/codeNumber/', (req, res) => {
  
  let result = [];
  result[0] = word.codeNumber(word.secretWord.chosen);
  result[1] = word.turns.count;
  // console.log(word.secretWord);
  // console.log(result[0]);
  // console.log(result);
  res.json(result);
});

// post user input guess; 
app.post('/guess/', express.json(), (req, res) => {
  const guessed = req.body.text;
  console.log("code number : " + word.codeNumber(guessed));
  console.log(guessed);
  console.log(word.secretWord.chosen);
  let result;
  if(word.match(guessed)) {
    //success match
    word.addGuess(guessed);
    result = 'success';
    console.log("server 111")
    res.json(result);
  } else if (word.addGuess(guessed)) {
    console.log("server 222")
    result = word.guesses;
    console.log( Object.values(word.guesses));
    res.json(result);
  } else if( word.guessedList.includes(guessed)){
    res.status(400).json('Repeated guess!'); 
  }
  else {
    res.status(400).json('this word is invalide'); 
  }
});

// app.get('/', (req, res) => {
//     console.log('hello!');
//   //get the answer first
//   word.chooseSecretWord();
//   console.log('answer is: ' + word.secretWord.chosen);
//   res.send(wordWeb.startPage(word));
// });

// app.post('/', express.urlencoded({ extended: false }), (req, res) => {
//   const guessed = req.body.guessed;
//   if(word.match(guessed)) {
//     //success match
//     word.addGuess(guessed);
//     res.redirect('/success');
//   } else if (word.addGuess(guessed)) {
//     res.redirect('/guess'); // send to guess page
//   } else {
//     res.redirect('/invalid'); // send to invalid page; 
//   }
// });

// app.get('/guess', (req, res) => {
//   res.send(wordWeb.guessPage(word));
// });

// app.get('/success', (req, res) => {
//   res.send(wordWeb.successPage(word));
// });

// app.get('/invalid', (req, res) => {
//   res.send(wordWeb.invalidGuessPage(word));
// });

//Fetch post request from front-end for user guess word input



app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));