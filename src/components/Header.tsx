import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../theme'
import { MenuIcon } from './Icons'

export const Header = () => {
  const  [isLargerThan720] = useMediaQuery('(min-width: 720px)');

  return (
    <Flex 
      w='100%' 
      bgColor={colors.bg[50]}
      borderBottom={`2px solid ${colors.black[100]}`}
      padding='24px'
      alignItems='center'
      justifyContent='space-between'
    >
      <Flex cursor='pointer'>
        <MenuIcon w='24px' h='24px ' />
        <Text 
          pl='1rem'
        >
          NAVIGATION
        </Text>
      </Flex>

      {isLargerThan720 && (
        <Flex>
          <Text pr='1.25rem' cursor='pointer' >CONTACT</Text>
          <Text pr='1.25rem' cursor='pointer' >WORKS</Text>
          <Text pr='1.25rem' cursor='pointer' >SERVICES</Text>
          <Text cursor='pointer'>ABOUT</Text>
        </Flex>
      )}
    </Flex>
  )
}