//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import type { HTMLProps } from 'react'
import { cn } from '@/packages/design-system/src'
import { useNotificationContext } from '@/packages/design-system/src/molecules/Notifications/NotificationContext'

interface NotificationMessageProps extends HTMLProps<HTMLParagraphElement> {}

export const NotificationMessage = ({
  className,
  ...props
}: NotificationMessageProps) => {
  const notification = useNotificationContext()
  return (
    <p
      className={cn(
        'flex-1 text-sm',
        notification.isRead && 'text-foreground/70',
        className,
      )}
      {...props}
    />
  )
}
