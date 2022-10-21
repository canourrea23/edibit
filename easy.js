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