	
const Node = require('./Node');

// Preorder Traversal of a tree both using recursion and Iteration


function pre_order_traversal_recusrsion(root){
if (root==null){
    return null
}
console.log(root.value)
pre_order_traversal_recusrsion(root.left)
pre_order_traversal_recusrsion(root.right)
}

function pre_order_traversal_iterative(root){
 stack = []
 stack.push(root)
 while (stack.length > 0){
    const current = stack.pop();
    console.log(current.value); 

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);    
 }
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

pre_order_traversal_recusrsion(root)
pre_order_traversal_iterative(root)