module.exports = {
  root: true,
  extends: [
    '@hitechline/eslint-config/node',
    '@hitechline/eslint-config/typescript',
  ],
  rules: {
    'semi': 'off',
    'eqeqeq': 'warn',
    'no-throw-literal': 'warn',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/semi': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
  },
  ignorePatterns: ['**/*.d.ts'],
};
