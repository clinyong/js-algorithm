const { list } = require("./constants");
const { swap } = require("./utils");

function selectSort(list) {
	let total = 0;
	let swapCount = 0;

	for (let i = 0; i < list.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < list.length; j++) {
			total += 1;
			if (list[j] < list[minIndex]) minIndex = j;
		}
		if (minIndex !== i) {
			swapCount += 1;
			swap(list, minIndex, i);
		}
	}

	console.log(swapCount);
	console.log(total);
	return list;
}

console.log(selectSort(list));
