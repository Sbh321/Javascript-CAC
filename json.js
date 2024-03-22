// declareing a JSON string inside `` and parsing/converting it to object and vice versa

const jsonData = `{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "address": {
    "city": "New York",
    "country": "USA"
  },
  "hobbies": ["reading", "running", "cooking"]
}`;

let data = JSON.parse(jsonData); // Converting JSON string to object
console.log(jsonData, typeof data);

let jsonString = JSON.stringify(data); // Converting object back to JSON string
console.log(jsonString, typeof jsonString);
