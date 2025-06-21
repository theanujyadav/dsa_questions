class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function height(root){
    if (root==null){
        return null
    }
    left = height(root.left)
    right = height(root.right)

    return Math.max(left, right) + 1
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

console.log(height(root))