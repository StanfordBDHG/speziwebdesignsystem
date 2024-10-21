//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { Link } from '@tanstack/react-router'
import { type ReactNode } from 'react'
import { Tooltip } from '../../components/Tooltip'
import { cn } from '../../utils/className'

interface MenuItemProps {
  href: string
  isActive?: boolean
  isHighlighted?: boolean
  icon?: ReactNode
  label?: string
}

export const MenuItem = ({
  href,
  icon,
  isActive,
  label,
  isHighlighted,
}: MenuItemProps) => (
  <Tooltip
    key={href}
    tooltip={label}
    sideOffset={8}
    side="right"
    className="hidden lg:block xl:hidden"
  >
    <Link
      to={href}
      className={cn(
        'focus-ring relative flex items-center gap-3 rounded-lg p-2 font-medium no-underline transition xl:w-full xl:self-start',
        isActive ?
          'bg-accent/50 text-primary hover:opacity-60'
        : 'text-foreground/60 hover:bg-accent hover:text-foreground',
      )}
    >
      {icon}
      <span className="grow lg:hidden xl:block">{label}</span>
      {isHighlighted && (
        <i
          aria-hidden
          className="size-2.5 rounded-full bg-destructive lg:absolute lg:right-1 lg:top-1 lg:size-1.5 xl:static xl:size-2.5"
        />
      )}
    </Link>
  </Tooltip>
)
