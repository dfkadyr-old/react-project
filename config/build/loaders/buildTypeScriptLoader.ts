export function buildTypeScriptLoader() {
  return {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
}
