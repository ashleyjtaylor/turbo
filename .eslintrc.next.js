/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    './.eslintrc.js'
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-single']
  }
}
