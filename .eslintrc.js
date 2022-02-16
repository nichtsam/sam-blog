module.exports = {
  extends: [
    'prettier',
    'eslint-config-standard',
    'next/core-web-vitals'
  ],
  rules: {
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
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
