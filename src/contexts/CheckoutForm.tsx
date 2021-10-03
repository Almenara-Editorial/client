import { CheckoutValues, Installment } from '@/models'
import { loadPaymentMethods, PaymentMethods } from '@/services'
import { Session } from 'next-auth'
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
  updateFormValues: (
    key: keyof CheckoutFormContextData['formValues'],
    value: CheckoutFormContextData['formValues'][typeof key]
  ) => void
  formValues: CheckoutValues
  session: Session | null
  currentStep: FormSteps
  paymentMethods: PaymentMethods
  creditCardInstallments: Installment | null
  setCreditCardInstallments: (installments: Installment | null) => void
  isLoading: {
    shipping: boolean
    payment: boolean
  }
  prevStep: () => void
  nextStep: () => void
}

type CheckoutFormProviderProps = {
  children: React.ReactNode
  session: Session | null
}

export const CheckoutFormContext = createContext({} as CheckoutFormContextData)

export function CheckoutFormProvider({
  children,
  session
}: CheckoutFormProviderProps) {
  const { query, push } = useRouter()
  const [isLoading, setIsLoading] = useState(() => ({
    payment: false,
    shipping: false
  }))
  const [currentStep, setCurrentStep] = useState<FormSteps>(
    query.step?.toString() as FormSteps
  )
  const [creditCardInstallments, setCreditCardInstallments] =
    useState<Installment | null>(null)
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethods>({
    availableMethods: [],
    creditCards: []
  })
  const [formValues, setFormValues] = useState(
    {} as CheckoutFormContextData['formValues']
  )
  const updateFormValues = useCallback(
    (
      key: keyof CheckoutFormContextData['formValues'],
      value: CheckoutFormContextData['formValues'][typeof key]
    ) => {
      setFormValues(
        (state) =>
          ({ ...state, [key]: value } as CheckoutFormContextData['formValues'])
      )
    },
    []
  )

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

  const updateIsLoading = useCallback(
    (key: keyof typeof isLoading, value: boolean) => {
      setIsLoading((state) => ({ ...state, [key]: value }))
    },
    []
  )

  useEffect(() => {
    query.step && setCurrentStep(query.step.toString() as FormSteps)
  }, [query])

  useEffect(() => {
    async function getAndSetPaymentMethods() {
      updateIsLoading('payment', true)
      await loadPaymentMethods()
        .then((payments) => {
          setPaymentMethods(payments)
          updateIsLoading('payment', false)
        })
        .catch((error) => console.log({ error }))
    }

    getAndSetPaymentMethods()
  }, [updateIsLoading])

  return (
    <CheckoutFormContext.Provider
      value={{
        updateFormValues,
        formValues,
        paymentMethods,
        currentStep,
        prevStep,
        nextStep,
        isLoading,
        creditCardInstallments,
        setCreditCardInstallments,
        session
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  )
}

export function useCheckoutForm() {
  return useContext(CheckoutFormContext)
}
