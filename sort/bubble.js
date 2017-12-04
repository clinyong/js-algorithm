const { list } = require("./constants");
const { swap } = require("./utils");

function bubbleSort(list) {
	const len = list.length;
	let total = 0;
	let swapCount = 0;
	for (let i = 1; i < len; i++) {
		for (let j = 1; j < len; j++) {
			total += 1;
			if (list[j - 1] > list[j]) {
				swapCount += 1;
				swap(list, j - 1, j);
			}
		}
	}

	console.log(swapCount);
	console.log(total);
	return list;
}

function bubbleSortOpt1(list) {
	const len = list.length;
	let total = 0;
	let swapCount = 0;
	for (let i = 1; i < len; i++) {
		for (let j = 1; j < len - i; j++) {
			total += 1;
			if (list[j - 1] > list[j]) {
				swapCount += 1;
				swap(list, j - 1, j);
			}
		}
	}

	console.log(swapCount);
	console.log(total);
	return list;
}

function bubbleSortOpt2(list) {
	const len = list.length;
	let total = 0;
	let i = 1;
	let swapCount = 0;
	while (i < len) {
		let allDone = true;
		for (let j = 1; j < len - i; j++) {
			total += 1;
			if (list[j - 1] > list[j]) {
				swapCount += 1;
				swap(list, j - 1, j);
				allDone = false;
			}
		}

		if (allDone) {
			break;
		} else {
			i++;
		}
	}

	console.log(swapCount);
	console.log(total);
	return list;
}

console.log(bubbleSort(list.slice()));
console.log(bubbleSortOpt1(list.slice()));
console.log(bubbleSortOpt2(list.slice()));
