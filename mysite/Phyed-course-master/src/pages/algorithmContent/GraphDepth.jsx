import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 15

const GraphDepth = () => {
  const codeString = `#include <iostream>
  #include <vector>
  #include <stack>
  #include <unordered_set>
  
  using namespace std;
  
  void dfs(vector<vector<int>>& graph, int start) {
      unordered_set<int> visited;     // Set to keep track of visited nodes
      stack<int> stk;                 // Stack to store nodes to visit
      stk.push(start);
  
      while (!stk.empty()) {
          int node = stk.top();       // Take the top node from the stack
          stk.pop();
  
          if (visited.find(node) == visited.end()) {
              visited.insert(node);   // Mark the node as visited
              processNode(node);      // Process the node (e.g., print it)
  
              // Add unvisited neighbors of the current node to the stack
              for (int neighbor : graph[node]) {
                  if (visited.find(neighbor) == visited.end()) {
                      stk.push(neighbor);
                  }
              }
          }
      }
  }
  
  void processNode(int node) {
      cout << "Visiting node: " << node << endl;
  }
  
  int main() {
      // Example usage
      vector<vector<int>> graph = {
          {1, 2},         // Node 0 has neighbors 1 and 2
          {0, 3, 4},      // Node 1 has neighbors 0, 3, and 4
          {0, 5},         // Node 2 has neighbors 0 and 5
          {1},            // Node 3 has neighbor 1
          {1},            // Node 4 has neighbor 1
          {2}             // Node 5 has neighbor 2
      };
  
      dfs(graph, 0);     // Start DFS from node 0
  
      return 0;
  }
  `
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Depth First Search :</h4>

           <p className='text-justify p-2 pt-4'>Depth-first search (DFS) is a graph traversal algorithm that explores vertices or nodes of a graph by following paths as deeply as possible before backtracking. It is called a "depth-first" search because it explores the depth of any given path in the graph before moving on to explore other paths.</p>
           <p className='text-justify p-2 pt-4'>DFS can be used to traverse both directed and undirected graphs. The algorithm starts at a selected node and explores its neighbors recursively, following one path until it reaches a node with no unvisited neighbors. It then backtracks to the previous node and continues exploring any remaining unvisited neighbors until all nodes in the graph have been visited.</p>
           <p className='text-justify p-2 pt-4'><b>Here's a general outline of the depth-first search algorithm:</b></p>

           <p className='text-justify p-2 pt-4'>1. Create a stack (or use recursion) to keep track of the nodes to visit.</p>
           <p className='text-justify p-2 pt-4'>2. Initialise an empty set to keep track of visited nodes.</p>
           <p className='text-justify p-2 pt-4'>3. Push the starting node onto the stack or pass it to the recursive function.</p>
           <p className='text-justify p-2 pt-4'>4. While the stack is not empty:</p>  
                <ul className='list-disc px-10'>
                  <li className='pt-4'>Pop a node from the stack.</li>
                  <li className='pt-2'>If the node has not been visited:</li>
                          <ul className='list-disc px-10'>
                          <li className='pt-4'>Mark it as visited.</li>
                          <li className='pt-2'>Process the node (perform any desired operations).</li>
                          <li className='pt-4'>Push its unvisited neighbours onto the stack.</li>
                          </ul> 
                  </ul>     
           <p className='text-justify p-2 pt-4'>5. Repeat steps 4 until the stack is empty.</p>       
           <p className='text-justify p-2 pt-4'>DFS can be implemented using either an iterative approach with a stack or a recursive approach with a function call stack. The recursive approach is often simpler to understand and implement.</p>       
           <p className='text-justify p-2 pt-4'>DFS is widely used in various applications, including finding paths, cycle detection, topological sorting, solving puzzles, and more. It is a fundamental algorithm in graph theory and forms the basis for more advanced algorithms like depth-limited search and iterative deepening depth-first search.</p>       
           <p className='text-justify p-2 pt-4'><b>Here's an example implementation of the depth-first search algorithm in C++:</b></p>
                             <CodeHighlighter>
                                {codeString} 
                              </CodeHighlighter>


           <p className='text-justify p-2 pt-4'><b>Explanation:</b></p>
           <p className='text-justify p-2 pt-4'>1. The <span className='code-text  text-m'>dfs</span> function takes two arguments: <span className='code-text  text-m'>graph</span>, which is a vector of vectors representing the adjacency list of the graph, and <span className='code-text  text-m'>start</span>, which is the node from which the depth-first search begins.</p>
           <p className='text-justify p-2 pt-4'>2. We use an unordered set called <span className='code-text  text-m'>visited</span> to keep track of the nodes that have been visited.</p>
           <p className='text-justify p-2 pt-4'>3. We create a stack, <span className='code-text  text-m'>stk</span>, and push the <span className='code-text  text-m'>start</span> node onto it.</p>
           <p className='text-justify p-2 pt-4'>4. While the stack is not empty, we retrieve the top node from the stack using <span className='code-text  text-m'>stk.top()</span>, pop it using <span className='code-text  text-m'>stk.pop()</span>, and store it in the variable node.</p>
           <p className='text-justify p-2 pt-4'>5. If <span className='code-text  text-m'>node</span> has not been visited, we mark it as visited by inserting it into the <span className='code-text  text-m'>visited</span> set and process it by calling the <span className='code-text  text-m'>processNode</span> function.</p>
           <p className='text-justify p-2 pt-4'>6. We iterate over the neighbours of <span className='code-text  text-m'>node</span> (retrieved from <span className='code-text  text-m'>graph[node]</span>), and if a neighbour has not been visited, we push it onto the stack.</p>
           <p className='text-justify p-2 pt-4'>7. The <span className='code-text  text-m'>processNode</span> function is responsible for processing each visited node. In this example, it simply prints the node.</p>
           <p className='text-justify p-2 pt-4'>8. In the <span className='code-text  text-m'>main</span> function, we define an example usage of the DFS algorithm. We create a graph represented by an adjacency list and call <span className='code-text  text-m'>dfs</span> to start the depth-first search from node 0.</p>



           </article>
       </section>
    </div>
  )
}

export default GraphDepth