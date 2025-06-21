class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to find the LCA of two nodes
  function findLCA(root, n1, n2) {
    if (!root) return null;
    if (root.data === n1 || root.data === n2) return root;
  
    const leftLCA = findLCA(root.left, n1, n2);
    const rightLCA = findLCA(root.right, n1, n2);
  
    if (leftLCA && rightLCA) return root;
    return leftLCA ? leftLCA : rightLCA;
  }
  
  // Function to find distance from root to target node
  function findDistance(root, target, level = 0) {
    if (!root) return -1;
    if (root.data === target) return level;
  
    const left = findDistance(root.left, target, level + 1);
    if (left !== -1) return left;
  
    return findDistance(root.right, target, level + 1);
  }
  
  // Function to find minimum distance between two nodes
  function minDistance(root, n1, n2) {
    const lca = findLCA(root, n1, n2);
    if (!lca) return -1;
  
    const d1 = findDistance(lca, n1);
    const d2 = findDistance(lca, n2);
  
    return d1 + d2;
  }
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(minDistance(root, 1, 4)); // Output: 2
// console.log(minDistance(root, 4, 6)); // Output: 4