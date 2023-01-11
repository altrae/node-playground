# Notes

- Using ESNext/Resugar (rewrite of ESNext) for latest JS features.
  <https://github.com/resugar/resugar>
- Typescript via installed ts-node and typescript dependencies.
  <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>
- In package.json `type` must be set to `module` to enable ES6 import/export.
- When importing ts files, "// @ts-ignore" must be used due to a TypeScript requirement that imports reference js, not ts, files. Alternatively, just import the .js version of the file as long as there isn't another file of the same name with the js extension existing already.
- To use `__dirname` and `__filename` in ES6 module package: [Fix "\_\_dirname is not defined in ES module scope" in JS](https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope).
- streams minimize buffer size helping reduce the amount of memory being used increasing performance.

## Generating CSR / KEY / PEM certificate files

If on Windows, use "Bash on Ubuntu on Windows" or "Git Bash" to generate:

1. CSR and KEY:

   `openssl req -new -newkey rsa:4096 -nodes -keyout file-name.key -out file-name.csr`

2. PEM and self-sign with KEY:

   `openssl x509 -req -sha256 -days 365 -in file-name.csr -signkey file-name.key -out file-name.pem`

### Using generated certificate files

In `credentials.ts`, update the path using the newly generated certificate files.
