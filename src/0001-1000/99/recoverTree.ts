import { TreeNode } from 'classes/BinaryTreeNode'
import { swap } from 'utils/swapBinaryTreeNodes'
import { helper } from './utils'

// <Iteration, DFS, Stack>
// Time: O(n)
// Space: O(n)

/**
 *  Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
    const stack: TreeNode[] = []
    let prev: TreeNode | null = null
    let p: TreeNode | null = null
    let q: TreeNode | null = null

    while (stack.length || root) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()!
        ;[root, prev, p, q] = helper(root, prev, p, q)
    }

    swap(p!, q!) // constraints: p and q will exist in the BST
}

export { recoverTree }