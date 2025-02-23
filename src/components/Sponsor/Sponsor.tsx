import Image from 'next/image'
import { Center, Tooltip, CenterProps } from '@chakra-ui/react'
import { CSSProperties, FC } from 'react'

interface Props extends CenterProps {
  size?: CSSProperties['width']
  link: string
  label: string
  image: StaticImageData
}

export const Sponsor: FC<Props> = ({ size = 'auto', image, label, link, ...props }) => {
  return (
    <Center style={{ width: size, height: 'auto' }} {...props}>
      <Tooltip label={label}>
        <a href={link} target='_blank' rel='noreferrer'>
          <Image src={image} alt={label}></Image>
        </a>
      </Tooltip>
    </Center>
  )
}
