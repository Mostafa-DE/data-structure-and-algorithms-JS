const merge = (arr1, arr2) => {
	const newArray = [];
	let idx1 = 0;
	let idx2 = 0;
	while(idx1 < arr1.length && idx2 < arr2.length) {
		if(arr1[idx1] < arr2[idx2]) {
			newArray.push(arr1[idx1]);
			idx1++;
		} else {
			newArray.push(arr2[idx2]);
			idx2++;
			
		}	
	}

	while(idx1 < arr1.length | idx2 < arr2.length) {
		if(arr1[idx1]){
			newArray.push(arr1[idx1]);
			idx1++;
		}
		if(arr2[idx2]){
			newArray.push(arr2[idx2]);
			idx2++;
		}
	}

	return newArray;
}


const mergeSort = (arr) => {
	if(arr.length <= 1) return arr;
	let midPoint = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, midPoint));
	let right = mergeSort(arr.slice(midPoint));
	return merge(left, right)
}


console.log(mergeSort([200, 140, 990, 100, 160, 220, 10000, 1000]));













