import React, { useState } from 'react'
import { Header } from './Header/Header'
import { About } from './About/About'
import { Box, Button } from '@chakra-ui/react'
import { Technologies } from './Technologies/Technologies'
import { Projects } from './Projects/Projects'
import { Contact } from './Contact/Contact'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { Sidebar } from './Sidebar/Sidebar'

export const Home = () => {
  const [isShow, setIsShow] = useState('none')
  const [darkMode, setDarkMode] = useState(false)

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
    <Box
    background={darkMode ? '#262A31' : 'white'}
    color={darkMode ?  'white': 'black'}
    pb='25px'
    >
      <Box
      width={['100vw', '50vw']}
      margin='auto'
      overflow={['hidden', 'visible']}
      >
        <Header darkMode={darkMode}setDarkMode={setDarkMode}/>
        <Sidebar darkMode={darkMode}/>
        <About darkMode={darkMode}/>
        <Technologies />
        <Projects darkMode={darkMode}/>
        <Contact />
        <Button
        onClick={handleGoToTop}
        colorScheme='red'
        display={isShow}
        position='fixed'
        bottom='20px'
        right='30px'
        zIndex='99'
        width='50px'
        height='50px'
        borderRadius='50%'
        >
          <ArrowUpIcon fontSize={20}/>
      </Button>
      </Box>
    </Box>
  )
}
