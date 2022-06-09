import React from 'react'
import {
  Button,
  Divider,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaChevronDown } from 'react-icons/fa'

import { SubMenuLink } from './Links'
import { PageSubMenu } from '../../utils'

interface Props {}

const menuList: Array<PageSubMenu> = [
  {
    path: 'about',
    title: 'Über uns'
  },
  {
    path: 'membership',
    title: 'Mitgliedschaft'
  },
  {
    path: 'recruitment',
    title: 'Ausbildung'
  },
  {
    path: 'band',
    title: 'Unsere Musiker'
  },
  {
    path: 'history',
    title: 'Vereinsgeschichte'
  }
]

export const ClubSubMenu: React.FC<Props> = () => {
  const router = useRouter()

  return (
    <>
      <Show below='md'>
        <Menu matchWidth>
          <MenuButton
            as={Button}
            rightIcon={<Icon as={FaChevronDown}></Icon>}
            width='100%'
          >
            Untermenü
          </MenuButton>
          <MenuList>
            {menuList.map(({ path, title }) => {
              return (
                <MenuItem
                  key={path}
                  onClick={() => router.push(`/club/${path}`)}
                >
                  {title}
                </MenuItem>
              )
            })}
          </MenuList>
        </Menu>
      </Show>
      <Show above='sm'>
        <HStack fontFamily='Montserrat' spacing='0.8rem' flexWrap='wrap'>
          {menuList.map(({ path, title }) => {
            return (
              <SubMenuLink key={path} href={`/club/${path}`}>
                {title}
              </SubMenuLink>
            )
          })}
        </HStack>
        <Divider></Divider>
      </Show>
    </>
  )
}
