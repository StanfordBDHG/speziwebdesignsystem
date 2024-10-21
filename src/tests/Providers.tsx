//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { NextIntlClientProvider } from 'next-intl'
import { type ReactNode } from 'react'
import messages from '../../../../modules/messages/translations/en.json'

interface ProvidersProps {
  children?: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => (
  <NextIntlClientProvider messages={messages} locale="en">
    {children}
  </NextIntlClientProvider>
)
