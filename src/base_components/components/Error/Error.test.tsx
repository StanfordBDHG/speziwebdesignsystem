//
// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { render, screen } from '@testing-library/react'
import { Error } from '.'

describe('Error', () => {
  it('renders message', () => {
    render(<Error>Lorem</Error>)

    const element = screen.getByText('Lorem')
    expect(element).toBeInTheDocument()
  })

  it('renders empty paragraph to preserve space for the message', () => {
    render(<Error />)

    const element = screen.getByRole('paragraph')
    expect(element).toBeInTheDocument()
  })

  it('renders nothing when checkEmpty is enabled', () => {
    render(<Error checkEmpty />)

    const element = screen.queryByRole('paragraph')
    expect(element).not.toBeInTheDocument()
  })
})
