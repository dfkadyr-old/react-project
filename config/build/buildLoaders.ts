import webpack from 'webpack'

import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildFileLoader } from './loaders/buildFileLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader()

  const codebabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  const cssLoader = buildCssLoader(options.isDev)

  const fileLoader = buildFileLoader()

  return [
    fileLoader,
    svgLoader,
    codebabelLoader,
    tsxBabelLoader,
    cssLoader
  ]
}
