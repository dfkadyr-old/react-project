import { classNames } from 'shared/lib/class-names'

import cls from './spinner.module.scss'

interface spinnerProps {
  className?: string
}

export const Spinner = (props: spinnerProps) => {
  const { className } = props
  return (
    <div className={classNames(cls.spinner, {}, [className])}>
      <div></div>
      <div></div>
    </div>
  )
}
