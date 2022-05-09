const createGraph = (tickets) => {
  const graph = {};

  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];

    graph[from].push(to);
  });

  Object.values(graph).forEach((value) => {
    value.sort();
  });

  return graph;
};

const recursiveDFS = (graph, current, output = []) => {
  const neighbors = graph[current] || [];

  while (neighbors.length > 0) {
    const next = neighbors.shift();
    recursiveDFS(graph, next, output);
  }

  output.push(current);

  return output;
};

const iterativeDFS = (graph, start) => {
  const output = [];
  const stack = [start];

  while (stack.length > 0) {
    const current = stack.pop();
    const neighbors = graph[current] || [];

    if (neighbors.length > 0) {
      const next = neighbors.shift();
      stack.push(current, next);
    } else {
      output.push(current);
    }
  }

  return output;
};

function solution(tickets) {
  const graph = createGraph(tickets);

  return recursiveDFS(graph, 'ICN').reverse();
}
