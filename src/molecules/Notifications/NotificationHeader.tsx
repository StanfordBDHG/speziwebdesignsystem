//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import type { HTMLProps } from 'react'
import { cn } from '../../utils/className'

interface NotificationHeaderProps extends HTMLProps<HTMLDivElement> {}

export const NotificationHeader = ({
  className,
  ...props
}: NotificationHeaderProps) => (
  <header className={cn('flex flex-1 gap-1', className)} {...props} />
)
