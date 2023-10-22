# Challenge: Hello World

Write a function called `helloWorld` that returns a string of 'Hello World!'.

### Constraints

- The function must return a string

## Solutions

<details>
  <summary>Click For Solution</summary>

```JS
function printHelloWorld() {
  return 'Hello World!';
}
```

### Test Cases

run `npm test`

```JS
test("Returning 'Hello, World!' as a string", () => {
  const result = helloWorld();
  expect(result).toBe('Hello World!');
});
```
