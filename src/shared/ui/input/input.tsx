import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

import { classNames, Mods } from '@/shared/lib/class-names'

import cls from './input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  type?: string
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  autoFocus?: boolean
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const { type = 'text', className, value, onChange, placeholder, autoFocus, readonly, ...otherProps } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const isCaretVisible = isFocused && !readonly

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      inputRef.current?.focus()
    }
  }, [autoFocus])

  const mods: Mods = {
    [cls.readonly]: readonly
  }

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onHandleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          className={cls.input}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }}></span>}
      </div>
    </div>
  )
})
