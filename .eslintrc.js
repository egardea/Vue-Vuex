module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'vue',
  ],
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
    ],
    rules: {
      'generator-star-spacing': 'off',
      'semi': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'max-statements-per-line': ['error', { 'max': 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'no-var': 'error',
      'quote-props': ['error', 'consistent'],
      'prefer-arrow-callback': 'error',
      'no-new': 0,
      'prefer-promise-reject-errors': 0,
      'no-return-assign': 0,
      'no-unused-vars': 0,
      'no-prototype-builtins': 0,
      'array-callback-return': ['error', { allowImplicit: true }],
      'prefer-regex-literals': 0,
      'vue/component-definition-name-casing': ['error', 'kebab-case'],
      'vue/no-v-html': 0,
      'vue/script-indent': ['error', 2, {
        'baseIndent': 1,
      }],
      'vue/html-self-closing': ['error', {
        'html': {
          'void': 'always',
          'normal': 'never',
          'component': 'always',
        },
      }],
      // TO DO: look into refactoring to support this rule
      'vue/no-side-effects-in-computed-properties': 0,
      'vue/max-attributes-per-line': ['error', { 'singleline': 2 }],
      'vue/order-in-components': ['error', {
        'order': [
          'el',
          'name',
          'parent',
          'functional',
          'extends',
          'mixins',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'computed',
          'watch',
          'methods',
          'LIFECYCLE_HOOKS',
          'head',
          ['template', 'render'],
          'renderError',
        ],
      }],
    },
  };