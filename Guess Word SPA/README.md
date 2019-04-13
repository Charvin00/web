# SPA Basic Assignment

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'spa-basic' (`git checkout -b spa-basic`)
* Modify the files in this directory as requested
* Add files as required
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the TA and I as reviewers.  
* Due by 11:59pm Thur Mar 21

## Goal and Requirements

Create a SPA to play a word guessing game, including any necessary REST services.

Use the compare.js from your 'basic-js' assignment (you may update the code if you wish). 

Understand what data to pass and how to fulfill the requirements of the assignment.

## User Experience

* When the user loads the game, they will be shown the list of potential words.  
* The game will load a code number from the service (see below).
* The user will be able to enter a guess.
* When they submit a guess, they will see the guess and the number of matching letters returned from the service
* If the user wins, they will be told they have won and have the option to start a new game
* The page will not do a full-page load unless the user explicitly does that themselves
* If the user reloads the page it will begin a new game

## Services

* Create a REST endpoint that will give you the list of potential words
* Create a REST endpoint that will give you a code number.  The services will be able to match this code number to a word it has selected randomly from the list of potential words
* Create a REST endpoint that you send a guess to - it will return either a number of matching letters (per the previous compare assignment) or if the word is an exact match
* Services accept path parameters when appropriate
* Services accept JSON bodies when appropriate
* Services return JSON bodies
* Services follow the 3 important elements to be RESTful

## Visuals

* The user will be able to see the list of words the word could be.
* The user will see how many guesses they have tried
* The user will see the words they have previously guessed, and how many matches each of those guesses had
* Once the user has won, the user will see that
* Once the user has won, the user will be able to click a button to start a new game
* The user will not be able to submit an invalid guess or a repeat guess.
* The user will be informed of what they are doing wrong

## Restrictions
* None of these functions will cause the page to reload (even a new game)
* Do not use any client-side storage (cookies, localStorage)
* Only use your own services (no jsonstore, etc)

