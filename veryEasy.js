console.log('sum of two numbers')
function addition(a, b) {
	let sum = a + b
	return sum
}

console.log('turn seconds to hours')
function howManySeconds(hours) {
	let seconds = 60 * hours
	let hour = seconds * 60
	return hour
}

function addition(num) {
	let plus = num + 1
	return plus
}

function findPerimeter(length, width) {
	let y = width * 2
	let x = length *2
	return x + y	
}

function remainder(x, y) {
	let rem = x % y
	return rem
}

console.log('power')
function circuitPower(voltage, current) {
	let power = voltage * current
	return power
}

console.log('area of triangle')
function triArea(base, height) {
	let area = base * height / 2
	return area
}

console.log('true if 0 or less')
function lessThanOrEqualToZero(num) {
	if (num <= 0){
		return true
	} else {
		return false
	}
}

console.log('add the point')
function points(twoPointers, threePointers) {
	let twoPoints = twoPointers * 2
	let threePoints = threePointers * 3
	return twoPoints + threePoints
}

console.log('Return the First Element in an Array')
function getFirstValue(arr) {
	return arr[0]
}

//day 3
function nameString(name){
	let b = "Edabit"
	return name + b
}

function giveMeSomething(a) {
	return "something " + a
}

function calcAge(age) {
	return age * 365
}

function convert(minutes) {
	return minutes * 60
}

function printArray(number) {
	const newArray = [];
	for(let i = 1; i <= number; i++) {
	newArray.push(i);
		console.log(newArray)
	}
	return newArray;
}

function lessThan100(a, b) {
	if (a + b < 100){
		return true
	} else {
		return false
	}
}