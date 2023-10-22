# Challenge: Title Case

## Instructions

Write a function called `titleCase` that takes in a string and returns the string with the first letter of each word capitalized.

### Examples

```js
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase("sHoRt AnD sToUt"); // Short And Stout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // Here Is My Handle Here Is My Spout
```

### Constraints

- You may assume that each word consists of only letters and spaces

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```php
function titleCase(str) {
  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}
```

</details>

<details>
  <summary>Click For Solution 2</summary>

```js
function titleCase(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
```

</details>

### Test Cases

```js
test("Converting string to title case", () => {
  expect(titleCase("hello world")).toBe("Hello World");
  expect(titleCase("javascript programming")).toBe("Javascript Programming");
  expect(titleCase("openai chatbot")).toBe("Openai Chatbot");
});
```
