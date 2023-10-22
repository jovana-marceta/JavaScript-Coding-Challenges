# Challenge: Count Occurrences

## Instructions

Write a function called `countOccurrences()` that takes in a string and a character and returns the number of occurrences of that character in the string.

### Examples

```js
countOccurrences("hello", "l"); // 2
countOccurrences("hello", "z"); // 0
```

### Constraints

- Lowercase and uppercase characters are considered different characters. If you want, you can make the function case insensitive

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```JavaScript
function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

// Case insensitive version
// function countOccurrences(str, char) {
//   const lowerStr = str.toLowerCase();
//   const lowerChar = char.toLowerCase();

//   let count = 0;

//   for (let i = 0; i < lowerStr.length; i++) {
//     if (lowerStr[i] === lowerChar) {
//       count++;
//     }
//   }

//   return count;
// }

```

</details>

<details>
  <summary>Click For Solution 2</summary>

```JavaScript
const countOccurrences = (str, char) => str.split(char).length - 1;
```

</details>

<details>
  <summary>Click For Solution 3</summary>

```JavaScript
function countOccurrences(str, char) {
  let arr = str.split('');
  let count = 0;

  arr.forEach(i => {
    if(i === char) {
      count++;
    }
  })

  return count;
}
```

</details>

### Test Cases

```js
test("Count Occurrences of a Character", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("programming", "m")).toBe(2);
  expect(countOccurrences("banana", "a")).toBe(3);
});
```
