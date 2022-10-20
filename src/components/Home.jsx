import React from 'react'
import { Header } from './Header/Header'
import { About } from './About/About'
import { Box } from '@chakra-ui/react'
import { Technologies } from './Technologies/Technologies'
import { Projects } from './Projects/Projects'

export const Home = () => {
  return (
    <Box width='50vw' margin='auto'>
      <Header />
      <About />
      <Technologies />
      <Projects />
    </Box>
  )
}
