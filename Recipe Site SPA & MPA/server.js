'use strict';

const express = require('express');
const app = express();
const PORT = 3500;

const cook = require('./cook');
const cookweb = require('./cook-web');

app.use(express.static('./public'));

//=============MPA===================

app.post('/add-new-server', express.urlencoded({ extended: false }),(req, res) => {
  const newRecipe = req.body;
  console.log(Object.values(newRecipe));
  console.log("test999: " + newRecipe.title + " " + newRecipe.ingredients);
  if(cook.addRecipe(newRecipe.title, newRecipe.ingredients, newRecipe.instruction)) {
    console.log(newRecipe.title + " added successfully");
    // redirect to current detail page after submit;
    res.send(cookweb.recipeDetailPage(newRecipe)); 
  }
  else {
    res.send(cookweb.invalidePage(Object.keys(cook.recipes), 'Repeated dish!')); 
  }
  
});
// add new page:
app.get('/add-new-page', (req, res) => {
  res.send(cookweb.addNewPage());
});

app.get('/', (req, res) => {
  res.send(cookweb.startPage(Object.keys(cook.recipes)));
});

// get recipe details;
app.post('/recipe-content', express.urlencoded({ extended: false }), (req, res) => {
  const { title } = req.body;
  console.log("title: " + title);
  let recipe = {};
  if ( title ) {
    recipe = cook.recipes[title];
  }
  console.log("test recipe: " + recipe.title);
  res.send(cookweb.recipeDetailPage(recipe));
});

//===========SPA below===================
//page reload
app.get('/recipeList', (req, res) => {
  console.log(cook.recipes);   
  console.log("==============++++");
  // console.log(Object.values(cook.recipes));

  res.json(Object.keys(cook.recipes));
});

app.post('/get-content', express.json(), (req, res) => {
  const response = req.body;
  console.log(Object.values(response));
  const selectTitle = Object.values(response);
  console.log(Object.values(cook.recipes[selectTitle]));
  res.json(cook.recipes[selectTitle]);
});

app.post('/add-new', express.json(), (req, res) => {
  const newRecipe = req.body;
  console.log(Object.values(newRecipe));
  console.log("test000: " + newRecipe.title + " " + newRecipe.ingredients);
  if(cook.addRecipe(newRecipe.title, newRecipe.ingredients, newRecipe.instruction)) {
    console.log(newRecipe.title + " added successfully");
    res.json(newRecipe);
  }
  else {
    res.status(400).json('Repeated dish!'); 
  }
  
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

