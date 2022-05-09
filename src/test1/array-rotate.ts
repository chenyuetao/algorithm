/**
 * @description 旋转k步
 * @author  cyt
 */

export function rotate1(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length)

    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if (n != null) {
            arr.unshift(n)
        }
    }
    return arr
}

export function rotate2(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length == 0) return arr
    const step = Math.abs(k % length)

    const part1 = arr.slice(-step)
    const part2 = arr.slice(0, length - step)
    const part3 = part1.concat(part2)
    return part3
}

const isMath = (leftItem: string, rightItem: string): boolean => {

    if (leftItem === '{' && rightItem === '}') return true
    if (leftItem === '[' && rightItem === ']') return true
    if (leftItem === '(' && rightItem === ')') return true

    return false
}

export function aaabbb(str: string): boolean {
    const length = str.length
    if (length === 0) return true

    const stack = []

    const lSymbols = '{[('
    const rSymbols = ')]}'
    for (let i = 0; i < length; i++) {
        const s = str[i]
        if (lSymbols.includes(s)) {
            stack.push(s)
        } else if (rSymbols.includes(s)) {
            const res = isMath(stack[stack.length - 1], s)
            if (res) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}

const str = 'sadf{fsd[sdf(df)d]f}sdf'
console.info(aaabbb(str))