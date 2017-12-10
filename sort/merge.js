const { list } = require("./constants");

function merge(left, right) {
	const final = [];
	while (left.length && right.length) {
		final.push(left[0] < right[0] ? left.shift() : right.shift());
	}

	return final.concat(left).concat(right);
}

function mergeSort(l) {
	if (l.length === 1) return l;
	const mid = Math.ceil(l.length / 2);
	return merge(mergeSort(l.slice(0, mid)), mergeSort(l.slice(mid)));
}

const l = mergeSort(list);
console.log(l);
