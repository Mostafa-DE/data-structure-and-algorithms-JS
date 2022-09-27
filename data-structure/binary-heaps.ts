// Max Binary Heap
// Implemented Using Array

class MaxBinaryHeap {
  constructor(public values: number[] = [41, 39, 33, 18, 27, 12]) {}

  insert(value: number) {
    this.values.push(value);
    let newValueIndex = this.values.indexOf(value);
    let newValue = this.values[newValueIndex];
    while (newValueIndex > 0) {
      let parentIndex = Math.floor((newValueIndex - 1) / 2);
      let parentValue = this.values[parentIndex];
      if (newValue <= parentValue) break;
      this.values[parentIndex] = newValue;
      this.values[newValueIndex] = parentValue;
      newValueIndex = parentIndex;
    }
  }

  extractMax() {
    const maxValue = this.values[0];
    const newMaxValue = this.values.pop();
    if (this.values.length > 0 && newMaxValue) this.values[0] = newMaxValue;

    let indx = 0;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * indx + 1;
      let rightChildIndex = 2 * indx + 2;
      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];
      let swap: number | null = null;

      if (rightChild > element && leftChild > element) {
        if (rightChild > leftChild) swap = rightChildIndex;
        if (leftChild > rightChild) swap = leftChildIndex;
      } else {
        if (leftChild > element) swap = leftChildIndex;
        if (rightChild > element) swap = rightChildIndex;
      }

      if (!swap) break;
      this.values[indx] = this.values[swap];
      this.values[swap] = element;
      indx = swap;
    }

    return maxValue;
  }
}
