
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


const tree = {
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
//????????????
const coverts1 = (tree: treeNode): arrayList[] => {
    const root: arrayList[] = []
    const mapList: Map<treeNode, treeNode> = new Map()  //?????????key?????????????????????

    const queue: treeNode[] = []    //???????????????????????????,unshift??????pop???
    queue.push(tree)    //??????

    while (queue.length > 0) {
        const curNode = queue.pop()     //??????
        if (curNode == null) break

        //??????item,push???root
        const { id, name, children = [] } = curNode
        const parentNode = mapList.get(curNode)
        const pid = parentNode?.id || 0
        root.push({ id, name, pid })

        //????????????????????????
        children.forEach(item => {
            queue.unshift(item)
            mapList.set(item, curNode)
        })
    }

    return root
}

console.log(coverts1(tree))