import React from 'react'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'
import { FaRegFilePdf } from 'react-icons/fa'

interface Props {}

export const Ads: React.FC<Props> = () => {
  return (
    <Box display='flex' gap='1rem' flexDirection='row' flexWrap='wrap'>
      <LinkBox width='420px'>
        <LinkOverlay href='/pdf/mitgliedschaft.pdf'>
          <Alert
            borderTopRightRadius='8px'
            borderBottomRightRadius='8px'
            colorScheme='red'
            variant='left-accent'
            flexDirection='row'
            alignItems='center'
            justifyContent='flex-start'
            gap='.8rem'
          >
            <AlertIcon boxSize='64px' mr={0} as={FaRegFilePdf} />
            <Box
              flexDirection='column'
              alignItems='flex-start'
              justifyContent='center'
            >
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                Mitgliedschaft.pdf
              </AlertTitle>
              <AlertDescription maxWidth='sm' fontSize='sm'>
                Beitrittserklärung für eine Vereinsmitgliedschaft
              </AlertDescription>
            </Box>
          </Alert>
        </LinkOverlay>
      </LinkBox>
      <LinkBox width='420px'>
        <LinkOverlay href='/pdf/flyer.pdf'>
          <Alert
            borderTopRightRadius='8px'
            borderBottomRightRadius='8px'
            colorScheme='red'
            variant='left-accent'
            flexDirection='row'
            alignItems='center'
            justifyContent='flex-start'
            gap='.8rem'
          >
            <AlertIcon boxSize='64px' mr={0} as={FaRegFilePdf} />
            <Box
              flexDirection='column'
              alignItems='flex-start'
              justifyContent='center'
            >
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                Flyer.pdf
              </AlertTitle>
              <AlertDescription maxWidth='sm' fontSize='sm'>
                &laquo;Musik macht Freu(n)de&raquo; Flyer
              </AlertDescription>
            </Box>
          </Alert>
        </LinkOverlay>
      </LinkBox>
    </Box>
  )
}
