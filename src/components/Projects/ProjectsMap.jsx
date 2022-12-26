import React from 'react'
import {
  Box,
  Divider,
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
          <Stack  spacing={[6, 0]} key={index} display='flex' flexDirection={['column','row']} justifyContent='space-between' alignItems='center'
          >
            <Image src={project.image}
                    width={['300px','580px']}
                    height={['250px']}
                    borderRadius={['none', 'none']}
                    
            />
            <Stack spacing={3} position='inherit' display='flex' justifyContent={['right']} alignItems={['center','end']} minHeight='100%'  width={['85%','100%']} ml='20px'>
              {/* <Heading as='h4' size='sm' color={darkMode ? '#64ffda' : 'blue.300'}>Featured Project</Heading> */}
              <Heading as='h1' size='lg' color='blue.600'>{project.title}</Heading>
              <Box position={['static','relative']} zIndex={['0','2']} width={['100%','calc(100% + 3vw)']}>
                <StackItem mt={['0','10px']} bg={[darkMode ? '': '',darkMode ? '#112240': 'gray.200']}  p={['15px']} borderRadius='2px' textAlign={['center','right']} position='relative'>
                  <Text  fontWeight='semibold'color={darkMode ? 'gray.200' : 'pink.400'}>{project.text}</Text>
                </StackItem>
              </Box>
              <Stack spacing='0' listStyleType='none' as={UnorderedList} display='flex' flexDirection='row' justifyContent={['center','flex-end']} width='100%' >
              {project.technologies.map((technology, idx) => {
                const technologyUppercase = technology.charAt(0).toUpperCase() + technology.slice(1)
                return (
                              <ListItem key={idx} fontWeight='semibold' color={darkMode ? 'gray.200' : 'pink.400'} pr='15px'>
                                {technologyUppercase}
                              </ListItem>
                        )
                      })}
              </Stack>
              <HStack width='100%' display='flex' flexDirection='row' justifyContent={['center','flex-end']} spacing={['3','2']}>
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
            <Divider 
            display={['block', 'none']}
            orientation='horizontal'
            position='relative'
            width='50%'
            height='5px'
            borderRadius='1000px'
            background='gray.400'
            top='-10'
/>
          </Stack>
        )
      })}
    </>
  )
}
