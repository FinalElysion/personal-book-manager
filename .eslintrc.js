// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "comma-dangle":0,
    "keyword-spacing":0,
    "eqeqeq":0,
    "padded-blocks":0,
    "semi":0,
    "space-infix-ops":0,

    "standard/object-curly-even-spacing": 0,
    'comma-spacing':0,
    'no-mixed-spaces-and-tabs':0,
    'spaced-comment':0,
    'quotes':0,
    'key-spacing':0,
    'indent':0,
    'no-tabs':0,
    'space-before-blocks':0,
    'space-before-function-paren':0,
    'eslint-disable-next-line':0,
    'no-unused-vars':0,
    'no-multiple-empty-lines':0,
   
    'no-trailing-spaces':0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
