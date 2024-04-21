/**
 * 1971. Find if Path Exists in Graph
 *
 * There is a bi-directional graph with n vertices, 
 * where each vertex is labeled from 0 to n - 1 (inclusive). 
 * The edges in the graph are represented as a 2D integer array edges, 
 * where each edges[i] = [ui, vi] denotes a bi-directional edge between
 * vertex ui and vertex vi. 
 *
 * Every vertex pair is connected by at most one edge,
 * and no vertex has an edge to itself.
 * You want to determine if there is a valid path
 * that exists from vertex source to vertex destination.
 * Given edges and the integers n, source, and destination, 
 * return true if there is a valid path from source to destination,
 * or false otherwise.
 * 
 * Example:
 *
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
 * Output: true
 * Explanation: There are two paths from vertex 0 to vertex 2:
 * - 0 → 1 → 2
 * - 0 → 2
 */

interface Node {
  val: number,
  edges: Set<number>
};

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const nodes: Node[] = []

  for(let i: number = 0; i < n; i++){
    nodes.push({ val: i, edges: new Set() });
  }

  for(const [v1, v2] of edges) {
    const node1: Node = nodes[v1];
    const node2: Node = nodes[v2];
    node1.edges.add(v2);
    node2.edges.add(v1);
  }

  const visited: Set<number> = new Set();
  const stack: Node[] = [];

  if(nodes[source]){
    stack.push(nodes[source]);
  }

  while(stack.length > 0) {
    const curr: Node = stack.pop()!;
    visited.add(curr.val);

    if(curr.val === destination || curr.edges.has(destination)) {
      return true;
    }

    for(const n of curr.edges) {
      if(visited.has(n)) {
        continue;
      }

      stack.push( nodes[n] );
    }
  }

  return false;
}

export default validPath;
