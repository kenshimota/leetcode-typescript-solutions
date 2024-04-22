/**
 * 200. Number of Islands
 *
 * Given an m x n 2D binary grid grid which represents 
 * a map of '1's (land) and '0's (water), 
 * return the number of islands.
 *
 * An island is surrounded by water and is formed 
 * by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 */
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

function depthFirstSearch(grid: string[][], position: number, maxX: number) {
  const stack: number[] = [];
  stack.push(position);

  while (stack.length > 0) {
    const position = stack.pop()!;
    const { x, y } = getPosition({ position, maxX });

    grid[y][x] = "0";

    let aux = setPosition({ y: y + 1, x, maxX });
    if (y < grid.length && checkValidPoint(grid, { position: aux, maxX })) {
      stack.push(aux);
    }

    aux = setPosition({ y: y - 1, x, maxX });
    if (y > 0 && checkValidPoint(grid, { position: aux, maxX })) {
      stack.push(aux);
    }

    aux = setPosition({ x: x + 1, y, maxX });
    if (
      x + 1 < grid[0].length &&
      checkValidPoint(grid, { position: aux, maxX })
    ) {
      stack.push(aux);
    }

    aux = setPosition({ x: x - 1, y, maxX });
    if (x > 0 && checkValidPoint(grid, { position: aux, maxX })) {
      stack.push(aux);
    }
  }
}

function numIslands(grid: string[][]): number {
  let counted: number = 0;
  const maxX: number = (grid && grid[0].length) || 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "0") {
        continue;
      }

      const position = setPosition({ y, x, maxX });
      depthFirstSearch(grid, position, maxX);

      counted += 1;
    }
  }

  return counted;
}

export default numIslands;
