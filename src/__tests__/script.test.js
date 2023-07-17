import {func1} from "../script.js"

describe("test division", () => {
    it("division 1 - 2", () => {
        expect(func1(1, 2)).toBe(-1)
    })
    it("division 0 - 0", () => {
        expect(func1(0, 0)).toBe(0)
    })
    it("division 1 - 2", () => {
        expect(func1(3, 2)).toBe(1)
    })
})