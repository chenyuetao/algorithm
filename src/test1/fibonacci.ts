

// 0 1 1 2 3 5 8 13 21 34 55

/**
 * 
 * @param n 斐波那契数列
 */
function fibonacci(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1

    let n1 = 1  // n -1 的值
    let n2 = 0   //n - 2 的值
    let res = 0

    for (let i = 2; i < n; i++) {
        res = n1 + n2

        n2 = n1
        n1 = res
    }
    return res
}

console.log(fibonacci(8))