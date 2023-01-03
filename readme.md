# Notes

- Using ESNext/Resugar (rewrite of ESNext) for latest JS features.
  <https://github.com/resugar/resugar>
- Typescript via installed ts-node and typescript dependencies.
  <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>
- In package.json `type` must be set to `module` to enable ES6 import/export.
- When importing ts files, "// @ts-ignore" must be used due to a TypeScript requirement that imports reference js, not ts, files.
