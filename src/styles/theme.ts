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
      fontWeight: 'normal',
      color: 'gray.800',
      fontFamily: 'Montserrat Light'
    },
    variants: {
      mt: {
        marginTop: '1.5rem'
      },
      mb: {
        marginBottom: '.5rem'
      },
      my: {
        marginTop: '1.5rem',
        marginBottom: '.5rem'
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
    '.content a': {
      transition: 'color 300ms ease-in',
      fontWeight: 'bold',
      color: 'red.900'
    },
    '.content a:hover': {
      color: 'red.600'
    },
    '.slider': {
      position: 'relative',
      backgroundColor: 'gray.50',
      borderRadius: '16px',
      boxShadow: '0 8px 24px -18px #000',
      padding: '1rem',
      maxWidth: '960px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    '.slider__viewport': {
      overflow: 'hidden',
      width: '100%'
    },
    '.slider__viewport.is-draggable': {
      cursor: 'grab'
    },
    '.slider__viewport.is-dragging': {
      cursor: 'grabbing'
    },
    '.slider__container': {
      display: 'flex',
      userSelect: 'none',
      marginLeft: '-10px',
      alignItems: 'center'
    },
    '.slider__slide': {
      position: 'relative',
      minWidth: '100%',
      paddingLeft: '10px'
    },
    '.slider__slide__inner': {
      position: 'relative',
      overflow: 'hidden'
    },
    '.slider__slide__img': {
      borderRadius: '16px'
    },
    '.slider__button': {
      outline: 0,
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      touchAction: 'manipulation',
      position: 'absolute',
      zIndex: 1,
      top: '50%',
      transform: 'translateY(-50%)',
      border: 0,
      width: '60px',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      fill: 'red.50',
      // padding: 0,
      transition: 'all 300ms ease-in'
    },
    '.slider__button:hover': {
      backgroundColor: 'whiteAlpha.500'
    },
    '.slider__button:disabled': {
      cursor: 'default',
      opacity: 0.3
    },
    '.slider__button__svg': {
      overflow: 'hidden',
      width: '100%',
      height: '100%'
    },
    '.slider__button--prev': {
      left: '18px'
    },
    '.slider__button--next': {
      right: '18px'
    },
    '.slider__dots': {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'center'
      // paddingTop: '10px'
    },
    '.slider__dot': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
      position: 'relative',
      padding: 0,
      outline: 0,
      border: 0,
      width: '30px',
      height: '30px',
      marginRight: '7.5px',
      marginLeft: '7.5px',
      display: 'flex',
      alignItems: 'center'
    },
    '.slider__dot:after': {
      backgroundColor: 'gray.400',
      width: '100%',
      height: '4px',
      borderRadius: '2px',
      content: '""'
    },
    '.slider__dot.selected:after': {
      backgroundColor: 'red.400',
      opacity: 1
    },
    '.band-logo': {
      borderRadius: '16px'
    },
    'html, body': {
      fontSize: '18px',
      color: 'gray.600',
      overflowX: 'hidden'
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
