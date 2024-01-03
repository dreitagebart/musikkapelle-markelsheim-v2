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
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useNumberInput
} from '@chakra-ui/react'
import {
  FaPaperPlane,
  FaRegEnvelope,
  FaPlus,
  FaMinus,
  FaPeopleArrows,
  FaUserPlus,
  FaBullhorn,
  FaPhone
} from 'react-icons/fa'
import { GiGrapes } from 'react-icons/gi'

import { Animate, Global, PageHeader } from '../components'
import { NextPageExtended } from '../utils'

interface ApiResponse {
  error: boolean
}

interface ErrorState {
  message?: string
  email?: string
  name?: string
  phone?: string
}

type FormStatus = 'error' | 'success' | 'initial' | 'loading'

interface FormState {
  name: string
  email: string
  phone: string
  noc: number
  takers: Array<string>
  message: string
  status: FormStatus
}

const Page: NextPageExtended = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    noc: 1,
    message: '',
    takers: [''],
    status: 'initial'
  })

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      onChange: (valueAsString, valueAsNumber) => {
        const takers = [...form.takers]

        if (form.noc > valueAsNumber) {
          takers.pop()
        }

        if (form.noc < valueAsNumber) {
          takers.push('')
        }

        setForm({ ...form, noc: valueAsNumber, takers })
      },
      step: 1,
      defaultValue: form.noc,
      min: 1,
      max: 10
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const [errors, setErrors] = useState<ErrorState>({
    message: '',
    email: '',
    name: '',
    phone: ''
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setForm({ ...form, status: 'loading' })

    const formErrors: ErrorState = {}

    const { name, email, noc, takers, message, phone } = form

    if (!email)
      formErrors.email = 'Wir benötigen deine eMail Adresse zur Kontaktaufnahme'

    if (!name) formErrors.name = 'Verrate uns deinen Namen'

    setErrors(formErrors)

    if (Object.keys(formErrors).length > 0) {
      return setForm({ ...form, status: 'initial' })
    }

    Axios.post<{}, AxiosResponse<ApiResponse>, Omit<FormState, 'status'>>(
      '/api/wbw',
      {
        name,
        phone,
        email,
        noc,
        takers,
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

  const handleTakerChange = (index: number, value: string) =>
    setForm({
      ...form,
      takers: form.takers.map((t, i) => (i === index ? value : t))
    })

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <Global title='Weinbergwandung'>
      <Animate>
        <PageHeader>Anmeldung zum Schlürfen im 3/4 Takt</PageHeader>
        <Text fontSize='xl' my='1.5rem'>
          Erleben Sie eine musikalische Weinprobe durch den Markelsheimer
          Tauberberg mit 6er Weinprobe und Handvesper.
        </Text>
        <Alert
          status='info'
          borderRadius='8px'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          maxWidth='860px'
        >
          <AlertIcon boxSize='120px' mr={0} as={GiGrapes} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            &laquo;Weinbergwanderung&raquo;
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            <Text>am Sonntag, den 22. September 2024</Text>
            <Text my='0.8rem'>
              Treffpunkt um 14 Uhr am Tauberberg Markelsheim - Auffahrt Richtung
              Elpersheim
            </Text>
            <Text>Dauer ca. 3 Stunden</Text>
            <Text my='0.8rem'>Preis 28 € pro Person - Barzahlung vor Ort</Text>
            <Text fontWeight='bold'>
              Anmeldungen sind bis 8. September 2024 möglich
            </Text>
          </AlertDescription>
        </Alert>
        <Heading variant='mb' size='md'></Heading>
        {form.status === 'success' && (
          <Alert status='success' my={4} variant='left-accent'>
            <AlertIcon></AlertIcon>
            <AlertTitle mr={2}>
              Anmeldung wurde erfolgreich versendet
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
                htmlFor='wbw-name'
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
                  <Icon as={FaPeopleArrows}></Icon>
                </InputLeftElement>
                <Input
                  isDisabled={form.status === 'loading'}
                  isInvalid={!!errors.name}
                  focusBorderColor='brand.light'
                  background='white'
                  id='wbw-name'
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
                htmlFor='wbw-email'
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
                  id='wbw-email'
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
                htmlFor='wbw-phone'
              >
                Telefon
              </FormLabel>
              <Alert
                paddingY='0.3rem'
                fontSize='0.9rem'
                borderRadius='4px'
                mb='8px'
                hidden={!!!errors.phone}
                status='error'
                variant='left-accent'
              >
                <AlertDescription>{errors.phone}</AlertDescription>
              </Alert>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={FaPhone}></Icon>
                </InputLeftElement>
                <Input
                  isDisabled={form.status === 'loading'}
                  isInvalid={!!errors.email}
                  focusBorderColor='brand.light'
                  background='white'
                  id='wbw-phone'
                  name='phone'
                  type='phone'
                  value={form.phone}
                  onChange={handleFormChange}
                ></Input>
              </InputGroup>
            </FormControl>
            <FormControl marginBottom='2rem'>
              <FormLabel paddingLeft='.5rem' cursor='pointer' htmlFor='wbw-noc'>
                Anzahl Teilnehmer
              </FormLabel>
              <InputGroup>
                <HStack>
                  <IconButton
                    {...dec}
                    aria-label='Teilnehmeranzahl mindern'
                    icon={<Icon as={FaMinus}></Icon>}
                  ></IconButton>
                  <Input
                    {...input}
                    isReadOnly
                    focusBorderColor='brand.light'
                    background='white'
                    width='60px'
                    textAlign='center'
                    maxLength={2}
                  ></Input>
                  <IconButton
                    {...inc}
                    aria-label='Teilnehmeranzahl erhöhen'
                    icon={<Icon as={FaPlus}></Icon>}
                  ></IconButton>
                </HStack>
              </InputGroup>
            </FormControl>
            {form.takers.map((taker, index) => {
              return (
                <FormControl marginBottom='2rem' key={index}>
                  <InputGroup>
                    <InputLeftElement>
                      <Icon as={FaUserPlus}></Icon>
                    </InputLeftElement>
                    <Input
                      isDisabled={form.status === 'loading'}
                      placeholder={`Name Teilnehmer ${index + 1}`}
                      focusBorderColor='brand.light'
                      background='white'
                      value={taker}
                      onChange={(event) =>
                        handleTakerChange(index, event.target.value)
                      }
                    ></Input>
                  </InputGroup>
                </FormControl>
              )
            })}
            <FormControl marginBottom='2rem'>
              <FormLabel
                paddingLeft='.5rem'
                cursor='pointer'
                htmlFor='wbw-message'
              >
                Gibt es etwas, was Sie uns noch mitteilen möchten?
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
                id='wbw-message'
                name='message'
                value={form.message}
                onChange={handleFormChange}
              ></Textarea>
            </FormControl>
            <FormControl>
              <Alert
                borderRadius='8px'
                colorScheme='orange'
                marginBottom='1rem'
              >
                <AlertIcon></AlertIcon>
                <Box>
                  <AlertTitle>Hinweis</AlertTitle>
                  <AlertDescription>
                    Sollten Sie kurzfristig nicht an der
                    &laquo;Weinbergwanderung&raquo; teilnehmen können, so melden
                    Sie sich bitte per eMail über{' '}
                    <b>info@musikkapelle-markelsheim.de</b> ab!
                  </AlertDescription>
                </Box>
              </Alert>
              <Button
                type='submit'
                colorScheme='red'
                isLoading={form.status === 'loading'}
                leftIcon={<Icon as={FaPaperPlane}></Icon>}
              >
                Anmeldung senden
              </Button>
            </FormControl>
          </form>
        </Box>
      </Animate>
    </Global>
  )
}

Page.auth = false

export default Page
