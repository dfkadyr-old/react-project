import { memo, useCallback, useState } from 'react'

import StarIcon from '@/shared/assets/icons/star.svg'
import { classNames, Mods } from '@/shared/lib/class-names'

import { Icon } from '../icon'

import cls from './star-rating.module.scss'

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = useCallback(
    (starsCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(starsCount)
      }
    },
    [isSelected]
  )

  const onLeave = useCallback(() => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }, [isSelected])

  const onClick = useCallback(
    (starsCount: number) => () => {
      if (!isSelected) {
        onSelect?.(starsCount)
        setCurrentStarsCount(starsCount)
        setIsSelected(true)
      }
    },
    [isSelected, onSelect]
  )

  const mods: Mods = {
    [cls.selected]: isSelected
  }

  return (
    <div className={classNames('', {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(cls.starIcon, mods, [currentStarsCount >= starNumber ? cls.hovered : cls.normal])}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarsCount >= starNumber}
        />
      ))}
    </div>
  )
})
