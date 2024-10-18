//
// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { type Meta } from '@storybook/react'
import { z } from 'zod'
import { Field } from './Field'
import { Input } from '../../components/Input'
import { useForm } from '../useForm'

const meta: Meta<typeof Field> = {
  title: 'Forms/Field',
  component: Field,
}

export default meta

const formSchema = z.object({
  name: z.string().min(1),
})

export const RegisteredField = () => {
  const form = useForm({ formSchema })
  return (
    <Field
      control={form.control}
      name="name"
      render={({ field }) => <Input {...field} />}
    />
  )
}

export const Label = () => {
  const form = useForm({ formSchema })
  return (
    <Field
      control={form.control}
      name="name"
      label="Name"
      render={({ field }) => <Input {...field} />}
    />
  )
}

/**
 * Field errors are coming from formSchema validation
 * This is just example
 * */
export const Error = () => {
  const form = useForm({
    formSchema,
    errors: {
      name: { message: 'Name is required field', type: 'validationError' },
    },
  })
  return (
    <Field
      control={form.control}
      name="name"
      render={({ field }) => <Input {...field} />}
    />
  )
}
