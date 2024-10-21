//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { render, screen } from '@testing-library/react'
import { Label } from '.'

describe('Label', () => {
  it('renders accessible label', () => {
    render(
      <div>
        <Label htmlFor="name">Username</Label>
        <input type="text" id="name" />
      </div>,
    )

    const input = screen.getByLabelText('Username')
    expect(input).toHaveRole('textbox')
  })
})
