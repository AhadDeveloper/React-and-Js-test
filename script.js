// Write a JavaScript function that checks if a string is a palindrome (reads the same backward as forward).

const checkPalindrome = (str) => {
  const isPalindrome = str
    .split("")
    .reverse((a, b) => a - b)
    .join("");

  return isPalindrome === str;
};

console.log(checkPalindrome("rotator"));

// Write a JavaScript function that removes duplicates from an array.

const removeDuplicates = (arr) => {
  const mySet = new Set();
  const newArray = [];

  const stringifyValue = (value) => {
    return typeof value === "object" && value !== null
      ? JSON.stringify(value)
      : value;
  };

  arr.forEach((item) => {
    const stringifiedItem = stringifyValue(item);
    if (!mySet.has(stringifiedItem)) {
      mySet.add(stringifiedItem);
      newArray.push(item);
    }
  });

  return newArray;
};

const arr = [
  1,
  2,
  "hello",
  "world",
  { name: "Alice", age: 30 },
  { name: "Alice", age: 30 },
  [1, 2, 3],
  [1, 2, 3],
  "hello",
  3,
  [4, 5, { nested: "object" }],
  [4, 5, { nested: "object" }],
  { nested: [1, 2, 3] },
  { nested: [1, 2, 3] },
];

console.log(removeDuplicates(arr));

// Write a JavaScript class Animal with a method speak(). Then, create a subclass Dog that overrides the speak() method.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(this.name);
  }
}

const animal = new Animal("dog class");
animal.speak();

const dog = new Dog("dog subclass");
dog.speak();
