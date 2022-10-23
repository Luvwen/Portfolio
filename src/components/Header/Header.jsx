import React from 'react'
import { Box, Flex, Heading, Image, List, ListItem } from '@chakra-ui/react'

import photoPortfolio from './photoPortfolio.jpg'
import { HashLink } from 'react-router-hash-link'

export const Header = () => {
  return (
    <>
      <Box
        width='50vw'
        margin='auto'
        paddingTop='75px
      '
      >
        <Flex alignItems='center'>
          <Image
            src={photoPortfolio}
            borderRadius='50%'
            width='100px'
            height='100px'
          />
          <Box ml='35px'>
            <Heading
              as='h1'
              fontWeight='bold'
              pb='15px'
              _after={{
                content: `''`,
                display: 'block',
                borderRadius: '1000px',
                height: '6px',
                background: 'blue.500',
                mt: '3%',
                maxWidth: '30%'
              }}
            >
              Santiago Baliño
            </Heading>
            <List
              listStyleType='none'
              display='flex'
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
                <HashLink to='#articles' smooth>
                  Articles
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
