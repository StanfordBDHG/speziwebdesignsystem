//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { Loader2 } from 'lucide-react'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/className'
import type { ButtonProps } from '../Button'

interface ButtonPendingProps
  extends HTMLAttributes<HTMLSpanElement>,
    Pick<ButtonProps, 'size'> {
  isPending?: boolean
}

/**
 * Utility to compose button with pending state
 * It's separated from Button to prevent redundant markup when unnecessary
 * */
export const ButtonPending = forwardRef<HTMLSpanElement, ButtonPendingProps>(
  ({ children, isPending, className, size, ...props }, ref) => (
    <span
      className={cn('inline-flex-center relative', className)}
      ref={ref}
      {...props}
    >
      {isPending && (
        <div
          className="absolute -top-0.5 left-1/2 -translate-x-1/2"
          aria-hidden
          data-testid="ButtonPending"
        >
          <Loader2 className="animate-spin" />
        </div>
      )}
      <span
        className={cn(
          'inline-flex-center',
          size === 'lg' ? 'gap-2.5' : 'gap-2',
          isPending && 'invisible',
        )}
      >
        {children}
      </span>
    </span>
  ),
)

ButtonPending.displayName = 'ButtonPending'
