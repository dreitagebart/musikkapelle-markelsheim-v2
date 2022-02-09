import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    light: '#f27977',
    medium: '#d13936',
    dark: '#781a18'
  }
}

const fonts = {
  heading: 'Montserrat Light',
  body: 'Nunito Sans'
}

const components = {
  Heading: {
    baseStyle: {
      marginTop: '1.5rem',
      marginBottom: '.8rem'
    }
  }
}

const styles = {
  global: {
    'html, body': {
      // fontFamily: 'sans-serif',
      fontSize: '18px',
      color: 'gray.900'
    },
    body: {
      minHeight: '100vh !important',
      position: 'relative'
    },
    'body::after': {
      content: '""',
      display: 'block',
      height: '220px'
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '220px'
    }
  }
}

export const theme = extendTheme({ colors, fonts, components, styles })
