import React from 'react'
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'

import javascriptIcon from '../../icons/iconsImages/javascript.png'
import { ProjectsMap } from './ProjectsMap'

export const Projects = () => {
  return (
    <Box as='section' mt='50px'>
      <Heading>Projects</Heading>
      <Divider
        orientation='horizontal'
        display='block'
        height='5px'
        borderRadius='1000px'
        background='gray.400'
        mt='40px'
      />
      <Box margin='50px auto 0'>
        <ProjectsMap />
        <Flex as='article' border='1px solid black'>
          <Image src={javascriptIcon} width='250px' height='250px' />
          <VStack margin='0 auto' spacing={6}>
            <Heading as='h3' pt='24px'>
              Todo app
            </Heading>
            <Text noOfLines={2} textAlign='center'>
              App para anotar tareas y esas cosas, vos sabes perro porque te
              corto las manos dea
            </Text>
            <HStack>
              {/* <JavascriptIcon
                cardWidth={'80px'}
                iconWidth={'30px'}
                height={'30px'}
                fontsize={'14px'}
              />
              <JavascriptIcon
                cardWidth={'80px'}
                iconWidth={'30px'}
                height={'30px'}
                fontsize={'14px'}
              />
              <JavascriptIcon
                cardWidth={'80px'}
                iconWidth={'30px'}
                height={'30px'}
                fontsize={'14px'}
              />
              <JavascriptIcon
                cardWidth={'80px'}
                iconWidth={'30px'}
                height={'30px'}
                fontsize={'14px'}
              /> */}
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  )
}
