//num is being passed in 
function addUp(num) {
	//value needs to be stored
	let sum = 0
	//loop through array
		for (let i = 0; i <= num; i++){
			//adding 1 to sum
			sum += i
		}
		//return result
	return sum
	}

//Practice as ternary
function lessThan100(a, b) {
	let c = a + b
	if(c < 100){
		return true
	} else {
		return false
	}
}

//Practice as ternary
function isSameNum(num1, num2) {
	if(num1 === num2){
		return true
	} else {
		return false
	}
}

function swap(a, b) { 
	c = a
	a = b
	b = c
	return [a, b]
}
//other solution, this is just changes the order of the output not really changing the value

function swap(a, b) {
	return [b, a]
}


function animals(chickens, cows, pigs) {
	let numChick = chickens * 2;
	let numCow = cows * 4;
	let numPig = pigs * 4;
	return numChick + numCow + numPig;
}

//practice doing this in arrow func. Answer below
const animals = (chickens, cows, pigs) => chickens * 2 + cows * 4 + pigs * 4;


function isSeven(x) {
	return x == 7 ? true : false;
}


function convert(hours, minutes) {
	hoursSec = hours * 3600
	minutesSec = minutes * 60
	return hoursSec + minutesSec
}

// **** Other solutions *******
// const convert = (hours, minutes) => hours * 3600 + minutes * 60

// function convert(hours, minutes) {
// 	return (hours*3600) + (minutes*60);
// }
/////////////////////////////////////////////////////////////////

// **** Other solutions *******
function footballPoints(wins, draws, losses) {
	wP = 3 * wins
	dP = 1 * draws
	lP = 0 * losses
	return  wP + dP + lP
}

const footballPoints = (a,b,c)=> a*3+b;

function footballPoints(wins, draws, losses) {
	return wins*3 + draws;
}
/////////////////////////////////////////////////////////////////

function addUp(num) {
	let sum = 0 
	for (let i = 0; i <= num; i++)
	sum += i //needed to iterate the i not num
	return sum
}

function sumPolygon(n) {
	sum = 0
	 sum = (n - 2) * 180
	return sum 
}

function checkEquality(a, b) {
	return (a === b) ? true : false
}

// arrow function

const checkEquality = (a, b) => a === b;

function cubes(a) {
	return a ** 3
}

cubes=a=>a**3

function hello() {
	return "hello edabit.com"
}


function minMax(arr) {
	var returnArr = [];
	var min = arr[0];
	var max = arr[0];
	
	for(var i = 1; i < arr.length; i++) {
	if(arr[i] < min) {
	min = arr[i];
	}
	if(arr[i] > max) {
	max = arr[i];
	}
	}

returnArr.push(min);
returnArr.push(max);

return returnArr;
}


function minMax(arr) {
	// if len === 1
	if (arr.length === 1) return [arr[0], arr[0]];
  
	//if len > 1
	let min = Infinity,
	  max = -Infinity;
	//small, //largest
	const minMaxArr = [min, max];
				  //[1, 1]
	for (let el of arr) {
	  if (el > minMaxArr[1]) minMaxArr[1] = el;
	  if (el < minMaxArr[0]) minMaxArr[0] = el;
	}
	// Return
	return minMaxArr;
  }

  const matchHouses = (step) => (!step) ? 0 : step * 5 + 1 


  function makesTen(a, b) {
		if (a + b == 10) return true
		if (a == 10) return true
		if (b == 10) {
			return true
		} else{
				return false
			}
	}

	let makesTen = (a,b)=> a + b == 10 ||a == 10 || b == 10;

	const makesTen = (a, b) => [a, b, a + b].includes(10);

function timeForMilkAndCookies(date) {
	console.log(date.getDate(), date.getMonth())
	return (date.getMonth() === 11) ? true : 
	(date.getDate() === 24) ? true : 
		false
}

function timeForMilkAndCookies(date) {
	return date.getMonth() === 11 && date.getDate() === 24
}

function timeForMilkAndCookies(date) {
	return (date.getMonth() === 11 && date.getDate() === 24) ? true :	false
}

function profitableGamble(prob, prize, pay) {
	return (prob * prize - pay > 0) ? true : false
}


function greeting(name) {
	if(name == "Mubashir") {
		return "Hello, my Love!";
	}
		return "Hello, " + name + "!";
}

function greeting(name) {
	return "Hello, " + name + "!";
	if(name == "Mubashir") {
		return "Hello, my Love!";
	}
}

Const greeting = (name) => name === “mash” ? `hello, my love` : `hello ${name}`

const imposterFormula = (i, p) => {
	let imposter = Math.round(100*(i/p))
	return `${imposter}%`
}

const imposterFormula1 = (i,p) => `${Math.round(100*(i/p))}%`

const imposterFormula1 = (i,p) => `Math.round(100*(i/p))${%}`


function whichIsLarger(f, g) {
	return f() > g() ? "f" : f() < g() ? "g" : "neither";
}

function canNest(arr1, arr2) {
	let firstMax = Math.max(...arr1);
	let secondMax = Math.max(...arr2);

	let firstMin = Math.min(...arr1);
	let secondMin = Math.min(...arr2);
		
		console.log(firstMin, secondMin, firstMax, secondMax)
	if ((firstMax < secondMax) && (firstMin > secondMin)) {
		return true;
	} else {
		return false;
	}
}
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false