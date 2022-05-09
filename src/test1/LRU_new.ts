
//数据缓存，刷新
class Lru_new {
    private length: number
    private data: Map<number, any>

    constructor(length: number) {
        if (length < 1) throw Error('!!')
        this.length = length
        this.data = new Map()
    }

    get(key: number): any {
        const data = this.data
        const value = data.get(key)
        if (value) {
            data.delete(key)
            data.set(key, value)
        } else {
            return null
        }
        return value
    }

    set(key: number, value: any) {
        const data = this.data
        const curValue = data.get(key)
        if (curValue) {
            data.delete(key)
            data.set(key, value)
        } else {
            data.set(key, value)
            if (data.size > this.length) {
                const removeKey = data.keys().next().value
                data.delete(removeKey)
            }
        }
    }
}

const lru_test = new Lru_new(3)
console.log(lru_test.get(1))
// lru_test.set(1, 5)
// lru_test.set(2, 50)
// lru_test.set(3, 500)
// lru_test.set(4, 5000)
// console.log(lru_test.get(1))
// console.log(lru_test)

interface IListNode {
    key: string
    value: any
    prev?: IListNode
    next?: IListNode
}

class Lru_LinkList {
    private length: number
    private data: { [key: string]: IListNode } = {}
    private dataLength: number = 0
    private listHead: IListNode | null = null
    private listTail: IListNode | null = null

    constructor(length: number) {
        if (length < 1) throw Error('!!')
        this.length = length
    }

    private moveToTail(curNode: IListNode) {
        const listTail = this.listTail
        if (listTail === curNode) return
        // -------------- 1. 让 prevNode nextNode 断绝与 curNode 的关系 --------------

        const prevNode = curNode.prev
        const nextNode = curNode.next

        if (prevNode) {
            if (nextNode) {
                prevNode.next = nextNode
            }
        }
        if (nextNode) {
            if (prevNode) {
                nextNode.prev = prevNode
            } else {
                delete nextNode.prev
            }
            if (this.listHead === curNode) this.listHead = nextNode
        }
        // -------------- 2. 让 curNode 断绝与 prevNode nextNode 的关系 --------------
        delete curNode.prev
        delete curNode.next

        // -------------- 3. 在 list 末尾重新建立 curNode 的新关系 --------------
        if (listTail) {
            listTail.next = curNode
            curNode.prev = listTail
        }
        this.listTail = curNode
    }

    private tryClean() {

    }

    set(key: string, value: any) {
        const data = this.data
        const curNode = data[key]

        if (curNode == null) {
            let newNode = { key, value }
            this.moveToTail(newNode)

            data[key] = newNode
            this.dataLength++

            if (this.dataLength == 1) this.listHead = newNode

        } else {
            curNode.value = value
            this.moveToTail(curNode)

        }
        // 尝试清理长度
        this.tryClean()
    }

    get(key: string): any {
        const data = this.data
        const curNode = data[key]

        if (curNode === null) return null
        //多于操作
        //if (this.listTail === curNode) return curNode.value

        this.moveToTail(curNode)

        return curNode.value
    }
}