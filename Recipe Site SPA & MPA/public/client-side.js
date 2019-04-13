'use strict';
(function iiffe() {

    

      const status = document.querySelector('.error-status');
      let seletTitle;
      //fetch recipe
      const loadList = () => {
        status.innerHTML = "";
        fetch('/recipeList/')
        //error message for network offline;
        .catch( err => Promise.reject( { error: 'network unvailable', err } ) )
        .then(async response => {
            if( response.ok ) {
              
              return response.json();
            }
            else {
               //if server is down; 
             return response.json().then(err => Promise.reject(err) )
            }
        })
        .then( titles => {
          console.log(titles);
            const list = titles.map( title => `
            <form class="select-form">  
              <p class="title">${title}</p>
              <button class="select-button">Select</button>
            </form>
            `).join('');
            
            document.querySelector('.dynamic-display').innerHTML = `<ul>` + list + `</ul>`;
            let titlesArray = document.querySelectorAll('.select-form');
            titlesArray.forEach(function(title) {
              title.querySelector('button').addEventListener('click', (event) => {
                event.preventDefault();
                console.log('prevent default')
              })
              title.querySelector('button').addEventListener('click', () => {
                status.innerHTML = "";
                console.log('clicked');
                seletTitle = title.querySelector('.title').innerHTML;
                console.log(seletTitle)
                console.log("pass in: " + seletTitle)
                // document.querySelector('.test-display').innerHTML = seletTitle;
                getContent(seletTitle);
              })
            })
            
        })
        .catch (err => {
          // console.log(err);
          console.log('something is not right');
            // take in the pre error message to show:
            status.innerHTML = err.error;  
        })
    };

    loadList();

    // Add New Recipe Page: after click add-new-page button:
    document.getElementById('add-new-page').addEventListener('click', () => {
      const result = `
      <form class="add-form" id="add-form">  
        <input class="send-title" name="text" value="" placeholder="Enter Your Recipe Title"/>
        <input class="send-ingredients" name="text" value="" placeholder="Enter Your Recipe ingredients"/>
        <input class="send-instruction" name="text" value="" placeholder="Enter Your Recipe instruction"/>
        <button class="add-button" style="visibility:hidden">Let's cook it!</button>
      </form>
      `
      document.querySelector('.dynamic-display').innerHTML = result;
      // hide the add-new-page button & show home-button;
      document.getElementById('add-new-page').style.visibility = 'hidden';
      document.getElementById('home-button').style.visibility = 'visible';

        //then:
      // Add New Recipe Page: hide add button when empty input!!!
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

       //then:
      // Add New Recipe Page: add input function trigger by submit button
      document.querySelector('.add-button').addEventListener('click', (event) => {
        event.preventDefault();
        const title = document.querySelector('.send-title').value;
        const ingredients = document.querySelector('.send-ingredients').value;
        const instruction = document.querySelector('.send-instruction').value;
        console.log("test000: " + title + ingredients + instruction);
        if(title && ingredients && instruction) {
          addNewFetch({title,ingredients, instruction});
        }
        else {
          status.innerHTML = "Please type your input"
        }
      });

     });


    // Add New Recipe Page: add the new recipe to the dataset and show that recipe detail page
    // POST method: 
    const addNewFetch = (input => {
      document.getElementById('add-form').reset();
      console.log(input.title + input.ingredients + input.instruction);
      fetch('/add-new', {
        method: 'POST',
        headers: new Headers({
        'content-type': 'application/json'
        }),
        body: JSON.stringify(input)
      })
      .catch( err => Promise.reject( { error: 'network unvailable', err } ) )
      .then( async response => {
        if( response.ok ) {
          console.log("result: 111")
          return response.json()
        }  
       //if server response have error: 
       return response.json().then(err => Promise.reject(err) )
      })
      .then( recipe =>{
       console.log(recipe.title);
        // response is {new recipe}
        const result = `
        <p class="title">${recipe.title}</p>
        <p class="timestamp">${recipe.ingredients}</p>
        <p class="message-text">${recipe.instruction}</p>
        `;
        document.getElementById('add-form').style.visibility = 'hidden';
        document.querySelector('.dynamic-display').innerHTML = result;
        document.getElementById('home-button').style.visibility = "visible";
       
      })
      .catch (err => {
        // console.log(err);
        console.log('something is not right');
          // take in the pre error message to show:
          status.innerHTML = err;  
          
      })
  
     })


    // define function for back to home button:
    document.getElementById('home-button').addEventListener('click', () => {

      loadList();
      document.getElementById('home-button').style.visibility = 'hidden';
      document.getElementById('add-new-page').style.visibility = 'visible';
    });

    // now we fetch the content for the recipe accordingly
   const getContent = (seletTitle => {
    
    fetch('/get-content/', {
      method: 'POST',
      headers: new Headers({
      'content-type': 'application/json'
      }),
      body: JSON.stringify({seletTitle})
    })
    .then( async response => {
      if( response.ok ) {
        console.log("result: 111")
        return response.json()
      }  
     //if server response have error: 
     return response.json().then(err => Promise.reject(err) )
    })
    .then( recipe =>{
      const result = `
      <p class="title">${recipe.title}</p>
      <p class="timestamp">${recipe.ingredients}</p>
      <p class="message-text">${recipe.instruction}</p>
      `;
      
      document.querySelector('.dynamic-display').innerHTML = result;
      document.getElementById('home-button').style.visibility = "visible";
      document.getElementById('add-new-page').style.visibility = 'hidden';
    })

   })

   //=========start loading function:============

   

   // add new function, trigger when add-button click:
    //calling functions:
    // let load = Promise.resolve(loadList());
    // console.log('resolved')
    // once a link clicked, it will trigger the fetch function. 
    // load.then();
    
    
    
    // also need add button to add up a new recipe
    // document.querySelector('.recipe-list').addEventListener('click', () => {
    //     const selectTitle = document.querySelector('.title-select').innerHTML;
    //     console.log(name+" "+ text);
    //     if(text) {
    //       resetAddForm();
    //       fetch('/messages/', {
    //         method: 'POST',
    //         headers: new Headers({
    //           'content-type': 'application/json'
    //         }),
    //         body: JSON.stringify( { name, text } )
    //       })
    //       .then( response => {
    //         if( response.ok ) {
    //           refresh();
    //         } else {
    //           throw new Error(" post poop" );
    //         }
    //       });
    //     }
    //   });

    // const select = function (inputTitle) {
    //     fetch('/select')
    //     //error message for network offline;
    //     .catch( err => Promise.reject( { error: 'network unvailable', err } ) )
    //     .then( async response => {
    //         if( response.ok ) {
    //             return response.json()
    //         }
    //         //if server is down; 
    //         return response.json().then(err => Promise.reject(err) )
    //     })
    //     .then( recipe => {
    //         const details = recipe.map
    //     })
    //     .catch (err => {
    //         // take in the pre error message to show:
    //         status.innerHTML = err.error;
    //     })
    // }

    

    // click each recipe in the list trigger, take input , fetch post to ;  


})();