//  1. What is DOM?
//  Document object modal is an api for manipulating html documents they
// provide functions that allow you to add remove and modify parts of the document,
// it represents the page you see on the browser 
// it represents the html elements as a tree of nodes 


// DOM MANIPULATION
//getelementbyid
//getelementbyname
//getelementbyclass
//document.getElementById()// in this case the document is an 
//console.log(document);// it displays your html documents
//console.dir(document);// it will list all of the properties of this object
document.title = "Del's Website";// to change the title, the manipulation we are talking about

//MANIPULATION OF STYLES
document.body.style.backgroundColor = "white"// changing the background color to white

//ADDING ELEMENTS TO THE PAGE
const body = document.body
body.append("Hello Del", "bye")// using append child requires a node and not a string and you can't add a bunch of things to append child


//CREATE AN ELEMENT
const h4 = document.createElement("h4")
//h4.innerText = "TEXT HAS BEEN ADDED TO THE H4 ELEMENT"
h4.textContent = "TEXT HAS BEEN ADDED TO THIS HTML ELEMENT"
//Text content will print you out the exact text content all the extra spacing and inner text shows texts just as it appears on the document


//NOW WE NEED TO ADD THIS ELEMENT TO THE DOCUMENT USING APPEND
body.append(h4)
//IF YOU OPEN ELEMENTS YOU CAN SEE IT ADDED IT TO THE BODY
const h1Welcome= document.querySelector("#welcome")
const h1Bye = document.querySelector("#bye")
//how query selectors work? you query select then you can remove the item and how is it different from get element by
h1Welcome.remove()

// use get attritube e.g console.log(span.getattribute(title))  it will be printed on the console
//TO CHANGE ATTRIBUTE
console.log(h1Bye.setAttribute("title", "del-changed-this-title"))



// j query is a library containing methods which make it easier to manipulate documents import it to access it's funcionality
//it API that we can use to access its functionalities
// e.g a list of 3 items of class= "food" with the first item being Fruit
//to grab the firts item we'll have to use (document.getElementByClassName('food').item(0))
// in j query you can just use $('.food')'first() you just start with an object and chain methods to it
//It takes a selector as its argument that is a tag name, class or id