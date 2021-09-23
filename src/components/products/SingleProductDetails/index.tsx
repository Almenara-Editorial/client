import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { SingleProductDetailsPanel, SingleProductDetailsTab } from '..'
import { Container, TabList } from './styles'

type SingleProductDetailsProps = {
  description: string
  particulars: string
}

export const SingleProductDetails = ({
  description,
  particulars
}: SingleProductDetailsProps) => {
  return (
    <Tab.Group as={Container} defaultIndex={0}>
      <Tab.List as={TabList}>
        <Tab as={Fragment}>
          {({ selected }) => (
            <SingleProductDetailsTab active={selected} title="Descrição" />
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <SingleProductDetailsTab
              active={selected}
              title="Características"
            />
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel as={SingleProductDetailsPanel} content={description} />
        <Tab.Panel as={SingleProductDetailsPanel} content={particulars} />
      </Tab.Panels>
    </Tab.Group>
  )
}

export default SingleProductDetails
