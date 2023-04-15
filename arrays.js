class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(value) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = value;
    this.length++;
    return this.length;
  }

  insert(index, value) {
    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = value;
    this.length++;
    return this.length;
  }

  indexOf(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === value) {
        return i;
      }
    }
    return -1;
  }

  includes(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === value) {
        return true;
      }
    }
    return false;
  }

  reverse() {
    const newData = {};
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[this.length - i - 1];
    }
    this.data = newData;
    return this;
  }

  slice(start, end) {
    const newArray = new MyArray();
    for (let i = start; i < end; i++) {
      newArray.push(this.data[i]);
    }
    return newArray;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i, this.data);
    }
  }

  map(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this.data[i], i, this.data));
    }
    return newArray;
  }

  filter(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this.data)) {
        newArray.push(this.data[i]);
      }
    }
    return newArray;
  }
}

const myArray = new MyArray();

myArray.push(1); // adds 1 to the end of the array
myArray.push(2); // adds 2 to the end of the array
myArray.push(3); // adds 3 to the end of the array

console.log(myArray);