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
    '.slider': {
      position: 'relative',
      backgroundColor: '#f7f7f7',
      padding: '20px',
      maxWidth: '670px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    '.slider__viewport': {
      overflow: 'hidden',
      width: '100%'
    },
    '.slider__viewport.draggable': {
      cursor: 'move'
      // cursor: 'grab'
    },
    '.slider__viewport.dragging': {
      cursor: 'grabbing'
    },
    '.slider__container': {
      display: 'flex',
      userSelect: 'none',
      marginLeft: '-10px'
    },
    '.slider__slide': {
      position: 'relative',
      minWidth: '100%',
      paddingLeft: '10px'
    },
    '.slider__slide__inner': {
      position: 'relative',
      overflow: 'hidden',
      height: '190px'
    },
    '.slider__slide__img': {
      position: 'absolute',
      display: 'block',
      top: '50%',
      left: '50%',
      width: 'auto',
      minHeight: '100%',
      minWidth: '100%',
      maxWidth: 'none',
      transform: 'translate(-50%, -50%)'
    },
    '.slider__button': {
      outline: 0,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      touchAction: 'manipulation',
      position: 'absolute',
      zIndex: 1,
      top: '50%',
      transform: 'translateY(-50%)',
      border: 0,
      width: '30px',
      height: '30px',
      justifyContent: 'center',
      alignItems: 'center',
      fill: '#1bcacd',
      padding: 0
    },
    '.slider__button:disabled': {
      cursor: 'default',
      opacity: 0.3
    },
    '.slider__button__svg': {
      width: '100%',
      height: '100%'
    },
    '.slider__button--prev': {
      left: '27px'
    },
    '.slider__button--next': {
      right: '27px'
    },
    '.slider__dots': {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'center',
      paddingTop: '10px'
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
      backgroundColor: '#efefef',
      width: '100%',
      height: '4px',
      borderRadius: '2px',
      content: '""'
    },
    '.slider__dot.selected:after': {
      backgroundColor: '#1bcacd',
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
