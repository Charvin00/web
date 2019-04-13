# React Services
* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'react-services' (`git checkout -b react-services`)
* Modify the files in this directory as requested
* Add files as required
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the TA and I as reviewers.  
* Due by 11:59pm Thu Apr 11

## Goal and Requirements

The goal is to:
* Build a React application using create-react-app
* Pass data into sub components
* Update state in an ancestor component via callbacks
* Pull in data and send data via services

You will do this by:
* Creating the chat application as an SPA (no server-generated HTML) making calls to REST services
* There is no login step - the application will have a hardcoded username, but messages are posted and loaded from services

## Requirements

### Visuals

* Your app and interactions should be attractive and usable
* The functionality should be understandable and discoverable

### Installation
* The app will install with `npm install`
* The app will run with `npm start` (built in from what create-react-app gives you)

### Functionality
* The page displays the list of users (dummy data of at least two users)
* The page displays a list of messages (initial dummy data of at least one message)
* Each message has a timestamp, a sender, and text (no icons/avatars)
* There is an input field to send a message (no submit button)
* When a message is typed and "Enter" is pressed, the input field will blank and the message (with the current timestamp and a dummy sender) will be send via service call to a REST service you wrote
* No message is added if "Enter" is pressed when the input is field is empty
* The page will poll a service for data every 5 seconds and update the display when data is loaded.  (You can test this by using two browser tabs - they will be the same user, but they should each get messages sent both on that tab and on the other tab)
* These updates are done using React, and best-practice updates of state of the top-level component (App.jsx)
* NOTE: The updates should ONLY be done by updating React state.  You will have to pass a callback that calls setState() to your polling code.

### Code
* Your CSS should not be named to describe the appearance, but instead is named to describe the content or the state
* Your JS should be broken up into smaller, well-named functions
* Your JSX files are .jsx
* One Component per .jsx file
* Each Component should be small and focused
* You pass data and handlers into children via props
* You send data "up" into parents using callbacks that were passed to the children as props
* You hold application data in the state of the top-level component
* You handle errors from your services and display information to the user (No console.log, no "Poop")
* Your services follow the REST guidelines from class (You can reuse services written for earlier assignments if they qualify - the service shouldn't have to change for React if it was well written to begin with)
* You don't update the DOM directly, but only through React state updates.
* Your non-display logic is pulled into separate JS files with functions imported into JSX components as needed

## Allowances
* No login and login/logout related functionality (hardcoded username)
* You may create your HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so
* You may use function-based or class-based components as you prefer
* You may pull HTML and/or CSS from previous work as you desire, so long as you are fulfilling the goals of this assignment

## Restrictions
* Do not use React Hooks
* Do not modify the DOM using anything other than React
* Do not read the DOM using anything other than React
* Do not use external JS
* Do not use external CSS libraries (except for icon libraries if desired - no JS!)
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* Do not have any files in your PR except for the assignment (no files from other assignments, for example)
* Do not use var
* Do not use alert
* Do not use terrible variable names
* Do not have console.log debugging messages or commented out code
* Do not use cookies
* Do not use localStorage/sessionStorage/IndexedDB
* Do not use window.location or other means of reading browser state
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS
