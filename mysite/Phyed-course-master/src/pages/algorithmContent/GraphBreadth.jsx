import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 14

const GraphBreadth = () => {
  const codeString = `#include <iostream>
  #include <queue>
  #include <vector>
  
  void bfs(const std::vector<std::vector<int>>& graph, int startNode) {
      std::vector<bool> visited(graph.size(), false);
      std::queue<int> queue;
  
      visited[startNode] = true;
      queue.push(startNode);
  
      while (!queue.empty()) {
          int currentNode = queue.front();
          queue.pop();
  
          std::cout << currentNode << " ";
  
          for (int neighbor : graph[currentNode]) {
              if (!visited[neighbor]) {
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          }
      }
  }
  
  int main() {
      std::vector<std::vector<int>> graph = {
          {1, 2},
          {0, 2, 3},
          {0, 1, 3, 4},
          {1, 2, 4},
          {2, 3}
      };
  
      int startNode = 0;
  
      bfs(graph, startNode);
  
      return 0;
  }
  `  


  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Breadth First Search :</h4>

           <p className='text-justify p-2 pt-4'>Breadth-First Search (BFS) is a graph traversal algorithm that explores a graph by visiting all the nodes at the current level before moving to the next level. It starts at a given source node and systematically explores all its neighbors before proceeding to their neighbors. BFS is often used to find the shortest path between two nodes or to explore all reachable nodes from a starting point.</p>
           <p className='text-justify p-2 pt-4'><b>Here's a practical life example of BFS:</b></p>

           <p className='text-justify p-2 pt-4'>Imagine you are in a maze and want to find the shortest path from your current location to the exit. The maze can be represented as a grid where each cell represents a location, and some cells may be walls blocking your path. You can use BFS to navigate through the maze and find the shortest path to the exit.</p>
           <p className='text-justify p-2 pt-4'>Starting from your current location, BFS will explore all the neighboring cells first before moving on to the next level of cells. By exploring the cells level by level, BFS guarantees that the shortest path to the exit will be found once it reaches the exit cell.</p>
           
           <p className='text-justify p-2 pt-4'>Here's a simplified explanation of how BFS works:</p>
           <p className='text-justify p-2 pt-4'>1. Mark the starting cell as visited and enqueue it into a queue.</p>
           <p className='text-justify p-2 pt-4'>2. While the queue is not empty:</p>  
                <ul className='list-disc px-10'>
                  <li className='pt-4'>Dequeue a cell from the queue.</li>
                  <li className='pt-2'>Explore all its neighboring cells that are not walls and have not been visited.</li>
                  <li className='pt-2'>Mark each visited cell as visited and enqueue it into the queue.</li>
                  <li className='pt-2'>If the exit cell is found, the shortest path has been found.</li>
                </ul>     
           <p className='text-justify p-2 pt-4'>3. If the queue becomes empty and the exit cell has not been found, there is no path to the exit.</p>       
           <p className='text-justify p-2 pt-4'>BFS can be implemented using a queue data structure to keep track of the nodes to visit. Each cell in the maze can have properties like visited status, coordinates, and references to its neighbouring cells.</p>       
           <p className='text-justify p-2 pt-4'>The time complexity of BFS is O(V + E), where V represents the number of vertices (nodes) in the graph, and E represents the number of edges (connections) between vertices. The space complexity is O(V) since it requires storage for the visited nodes and the queue.</p>       
           <p className='text-justify p-2 pt-4'>Here's an example of Breadth-First Search (BFS) implemented in C++ using a queue:</p>
                             <CodeHighlighter>
                                {codeString} 
                              </CodeHighlighter>


           <p className='text-justify p-2 pt-4'>In this code, we have a simplified version of the BFS algorithm. We use a <span className='code-text  text-m'>std::vector</span> to store the graph as an adjacency list, where each element of the vector represents a node, and its values represent its neighbors. The BFS function takes the graph and a starting node as input.</p>
           <p className='text-justify p-2 pt-4'>The BFS algorithm uses a <span className='code-text  text-m'>std::queue</span> to store the nodes to visit. We initialize a <span className='code-text  text-m'>visited</span> vector to keep track of visited nodes, where all elements are initially set to <span className='code-text  text-m'>false</span>. We mark the starting node as visited, enqueue it, and start the BFS traversal.</p>
           <p className='text-justify p-2 pt-4'>Inside the <span className='code-text  text-m'>while</span> loop, we dequeue a node from the queue, print its value, and mark it as visited. Then, we iterate over its neighbors and enqueue any unvisited neighbors.</p>
           <p className='text-justify p-2 pt-4'>The code will perform BFS starting from the <span className='code-text  text-m'>startNode</span> and print the visited nodes in the order they were visited.</p>
           

           </article>
       </section>
    </div>
  )
}

export default GraphBreadth