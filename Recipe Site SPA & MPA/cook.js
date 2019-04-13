'use strict';

const recipes = {};

recipes['banana'] = {
    'title': 'banana',
    'ingredients':'You need bananas',
    'instruction': 'peel them first, then eat'
};
recipes['apple'] = {
    'title': 'Apple',
    'ingredients':'You need apple',
    'instruction': 'choose the red one, really red one!!'
};
recipes['hotPot'] = {
    'title': 'hotPot',
    'ingredients':'You need pot! And Fire!',
    'instruction': 'Heat up the pot, and then put meat in it!'
};

function addRecipe(title, ingredients, instruction) {
    if(Object.keys(recipes).includes(title)) {
        console.log(title + " is already cooked by another Chief, try a new dish!");
        return false;
    }
    console.log(title + " to be add now: ")
    recipes[title] = ({ 
    'title': title,
    'ingredients':ingredients,
    'instruction': instruction
    });
    console.log(recipes[title]);
    return true;
}

function removeRecipe(title) {
    delete recipes[title];
}

const cook = {
    recipes,
    addRecipe,
    removeRecipe
};

module.exports = cook;