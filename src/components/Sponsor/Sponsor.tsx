import Image from 'next/image'
import { Center, Tooltip } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  link: string
  label: string
  image: StaticImageData
}

export const Sponsor: FC<Props> = ({ image, label, link }) => {
  return (
    <Center>
      <Tooltip label={label}>
        <a href={link} target='_blank' rel='noreferrer'>
          <Image src={image} alt={label}></Image>
        </a>
      </Tooltip>
    </Center>
  )
}
