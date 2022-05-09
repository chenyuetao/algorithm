

interface ITreeNode {
    value: number
    left: ITreeNode | null
    right: ITreeNode | null
}

const bst: ITreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null,
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

const arr3: number[] = []
//前序遍历
function preOrderTraverse(node: ITreeNode | null): void {
    if (node == null) return
    // console.log(node.value)
    arr3.push(node.value)
    preOrderTraverse(node.left)
    preOrderTraverse(node.right)
}
//中序遍历
function inOrderTraverse(node: ITreeNode | null): void {
    if (node == null) return
    inOrderTraverse(node.left)
    //console.log(node.value)
    arr3.push(node.value)
    inOrderTraverse(node.right)
}
//后序遍历
function postOrderTraverse(node: ITreeNode | null): void {
    if (node == null) return
    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    //console.log(node.value)
    arr3.push(node.value)
}

//postOrderTraverse(bst)

/**
 * 
 * @param k 二叉搜索树的第k小值
 * @returns 
 */
function banarySearchTree(k: number) {
    inOrderTraverse(bst)
    return arr3[k - 1] || null
}

console.log(banarySearchTree(1))
