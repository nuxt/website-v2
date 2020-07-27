module.exports = {
  root: true,
<<<<<<< HEAD
  env: {
    browser: true,
    node: true
  },
  plugins: ['prettier'],
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    // Vue rules
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true
      }
    ],
    'vue/singleline-html-element-content-newline': [0],
    'vue/multiline-html-element-content-newline': [0],
    'vue/html-self-closing': [0],
    'vue/no-v-html': [0],
    'vue/max-attributes-per-line': [0],
    'vue/html-closing-bracket-newline': [0],
    'vue/html-indent': [0],
    // Prettier rules
    'max-len': [0, 120],
    code: [0, 120],
    'print-width': [0, 120],
    'no-console': [1],
    'space-before-function-paren': [0],
    'arrow-parens': [0],
    curly: [0],
    'keyword-spacing': [0]
=======
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020
  },
  extends: ['@nuxtjs', 'eslint-config-prettier'],
  rules: {
    // Only allow console log and debugger in development
    'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
    'no-console': process.env.PRE_COMMIT
      ? ['error', { allow: ['warn', 'error'] }]
      : 'off',

    // Prettier adds slash at end and so we need to turn this off or it will conflict
    'vue/html-self-closing': 'off',

    // Prettier has an indent already set so this conflicts with it
    'vue/html-indent': 'off'
>>>>>>> 26a70b2b (chore: add guides section (#407))
  }
}
