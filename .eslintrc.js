module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020
  },
  extends: ['@nuxtjs', 'eslint-config-prettier'],
  rules: {
    // Only allow debugger in development
    'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
    'no-console': process.env.PRE_COMMIT
      ? ['error', { allow: ['warn', 'error'] }]
      : 'off',
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/html-self-closing': 0,
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'design.vue'],
        allowEmptyLines: false
      }
    ],
    'vue/html-indent': 0
  }
}
