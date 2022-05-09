

const arr1 = [1, 4, 8, 11, 25, 28, 33, 38, 41, 49, 58, 68, 99]

/**
 * 
 * @param arr 二分查找法
 * @param target 
 * @returns 
 */
function banarySearch(arr: number[], target: number): number {
    const length = arr.length
    if (length === 0) return -1

    let startIndex = 0
    let endIndex = length - 1

    while (startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex + endIndex) / 2)
        let midValue = arr[midIndex]

        if (target > midValue) {
            startIndex = midIndex + 1
        } else if (target < midValue) {
            endIndex = midIndex - 1
        } else {
            return midIndex
        }
    }

    return -1
}

console.info(banarySearch(arr1, 58))
