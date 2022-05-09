
function throttle(fn, delay) {
    let timer
    let prevTime
    return function () {
        const currTime = Date.now()
        if (!prevTime) prevTime = currTime
        clearTimeout(timer)

        if (currTime - prevTime > delay) {
            prevTime = currTime
            fn.apply(this, arguments)
            clearTimeout(timer)
            return
        }

        timer = setTimeout(function () {
            prevTime = Date.now()
            timer = null
            fn.apply(this, arguments)
        }, delay)
    }
}


const a = [1, 3, 5, 7, 8, 11, 14, 16, 19]
const b = [2, 3, 5, 11, 16, 22]

function customSort(arr1, arr2) {
    const resSet = new Set()

    arr2.forEach(item => {
        if (arr1.includes(item)) {
            resSet.add(item)
        }
    })
    return resSet
}
console.info(customSort(a, b))


function quickSort(arr) {

    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }

    }

    return quickSort(left).concat(pivot, quickSort(right));

}