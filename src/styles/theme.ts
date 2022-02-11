import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    light: '#f0aead',
    medium: '#d13936',
    dark: '#781a18'
  }
}

const fonts = {
  heading: '"Montserrat Light", sans-serif',
  body: '"Nunito Sans", sans-serif'
}

const components = {
  Heading: {
    baseStyle: {
      // marginTop: '1.5rem',
      // marginBottom: '.8rem',
      color: 'gray.800'
    },
    variants: {
      mt: {
        marginTop: '1.5rem'
      },
      mb: {
        marginBottom: '.8rem'
      },
      my: {
        marginTop: '1.5rem',
        marginBottom: '.8rem'
      }
    }
  },
  Input: {
    baseStyle: {
      background: 'white'
    }
  },
  Text: {
    variants: {
      block: {
        marginY: '1rem'
      }
    }
  }
}

const styles = {
  global: {
    'html, body': {
      // fontFamily: 'sans-serif',
      fontSize: '18px',
      color: 'gray.600'
    },
    body: {
      minHeight: '100vh !important',
      position: 'relative'
    },
    'body::after': {
      content: '""',
      display: 'block',
      height: '140px'
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '140px'
    }
  }
}

export const theme = extendTheme({ colors, fonts, components, styles })
