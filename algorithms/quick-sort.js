const pivot = (arr, start= 0, end= arr.length - 1) => {
	const swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}	

	let pivot = arr[start];
	swapIdx = start;
	for(let i = start + 1 ; i < arr.length ; i++) {
		if(pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}		
	}
	swap(arr, swapIdx, start);
	return swapIdx;
}


const quickSort = (arr, left= 0, right= arr.length - 1) => {
	if(left < right) {
		let pivotIdx = pivot(arr, left, right);

	        // Do recursion for the left side of the array
        	quickSort(arr, left, pivotIdx - 1);

        	// Do recursion for the right side of the array
        	quickSort(arr, pivotIdx + 1, right);
	}

	return arr;
}

console.log(quickSort([2, 1, 5, 8, 3, 0, 6]));
