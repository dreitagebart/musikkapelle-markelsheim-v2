import { useState } from 'react'
import Axios, { AxiosResponse } from 'axios'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea
} from '@chakra-ui/react'
import {
  FaPhone,
  FaPaperPlane,
  FaRegEnvelope,
  FaRegFilePdf,
  FaUser
} from 'react-icons/fa'

import { Animate, Global, Ads } from '../components'
import { NextPageExtended } from '../utils'

interface ApiResponse {
  error: boolean
}

interface ErrorState {
  message?: string
  email?: string
  name?: string
}

type FormStatus = 'error' | 'success' | 'initial' | 'loading'

interface FormState {
  name: string
  email: string
  phone: string
  message: string
  status: FormStatus
}

const Page: NextPageExtended = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
    status: 'initial'
  })

  const [errors, setErrors] = useState<ErrorState>({
    message: '',
    email: '',
    name: ''
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setForm({ ...form, status: 'loading' })

    const formErrors: ErrorState = {}

    const { name, email, message, phone } = form

    if (!message) formErrors.message = 'Bitte gebe eine Nachricht an'

    if (!email)
      formErrors.email = 'Wir benötigen deine eMail Adresse zur Kontaktaufnahme'

    if (!name) formErrors.name = 'Verrate uns deinen Namen'

    setErrors(formErrors)

    if (Object.keys(formErrors).length > 0) {
      return setForm({ ...form, status: 'initial' })
    }

    Axios.post<{}, AxiosResponse<ApiResponse>, Omit<FormState, 'status'>>(
      '/api/contact',
      {
        name,
        email,
        phone,
        message
      }
    )
      .then(() => {
        setForm({ ...form, status: 'success' })
      })
      .catch(() => {
        setForm({ ...form, status: 'error' })
      })
  }

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <Global title='Kontakt'>
      <Animate>
        <Heading variant='mb' size='md'>
          Vorstand der Musikkapelle Markelsheim
        </Heading>
        <Box
          background='gray.100'
          borderRadius='8px'
          padding='1rem'
          display='inline-block'
        >
          <Heading size='sm'>Musikkapelle Markelsheim e. V.</Heading>
          <Heading size='sm'>Verena Hüttl</Heading>
          <Heading size='sm'>Schwarzrieslingstraße 3</Heading>
          <Heading size='sm'>97980 Markelsheim</Heading>
        </Box>
        <Text marginTop='2rem'>
          Wenn du mit uns Kontakt aufnehmen möchtest, dann verwende doch bitte
          untenstehendes Kontaktformular.
        </Text>
        {form.status === 'success' && (
          <Alert status='success' my={4} variant='left-accent'>
            <AlertIcon></AlertIcon>
            <AlertTitle mr={2}>
              Kontaktformular wurde erfolgreich versendet
            </AlertTitle>
          </Alert>
        )}
        <Box
          marginTop='1rem'
          marginBottom='4rem'
          maxWidth='860px'
          backgroundColor='gray.50'
          borderStyle='solid'
          borderWidth='1px'
          borderColor='gray.200'
          borderRadius='8px'
          padding='2rem'
        >
          <form onSubmit={handleSubmit}>
            <FormControl marginBottom='2rem'>
              <FormLabel
                paddingLeft='.5rem'
                cursor='pointer'
                htmlFor='contact-name'
              >
                Vor- und Zuname
              </FormLabel>
              <Alert
                paddingY='0.3rem'
                fontSize='0.9rem'
                borderRadius='4px'
                mb='8px'
                hidden={!!!errors.name}
                status='error'
                variant='left-accent'
              >
                <AlertDescription>{errors.name}</AlertDescription>
              </Alert>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={FaUser}></Icon>
                </InputLeftElement>
                <Input
                  isDisabled={form.status === 'loading'}
                  isInvalid={!!errors.name}
                  focusBorderColor='brand.light'
                  background='white'
                  id='contact-name'
                  name='name'
                  value={form.name}
                  onChange={handleFormChange}
                ></Input>
              </InputGroup>
            </FormControl>
            <FormControl marginBottom='2rem'>
              <FormLabel
                paddingLeft='.5rem'
                cursor='pointer'
                htmlFor='contact-email'
              >
                eMail Adresse
              </FormLabel>
              <Alert
                paddingY='0.3rem'
                fontSize='0.9rem'
                borderRadius='4px'
                mb='8px'
                hidden={!!!errors.email}
                status='error'
                variant='left-accent'
              >
                <AlertDescription>{errors.email}</AlertDescription>
              </Alert>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={FaRegEnvelope}></Icon>
                </InputLeftElement>
                <Input
                  isDisabled={form.status === 'loading'}
                  isInvalid={!!errors.email}
                  focusBorderColor='brand.light'
                  background='white'
                  id='contact-email'
                  name='email'
                  type='email'
                  value={form.email}
                  onChange={handleFormChange}
                ></Input>
              </InputGroup>
            </FormControl>
            <FormControl marginBottom='2rem'>
              <FormLabel
                paddingLeft='.5rem'
                cursor='pointer'
                htmlFor='contact-phone'
              >
                Telefon
              </FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={FaPhone}></Icon>
                </InputLeftElement>
                <Input
                  isDisabled={form.status === 'loading'}
                  focusBorderColor='brand.light'
                  background='white'
                  id='contact-phone'
                  name='phone'
                  type='tel'
                  value={form.phone}
                  onChange={handleFormChange}
                ></Input>
              </InputGroup>
            </FormControl>
            <FormControl marginBottom='2rem'>
              <FormLabel
                paddingLeft='.5rem'
                cursor='pointer'
                htmlFor='contact-message'
              >
                Nachricht
              </FormLabel>
              <Alert
                paddingY='0.3rem'
                fontSize='0.9rem'
                borderRadius='4px'
                mb='8px'
                hidden={!!!errors.message}
                status='error'
                variant='left-accent'
              >
                <AlertDescription>{errors.message}</AlertDescription>
              </Alert>
              <Textarea
                isDisabled={form.status === 'loading'}
                isInvalid={!!errors.message}
                focusBorderColor='brand.light'
                background='white'
                id='contact-message'
                name='message'
                value={form.message}
                onChange={handleFormChange}
              ></Textarea>
            </FormControl>
            <FormControl>
              <Button
                type='submit'
                colorScheme='red'
                isLoading={form.status === 'loading'}
                leftIcon={<Icon as={FaPaperPlane}></Icon>}
              >
                Senden
              </Button>
            </FormControl>
          </form>
        </Box>
        <Heading size='md' variant='my'>
          Geld spenden &amp; Bankverbindung
        </Heading>
        <Text>
          Mit einer Geldspende kannst du unser Vereinsleben fördern und den Kauf
          von Noten und Musikinstrumenten unterstützen.
        </Text>
        <Text>
          Wir sagen schon einmal im Voraus: <b>VIELEN DANK!</b>
        </Text>
        <Box>
          <Box marginY='1rem'>
            <Box
              display='inline-block'
              backgroundColor='red.50'
              padding='1rem'
              borderRadius='8px'
            >
              <Heading size='sm'>Sparkasse Tauberfranken</Heading>
              <Box marginTop='0.4rem'>
                <Text>
                  <b>Kontoinhaber</b> Musikverein Markelsheim e.&nbsp;V.
                </Text>
                <Text>
                  <b>IBAN</b> DE70 6735 2565 0000 0979 72
                </Text>
                <Text>
                  <b>BIC</b> SOLADES1TBB
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              display='inline-block'
              backgroundColor='red.50'
              padding='1rem'
              borderRadius='8px'
            >
              <Heading size='sm'>Volksbank Main-Tauber e.&nbsp;G.</Heading>
              <Box marginTop='0.4rem'>
                <Text>
                  <b>Kontoinhaber</b> Musikverein Markelsheim e.&nbsp;V.
                </Text>
                <Text>
                  <b>IBAN</b> DE60 6739 0000 0084 0580 09
                </Text>
                <Text>
                  <b>BIC</b> GENODE61WTH
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Heading size='md' variant='my'>
          Mitglied werden?
        </Heading>
        <Alert
          status='info'
          mb='1rem'
          alignItems='flex-start'
          borderRadius='8px'
          maxWidth='800px'
        >
          <AlertIcon></AlertIcon>
          Du möchtest Mitglied in unserer Musikkapelle werden? Dann kannst du
          hier das Mitgliedsforumular herunterladen und ausgefüllt an uns zurück
          senden.
        </Alert>
        <Ads></Ads>
      </Animate>
    </Global>
  )
}

Page.auth = false

export default Page
