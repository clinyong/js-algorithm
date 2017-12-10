const { list } = require("./constants");
const { swap } = require("./utils");

function quickSort(list) {
	if (list.length <= 1) return list;

	let lessList = [],
		moreList = [],
		pivotList = [];

	const pivot = list[0];
	list.forEach(item => {
		if (item > pivot) {
			moreList.push(item);
		} else if (item < pivot) {
			lessList.push(item);
		} else {
			pivotList.push(item);
		}
	});

	return [...quickSort(lessList), ...pivotList, ...quickSort(moreList)];
}

function partition(l, left, right) {
	const pivotValue = l[right];

	let storeIndex = left;
	// move all values to left, which are below than pivotValue
	// i should start from left, not left+1
	for (let i = left; i < right; i++) {
		if (l[i] < pivotValue) {
			if (storeIndex !== i) {
				swap(l, storeIndex, i);
			}
			storeIndex += 1;
		}
	}

	swap(l, right, storeIndex);
	return storeIndex;
}

function quickSortOpt1(l, left, right) {
	if (right > left) {
		const pivotIndex = partition(l, left, right);
		quickSortOpt1(l, left, pivotIndex - 1);
		quickSortOpt1(l, pivotIndex + 1, right);
	}
}

console.log(quickSort(list.slice()));

const list2 = list.slice();

quickSortOpt1(list2, 0, list2.length - 1);
console.log(list2);
