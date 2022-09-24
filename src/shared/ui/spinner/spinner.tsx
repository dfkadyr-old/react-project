import { classNames } from 'shared/lib/class-names'

import cls from './spinner.module.scss'

interface spinnerProps {
  className?: string
}

export const Spinner = ({ className }: spinnerProps) => {
  return (
    <div className={classNames(cls.spinner, {}, [className])}>
      <div></div>
      <div></div>
    </div>
  )
}
