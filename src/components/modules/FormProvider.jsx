import { createContext, useContext, useMemo } from 'react'
import { useForm } from 'react-hook-form'

const FormContext = createContext()
const FormActionsContext = createContext()

export const FormProvider = ({ children }) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  const actions = useMemo(
    () => ({
      onSubmit: handleSubmit(onSubmit),
    }),
    [],
  )

  return (
    <FormActionsContext.Provider value={actions}>
      <FormContext.Provider value={register}>{children}</FormContext.Provider>
    </FormActionsContext.Provider>
  )
}

export const useRegister = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormRegister Error')
  }

  return context
}

export const useFormSubmit = () => {
  const { onSubmit } = useContext(FormActionsContext)
  if (!onSubmit) {
    throw new Error('useFormActions Error')
  }

  return onSubmit
}
