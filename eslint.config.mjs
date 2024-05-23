import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  ignores: [
    'dist',
    '.eslintrc.cjs',
  ],
})
