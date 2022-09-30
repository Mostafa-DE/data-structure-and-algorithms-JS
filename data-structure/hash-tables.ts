// const hash = (key: string, arrayLength: number): number => {
//   let total = 0;
//   let prime = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * prime + value) % arrayLength;
//   }

//   return total;
// };

class HashTable {
  keyMap: string[][][] = [];
  constructor(size = 57) {
    this.keyMap = new Array(size);
  }

  _hash(key: string) {
    let total = 0;
    let PRIME_NUM = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUM + value) % this.keyMap.length;
    }

    return total;
  }

  set(key: string, value: string) {
    const arrayPosition = this._hash(key);
    if (!this.keyMap[arrayPosition]) this.keyMap[arrayPosition] = [];
    this.keyMap[arrayPosition].push([key, value]);
  }

  get(key: string) {
    const arrayPosition = this._hash(key);
    const targetValue = this.keyMap[arrayPosition];
    if (targetValue) {
      for (let item of targetValue) {
        if (item[0] === key) return item[1];
      }
    }

    return undefined;
  }

  keys(): string[] {
    const array = this.keyMap;
    const arrayToReturn: string[] = [];
    for (let item of array) {
      if (!item) continue;
      arrayToReturn.push(item[0][0]);
    }
    return arrayToReturn;
  }

  values(): string[] {
    const array = this.keyMap;
    const arrayToReturn: string[] = [];

    for (let item of array) {
      if (!item) continue;
      arrayToReturn.push(item[0][1]);
    }

    return [...new Set(arrayToReturn)];
  }
}

const hash = new HashTable();
hash.set("darkblue", "#00008b");
hash.set("salmon", "#fa8072");
hash.set("salmon", "#fa8072");

// console.log(hash.get("darkblue"));
// console.log(hash.get("salmon"));
// console.log(hash.get("HI"));

console.log(hash.values());
// console.log(hash.keyMap);

// console.log(hash._hash("salmon"));
