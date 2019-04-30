import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [
    copy({
      targets: [
        'src/platform',
        'dist/platform'
      ]
    })
  ]
}