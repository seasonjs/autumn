
const standard = require('@neutrinojs/standardjs');
const path = require('path');
// const node = require('@neutrinojs/node');
const jest = require('@neutrinojs/jest');
const react = require('@neutrinojs/react');


const typescript = (options = {}) => (neutrino) => {
  const { config } = neutrino

  if (options.fork !== false) {
    config.plugin('fork-ts-checker').
      use(require("fork-ts-checker-webpack-plugin"), [
        {
          // checkSyntacticErrors: true,
          // tslint: false,
          project: path.resolve(__dirname, './client/tsconfig.json'),
          // tsconfigRootDir: __dirname,
          // ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
          // sourceType: 'module', // Allows for the use of imports
          //...options.forkChecker
        },
      ]);
  }

  let ext = config.resolve.extensions;
  ext.prepend('.ts');
  ext.prepend('.tsx');

  let babelOpts = config.module
    .rule("compile")
    .use("babel")
    .get("options");
  
  let tsOpts ={
    configFile:path.resolve(neutrino.options.source,'tsconfig.json')
  }

  config.module.rule("ts")
    .test(/\.tsx?$/)
    .include
    .add(neutrino.options.source)
    .add(neutrino.options.tests)
    .end()
    .use("babel")
    .loader(require.resolve("babel-loader"))
    .options({ ...babelOpts, ...options.babel })
    .end()
    .use("tsc")
    .loader(require.resolve("ts-loader"))
    .options({ transpileOnly: options.fork !== false, ...options.ts,...tsOpts })
    .end();
};

module.exports = {
  options: {
    // Override to root of project
    root: __dirname,
    // Override to relative directory, resolves to process.cwd() + website
    root: 'client',
    // Override to entry
    source: './',
    // absolute
    output: '../app/public',
    // index: 'index.tsx',
  },
  use: [
    standard(),
    // node(),
    jest(),
    react(),
    //支持tsx
    typescript({
      fork: false,
    }),
  ],
};
