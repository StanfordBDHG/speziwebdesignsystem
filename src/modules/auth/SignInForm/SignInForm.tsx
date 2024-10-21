//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import {
  type Auth,
  type AuthProvider,
  type signInWithPopup,
  type signInWithEmailAndPassword,
} from 'firebase/auth'
import { useTranslations } from 'next-intl'
import { EmailPasswordForm } from './EmailPasswordForm'
import { Button } from '../../../components/Button'
import { Separator, SeparatorText } from '../../../components/Separator'
import { cn } from '../../../utils/className'

export interface SignInFormProps {
  auth: Auth
  providers: Array<{
    provider: AuthProvider
    name: string
  }>
  enableEmailPassword: boolean
  signInWithPopup: typeof signInWithPopup
  signInWithEmailAndPassword: typeof signInWithEmailAndPassword
  className?: string
}

export const SignInForm = ({
  auth,
  providers,
  enableEmailPassword,
  className,
  signInWithPopup,
  signInWithEmailAndPassword,
}: SignInFormProps) => {
  const t = useTranslations()
  return (
    <div className={cn('grid gap-4', className)}>
      <h1 className="mb-4 text-center text-2xl font-bold">{t('signIn')}</h1>
      {providers.map((provider) => (
        <Button
          key={provider.name}
          variant="outlineBg"
          onClick={() => signInWithPopup(auth, provider.provider)}
        >
          {t('signIn_provider', { provider: provider.name })}
        </Button>
      ))}
      {enableEmailPassword && (
        <>
          {providers.length > 0 && (
            <Separator className="my-5">
              <SeparatorText>{t('signIn_separator')}</SeparatorText>
            </Separator>
          )}
          <EmailPasswordForm
            auth={auth}
            signInWithEmailAndPassword={signInWithEmailAndPassword}
          />
        </>
      )}
    </div>
  )
}
