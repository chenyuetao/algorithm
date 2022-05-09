

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

const arr = [
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
//数组转树
function coverts(arr: arrayList[]): treeNode | null {
    if (arr.length === 0) return null

    let root = null
    const mapList: Map<number, treeNode> = new Map()

    arr.forEach(item => {

        const { id, name, pid } = item
        const treeNode = { id, name }
        mapList.set(id, treeNode)

        const parentNode = mapList.get(pid)
        if (parentNode) {
            if (!parentNode.children) parentNode.children = []

            parentNode.children.push(treeNode)
        }
        if (pid === 0) root = treeNode
    })

    return root
}
console.time('aaaa')
console.log(coverts(arr))
console.timeEnd('aaaa')

console.time('bbbb')
console.log(setTreeData(arr))
console.timeEnd('bbbb')

function setTreeData(source: any) {
    let cloneData = JSON.parse(JSON.stringify(source))      // 对源数据深度克隆
    return cloneData.filter((father: { id: any; children: any; pid: number; }) => {                      // 循环所有项，并添加children属性
        let branchArr = cloneData.filter((child: { pid: any; }) => father.id == child.pid);   // 返回每一项的子级数组
        branchArr.length > 0 ? father.children = branchArr : ''   //给父级添加一个children属性，并赋值
        return father.pid == 0;      //返回第一层
    })[0];
}

