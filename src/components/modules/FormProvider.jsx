import { createContext, useContext, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useSignUp } from '@/utils'

const FormContext = createContext()
const FormActionsContext = createContext()

export const FormProvider = ({ children, type }) => {
  const { register, handleSubmit, control } = useForm()
  const signUp = useSignUp()
  const onSubmit = (form) => {
    if (type === 'signUp') {
      signUp(form)
    }
    // else if (type === 'signIn') {
    // } else if (type === 'write') {
    // }
  }

  const actions = useMemo(
    () => ({
      onSubmit: handleSubmit(onSubmit),
    }),
    [],
  )

  return (
    <FormActionsContext.Provider value={actions}>
      <FormContext.Provider value={{ register, control }}>{children}</FormContext.Provider>
    </FormActionsContext.Provider>
  )
}

export const useFormErrors = () => {
  const { errors } = useContext(FormContext)

  return errors
}

export const useRegister = () => {
  const { register } = useContext(FormContext)
  if (!register) {
    throw new Error('useFormRegister Error')
  }

  return register
}

export const useControl = () => {
  const { control } = useContext(FormContext)
  if (!control) {
    throw new Error('useFormControl Error')
  }

  return control
}

export const useFormSubmit = () => {
  const { onSubmit } = useContext(FormActionsContext)
  if (!onSubmit) {
    throw new Error('useFormActions Error')
  }

  return onSubmit
}
