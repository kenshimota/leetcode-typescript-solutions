interface Point {
  x: number;
  y: number;
}

interface ParamsPosition {
  position: number;
  maxX: number;
}

interface ParamsSetPosition {
  x: number;
  y: number;
  maxX: number;
}

const getPosition = ({ position, maxX }: ParamsPosition): Point => ({
  y: Math.floor(position / maxX),
  x: position % maxX,
});

const setPosition = ({ x, y, maxX }: ParamsSetPosition): number => y * maxX + x;

const checkValidPoint = (
  grid: string[][],
  { position, maxX }: ParamsPosition
): boolean => {
  const { x, y } = getPosition({ position, maxX });
  return (
    x >= 0 &&
    y >= 0 &&
    y < grid.length &&
    x < grid[0].length &&
    grid[y][x] === "1"
  );
};

function depthFirstSearch(
  grid: string[][],
  position: number,
  maxX: number,
  visited: Set<number>
) {
  const stack: number[] = [];
  stack.push(position);
  visited.add(position);

  while (stack.length > 0) {
    const position = stack.pop()!;
    const { x, y } = getPosition({ position, maxX });

    let aux = setPosition({ y: y + 1, x, maxX });
    if (!visited.has(aux) && checkValidPoint(grid, { position: aux, maxX })) {
      stack.push(aux);
      visited.add(aux);
    }

    aux = setPosition({ y: y - 1, x, maxX });
    if (!visited.has(aux) && checkValidPoint(grid, { position: aux, maxX })) {
      stack.push(aux);
      visited.add(aux);
    }

    aux = setPosition({ x: x + 1, y, maxX });
    if (!visited.has(aux) && checkValidPoint(grid, { position: aux, maxX })) {
      stack.push(aux);
      visited.add(aux);
    }

    aux = setPosition({ x: x - 1, y, maxX });
    if (!visited.has(aux) && checkValidPoint(grid, { position: aux, maxX })) {
      stack.push(aux);
      visited.add(aux);
    }
  }
}

function numIslands(grid: string[][]): number {
  let counted: number = 0;
  const visited: Set<number> = new Set();
  const maxX: number = (grid && grid[0].length) || 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      const position = setPosition({ y, x, maxX });
      if (visited.has(position) || grid[y][x] === "0") {
        continue;
      }

      depthFirstSearch(grid, position, maxX, visited);
      counted += 1;
    }
  }

  return counted;
}

export default numIslands;
