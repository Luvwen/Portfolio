import React from 'react'
import { Box, Flex, Heading, Image, List, ListItem } from '@chakra-ui/react'

import photoPortfolio from './photoPortfolio.jpg'

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
              <ListItem>Work</ListItem>
              <ListItem pl='35px'>Projects</ListItem>
              <ListItem pl='35px'>Articles</ListItem>
              <ListItem pl='35px'>Contact</ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
