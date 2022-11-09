import webpack from 'webpack'

import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildFileLoader } from './loaders/buildFileLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildTypeScriptLoader } from './loaders/buildTypeScriptLoader'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader()

  const babelLoader = buildBabelLoader(options.isDev)

  const cssLoader = buildCssLoader(options.isDev)

  const typescriptLoader = buildTypeScriptLoader()

  const fileLoader = buildFileLoader()

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}
