import { TextField } from '@/components/form'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Form } from './styles'

export function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  function onSubmitSearch(e: FormEvent) {
    e.preventDefault()
    router.push(`/produtos?s=${searchTerm}`)
  }

  function handleChangeSearchField(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
  }

  return (
    <Form onSubmit={onSubmitSearch}>
      <TextField
        type="search"
        placeholder="O que você está procurando?"
        onChange={handleChangeSearchField}
        value={searchTerm}
      />
    </Form>
  )
}
