import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'

export const getIcon = (provider: string) => {
  switch (provider) {
    case 'facebook': {
      return FaFacebook
    }
    case 'google': {
      return FaGoogle
    }
    case 'instagram': {
      return FaInstagram
    }
  }
}
