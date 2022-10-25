import React from 'react'
import { Box, Flex, Heading, Image, List, ListItem } from '@chakra-ui/react'

import photoPortfolio from './photoPortfolio.jpg'
import { HashLink } from 'react-router-hash-link'
import { HamburgerIcon } from '@chakra-ui/icons'

export const Header = () => {
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
          <HamburgerIcon
            display={['block', 'none']}
            fontSize='30px'
            mb='10px'
            mr={['35px', '0']}
          />
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
              Santiago Baliño
            </Heading>
            <List
              listStyleType='none'
              display={['none', 'flex']}
              fontSize='24px'
              fontWeight='bold'
              color='gray.600'
            >
              <ListItem
                _hover={{
                  bg: 'cyan.100',
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
                  bg: 'cyan.100',
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
                  bg: 'cyan.100',
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
