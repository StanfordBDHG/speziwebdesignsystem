//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { type Meta } from '@storybook/react'
import { Separator } from './Separator'
import { SeparatorText as SeparatorTextComponent } from './SeparatorText'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
}

export default meta

export const Default = () => (
  <div className="w-96">
    <Separator />
  </div>
)

export const SeparatorText = () => (
  <div className="w-96">
    <Separator>
      <SeparatorTextComponent>Something</SeparatorTextComponent>
    </Separator>
  </div>
)
