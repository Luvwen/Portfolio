import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Flex, Heading, Icon, Image, Link, List, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'

import photoPortfolio from './photoPortfolio.jpg'
import { HashLink } from 'react-router-hash-link'
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header = ({darkMode, setDarkMode}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const ref = useRef()

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  
  openMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (openMenu && ref.current && !ref.current.contains(e.target)) {
        setOpenMenu(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [openMenu])

  return (
    <>
      <Box
        width={['100vw', '50vw']}
        margin='auto'
        paddingTop={['25px', '75px']}
      >
        <Flex
          alignItems='center'
          flexDirection={['row-reverse', 'row', 'row']}
          justifyContent={['space-between', 'left']}
        >
          <Image
            src={photoPortfolio}
            borderRadius='50%'
            width={['130px', '100px']}
            height={['130px', '100px']}
            display={['none', 'none', 'none', 'block']}
          />
          <Icon as={openMenu ? CloseIcon : HamburgerIcon}
            display={['block', 'none']}
            fontSize='30px'
            mb='10px'
            mr={['35px', '0']}
            zIndex='150'
            onClick={handleOpenMenu}
          />
          {openMenu && <Box bg='gray' opacity='0.3' position='absolute' width='100%' height='100%' zIndex='5'/> }
          <Stack
                ref={ref}
                as='aside'
                bg='#112240'
                color="white"
                height={['100vh']}
                right={openMenu ? '-25%' : '-500'}
                minHeight={['100vh']}
                position={['fixed', 'fixed']}
                top={['0px', '64px']}
                transition="right 0.4s"
                width={['100%', '20%']}
                zIndex="10"
                display='flex'
                alignItems='center'
            >
                <UnorderedList listStyleType="none" spacing={5} pt='150px' pr='100px' textAlign='center'>
                    <ListItem fontSize="xl">
                      <Text color='#66ffda'>01.</Text>
                      <HashLink to='#technologies' smooth onClick={handleOpenMenu}> Technologies </HashLink>
                    </ListItem>
                    <ListItem fontSize="xl">
                      <Text  color='#66ffda'>02.</Text>
                      <HashLink to='#projects' smooth onClick={handleOpenMenu}> Projects </HashLink>
                    </ListItem>
                    <ListItem fontSize="xl">
                      <Text color='#66ffda'>03.</Text>
                      <HashLink to='#contact' smooth onClick={handleOpenMenu}> Contact </HashLink>
                    </ListItem>
                    <ListItem fontSize="xl">
                      <Link href='https://docdro.id/d3eVnfY' target='_blank' rel='noopener noreferrer'>
                      <Button bg='' color='#66ffda' border='1px solid #66ffda' borderRadius='3px' padding='20px 40px' mt='10px'>
                            Resume
                      </Button>
                      </Link>
                    </ListItem>
                </UnorderedList>
            </Stack>
          <Box ml='25px'>
            <Heading
              as='h1'
              fontWeight='bold'
              fontSize={['3xl']}
              pb={['0', '15px']}
              _after={{
                content: `''`,
                display: 'block',
                borderRadius: '1000px',
                height: '6px',
                background: 'blue.500',
                mt: '3%',
                maxWidth: ['50%', '30%']
              }}
            >
              Santiago Baliño <span>
              <Icon m='0 0 3px 25px' cursor={['pointer']} fontSize='xl' onClick={()=> setDarkMode(!darkMode)}> 
                  {darkMode ? <MoonIcon/> : <SunIcon />}
                </Icon>
              </span>
            </Heading>
            <List
              listStyleType='none'
              display={['none', 'flex']}
              fontSize='24px'
              fontWeight='bold'
              color={darkMode ? 'whitesmoke':'gray.600'}
            >
              <ListItem
                _hover={{
                  bg: darkMode ? '#ff77a9' : '#8bf6ff',
                  borderRadius: '8px'
                }}
                p='2px 8px'
              >
                <HashLink to='#technologies' smooth>
                  Technologies
                </HashLink>
              </ListItem>
              <ListItem
                _hover={{
                  bg: darkMode ? '#ff77a9' : '#8bf6ff',
                  borderRadius: '8px'
                }}
                ml='10px'
                p='2px 8px'
              >
                <HashLink to='#projects' smooth>
                  Projects
                </HashLink>
              </ListItem>
              <ListItem
                _hover={{
                  bg: darkMode ? '#ff77a9' : '#8bf6ff',
                  borderRadius: '8px'
                }}
                ml='10px'
                p='2px 8px'
              >
                <HashLink to='#contact' smooth>
                  Contact
                </HashLink>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
