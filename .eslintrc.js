module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'max-len': ['error', 80, 2],
    'max-depth': ['error', 6],
    'max-params': ['error', 4],
    'max-statements': ['error', 32],
    'max-nested-callbacks': ['error', 4]
  }
}
