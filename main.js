var FoodItem = function (name, calories, vegan, glutenFree, citrusFree){
  	this.name = name ;
  	this.calories = calories;
  	this.vegan = vegan;
  	this.glutenFree = glutenFree;
  	this.citrusFree = citrusFree;
  	this.toString = function(){
 		console.log("Name:" + this.name + "\n" + "Calories:"  + this.calories + "\n" + "Vegan:" + this.vegan + "\n" + "GlutenFree:" + this.glutenFree + "\n" + "CitrusFree:" + this.citrusFree);
  	}
  }
console.log(FoodItem);
 
 var tortilla = new FoodItem('tortilla', 100, true, false, true);
 console.log(tortilla) 




