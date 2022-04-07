import { Flex, Text, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { colors } from "../theme"
import Typed from 'typed.js'

export const Hello = () => {
  const  [isLargerThan720] = useMediaQuery('(min-width: 720px)');

  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'Mobile developer',
        'Web developer',
        'UI designer',
        'Creative'
      ],
      typeSpeed: 60,
      backSpeed: 80,
      loop: true,
      showCursor: false
    };
    // @ts-ignore
    typed.current = new Typed(el.current, options);
      
    return () => {
      // @ts-ignore
      typed.current.destroy();
    }
  }, [])

  return (
    <Flex
      h='calc(100vh - 88px - 74px)'
      justifyContent='center'
      width='100%'
      maxWidth='100vw'
      flexDirection='column'
      p={isLargerThan720 ? '6rem' : '2rem'}
    >
      <Text 
        fontSize={isLargerThan720 ? '7xl' : '4xl'}
        color={colors.green[100]}
      >
        Your favorite
      </Text>
      <Flex
        w='100%'
        justifyContent='space-between'
        alignItems={isLargerThan720 ? 'baseline' : 'center'}
        height={isLargerThan720 ? '108px' : '44px'}
      >
        <Text 
          fontSize={isLargerThan720 ? '7xl' : '3xl'}
          ml={isLargerThan720 ? '4rem' : 0}
          fontFamily='Libre Baskerville'
          fontWeight='400'
          ref={el}
        >
          Web Developer
        </Text>
        {isLargerThan720 && (
          <Text w='150px' fontWeight='500'>
            Welcome to my 2022 portfolio
          </Text>
        )}
      </Flex>
      {!isLargerThan720 && (
        <Text w='150px' fontWeight='500' mt='2rem'>
          Welcome to my 2022 portfolio
        </Text>
      )}
    </Flex>
  )
}