import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

export const colors = {
  brown: {
    50: '#DFC8A9',
    500: '#4B4626'
  },
  bg: {
    50: '#f1f1f1'
  },
  black: {
    100: '#202020'
  }
}

const text = {
  baseStyle: {
    fontFamily: 'Montserrat',
    fontWeight: '600'
  },
  defaultProps: {
    fontFamily: 'Montserrat',
    fontWeight: '600'
  }
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#202020',
  },
  breakpoints,
  components: {
    Text: text
  }
})

export default theme
