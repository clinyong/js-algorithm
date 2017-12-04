function swap(list, iIndex, jIndex) {
	const tmp = list[iIndex];
	list[iIndex] = list[jIndex];
	list[jIndex] = tmp;
}

exports.swap = swap;
