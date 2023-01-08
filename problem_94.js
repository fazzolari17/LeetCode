var inorderTraversal = function(root) {
    if(!root) return [];
    let result = new Array();
    const traverse = (node) => {
      node.left && traverse(node.left);
      result.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(root);
    return result;
};