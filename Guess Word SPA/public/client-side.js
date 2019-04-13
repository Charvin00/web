"use strict";

(function iife() {
    
    let curTurn = 0;
    const status = document.querySelector('.status');
    const inputError = document.querySelector('.invalid-repeat'); 
    const reload = () => {
        fetch('/reload')
        .catch( err => Promise.reject( { error: 'network unvailable', err } ) )
        .then( async response => {
            if( response.ok ) {
                return response.json()
            }
             //if server is down; 
             return response.json().then(err => Promise.reject(err) )
        })
        .then( input => {
            console.log("reloaded");
        })
        .catch (err => {
            // take in the pre error message to show:
            status.innerHTML = err.error;
        })
    };
    //fetch wordList
    const refWordList = () => {
        fetch('/wordList/')
        //error message for network offline;
        .catch( err => Promise.reject( { error: 'network unvailable', err } ) )
        .then( async response => {
            if( response.ok ) {
                return response.json()
            }
             //if server is down; 
             return response.json().then(err => Promise.reject(err) )
        })
        .then( wordList => {
            const list = wordList.map( word => 
                `<li>
                  <div class="valid-word">
                    <span>${word}</span>
                  </div>
                </li>
            `).join('');
            document.querySelector('.word-list').innerHTML = list; 
            // console.log(list);
        })
        .catch (err => {
            // take in the pre error message to show:
            status.innerHTML = err.error;
        })
    };
    // fetch turns and codeNumber:
    const refTurns = () => {
        fetch('/codeNumber/')
        //error message for network offline;
        .catch( err => Promise.reject( { error: 'network unvailable', err } ) )
        .then( async response => {
            if( response.ok ) {
                
                return response.json()
            }
            //if server is down; 
            return response.json().then(err => Promise.reject(err) )
        })
        .then( turnAndCode => {
           
            const code = turnAndCode[0];
            let curTurn = turnAndCode[1];
            document.querySelector('.turns-number').innerHTML = 'Total Number of Turns: ' + curTurn; 
            
            document.querySelector('.code-number').innerHTML = 'Your code number is: ' + code;   
            
        })
        .catch (err => {
            // take in the pre error message to show:
            status.innerHTML = err.error;
        })
    };
    // page reload first;
    reload();
    // post user gusess:
    document.querySelector('.to-guess').addEventListener('click', () => {
       inputError.innerHTML = "";
        const text = document.querySelector('.guess-input').value;
        // status.innerHTML = "err.error";
        if(text) {
            curTurn++;
            document.querySelector('.turns-number').innerHTML = 'Total Number of Turns: ' + curTurn; 
            document.querySelector('.guess-input').value = "";
            fetch('/guess/', {
                method: 'POST',
                headers: new Headers({
                'content-type': 'application/json'
                }),
                body: JSON.stringify( {text} )
            })
            .then( async response => {
                if( response.ok ) {
                    console.log("result: 111")
                    return response.json()
                }  
                 //if server response have error: 
                return response.json().then(err => {
                    inputError.innerHTML = err;
                    Promise.reject(err);
                    console.log("log1:" + err);
                })
            })
            // console.log("result: ")
            .then( result => {
                console.log("result: 2222" + result)
                if( result == 'success') {
                    console.log("result: 333")
                    document.getElementById('success-page').style.visibility = "visible";
                } 
                // not successful: 
                else {
                    console.log("result: 333" + result.matchLetters)
                    const results = result.map( result => `
                    <li>
                        <div>
                        <div class="accepted-guess">
                            <div class="guessed-word">
                            <span>Guessed Words: ${result.guessed}</span>
                            </div>
                            <div class="number-match-letter">
                            <span>Number of Matched Letters: ${result.matchLetters}</span>
                            </div>
                        </div>
                        </div>
                    </li>
                    `).join('');
                    document.querySelector('.gussed-history').innerHTML = results;
                }
            })
            .catch (err => {
                // take in the pre error message to show:
                status.innerHTML = err;
            });
        } 
      });

     

    // start the game: 
    document.querySelector('.start-game').addEventListener('click', () => {
        curTurn = 0;
        document.querySelector('.turns-number').innerHTML = 'Total Number of Turns: ' + curTurn; 
        refWordList();
        refTurns();
    });

    //hide guess button when empty input
    document.querySelector('.guess-input').addEventListener('change', () => {
        const check = document.querySelector('.guess-input').value;
        document.getElementById("guess-button").style.visibility = "hidden";
        if(check) {
          document.getElementById("guess-button").style.visibility = "visible";
        }
      });
   
    
})();