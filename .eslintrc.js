module.exports = {
  plugins: [
    'tailwindcss'
  ],
  extends: [
    'prettier',
    'eslint-config-standard',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
    'object-curly-newline': ['error', { multiline: true }],
    'react/jsx-curly-newline': [2, { singleline: 'forbid' }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always'
    }],
    'react/jsx-no-useless-fragment': ['error'],
    'react/jsx-curly-spacing': ['error', 'never']
  }
}
