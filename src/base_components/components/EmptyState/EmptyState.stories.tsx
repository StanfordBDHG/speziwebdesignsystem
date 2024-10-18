//
// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { type Meta, type StoryObj } from '@storybook/react'
import { EmptyState } from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  args: {
    entityName: 'users',
  },
}

export default meta

type Story = StoryObj<typeof EmptyState>

export const Default: Story = { args: { entityName: 'users' } }

export const MiscFilters: Story = {
  args: { hasFilters: true },
}

export const TextFilter: Story = {
  args: { textFilter: 'John Doe' },
}

export const CustomMessage: Story = {
  args: { children: 'Data is missing' },
}
