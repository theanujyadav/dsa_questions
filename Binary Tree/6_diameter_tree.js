
const Node = require('./Node');

function diameter(root) {
    if (!root) return 0;

    const leftHeight = diameter(root.left);
    const rightHeight = diameter(root.right);
    const ans = leftHeight + rightHeight
    
    return Math.max(ans, leftHeight+ 1, rightHeight +1)
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
// root.right.right = new Node(7);

console.log(diameter(root)); // Output: 2
// console.log(minDistance(root, 4, 6)); // Output: 4