module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue']
  },
  plugins: ['@typescript-eslint', 'jest', 'testing-library'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/recommended',
    'plugin:vue-pug-sfc/recommended',
    '@vue/typescript/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/vue',
    'plugin:prettier-vue/recommended',
    'prettier'
  ],
  env: {
    'jest/globals': true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    },
    {
      files: ['**/*.spec.ts'],
      rules: {
        'jest/expect-expect': 'off'
      }
    }
  ]
}
