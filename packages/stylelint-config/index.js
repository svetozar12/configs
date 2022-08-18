module.exports = {
  $schema: "https://json.schemastore.org/tsconfig",
  compilerOptions: {
    lib: ["dom", "dom.iterable", "esnext"],
    module: "esnext",
    target: "es5",

    allowJs: true,
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    forceConsistentCasingInFileNames: true,
    isolatedModules: true,
    jsx: "react-jsx",
    moduleResolution: "node",
    noEmit: true,
    noFallthroughCasesInSwitch: true,
    resolveJsonModule: true,
    skipLibCheck: true,
    strict: true,
  },
};