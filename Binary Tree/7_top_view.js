
const Node = require('./Node');

let data = []
function top_view(root, index,data) {

    if (!root) return null;
    data.push(index)
    left = top_view(root.left, index - 1, data)
    right = top_view(root.right, index + 1, data)
    if (data.findIndex(e=> e == index))
    console.log("ASD", data.findIndex(e=> e == index))
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
// root.right.right = new Node(7);

console.log(top_view(root,0, data)); // Output: 2
// console.log(minDistance(root, 4, 6)); // Output: 4