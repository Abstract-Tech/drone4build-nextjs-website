import * as React from 'react'

import { cn } from '@/lib/utils'

type FieldLabelProps = React.ComponentProps<'label'>

function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <label
      className={cn('block text-sm font-semibold mb-2', className)}
      {...props}
    />
  )
}

export { FieldLabel }
