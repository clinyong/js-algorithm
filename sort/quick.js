const { list } = require("./constants");
const { swap } = require("./utils");

let total = 0;

function quickSort(list) {
	if (list.length <= 1) return list;

	let lessList = [],
		moreList = [],
		pivotList = [];

	const pivot = list[0];
	list.forEach(item => {
		total += 1;
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

// TODO:
function partition(list, left, right, pivotIndex) {
	const pivotValue = list[pivotIndex];
    swap(a[pivotIndex], a[right]);

    const storeIndex = left;
    for (let i = left; i < right; i++) {
    }
}

function quickSortOpt1(params) {}

console.log(quickSort(list));
console.log(total);
