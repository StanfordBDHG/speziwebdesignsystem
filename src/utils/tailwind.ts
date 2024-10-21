//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { lightTheme } from '../theme/light'

export const colorNameToTailwindVar = (colorName: string, alpha = true) =>
  `rgb(var(--${colorName})${alpha ? '/ <alpha-value>' : ''})`

const colorEntries = Object.keys(lightTheme).map(
  (key) => [key, colorNameToTailwindVar(key)] as const,
)

/**
 * Tailwind's theme colors
 * Uses light theme to get keys, but these are just CSS variable references
 * */
export const tailwindColors = Object.fromEntries(colorEntries)

/**
 * Converts theme object to CSS variables
 * @example themeToCSSVariables({ black: '0 0 0' }) => `--black: 0 0 0;`
 * */
export const themeToCSSVariables = (theme: Record<string, unknown>) =>
  Object.entries(theme)
    .map(([key, value]) =>
      typeof value === 'string' ? `--${key}: ${value};` : null,
    )
    .filter(Boolean)
    .join('\n')
