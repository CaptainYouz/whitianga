module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    '@vue/typescript/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser'
  },
  plugins: [ '@typescript-eslint' ],
  overrides: [
    {
      files: [ '*.vue' ],
      rules: {
        indent: 'off'
      },
      parser: 'vue-eslint-parser'
    }
  ],
  rules: {
    'array-bracket-newline': [ 'error', { multiline: true } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'block-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', { functions: 'never' } ],
    'import/first': 'error',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': [ 'error', { devDependencies: true } ],
    'import/no-unresolved': 'off',
    'import/order': 'error',
    'max-len': [ 'error', { code: 120 } ],
    'no-param-reassign': [ 'error', { props: false } ],
    semi: [ 'error', 'always' ],
    'vue/max-attributes-per-line': [ 'warn', { singleline: 3 } ],
    'vue/no-v-html': 'off',
    'vue/script-indent': [ 'error', 2, { baseIndent: 1 } ]
  }
};
