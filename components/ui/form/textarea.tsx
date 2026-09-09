import * as React from 'react'

import { cn } from '@/lib/utils'
import { FieldError } from '@/components/ui/form/error'
import { FieldLabel } from '@/components/ui/form/label'

type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: React.ReactNode
  labelClassName?: string
  wrapperClassName?: string
  error?: React.ReactNode
  errorClassName?: string
}

function Textarea({
  className,
  label,
  labelClassName,
  wrapperClassName,
  error,
  errorClassName,
  id,
  ...props
}: TextareaProps) {
  const generatedId = React.useId()
  const textareaId = id ?? generatedId

  const textarea = (
    <textarea
      id={textareaId}
      data-slot="textarea"
      className={cn(
        'w-full border border-[var(--border-soft)] rounded-[var(--radius-lg)] px-4 py-3 text-base shadow-xs transition-[color,box-shadow] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-red-400 focus:ring-red-300',
        className,
      )}
      {...props}
    />
  )

  if (!label) {
    return textarea
  }

  return (
    <div className={wrapperClassName}>
      <FieldLabel htmlFor={textareaId} className={labelClassName}>
        {label}
      </FieldLabel>
      {textarea}
      <FieldError className={errorClassName}>{error}</FieldError>
    </div>
  )
}

export default Textarea
