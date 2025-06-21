const Node = require('./Node');

// Helper function that returns {sum, isSumTree}
function isSumTreeHelper(node) {
  if (!node) {
    return { sum: 0, isSumTree: true };
  }

  // Leaf node is always a Sum Tree
  if (!node.left && !node.right) {
    return { sum: node.value, isSumTree: true };
  }

  const left = isSumTreeHelper(node.left);
  const right = isSumTreeHelper(node.right);

  const totalSum = left.sum + right.sum;
  const isCurrentSumTree = left.isSumTree && right.isSumTree && node.value === totalSum;

  return {
    sum: node.value + totalSum,     // total sum under this node (for parent's comparison)
    isSumTree: isCurrentSumTree
  };
}

function check_sum_tree(root) {
  return isSumTreeHelper(root).isSumTree;
}


const root = new Node(3);
root.left = new Node(1);
root.right = new Node(2);

console.log("Is Sum Tree?", check_sum_tree(root)); // true