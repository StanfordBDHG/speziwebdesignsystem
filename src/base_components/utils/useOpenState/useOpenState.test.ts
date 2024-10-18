//
// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { act, renderHook } from '@testing-library/react'
import { useOpenState } from './useOpenState'

describe('useOpenState', () => {
  it('exposes semantic open state API', () => {
    const { result } = renderHook(() => useOpenState(true))

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.close()
    })
    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.open()
    })
    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggle()
    })
    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggle()
    })
    expect(result.current.isOpen).toBe(true)
  })
})
