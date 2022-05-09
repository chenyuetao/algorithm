import { rotate1, rotate2 } from './array-rotate'


describe('旋转K步', () => {
    it('结果正确', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8]
        const result = rotate1(arr, 3)

        expect(result).toEqual([6, 7, 8, 1, 2, 3, 4, 5])
    })
    it('空数组情况', () => {
        const result = rotate1([], 3)

        expect(result).toEqual([])
    })

})

describe('', () => {
    it('', () => {
        
    })
})