// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.children = [];
//     }
//   }
  
//   class Tree {
//     constructor() {
//       this.root = null;
//     }
  
//     traverseBFS() {
//       //if there is no root, return false
//       if (!this.root) {
//         return false;
//       }
//       //start a new Queue
//       const queue = new Queue();
//       //keep a tally of all values in the tree
//       const treeValues = [];
//       //add root to queue
//       queue.enqueue(this.root);
//       //while queue is not empty
//       while (queue.size !== 0) {
//         //get TreeNode Children
//         const nodeChildren = queue.first.value.children;
//         //if node has children, loop and add each to queue
//         if (nodeChildren.length !== 0) {
//           nodeChildren.forEach(child => queue.enqueue(child));
//         }
//         //push the first item in the queue to the tree values
//         treeValues.push(queue.first.value);
//         //remove first node from queue
//         queue.dequeue();
//       }
//       //return values, should be all TreeNodes
//       return treeValues;
//     }
  
//     traverseDFS(type) {
//       //if there is no root, return false
//       if (!this.root) {
//         return false;
//       }
//       //make a variable for tree values
//       const treeValues = [];
//       //current values always starts at root
//       let current = this.root;
  
//       //helper methods for order choice
//       const preOrderHelper = node => {
//         //push value onto array FIRST
//         treeValues.push(node.value);
//         //recursively call function on all node children
//         if (node.children.length !== 0) {
//           node.children.forEach(child => {
//             preOrderHelper(child);
//           });
//         }
//         return true;
//       };
  
//       const postOrderHelper = node => {
//         //recursively call function on all node children FIRST
//         if (node.children.length !== 0) {
//           node.children.forEach(child => {
//             postOrderHelper(child);
//           });
//         }
//         //push value onto array
//         treeValues.push(node.value);
//         return true;
//       };
  
//       const inOrderHelper = node => {
//         //if node had children, split nodes into left and right halves in case tree is not binary FIRST
//         if (node.children.length !== 0) {
//           //get halfway point
//           const halfway = Math.floor(node.children.length / 2);
//           //recursively call function on all node children left of halfway point
//           for (let i = 0; i < halfway; i++) {
//             inOrderHelper(node.children[i]);
//           }
//           // push parent node value to array
//           treeValues.push(node.value);
//           //recursively call function on all node children right of halfway point
//           for (let i = halfway; i < node.children.length; i++) {
//             inOrderHelper(node.children[i]);
//           }
//           // else push value into array
//         } else {
//           treeValues.push(node.value);
//         }
//         return true;
//       };
//       //switch statment to select proper order and start recursive function calls
//       switch (type) {
//         case "pre":
//           preOrderHelper(current);
//           break;
//         case "post":
//           postOrderHelper(current);
//           break;
//         case "in":
//           inOrderHelper(current);
//           break;
//       }
//       //return array
//       return treeValues;
//     }
//   }
  
//   class QueueNode {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class Queue {
//     constructor() {
//       this.first = null;
//       this.last = null;
//       this.size = 0;
//     }
//     //newnode goes to back of the line/end of the queue
//     enqueue(value) {
//       const newNode = new QueueNode(value);
//       //if queue is empty
//       if (this.size === 0) {
//         this.first = newNode;
//         this.last = newNode;
//         // add current first pointer to new first(new node), and make new node new first
//       } else {
//         this.last.next = newNode;
//         this.last = newNode;
//       }
//       //add 1 to size
//       this.size++;
  
//       return this;
//     }
//     // dequeue nodes off the front of the line
//     dequeue() {
//       //if queue is empty return false
//       if (this.size === 0) return false;
//       //get dequeuedNode
//       const dequeuedNode = this.first;
//       //get new first (could be NULL if stack is length 1)
//       const newFirst = this.first.next;
//       //if newFirst is null, reassign last to newFirst(null)
//       if (!newFirst) {
//         this.last = newFirst;
//       }
//       //assign new first
//       this.first = newFirst;
//       //remove refernce to list
//       dequeuedNode.next = null;
//       //remove 1 from size
//       this.size--;
//       //return dequeuednode
//       return dequeuedNode;
//     }
  
//     log() {
//       let currentNode = this.first;
//       let i = 0;
//       while (currentNode) {
//         console.log(i, currentNode.value);
//         i++;
//         currentNode = currentNode.next;
//       }
//     }
//   }
  
//   const testTree = new Tree();
  
//   testTree.root = new TreeNode("H");
//   testTree.root.children.push(new TreeNode("e"));
//   testTree.root.children.push(new TreeNode("l"));
//   testTree.root.children[0].children.push(new TreeNode("l"));
//   testTree.root.children[0].children.push(new TreeNode("o"));
//   testTree.root.children[0].children.push(new TreeNode("W"));
//   testTree.root.children[1].children.push(new TreeNode("o"));
//   testTree.root.children[1].children.push(new TreeNode("r"));
//   testTree.root.children[1].children.push(new TreeNode("l"));
//   testTree.root.children[1].children.push(new TreeNode("d"));
  
  

// Javascript program to print DFS
// traversal from a given
// graph
 
// This class represents a
// directed graph using adjacency
// list representation
class Graph
{
     
    // Constructor
    constructor(v)
    {
        this.V = v;
        this.adj = new Array(v);
        for(let i = 0; i < v; i++)
            this.adj[i] = [];
    }
     
    // Function to add an edge into the graph
    addEdge(v, w)
    {
         
        // Add w to v's list.
        this.adj[v].push(w);
    }
     
    // A function used by DFS
    DFSUtil(v, visited)
    {
         
        // Mark the current node as visited and print it
        visited[v] = true;
        // console.log(v + " ");
  
        // Recur for all the vertices adjacent to this
        // vertex
        for(let i of this.adj[v].values())
        {
            let n = i
            if (!visited[n])
                this.DFSUtil(n, visited);
        }
    }
     
    // The function to do DFS traversal.
    // It uses recursive
    // DFSUtil()
    DFS(v)
    {
         
        // Mark all the vertices as
        // not visited(set as
        // false by default in java)
        let visited = new Array(this.V);
        for(let i = 0; i < this.V; i++)
            visited[i] = false;
  
        // Call the recursive helper
        // function to print DFS
        // traversal
        this.DFSUtil(v, visited);
    }
}
 


  function searchDfs(){
    // Driver Code
g = new Graph(4);
  
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
   
    //console.log(testTree.traverseBFS());
  

    console.log("Depth first search started")
    const start = performance.now()
    // console.log(testTree2.traverseDFS("in"));
    console.log(g.DFS(2));
    const duration = performance.now() - start
    console.log("Time taken perform DFS" )
    colorLog(duration,"success")
  }

  //https://medium.com/swlh/traversing-trees-breadth-first-and-depth-first-searches-with-javascript-316f23c9fe8f


function colorLog(message, color) {

    color = color || "black";
 
    switch (color) {
        case "success":  
             color = "Green"; 
             break;
        case "info":     
                color = "DodgerBlue";  
             break;
        case "error":   
             color = "Red";     
             break;
        case "warning":  
             color = "Orange";   
             break;
        default: 
             color = color;
    }
 
    console.log("%c" + message, "color:" + color);
 }