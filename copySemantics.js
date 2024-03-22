// Copy semantics for non primitive data types

/*    Changes to a reference:
        If you have two variables referencing the same object, changes made through one variable will affect the original object and will be reflected through the other variable because they both point to the same object in memory.

    Shallow copy:
        A shallow copy creates a new object and copies all enumerable own properties of the original object to the new object.
        If a property of the original object is itself an object or array, the shallow copy will only copy the reference to that nested object or array, not the nested object or array itself.
        Changes made to nested objects or arrays in the copied object will affect the original object, and vice versa, because they both share references to the same nested objects or arrays.

    Deep copy:
        A deep copy creates a new object and recursively copies all properties of the original object, including nested objects and arrays.
        Changes made to the deep copy do not affect the original object, and vice versa, because they are entirely separate objects with independent properties. */

const objA = { a: "subham", b: 12 };
const objB = objA; // Reference

const objC = { a: 1, b: { c: 2 } };
const objD = Object.assign({}, objC); // Shallow copy using Object.assign

const originalObject = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(originalObject)); //Deep copy -- first we convert the original obj to string and convert it back to object and store the return value in a new variable
