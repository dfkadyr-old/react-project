import { memo } from 'react'

import { classNames, Mods } from 'shared/lib/class-names'

import cls from './text.module.scss'

type TextTheme = ValueOf<typeof TextTheme>
export const TextTheme = {
  PRIMARY: 'primary',
  INVERTED: 'inverted',
  ERROR: 'error'
} as const

type TextAlign = ValueOf<typeof TextAlign>
export const TextAlign = {
  RIGHT: 'right',
  LEFT: 'left',
  CENTER: 'center'
} as const

type TextSize = ValueOf<typeof TextSize>
export const TextSize = {
  S: 'size_s',
  M: 'size_m',
  L: 'size_l'
} as const

enum TitleTag {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

type TitleTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const mapSizeToTitleTag: Record<TitleTag, TitleTagType> = {
  [TitleTag.h1]: 'h1',
  [TitleTag.h2]: 'h2',
  [TitleTag.h3]: 'h3',
  [TitleTag.h4]: 'h4',
  [TitleTag.h5]: 'h5',
  [TitleTag.h6]: 'h6'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
  titleTag?: TitleTagType

  dataTestId?: string
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    titleTag = TitleTag.h3,
    dataTestId = 'Text'
  } = props

  const HeaderTag = mapSizeToTitleTag[titleTag]

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true
  }

  return (
    <div className={classNames(cls.text, mods, [className])}>
      {title && <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>{title}</HeaderTag>}
      {text && <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>{text}</p>}
    </div>
  )
})
