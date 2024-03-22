const { expect } = require("chai");

describe("JSON.stringify", () => {
  it("should convert an object to a JSON string", () => {
    // Arrange
    const data = { name: "John", age: 30 };

    // Act
    const jsonString = JSON.stringify(data);

    // Assert
    expect(jsonString).to.be.a("string");
    expect(jsonString).to.equal('{"name":"John","age":30}');
  });

  it("should handle nested objects and arrays", () => {
    // Arrange
    const data = { name: "John", age: 30, hobbies: ["reading", "coding"] };

    // Act
    const jsonString = JSON.stringify(data);

    // Assert
    expect(jsonString).to.be.a("string");
    expect(jsonString).to.equal(
      '{"name":"John","age":30,"hobbies":["reading","coding"]}'
    );
  });

  // Add more test cases as needed
});
