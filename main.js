
// Part 1

var FoodItem = function (name, calories, vegan, glutenFree, citrusFree){
  	this.name = name ;
  	this.calories = calories;
  	this.vegan = vegan;
  	this.glutenFree = glutenFree;
  	this.citrusFree = citrusFree;
  	 this.toString = function(){
 		 console.log("Ingredients:" + "\n" + "Name:" + this.name + "\n" + "Calories:"  + this.calories + "\n" + "Vegan:" + this.vegan + "\n" + "GlutenFree:" + this.glutenFree + "\n" + "CitrusFree:" + this.citrusFree);
  	}
  }
// console.log(FoodItem);


/// BURRITO
 var tortilla = new FoodItem('tortilla', 100, true, false, true);
  // console.log(tortilla) ;

  var beans = new FoodItem('beans', 20, true, true, true);
 	// 	beans.isVegan = function(){
		// 		if (this.vegan === true){
		// 		console.log("This is Vegan!");
		// 	}
		// }
   // console.log(beans); 

 var cheese = new FoodItem('cheese', 50, false, false, true);
  // console.log(cheese);

//
//DRINKS
var strawberryPuree = new FoodItem('strawberryPuree', 20,  true, true, true);
var tequila = new FoodItem('tequila', 50, true,true,true);
var lime = new FoodItem('lime', 10, true, true, false);


// GUACAMOLE
var avacado = new FoodItem('avacado', 50, true, true, true);
var cilantro = new FoodItem('cilantro', 5, true, true, true);
// lime also goes here




// Part 2
// 
 
var Drink = function (name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients; 
		this.toString = function(){
			var arrIngredients = ""
			for (var i = 0 ; i < this.ingredients.length; i++) {
				
				if (i === this.ingredients.length-1){ 
					arrIngredients += this.ingredients[i].name
				}
				else{
				arrIngredients += this.ingredients[i].name + ", "
				}
			};
			console.log ("Name: " + this.name  + "\n" + "description: " + this.description +  "\n" + "price: "+  this.price  + "\n" + "ingredients: " + arrIngredients)
		} 
			// console.log(Drink);
}

var margarita = new Drink('Strawberry Margarita ', 'tart sweet flavors that balance each other of lime, strawberry and orange ', 9.99, [strawberryPuree, tequila, lime])
// 		console.log(margarita);


//////////////////////////
var Plate = function (name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
		this.toString = function(){
			var arrIngredients = ""
			for (var i = 0 ; i < this.ingredients.length; i++) {
				
				if (i === this.ingredients.length-1){ 
					arrIngredients += this.ingredients[i].name
				}
				else{
				arrIngredients += this.ingredients[i].name + ", "
				}
			};
			console.log ("Name: " + this.name  + "\n" + "description: " + this.description +  "\n" + "price: " +  this.price  + "\n" + "ingredients: " + arrIngredients)
		} 
			this.isVegan = function(){
				if (this.vegan === true)
				console.log("This is Vegan!");
				}
			this.isGlutenFree = function(){
				if (this.glutenFree === true)
					console.log("This is Gluten Free!");
				}
			this.isCitrusFree = function(){
				if (this.citrusFree === true) 
					console.log("This is Citrus Free!");
			}	
		// console.log(Plate);
};
var burritoPlate = new Plate('Bean and Cheese Burrito', 'Muy Delicioso- cheesy goodness from heaven!', 3.99, [tortilla, beans,cheese]);

var guacamolePlate = new Plate('Authentic Guacamole', 'Best guac on the planet', 1.99, [avacado, cilantro, lime]);

// ORDER --------

var Order = function(plates){
	this.plates = plates;
		this.toString = function(){
			var arrPlates = ""
			for (var i = 0 ; i < this.plates.length; i++) {
				
				if (i === this.plates.length-1){ 
					arrPlates += this.plates[i].name
				}
				else{
				arrPlates += this.plates[i].name + ", "
				}
			};
			console.log(arrPlates);

		}
};

var myOrder = new Order([burritoPlate, margarita])


 // MENU ----------

var Menu = function(plates){
	this.plates = plates;
	this.toString = function(){
			var arrPlates = ""
			for (var i = 0 ; i < this.plates.length; i++) {
				
				if (i === this.plates.length-1){ 
					arrPlates += this.plates[i].name
				}
				else{
				arrPlates += this.plates[i].name + ", "
				}
			};
			console.log(arrPlates);

		}
			
};

var theMenu = new Menu([burritoPlate, guacamolePlate, margarita])

// RESTAURANT ----------

var Restaurant = function(name, description, menu){
  	this.name = name;
  	this.description = description;
  	this.menu = menu;
  		this.toString = function(){
  			// console.log("test",arrMenu)
  			var arrMenu = ""
			for (var i = 0 ; i < this.menu.plates.length; i++) {
				
				if (i === this.menu.plates.length-1){ 
					arrMenu += this.menu.plates[i].name
				}
				else{
				arrMenu += this.menu.plates[i].name + ", "
				}

			};
  			console.log(this.name, ",", this.description, ",", "Menu:", arrMenu )
  		}
}


var southoftheborder = new Restaurant("South of the Border", "A Mexican Restaurante", theMenu)

// var Customer = function(dietaryPreference){
// 	this.dietaryPreference = dietaryPreference;
// 		this.toString = function(){

// 		}
// }








