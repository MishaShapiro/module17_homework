import {countDown} from "../../utils/countdown.js"

describe("countDown test", () => {
    it("from 10 to 1", () => {
        expect(countDown(10)).toBe("10 9 8 7 6 5 4 3 2 1")
    })
    it("from 5 to 1", () => {
        expect(countDown(5)).toBe("5 4 3 2 1")
    })
    it("from 1 to 1", () => {
        expect(countDown(1)).toBe("1")
    })
    it("input -1", () => {
        expect(countDown(-1)).toBe("-1")
    })
    it("input wwe", () => {
        expect(countDown("wwe")).toBe("Not a number")
    })
})