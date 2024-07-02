const { sum } = require("../src/components/sum");

test("Sum function should calculate the sum fot two numbers", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});
