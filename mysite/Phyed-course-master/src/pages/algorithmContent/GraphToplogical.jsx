import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 16

const GraphToplogical = () => {
  const codeString = `#include <iostream>
  #include <vector>
  #include <stack>
  #include <unordered_set>
  
  using namespace std;
  
  void dfs(vector<vector<int>>& graph, int node, vector<bool>& visited, stack<int>& stk) {
      visited[node] = true;
  
      for (int neighbor : graph[node]) {
          if (!visited[neighbor]) {
              dfs(graph, neighbor, visited, stk);
          }
      }
  
      stk.push(node);
  }
  
  vector<int> topologicalSort(vector<vector<int>>& graph, int numNodes) {
      vector<int> sortedOrder;
      vector<bool> visited(numNodes, false);
      stack<int> stk;
  
      for (int i = 0; i < numNodes; i++) {
          if (!visited[i]) {
              dfs(graph, i, visited, stk);
          }
      }
  
      while (!stk.empty()) {
          sortedOrder.push_back(stk.top());
          stk.pop();
      }
  
      return sortedOrder;
  }
  
  int main() {
      // Example usage
      int numNodes = 6;
      vector<vector<int>> graph = {
          {1, 2},         // Node 0 has neighbors 1 and 2
          {4},            // Node 1 has neighbor 4
          {4, 5},         // Node 2 has neighbors 4 and 5
          {3},            // Node 3 has neighbor 3
          {},             // Node 4 has no neighbors
          {3}             // Node 5 has neighbor 3
      };
  
      vector<int> sortedOrder = topologicalSort(graph, numNodes);
  
      // Print the sorted order
      cout << "Topological order: ";
      for (int node : sortedOrder) {
          cout << node << " ";
      }
      cout << endl;
  
      return 0;
  }
  `
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Topological searching :</h4>

           <p className='text-justify p-2 pt-4'>Topological sorting is an algorithm used to find a linear ordering of the vertices in a directed acyclic graph (DAG) such that for every directed edge (u, v), vertex u comes before vertex v in the ordering. In other words, it arranges the vertices in a way that preserves the order of dependencies between them.</p>
           <p className='text-justify p-2 pt-4'>Topological sorting has various applications, such as task scheduling, determining the order of compilation in build systems, and resolving dependencies in software packages.</p>
           <p className='text-justify p-2 pt-4'><b>Here's an implementation of the topological sorting algorithm using depth-first search (DFS) in C++:</b></p>

                              <CodeHighlighter>
                                {codeString} 
                              </CodeHighlighter>


           <p className='text-justify p-2 pt-4'><b>Explanation:</b></p>
           <p className='text-justify p-2 pt-4'>1. The <span className='code-text  text-m'>dfs</span> function performs a depth-first search starting from a given <span className='code-text  text-m'>node</span> in the graph. It recursively explores the neighbors of the current node and marks them as visited. The visited nodes are then pushed onto the <span className='code-text  text-m'>stk</span> stack.</p>
           <p className='text-justify p-2 pt-4'>2.The <span className='code-text  text-m'>topologicalSort</span> function initializes a vector <span className='code-text  text-m'>sortedOrder</span> to store the sorted order of the nodes. It also creates a <span className='code-text  text-m'>visited</span> vector to keep track of visited nodes and a stack stk to store the nodes in the topological order.</p>
           <p className='text-justify p-2 pt-4'>3. The function iterates over all nodes in the graph and calls <span className='code-text  text-m'>dfs</span> for each unvisited node, passing the graph, the current node, the <span className='code-text  text-m'>visited</span> vector, and the <span className='code-text  text-m'>stk</span> stack.</p>
           <p className='text-justify p-2 pt-4'>4. After the depth-first search is complete, the function extracts the nodes from the stack <span className='code-text  text-m'>stk</span> and appends them to the <span className='code-text  text-m'>sortedOrder</span> vector, resulting in a reversed topological ordering.</p>
           <p className='text-justify p-2 pt-4'>5. Finally, the <span className='code-text  text-m'>sortedOrder</span> vector is returned as the topological order of the graph.</p>
           <p className='text-justify p-2 pt-4'>6. In the <span className='code-text  text-m'>main</span> function, an example usage is provided. The graph is represented by an adjacency list, and <span className='code-text  text-m'>numNodes</span> is the total number of nodes in the graph. The <span className='code-text  text-m'>topologicalSort</span> function is called, and the resulting sorted order is printed.</p>
          

           </article>
       </section>
    </div>
  )
}

export default GraphToplogical