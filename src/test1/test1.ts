
interface arrayList {
    id: number;
    name: string;
    pid: number;
}

interface treeNode {
    id: number;
    name: string;
    children?: treeNode[];
}

const arrList = [
    { id: 1, name: 'A', pid: 0 },
    { id: 2, name: 'B', pid: 1 },
    { id: 3, name: 'C', pid: 1 },
    { id: 4, name: 'D', pid: 2 },
    { id: 5, name: 'E', pid: 2 },
    { id: 6, name: 'F', pid: 3 },
    { id: 7, name: 'F', pid: 3 },
    { id: 8, name: 'F', pid: 6 },
    { id: 9, name: 'F', pid: 6 },
    { id: 10, name: 'F', pid: 7 },
    { id: 11, name: 'F', pid: 7 },
    { id: 12, name: 'F', pid: 8 },
    { id: 13, name: 'F', pid: 8 },
    { id: 14, name: 'F', pid: 9 },
    { id: 15, name: 'F', pid: 9 },
    { id: 16, name: 'F', pid: 10 },
]

function covert(arr: arrayList[]): treeNode | null {
    if (arr.length == 0) return null

    let root = null
    const mapNode: Map<number, treeNode> = new Map()

    arr.forEach(item => {
        const { id, name, pid } = item
        const treeNode = { id, name }
        mapNode.set(id, treeNode)

        const parentNode = mapNode.get(pid)
        if (parentNode) {
            if (!parentNode.children) parentNode.children = []
            parentNode.children.push(treeNode)
        }

        if (pid == 0) root = treeNode
    })

    return root
}
console.log(covert(arrList))

const tree1 = {
    "id": 1,
    "name": "A",
    "children": [
        {
            "id": 2,
            "name": "B",
            "children": [
                {
                    "id": 4,
                    "name": "D"
                },
                {
                    "id": 5,
                    "name": "E"
                }
            ]
        },
        {
            "id": 3,
            "name": "C",
            "children": [
                {
                    "id": 6,
                    "name": "F",
                    "children": [
                        {
                            "id": 8,
                            "name": "F",
                            "children": [
                                {
                                    "id": 12,
                                    "name": "F"
                                },
                                {
                                    "id": 13,
                                    "name": "F"
                                }
                            ]
                        },
                        {
                            "id": 9,
                            "name": "F",
                            "children": [
                                {
                                    "id": 14,
                                    "name": "F"
                                },
                                {
                                    "id": 15,
                                    "name": "F"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "F",
                    "children": [
                        {
                            "id": 10,
                            "name": "F",
                            "children": [
                                {
                                    "id": 16,
                                    "name": "F"
                                }
                            ]
                        },
                        {
                            "id": 11,
                            "name": "F"
                        }
                    ]
                }
            ]
        }
    ]
}

function covertReverse(tree: treeNode): arrayList[] {
    const arrList: arrayList[] = []
    const mapList: Map<treeNode, treeNode> = new Map()

    let queue: treeNode[] = []  //创建队列，先进先出,unshift进，pop出
    queue.push(tree)

    while (queue.length > 0) {
        const curNode = queue.pop()
        if (curNode == null) break

        const { id, name, children = [] } = curNode
        const mapNode = mapList.get(curNode)

        const parentId = mapNode?.id || 0
        arrList.push({ id, name, pid: parentId })

        if (children.length > 0) {
            children.forEach(node => {
                queue.unshift(node)
                mapList.set(node, curNode)
            })
        }
    }

    return arrList
}
console.log(covertReverse(tree1))