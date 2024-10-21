//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { type UserInfo as AuthUserInfo } from '@firebase/auth-types'
import { type Nil } from '@/packages/design-system/src/utils/misc'

export const getUserInfo = (user: AuthUserInfo) => ({
  displayName: user.displayName,
  email: user.email,
  phoneNumber: user.phoneNumber,
  photoURL: user.photoURL,
  providerId: user.providerId,
  uid: user.uid,
})

export type UserInfo = ReturnType<typeof getUserInfo>

export const getUserName = (user: {
  displayName?: Nil<string>
  email?: Nil<string>
  uid?: Nil<string>
}) => user.displayName ?? user.email ?? user.uid
