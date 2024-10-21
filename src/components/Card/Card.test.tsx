//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { render, screen } from '@testing-library/react'
import { Card } from '.'

describe('Card', () => {
  it('renders element', () => {
    render(<Card>Lorem</Card>)

    const element = screen.getByText('Lorem')
    expect(element).toBeInTheDocument()
  })
})
