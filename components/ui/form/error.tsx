import * as React from 'react'

import { cn } from '@/lib/utils'

type FieldErrorProps = React.ComponentProps<'p'>

function FieldError({ className, children, ...props }: FieldErrorProps) {
  if (!children) {
    return null
  }

  return (
    <p className={cn('mt-2 text-sm text-red-600', className)} {...props}>
      {children}
    </p>
  )
}

export { FieldError }
