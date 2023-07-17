import { reverseString } from "../../utils/revertString.js"

describe("Test reverse string", () => {
  it("qwerty reverse", () => {
    expect(reverseString("qwerty")).toBe("ytrewq")
  })
  it("строка reverse", () => {
    expect(reverseString("строка")).toBe("акортс")
  })
  it("hello world reverse", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh")
  })
})