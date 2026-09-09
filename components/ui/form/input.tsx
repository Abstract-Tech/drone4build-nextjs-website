import * as React from 'react'

import { cn } from '@/lib/utils'
import { FieldError } from '@/components/ui/form/error'
import { FieldLabel } from '@/components/ui/form/label'

type InputProps = React.ComponentProps<'input'> & {
  label?: React.ReactNode
  labelClassName?: string
  wrapperClassName?: string
  error?: React.ReactNode
  errorClassName?: string
}

function Input({
  className,
  type,
  label,
  labelClassName,
  wrapperClassName,
  error,
  errorClassName,
  id,
  ...props
}: InputProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId

  const input = (
    <input
      id={inputId}
      type={type}
      data-slot="input"
      className={cn(
        'w-full border border-[var(--border-soft)] rounded-[var(--radius-lg)] px-4 py-3 text-base shadow-xs transition-[color,box-shadow] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-red-400 focus:ring-red-300',
        className,
      )}
      {...props}
    />
  )

  if (!label) {
    return input
  }

  return (
    <div className={wrapperClassName}>
      <FieldLabel htmlFor={inputId} className={labelClassName}>
        {label}
      </FieldLabel>
      {input}
      <FieldError className={errorClassName}>{error}</FieldError>
    </div>
  )
}

export default Input
