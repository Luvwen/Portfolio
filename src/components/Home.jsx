import React, { useState } from 'react'
import { Header } from './Header/Header'
import { About } from './About/About'
import { Box, Button } from '@chakra-ui/react'
import { Technologies } from './Technologies/Technologies'
import { Projects } from './Projects/Projects'
import { Contact } from './Contact/Contact'
import { ArrowUpIcon } from '@chakra-ui/icons'

export const Home = () => {
  const [isShow, setIsShow] = useState('none')

  window.onscroll = function () {
    handlesScrollFunction()
  }

  const handlesScrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsShow('block')
    } else {
      setIsShow('none')
    }
  }

  const handleGoToTop = () => {
    document.documentElement.scrollTop = 0
  }
  return (
    <Box width='50vw' margin='auto'>
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Button
        onClick={handleGoToTop}
        colorScheme='red'
        display={isShow}
        position='fixed'
        bottom='20px'
        right='30px'
        z-index='99'
        width='50px'
        height='50px'
        borderRadius='50%'
      >
        <ArrowUpIcon fontSize={20} />
      </Button>
    </Box>
  )
}
