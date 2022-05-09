
/**
 * 
 * @param arr 二分查找 O(logn)
 * @param target 
 * @returns 
 */
function banarySearchTest(arr: number[], target: number): number {
    const length = arr.length
    if (length === 0) return -1

    let startIndex = 0
    let endIndex = length - 1

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2)
        const midValue = arr[midIndex]

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

//console.info(banarySearchTest([1, 3, 5, 7, 9, 11, 15, 18, 19, 22, 58, 99], 3))

/**
 * 
 * @param arr 快速排序 O(nlogn)
 * @returns 
 */
function qulickSort(arr: number[]): number[] {
    const length = arr.length
    if (length === 0) return []

    let midIndex = Math.floor(length / 2)
    let midValue = arr.slice(midIndex, midIndex + 1)[0]

    let left: number[] = []
    let right: number[] = []

    arr.forEach(n => {
        if (n !== midValue) {
            if (n < midValue) {
                left.push(n)
            } else {
                right.push(n)
            }
        }
    })
    return qulickSort(left).concat([midValue], qulickSort(right))
}

//console.info(qulickSort([45, 12, 14, 18, 24, 88, 147, 996, 33, 43]))

/**
 * 
 * @param arr 移动0到末尾 O(n)
 * @returns 
 */
function moveZero(arr: number[]): number[] {
    const length = arr.length
    if (length === 0) return []

    let i
    let j

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0 && !j) {
            j = i
        }
        if (arr[i] === 1 && j) {
            const num = arr[i]
            arr[i] = arr[j]
            arr[j] = num
            j++
        }
    }
    return arr
}
console.log(moveZero([1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1]))