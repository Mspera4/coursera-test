//***** String concatination
/*
var string = "hello";
string += " World";
console.log(string + "!");




//***** Regular Match operators
console.log ((5+4)/3);
console.log (undefined /5);




//***** Equality
var x = 4, y = 4;
if (x == y) {
	console.log("x=4 is equal to y=4");
}


x = "4"
if (x == y) {
	console.log("x='4' is equal to y=4");
}


//***** Strict Equality
if (x === y) {
	console.log("Strict: x='4' is equal to y=4")
}
else {
	console.log("Strict: x='4' is equal to y=4")
}


//***** If Statement (all flase)
if ( false || null || undefined || "" || 0 || NaN) {
	console.log ("this line won't ever execute");
}

//***** If Statement (all true)
if (true && "hello" && 1 && -1 && "false") {
	console.log("all true");
}


//For Loop
var sum = 0;
for (var i = 0; i < 10; i++) {
	console.log(i);	
	sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);

 //Default Values
 function orderchickenwith(sideDish) {
 	sideDish = sideDish || "Mamaguebo!";
 	console.log("Chicken with " + sideDish);
 }

 orderchickenwith("noodles");
 orderchickenwith(); 

 
// Object Creation Lecture 1
var company = new Object ();
company.name = "Facebook";
company.ceo = new Object ();
company.ceo.firstname = "Mark";
company.ceo.favcolor = "blue";

console.log(company);
console.log("company Ceo name is: "
	+ company.ceo.firstname);

console.log(company["name"]);
var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("stock price is: " + 
	company[stockPropName]);


// Better Way to creat objects: object literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstname: "Mark",
		favcolor: "blue"
	},
	$stock: 110,
	"stock of company": 150
};

console.log(facebook["stock of company"]);


//Functions are First-Class Data Type
//Functions are objects
function multiply(x, y) {
	return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

//Funtion Factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

function doOperation(x, operation) {
	return operation(x);
}

var result = doOperation(5, multiplyBy3);
console.log(result);
result = doOperation(100, doubleAll);
console.log(result);


// Copy by Reference vs by value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);


var a = { x: 7};
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);


//Pas by reference vs by value
function changePrimitive(primValue) {
	console.log("in changePrimitive...");
	console.log("before:");
	console.log(primValue);

	primValue = 5
	console.log("after:");
	console.log(primValue);
}

 var value = 7;
 changePrimitive(value); ///primValue = value
 console.log("after changePrimitive, orig value:");
 console.log(value);


function changeObject(objValue) {
	console.log("in changeObject...");
	console.log("before:");
	console.log(objValue);

	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}

value = { x: 7};
changeObject(value);
console.log("after changeObject, orig value:");
console.log(value);



//Function contructors
function Circle (radius) {
	this.radius = radius;
}

Circle.prototype.getArea =
	function () {
		return Math.PI * Math.pow(this.radius, 2);
	};

var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());

var otherCircle = new Circle(30);
console.log(otherCircle);
console.log(otherCircle.getArea());



// Objects literals and "this"
var literalCircle = { //new object
	radius: 10,

	getArea: function () {
		var self = this;
		console.log(this);

		var increaseRadius = function () {
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
		}
};

console.log(literalCircle.getArea());
console.log(this) //out of the literalCircle

//Arrays
var array = new Array();
array[0] = "Mariano";
array[1] = 2;
array[2] = function (name) {
	console.log("hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2] (array[0]);
console.log(array[3]);
console.log(array[3].course);

//Short hand array creation
var names = ["Mariano", "Diego", "Sperat"];
console.log(names);

for ( var i = 0; i < names.length; i++) {
	console.log("hello " + names[i]);
}

names[100] = "Tu vieja";
for ( var i = 0; i < names.length; i++) {
	console.log("hello " + names[i]);
}

var names2 = ["Mariano", "Diego", "Sperat"];

var myObj = {
	name: "Mariano",
	course: "HTML/CSS/JS",
	platform: "coursera",
};
for (var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
	console.log("hello "  names2[name]);
}

names2.greeting = "hi!";

for (var name in names2) {
	console.log("hello "  names2[name]);
}
*/