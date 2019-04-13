# Exam 2

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'exam1' (`git checkout -b exam2`)
* modify the `questions.md` file to have the answers required
* Add any files necessary to create the application below
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the TA and I as reviewers.  
* Due by 11:59pm Thu Mar 28

## Goal and Requirements

* Did you remember the above requirement about `questions.md`?

You will create a recipe storage and search website, along with the services necessary to support it.

The application will be a multiple-page web application that uses Progressive Enhancement to offer a single-page application version.

From the main page when a user loads the application:
* They can see a list of all recipe titles
* They can click a recipe title to see the recipe (title, ingredients, and instructions)
* They can add a new recipe (3 inputs: title, ingredients, and instructions)
* When not on the main page, they can return to the main page

### Multiple-page web-application vs Single Page Application

If client-side JS is turned off for the user (browser has disabled Javascript), they will load each page as a separate page load.  When client-side JS is available, the same functionality is available but it will all load from the Home Page with no later page loads.

The detection of client-side javascript is automatic - the user does not have to navigate to different links or otherwise take action to treat the two versions differently.

The multiple-page version will submit data via links and forms.  The single-page version will do all data changes via background service calls to REST services.

### Home Page
* Displays a list of all stored recipes
* Clicking on a recipe title will load a details page/screen
* Clicking on the "New Recipe" button will to the New Recipe page/screen

### Recipe Details
* Displays the title, ingredients list, and instructions for the selected recipe
* You can click a "Return to Home" link to return to the Home Page

### New Recipe
* Displays a form to enter the title, ingredients list, and instructions for a new recipe
* The ingredients list is a single textarea field to enter the data
* The instructions list a single textarea field to enter the data
* The user is not allowed to enter a recipe without something present in all 3 fields
* The user can click a "Return to Home" link to return to the Home Page
* The user is put on the Recipe Details screen for the new recipe after successfully submitting a recipe.

### REST Services

* You will need to add REST services to fulfill the needs of the application
* Pick services data, methods, URLs, and status codes to match the requirements of RESTful services as described in class

### Persistence
* There is no particular persistence requirement: No DB, no JSONStore calls - the data need only persist as long as the server is running

## Allowances
* You may create your HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so
* You must used 'express' as your node server library
* You are allowed to use 'nodemon' (for development, as a devDependency only), and 'broswerify' (the same), but are not required to do so

## Restrictions
* You must provide meaningful, and where applicable, ACTIONABLE error messages for your user on the page (for service calls)
* You should use no external libraries of any kind save for those explicitly allowed
* Including no React
* Your JS, HTML, and CSS files must uphold the best practices from class
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* Do not have any files in your PR except for the exam (no files from other assignments, for example)
* Do not use var
* Do not use alert
* Do not use terrible variable names
* Do not have console.log debugging messages or commented out code
* Do not use cookies, localstorage, or other client-side storage
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS
  * I and the TAs must be able to read it easily

