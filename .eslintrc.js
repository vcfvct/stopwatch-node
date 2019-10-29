module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  plugins: ["@typescript-eslint"],
  extends: [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-function-return-type': ['warn', {allowExpressions: true}],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    "no-trailing-spaces": 'error',
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    semi: ['error', 'always'],
    'spaced-comment': ['error', 'always'],
    'no-irregular-whitespace': ["error", {"skipComments": true}],
    'space-infix-ops': 'error',
    'array-bracket-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', {
      named: 'never',
      anonymous: 'never',
      asyncArrow: 'always',
    }],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-multiple-empty-lines': 'error',
  },
};



