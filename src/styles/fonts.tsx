import { Global } from '@emotion/react'

export const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/nunito_sans/NunitoSans-Regular.ttf) format('truetype');
        }
        
        @font-face {
          font-family: 'Nunito Sans Light';
          font-style: lighter;
          font-weight: 300;
          font-display: swap;
          src: url(/fonts/nunito_sans/NunitoSans-Light.ttf) format('truetype');
        }
        
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/montserrat/static/Montserrat-Regular.ttf) format('truetype');
        }
        
        @font-face {
          font-family: 'Montserrat Light';
          font-style: lighter;
          font-weight: 200;
          font-display: swap;
          src: url(/fonts/montserrat/static/Montserrat-ExtraLight.ttf) format('truetype');
        }  
  `}
    ></Global>
  )
}
