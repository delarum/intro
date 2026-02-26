- Data types
  - Arrays
  - String
  - Number
      -Floating point Numbers
      - iIntegers
  - Booleans
  - Undefined
  - Null
  - Objects    

- conditional Statements
- Loops
- Functions
- DOM
- Asynchronous  Programming
- API's
- OOP
- Testing With Jest
- jQuery

// j query is a library containing methods which make it easier to manipulate documents import it to access it's funcionality

//it,s an API that we can use to access its functionalities

//link using a cdn its is located in the head section

// e.g a list of 3 items of class= "food" with the first item being Fruit

//to grab the first item we'll have to use (document.getElementByClassName('food').item(0))

// the j query structure is accessto jquery("selector").method('optional parameter') 

// in j query you can just use $('.food')'first() you just start with an object and chain methods to it

# selecting an element or a group of elements is the first step

### selecting an element using tags
$("p")

### selecting an element with id
$("#idname")

### class selector
$(".classname")

### selecting all input, textarea,select and button elements
$(":input")

## selecting child of some other element
eg $("ul>li")

### combine for more specific targeting
$("p.classname")
 
$("ul.myList li:first") first entry in any unordered list

# manipulaton

### adding a red background to an element with id 
$("idname").css ("backgroung-color", "red")

### adding elements (practice)

//It takes a selector as its argument that is a tag name, class or id

