module.exports = {
  plugins: [
    'tailwindcss',
    'jsx-a11y'
  ],
  extends: [
    'prettier',
    'eslint-config-standard',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'max-len': ['error', { code: 130 }],
    'comma-dangle': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'array-bracket-newline': ['error', { multiline: true }],
    'function-paren-newline': ['error', 'multiline'],
    'react/jsx-curly-newline': ['error', { singleline: 'forbid', multiline: 'require' }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
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
