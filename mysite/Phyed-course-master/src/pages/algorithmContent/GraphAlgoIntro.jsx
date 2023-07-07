import React from 'react'
//Lecture 13

const GraphAlgoIntro = () => {
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Graph Algorithm Introduction :</h4>

           <p className='text-justify p-2 pt-4'>Graph algorithms are a set of techniques used to solve problems on graph structures. A graph is a collection of nodes, also known as vertices, that are connected by edges. Graphs are used to represent relationships, connections, or networks between different entities. Graph algorithms help analyze and manipulate these structures to find solutions to various problems.</p>
           <p className='text-justify p-2 pt-4'><b>Here's a brief introduction to some commonly used graph algorithms:</b></p>

           <p className='text-justify p-2 pt-4'><b>1. Breadth-First Search (BFS):</b>BFS explores a graph by visiting all the nodes at the same level before moving to the next level. It is often used to find the shortest path or to explore all reachable nodes from a starting node.</p>
           <p className='text-justify p-2 pt-4'><b>2. Depth-First Search (DFS):</b>DFS explores a graph by going as deep as possible before backtracking. It is commonly used to detect cycles, explore connected components, or search for a path from a source node to a target node.</p>
           <p className='text-justify p-2 pt-4'><b>3. Dijkstra's Algorithm:</b> Dijkstra's algorithm is used to find the shortest path between a source node and all other nodes in a weighted graph. It works by iteratively selecting the node with the minimum distance and updating the distances of its adjacent nodes.</p>
           <p className='text-justify p-2 pt-4'><b>4. Kruskal's Algorithm:</b>Kruskal's algorithm is used to find the minimum spanning tree in a weighted graph. It starts with an empty set of edges and gradually adds the shortest edge that doesn't create a cycle until all nodes are connected.</p>
           <p className='text-justify p-2 pt-4'><b>5. Prim's Algorithm:</b>Prim's algorithm is another approach to find the minimum spanning tree. It starts with a single node and gradually grows the tree by selecting the shortest edge that connects a node in the tree to a node outside the tree.</p>
           <p className='text-justify p-2 pt-4'><b>6. Bellman-Ford Algorithm:</b>Bellman-Ford algorithm is used to find the shortest path between a source node and all other nodes in a graph, even if the graph contains negative-weight edges. It detects negative cycles and reports if there is no shortest path.</p>
           <p className='text-justify p-2 pt-4'><b>7. Topological Sorting:</b> Topological sorting is used to order the nodes of a directed acyclic graph (DAG) in such a way that for every directed edge (u, v), node u comes before node v in the ordering. It is often used in task scheduling or dependency resolution.</p>

              <p className='text-justify p-2 pt-4'> These are just a few examples of graph algorithms, and there are many more depending on the specific problem and requirements. Graph algorithms play a fundamental role in various areas such as network analysis, route planning, social network analysis, and more.</p>
           <p className='text-justify p-2 pt-4'>One practical life example of a graph algorithm is finding the shortest path for navigation or route planning.</p>
           <p className='text-justify p-2 pt-4'>Imagine you are planning a road trip and want to find the shortest route from your current location to a destination. You can represent the road network as a graph, where each intersection is a node and the roads connecting them are the edges. The weight of each edge can represent the distance or travel time between intersections.</p>       
           <p className='text-justify p-2 pt-4'>By applying a graph algorithm like Dijkstra's algorithm, you can efficiently find the shortest path from your starting point to the destination. The algorithm takes into account the distances or travel times of each road segment and navigates through the graph to identify the path with the least total distance or time.</p>       
           <p className='text-justify p-2 pt-4'>This type of algorithm is widely used in navigation systems, such as GPS devices or map applications on your phone. They help determine the most efficient route by considering factors like distance, traffic conditions, and road restrictions.</p>       
           <p className='text-justify p-2 pt-4'>By using a graph algorithm for route planning, you can save time and effort during your road trip, ensuring that you take the most optimal path to reach your destination.</p>       

           </article>
       </section>
    </div>
  )
}

export default GraphAlgoIntro