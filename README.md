# LeetCode TypeScript Solutions

Colección de soluciones a problemas de [LeetCode](https://leetcode.com/u/kenshimota) escritas en TypeScript, cada una con sus pruebas en Jest.

## Estructura

```
src/
├── arrays/
│   ├── 57-insert-interval/
│   └── 786-k-th-smallest-prime-fraction/
├── trees/
│   └── 1325-delete-leaves-with-a-given-value/
├── utils/
│   └── BinaryTree.ts
└── 1971-find-if-path-exists-in-graph/
```

Cada problema contiene su implementación (`index.ts`) y su archivo de pruebas (`index.test.ts`).

## Uso

```bash
npm install
npm test
```

Modo interactivo:

```bash
npm run test:watch
```

## Agregar una solución

1. Crea una carpeta con el número y el nombre del problema.
2. Agrega `index.ts` con la solución y `index.test.ts` con los casos de prueba.
3. Ejecuta `npm test`.

## Integración continua

El workflow `.github/workflows/ci.yml` ejecuta las pruebas en cada pull request hacia `main` o `dev`.
