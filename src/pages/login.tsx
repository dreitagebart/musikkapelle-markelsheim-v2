import {
  Alert,
  Button,
  FormControl,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import Axios from 'axios'
import { signIn } from 'next-auth/react'

import { Global } from '../components'

interface FormFields {
  username: string
  password: string
}

interface FormErrors {
  username: string
  password: string
}

const initialForm: FormFields = {
  username: '',
  password: ''
}

const Page: NextPage = () => {
  const [form, setForm] = useState<FormFields>(initialForm)
  const [errors, setErrors] = useState<Partial<FormErrors>>({})

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      const errors: Partial<FormErrors> = {}

      event.preventDefault()

      if (!form.username) {
        errors.username = 'Bitte gib einen Benutzernamen an'
      }

      if (!form.password) {
        errors.password = 'Bitte gib ein Passwort an'
      }

      if (Object.keys(errors).length > 0) {
        return setErrors(errors)
      }

      const { username, password } = form

      Axios.post('http://localhost:3000/api/login', {
        username,
        password
      })
        .then(({ data }) => {
          debugger
        })
        .catch(() => {
          debugger
        })
    },
    [form]
  )

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }))
  }, [])

  return (
    <Global>
      <Heading variant='mb'>Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack maxWidth='420px'>
          <FormControl isInvalid={!!errors.username}>
            <Alert
              paddingY='0.3rem'
              fontSize='0.9rem'
              borderRadius='4px'
              mb='8px'
              hidden={!!!errors.username}
              variant='left-accent'
              status='error'
            >
              {errors.username}
            </Alert>
            <Input
              placeholder='Benutzername'
              name='username'
              value={form.username}
              onChange={handleChange}
            ></Input>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <Alert
              paddingY='0.3rem'
              fontSize='0.9rem'
              borderRadius='4px'
              mb='8px'
              hidden={!!!errors.password}
              variant='left-accent'
              status='error'
            >
              {errors.password}
            </Alert>
            <Input
              placeholder='Passwort'
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
            ></Input>
          </FormControl>
          <FormControl>
            <Button type='submit'>Anmelden</Button>
          </FormControl>
        </VStack>
      </form>
      <Button onClick={() => signIn()}>Sign in</Button>
    </Global>
  )
}

export default Page
