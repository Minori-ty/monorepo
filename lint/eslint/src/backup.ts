module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}

// package.json
// "devDependencies": {
//     "@typescript-eslint/eslint-plugin": "^6.18.1",
//     "@typescript-eslint/parser": "^6.18.1",
//     "eslint": "^8.56.0",
//     "eslint-config-prettier": "^9.1.0",
//     "eslint-plugin-prettier": "^5.1.3",
//     "prettier": "^3.2.1"
//   }
