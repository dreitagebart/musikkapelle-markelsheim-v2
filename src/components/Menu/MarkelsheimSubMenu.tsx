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

import { SubMenuLink } from './Links'
import { PageSubMenu } from '../../utils'
import { useRouter } from 'next/router'
import { FaChevronDown } from 'react-icons/fa'

interface Props {}

const menuList: Array<PageSubMenu> = [
  {
    path: 'region',
    title: 'Region'
  },
  {
    path: 'history',
    title: 'Geschichte'
  }
]

export const MarkelsheimSubMenu: React.FC<Props> = () => {
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
                  onClick={() => router.push(`/markelsheim/${path}`)}
                >
                  {title}
                </MenuItem>
              )
            })}
          </MenuList>
        </Menu>
      </Show>
      <Show above='sm'>
        <HStack fontFamily='Montserrat' flexWrap='wrap' spacing='0.8rem'>
          {menuList.map(({ path, title }) => {
            return (
              <SubMenuLink key={path} href={`/markelsheim/${path}`}>
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
