module.exports = {
  plugins: ['tailwindcss'],
  extends: [
    'prettier',
    'eslint-config-standard',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': ['error', { multiline: true }],
    'array-bracket-newline': ['error', { multiline: true }],
    'function-paren-newline': ['error', 'multiline'],
    'react/jsx-curly-newline': [2, { singleline: 'forbid', multiline: 'require' }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-tag-spacing': [
      'error', {
        closingSlash: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always'
      }
    ],
    'react/jsx-no-useless-fragment': ['error'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/self-closing-comp': [
      'error', {
        component: true,
        html: true
      }
    ],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'import/order': ['error']
  }
}
