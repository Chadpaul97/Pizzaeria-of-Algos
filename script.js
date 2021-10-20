// Create a function called pizzaOven that returns a JavaScript (Pizza) Object
function pizzOven (){
    var pizza = {};
    pizza.crustType = "hand tossed";
    pizza.sauceType = "marinara";
    pizza.cheese = ["mozzarella", "feta"];
    pizza.topping = ["mushrooms", "olives", "onions"];
    return pizza.crustType;
}

var p1 = pizzOven();
console.log(p1);


// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

function pizzOven (bread, protien, cheese, topping){
    var pizza = {};
    pizza.crustType = bread;
    pizza.sauceType = protien;
    pizza.cheese = cheese;
    pizza.topping = topping;
    return pizza;
}

var p1 = pizzOven("deep dish", "traditional", "monzerella", ["pepperoni","sausage"]);
console.log(p1);



// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
var pizza1 = {
    "Bread": "hand tossed",
    "Sauce": "marinara",
    "Cheese": ["monzerlla","feta"],
    "Toppings": ["mushrooms","olives", "onions"],
    "pizza.Info": function() {
        console.log("Bread: " + pizza1.Bread);
        console.log("Sauce:  " + pizza1.Sauce);
        console.log("Cheese:   " + pizza1.Cheese);
        console.log("Toppings: " + pizza1.Toppings);
    }
}

pizza1.pizzaInfo();

// var taco1 = {
//     "tortilla": "soft corn tortilla",
//     "protein":  "tinga chicken",
//     "cheese":   "cotija cheese",
//     "toppings": ["lettuce", "pico de gallo", "guaca78mole"],
//     "tacoInfo": function() {
//         console.log("Tortilla: " + taco1.tortilla);
//         console.log("Protein:  " + taco1.protein);
//         console.log("Cheese:   " + taco1.cheese);
//         console.log("Toppings: " + taco1.toppings);
//     }
// }
    
// // we can now get all the delicious taco facts by
// taco1.tacoInfo(); // note we call this like a function because it is a function







// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

function pizzOven (){
    var pizza1 = {};
    pizza1.crustType = "hand tossed";
    pizza1.sauceType = "marinara";
    pizza1.cheese = ["mozzarella", "feta"];
    pizza1.topping = ["mushrooms", "olives", "onions"];
    return pizza1;
}

var p1 = pizzOven();
console.log(p1);

// Create 2 more pizzas with any toppings we like!


function pizzOven (){
    var pizza2 = {};
    pizza2.crustType = "hand tossed";
    pizza2.sauceType = "marinara";
    pizza2.cheese = ["mozzarella"];
    pizza2.topping = ["peporoni", "pineapple", "chicken"];
    return pizza2;
}

var p2 = pizzOven();
console.log(p2);

function pizzOven (){
    var pizza3 = {};
    pizza3.crustType = "hand tossed";
    pizza3.sauceType = "marinara";
    pizza3.cheese = ["mozzarella"];
    pizza3.topping = ["peporoni", "steak", "sausage"];
    return pizza3;
}

var p3 = pizzOven();
console.log(p3);


// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

function randomPizza (){
    var pizza4 = [];
    var crust = ["hand tossed","deep dish","thin"];
    var sauce = ["marinara","alfredo","barbaque"];
    var cheese = ["mozzarella","feta","no cheese"];
    var topping = ["peporoni", "steak", "sausage"];
    var  yummy = crust[Math.floor(Math.random()* crust.length)];
    var  yummy1 = sauce[Math.floor(Math.random()* sauce.length)];
    var  yummy2 = cheese[Math.floor(Math.random()* cheese.length)];
    var  yummy3 = topping[Math.floor(Math.random()* topping.length)];
    pizza4.push(yummy,yummy1,yummy2,yummy3);
    return pizza4;
}

var p4 = randomPizza();
console.log(p4);