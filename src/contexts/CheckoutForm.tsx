import { useRouter } from 'next/router'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

const formSteps = ['shipping', 'payment', 'review']

type FormSteps = 'shipping' | 'payment' | 'review' | undefined

type CheckoutFormContextData = {
  updateFormValues: (key: string, value: string) => void
  formValues: {
    address: string
    shipping: string
    payment: string
    installments: string
  } | null
  currentStep: FormSteps
  prevStep: () => void
  nextStep: () => void
}

type CheckoutFormProviderProps = {
  children: React.ReactNode
}

export const CheckoutFormContext = createContext({} as CheckoutFormContextData)

export function CheckoutFormProvider({ children }: CheckoutFormProviderProps) {
  const { query, push } = useRouter()
  const [currentStep, setCurrentStep] = useState<FormSteps>(
    query.step?.toString() as FormSteps
  )
  const [formValues, setFormValues] =
    useState<CheckoutFormContextData['formValues']>(null)
  const updateFormValues = useCallback((key: string, value: string) => {
    setFormValues(
      (state) =>
        ({ ...state, [key]: value } as CheckoutFormContextData['formValues'])
    )
  }, [])

  const prevStep = useCallback(() => {
    if (!currentStep) return

    const currentStepIndex = formSteps.indexOf(currentStep)
    const prevStepName = formSteps[currentStepIndex - 1]

    prevStepName && push(`/checkout?step=${prevStepName}`)
  }, [currentStep, push])

  const nextStep = useCallback(() => {
    if (!currentStep) return

    const currentStepIndex = formSteps.indexOf(currentStep)
    const nextStepName = formSteps[currentStepIndex + 1]

    nextStepName && push(`/checkout?step=${nextStepName}`)
  }, [currentStep, push])

  useEffect(() => {
    query.step && setCurrentStep(query.step.toString() as FormSteps)
  }, [query])

  return (
    <CheckoutFormContext.Provider
      value={{ updateFormValues, formValues, currentStep, prevStep, nextStep }}
    >
      {children}
    </CheckoutFormContext.Provider>
  )
}

export function useCheckoutForm() {
  return useContext(CheckoutFormContext)
}
