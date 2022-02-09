import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Fade,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  LinkBox,
  LinkOverlay,
  Text,
  Textarea
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import { FaRegFilePdf } from 'react-icons/fa'

import { Animate, Global } from '../components'

interface ErrorState {
  message?: string
  email?: string
  name?: string
}

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

const Page: NextPage = () => {
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState<ErrorState>({
    message: '',
    email: '',
    name: ''
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formErrors: ErrorState = {}

    const { name, email, message, phone } = form

    if (!message) formErrors.message = 'Bitte gebe eine Nachricht an'

    if (!email)
      formErrors.email = 'Wir benötigen deine eMail Adresse zur Kontaktaufnahme'

    if (!name) formErrors.name = 'Verrate uns deinen Namen'

    setErrors(formErrors)

    if (Object.keys(formErrors).length > 0) return
  }

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSuccess(false)
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <Global title='Kontakt'>
      <Animate>
        <div>
          <h6 className='font-light'>
            <b>Musikkapelle Markelsheim e. V.</b>
            <br />
            Frau Verena Hüttl
            <br />
            Schwarzrieslingstraße 3<br />
            97980 Markelsheim
          </h6>
        </div>
        <p className='title'>
          Wenn du mit uns Kontakt aufnehmen möchtest, dann verwende doch bitte
          untenstehendes Kontaktformular.
        </p>
        {success && (
          <div className='toast toast--success'>
            <button className='btn-close'></button>
            <p>Kontaktformular wurde erfolgreich versendet!</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel style={{ cursor: 'pointer' }} htmlFor='contact-name'>
              Vor- und Zuname
            </FormLabel>
            <Input
              id='contact-name'
              name='name'
              value={form.name}
              onChange={handleFormChange}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel style={{ cursor: 'pointer' }} htmlFor='contact-email'>
              eMail Adresse
            </FormLabel>
            <Input
              id='contact-email'
              name='email'
              type='email'
              value={form.email}
              onChange={handleFormChange}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel style={{ cursor: 'pointer' }} htmlFor='contact-phone'>
              Telefon
            </FormLabel>
            <Input
              id='contact-phone'
              name='phone'
              type='tel'
              value={form.phone}
              onChange={handleFormChange}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel style={{ cursor: 'pointer' }} htmlFor='contact-message'>
              Nachricht
            </FormLabel>
            <Textarea
              id='contact-message'
              name='message'
              value={form.message}
              onChange={handleFormChange}
            ></Textarea>
          </FormControl>
          <FormControl>
            <Button type='submit'>Senden</Button>
          </FormControl>
        </form>
        <div className='content-no-padding'>
          <div className='m-6'></div>
        </div>
        <Heading size='md'>Geld spenden &amp; Bankverbindung</Heading>
        <Divider></Divider>
        <Box className='u-text-center font-light'>
          Mit einer Geldspende kannst du unser Vereinsleben fördern und den Kauf
          von Noten und Musikinstrumenten unterstützen.<br></br>
          Wir sagen schon einmal im Voraus: <b>VIELEN DANK!</b>
          <br></br>
          <br></br>
          <Box backgroundColor='red.50' padding='1rem' borderRadius='8px'>
            <Heading size='sm'>Sparkasse Tauberfranken</Heading>
            <Box>
              <b>Kontoinhaber</b> Musikverein Markelsheim e.&nbsp;V.
              <br></br>
              <b>IBAN</b> DE70 6735 2565 0000 0979 72<br></br>
              <b>BIC</b> SOLADES1TBB
            </Box>
          </Box>
          <Box backgroundColor='red.50' padding='1rem' borderRadius='8px'>
            <Heading size='sm'>Volksbank Main-Tauber e.&nbsp;G.</Heading>
            <Box>
              <b>Kontoinhaber</b> Musikverein Markelsheim e.&nbsp;V.
              <br></br>
              <b>IBAN</b> DE60 6739 0000 0084 0580 09<br></br>
              <b>BIC</b> GENODE61WTH
            </Box>
          </Box>
        </Box>
        <Divider my='2rem'></Divider>
        <Heading size='md'>Mitglied werden?</Heading>
        <Alert status='info' mb='1rem' width=''>
          <AlertIcon></AlertIcon>
          Du möchtest Mitglied in unserer Musikkapelle werden? Dann kannst du
          hier das Mitgliedsforumular herunterladen und ausgefüllt an uns zurück
          senden.
        </Alert>
        <LinkBox>
          <LinkOverlay href='/pdf/mitgliedschaft.pdf'>
            <HStack
              padding='1rem'
              borderRadius='8px'
              borderWidth='1px'
              borderColor='#cfcfcf'
              borderStyle='solid'
              width='420px'
            >
              <Icon as={FaRegFilePdf} boxSize='2rem'></Icon>
              <Box>
                <b>Mitgliedschaft.pdf</b>
                <Text fontSize='0.8rem'>
                  Beitritterklärung für die Musikkapelle Markelsheim
                </Text>
              </Box>
            </HStack>
          </LinkOverlay>
        </LinkBox>
      </Animate>
    </Global>
  )
}

export default Page
