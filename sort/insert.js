const { list } = require("./constants");

function insertSort(list) {
	const newList = [];
	let total = 0;

	newList[0] = list[0];
	for (let i = 1; i < list.length; i++) {
		const oldItem = list[i];

		let j = newList.length;
		while (j > 0) {
			total += 1;
			if (oldItem >= newList[j - 1]) {
				newList[j] = oldItem;
				break;
			} else {
				newList[j] = newList[j - 1];
				j--;
			}
		}

		if (j === 0) {
			newList[0] = oldItem;
		}
	}

	console.log(total);
	return newList;
}

function insertSort2(list) {
	let total = 0;

	for (let i = 1; i < list.length; i++) {
		for (let j = 0; j < i; j++) {
			total += 1;
			if (list[i] < list[j]) {
				list.splice(j, 0, list[i]);
				list.splice(i + 1, 1);
			}
		}
	}

	console.log(total);
	return list;
}

console.log(insertSort(list));
