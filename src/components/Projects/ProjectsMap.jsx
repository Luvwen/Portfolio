import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  LinkBox,
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'

import { myProjects } from '../../data/data'

export const ProjectsMap = ({darkMode}) => {
  return (
    <>
      {myProjects.map((project, index) => {
        return (
          <Stack key={index} display='flex' flexDirection='row' justifyContent='space-between'
          
          >
            <Image src={project.image}
                    width={['350px','400px','450px','580px']}
                    height={['300px','320px','360px']}
                    borderRadius={['none', 'none']}
                    
            />
            <Stack spacing={3} display='flex' justifyContent='right' alignItems='end' minHeight='100%' pt='35px'>
              <Heading as='h4' size='sm' color={darkMode ? '#64ffda' : 'blue.300'}>Featured Project</Heading>
              <Heading as='h1' size='lg' color='blue.600'>{project.title}</Heading>
              <Box position='relative' zIndex='2' width={['calc(100% + 7vw)','calc(100% + 5vw)','calc(100% + 3vw)']}>
              <StackItem mt='10px' bg={darkMode ? '#112240': 'gray.200'} p='15px' borderRadius='2px' textAlign='right' position='relative'>
                  <Text  fontWeight='semibold'color={darkMode ? 'gray.200' : 'pink.400'}>{project.text}</Text>
              </StackItem>
              </Box>
              <Stack spacing='0' listStyleType='none' as={UnorderedList} display='flex' flexDirection='row' justifyContent='flex-end' width='100%' >
              {project.technologies.map((technology, idx) => {
                const technologyUppercase = technology.charAt(0).toUpperCase() + technology.slice(1)
                return (
                              <ListItem key={idx} fontWeight='semibold' color={darkMode ? 'gray.200' : 'pink.400'} pr='15px'>
                                {technologyUppercase}
                              </ListItem>
                        )
                      })}
              </Stack>
              <HStack width='100%' display='flex' flexDirection='row' justifyContent='flex-end' spacing='2'>
              {project.links.map((link, index) => {
                        return (
                          <Link
                            href={link.platformLink}
                            key={index}
                            target='_blank'
                            color='blue.300'
                            pb={['50px', '0']}
                            _hover={{
                              color: 'cyan.500',
                              transition: '0.3s',
                              textDecoration: 'underline'
                            }}
                          >
                            {link.platformName}
                          </Link>
                        )
                      })}
              </HStack>
            </Stack>
          </Stack>
        )
      })}
    </>
  )
}
