import TreeNode from './TreeNode';


class BinaryTree {
  constructor() {
      this.root = null;
  }

  insert(node, data) {
      if (data.id < node.data.id) {
          if (node.left === null) {
              node.left = new TreeNode(data);
          } else {
              this.insert(node.left, data);
          }
      } else if (data.id > node.data.id) {
          if (node.right === null) {
              node.right = new TreeNode(data);
          } else {
              this.insert(node.right, data);
          }
      }
  }

  insertData(data) {
      const newNode = new TreeNode(data);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insert(this.root, data);
      }
  }

  printTree(node = this.root) {
      if (node !== null) {
          this.printTree(node.left);
          console.log(`Node ID: ${node.data.id}`);
          this.printTree(node.right);
      }
  }

  searchWithPath(id) {
      const path = [];
      const foundNode = this.searchNodeWithPath(this.root, id, path);
      return { foundNode, path };
  }

  searchNodeWithPath(node, id, path) {
      if (node === null) {
          return null;
      }

      path.push(node.data.id);

      if (node.data.id === id) {
          return node;
      } else if (id < node.data.id) {
          return this.searchNodeWithPath(node.left, id, path);
      } else {
          return this.searchNodeWithPath(node.right, id, path);
      }
      
  }


  deleteNode(id) {
      this.root = this.deleteNodeRec(this.root, id);
  }

  deleteNodeRec(node, id) {
      if (node === null) {
          return null;
      }

      if (id < node.data.id) {
          node.left = this.deleteNodeRec(node.left, id);
      } else if (id > node.data.id) {
          node.right = this.deleteNodeRec(node.right, id);
      } else {
          // Nodo encontrado, realizar la eliminación
          if (node.left === null) {
              return node.right;
          } else if (node.right === null) {
              return node.left;
          }

          // Nodo con dos hijos, encontrar el sucesor in-order (mínimo en el subárbol derecho)
          node.data = this.minValueNode(node.right).data;

          // Eliminar el sucesor in-order
          node.right = this.deleteNodeRec(node.right, node.data.id);
      }

      return node;
  }

  minValueNode(node) {
      let current = node;
      while (current.left !== null) {
          current = current.left;
      }
      return current;
  }

  clear() {
      this.root = null;
  }
}

export default BinaryTree;