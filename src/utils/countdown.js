export function countDown(n) { // Отсчитывает от введённого числа до 1
    if (isNaN(+n)) {
        return "Not a number"
    }
    let result = `${n}`
    for (let i = n-1; i>= 1; i--) {
        result += ` ${i}` 
    }
    return result
}