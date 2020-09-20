import React from 'react'

import { ThemeProvider as ChakraThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core'

import { ThemeProvider as EmotionTemeProvider } from 'emotion-theming'

import theme from '../../styles/theme'

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <EmotionTemeProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionTemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}

export default ThemeContainer
