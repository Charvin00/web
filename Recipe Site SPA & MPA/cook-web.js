const cookWeb = {
    pageHeader: function() {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <link rel="stylesheet" href="/style.css"/>
            <title>COOK</title>
            </head>
            <body>
      `;
    },
    //site start from here:
    startPage: function(recipeList) {
          return `
            ${cookWeb.pageHeader()}
            <div>
              <h3>Welcome to My Recipes Site</h3>
            </div>
            ${cookWeb.pageList(recipeList)}
            </body>
            </html>
          `;
        },
     //details page:
     recipeDetailPage: function(recipe) {
        return `
          ${cookWeb.pageHeader()}
          <div>
            <h3>Welcome to My Recipes Site</h3>
          </div>
          ${cookWeb.getDetails(recipe)}
          </body>
          </html>
        `;
      },
      invalidePage: function(recipeList, error) {
          return `
              ${cookWeb.pageHeader()}
              <div>
                <h3>Welcome to My Recipes Site</h3>
                <p>${error}</p>
              </div>
              ${cookWeb.pageList(recipeList)}
            </body>
          </html>
          `;
        },
        //add new form page:
        addNewPage: function() {
          return `
            ${cookWeb.pageHeader()}
            <div>
              <h3>Welcome to My Recipes Site</h3>
            </div>
            <form class="add-form" id="add-form" action="/add-new-server" method="POST">  
              <input class="send-title" name="title" value="" placeholder="Enter Your Recipe Title"/>
              <input class="send-ingredients" name="ingredients" value="" placeholder="Enter Your Recipe ingredients"/>
              <input class="send-instruction" name="instruction" value="" placeholder="Enter Your Recipe instruction"/>
              <button type="submit" class="add-button" style="visibility:hidden">Add a New Recipe</button>
            </form>
            <form class="back-home-form" action="/" method="GET">
              <button id="home-button" type="submit">Back to Home</button>
            </form> 
            <script>
              document.querySelector('.send-instruction').addEventListener('change', () => {
                const check = document.querySelector('.send-instruction').value;
                const checkA = document.querySelector('.send-title').value;
                const checkB = document.querySelector('.send-ingredients').value;
          
                document.querySelector(".add-button").style.visibility = "hidden";
                if(check && checkA && checkB) {
                  console.log("show up now!")
                  document.querySelector(".add-button").style.visibility = "visible";
                }
                // console.log(check + " " + checkA + " "+ checkB )
                // console.log("something is not really right")
              });
            </script>
            </body>
            </html>
          `;
        },


    //   =======Page above, getting function below==========

    getDetails: function(recipe) {
      //for each single recipe
     return `
      <p class="title">${recipe.title}</p>
      <p class="timestamp">${recipe.ingredients}</p>
      <p class="message-text">${recipe.instruction}</p>
     ` + `
      <form class="back-home-form" action="/" method="GET">
        <button id="home-button" type="submit">Back to Home</button>
      </form> `
      ;
    },

      pageList: function(recipeList) {
        return `
          <div class="record-panel>
            <div class="list-panel">
              <div id="valid-word-list">
                ${cookWeb.getValidWords(recipeList)} <!--return valid words-->
              </div>
            </div>
          </div>
        ` + 
        `
        <form class="back-home-form" action="/add-new-page" method="GET">
          <button id="home-button" type="submit">Add a New Recipe</button>
        </form> 
        `
      },

    getValidWords: function(recipeList) {
      //for each single recipe
      console.log(recipeList);
     return recipeList.map( title => 
      `
        <form class="select-form" action="/recipe-content" method="POST">  
            <p class="title">${title}</p>
            <input type="hidden" name="title" value="${title}"/>
            <button class="select-button" type="submit">Select</button>
        </form>
      `).join('');
      
      ;
    },
   
    // getAcceptedGuesses: function(word) {
    //   return `<ul>` +
    //   //for each guessed input, we list them here
    //     word.guesses.map( guess => `
    //       <li>
    //         <div>
    //           <div class="accepted-guess">
    //             <div class="guessed-word">
    //               <span>Guessed Words: ${guess.guessed}</span>
    //             </div>
    //             <div class="number-match-letter">
    //               <span>Number of Matched Letters: ${guess.matchLetters}</span>
    //             </div>
    //           </div>
    //         </div>
    //       </li>
    //     `).join('') + 
    //     `</ul>`;
    // },
    // getNewGuess: function() {
    //   return `
    //     <div class="new-guess">
    //       <form action="/" method="POST">
    //         <div>
    //         <input name="guessed" value="" placeholder="Place enter your guess here.."/>
    //         </div>
    //         <div>
    //           <button type="submit">Go Guess!</button>
    //         </div>
    //       </form>
    //     </div>
    //   `;
    // },
    // //game start from here:
    // startPage: function(word) {
    //   return `
    //     ${cookWeb.pageHeader()}
    //     <div>
    //       <h3>Game started, good luck!</h3>
    //     </div>
    //     ${cookWeb.getNewGuess()}
    //     ${cookWeb.pageList(word)}
    //     </body>
    //     </html>
    //   `;
    // },
    // guessPage: function(word) {
    //   return `
    //     ${cookWeb.pageHeader()}
    //     <div>
    //       <h3>There are ${word.lastMatch.count}letter matches. Let's continue!</h3>
    //       </div>
    //       ${cookWeb.getNewGuess()}
    //       ${cookWeb.pageList(word)}
    //       <div class="start-new">
    //         <form action="/" method="GET">
    //           <button type="submit">Give Up & Start New</button>
    //         </form>
    //       </div>
    //       </body>
    //       </html>
    //   `;
    // },
    //
    // successPage: function(word) {
    //   return `
    //     ${cookWeb.pageHeader()}
    //     <div>
    //       <h3>Congratulations! You win! There are ${word.lastMatch.count} letters matches. </h3>
    //     </div>
    //     <div class="start-new">
    //       <form action="/" method="GET">
    //         <button type="submit">Start New Game</button>
    //       </form>
    //     </div>
    //     ${cookWeb.pageList(word)}
    //     </body>
    //   </html>
    //   `;
    // }
};
module.exports = cookWeb;