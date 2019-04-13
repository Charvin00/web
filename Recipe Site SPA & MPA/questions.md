# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Provide an example where a url DOES not represent a resource, then describe how to modify it so that it does.

1.URL stands for Uniform Resource locator. Resource here means primary data representation. So in REST services, browsers use URL to retrieve the resource in the services. 
2.When URL points to a resource that does not exist or is moved.
Then we either need to change the URL path to the new resource address, or we could move the resource back to the addres URL points to, so that URL can represent it again.  

## Q: I say that "Once you go async, you have to stay async".  What does this mean?  Give an example that demonstrates.
1.Because when we start using Async, until it's either resolved or rejected, we have no control of the value. 
2.Also because Promise for example, it will invoke .then or .catch which will return anther promise, so we cant just take the these methods return, instead we have to get the value inside these async function. 


## Q: What is a rule of thumb you can follow to understand when async code can and cannot modify your variables and/or call your methods?
1.Follow the invoking orders for the functions. For example, we have a new Promise, then we need to track its status to be resolve or reject, which will then invoke .then or .catch and so on. Then, pass on the logic to where we do the varible passing operation or method initiation. 
2.Overall, in JS sync code will be executed first such as:
const val = promise.resolve("yo bro!");
then async code such as: .then() or .catch() following the promise invoke, and then callback such as : setTimeOut().

## Q: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?
1.State here means all the values about the application, which we could also call as data and status.
2.DOM stands for Document Object Model which has interface to read through HTML in a tree structure.
3.Store state(or data) in the DOM, means we leave user input date in the DOM objects, for example leave data in the <form><input> instead of save them into initialized varibles, object or array for instance. 
4.We shall not do this because if there is a sets of input values, like a list for example, there is no way we can store all them in one <input> for reading later, extra and separate variables are needed to store the state/data.  


## Q: What is the primary rule to follow to prevent poor web security such as injection attacks?  (This is NOT about safely storing passwords)
1.Injection attacks here could be in different format XSS, XSRF and SQL, here we take XSS injection as an example.XSS injection means it gives <script></script> input where it should give HTML texts to the server which will be mistakenly invoked in the server to send DOM data to somewhere else including important information like password and etc. 
2.To prevent it, we always need to filter the input data before using it, such as using "whitelist" to identify which are allowed and which are not. 

## Q: What is a polyfill?  When should one be used?  Give an example of a polyfill that follows these rules.
1.Polyfill is a piece of JS code(or plugin) to provide modern functionalities that elder broswers do not support
2.Only when we try to extend javascript feature and browser native supports, we go into the object prototype constructor to make changes, Array.prototype for example. 
3.For example, If we try add forEach() method on Array, which is instance inherited from Array.prototype. In the prototype constructor, we could add forEach() method for polyfilling prupose.

## Q: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.
1.Cookies are text based key/value pair in the HTTP header, which are carried with each request by Browser. It's shared by tabs. It's mainly used to send and receive those non-security sensitive data between server and browser, session information keep user logging in for example. 
2.We shall not store personal data in cookies for example. Cookies as part of the HTTP header, cookies' content type can be easily changed, to text to display for instance, will leak user's password insecurely. 


## Q: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.
1.Multiple page application is server-centered triggered, which means every time we send and receive request, the web page will be reload or redirect to another page with updated content, in other words, the address will be refreshed or changed:

app.get('/guess', (req, res) => {
  res.send(wordWeb.guessPage(word));
});

2.Single page application on the other hand, is DOM-centered. In this case, we do not have to reload the whole web page, or refresh/change the web address to receive or send request, instead we can fetch data in json formate to update DOM content so called DOM manipulation:
fetch('/people');
。then(response => {
    if(response.ok) {
        return res.json();
    }
})
.then(response => document.querySeletor('.show').innerHTML = response;)
## Q: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement? 
1.Professive enhancement is a web development method, which means downgrade to simpler method when the browser doesnt support modern javascript, instead of polyfills. Even if browser doesnt support client-side js, Professive Enhancement will simulate the web page as if the JS delivers. With Professive enhancement, the server js without client-side js can work independatly with Professive enhancement augmenting the client-side js, which could benenfits a lot for search engine, and to make sure backend is safe. 
2.A SPA without Progressive Enhancement will have deal with various browser and devices versions and polyfills when browsers have issues with client-side js. As SPA heavily rely on client-side JS, if there is error or crash between front-end js and users' browser, the whole application will fail. 


## Q: Explain how a  REST service is or is not similar to a dynamic asset.
1.REST service means: web calls for data retrive for following interaction use, where commonly data will be in json format, but also could be in other format as return like HTML and etc. This request a endponit in server so that the client-side can use to call as URL.
Ex: app.get(); app.post(); 
2.Dynamic asset stays on the server side. They are sent by server with a set of logic. Dynamic asset can only be changed by restarting the server while static asset on the other hand can be change by DOM manipulation without server restart. 
3.Those two are different frame of mind. REST service is meant to connect pages while applying changes(or front and back ends), while dynamic assets are data or content returned from server instead of static files in the public folder. 