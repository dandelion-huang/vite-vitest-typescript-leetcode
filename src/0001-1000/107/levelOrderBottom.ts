import { TreeNode } from 'utils/BinaryTreeNode'

// <BFS, Queue>
// Time: O(n)
// Space: O(n)

function levelOrderBottom(root: TreeNode | null): number[][] {
    const ans: number[][] = []

    // 1. bfs
    function bfs(node: TreeNode | null): void {
        // edge cases
        if (!node) {
            return
        }

        // 2. level-order traversal
        let queue: TreeNode[] = [node]
        let newQueue: TreeNode[]

        while (queue.length) {
            ans.unshift(queue.map((curLevelNode) => curLevelNode.val))
            newQueue = []

            for (const curLevelNode of queue) {
                if (curLevelNode.left) {
                    newQueue.push(curLevelNode.left)
                }

                if (curLevelNode.right) {
                    newQueue.push(curLevelNode.right)
                }
            }

            queue = newQueue
        }
    }

    bfs(root)

    return ans
}

export { levelOrderBottom }