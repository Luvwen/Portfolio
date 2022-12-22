import React from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  LinkBox,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react'

import { myProjects } from '../../data/data'

import { StarIcon } from '@chakra-ui/icons'

export const ProjectsMap = ({darkMode}) => {
  return (
    <>
      {myProjects.map((project, index) => {
        return (
          <Stack key={index}>
            <Box width={['100%', '750px']} height={['100%']}>
              <LinkBox as='article' maxHeight={['100%', '300px']}>
                <Flex
                  mb='30px'
                  background={darkMode ? '#4e525a' : 'cyan.50'}
                  border={['1px solid gray', '1px solid gray']}
                  borderRadius={['none', '10px']}
                  overflow='hidden'
                  _hover={{
                    boxShadow:
                      '10px 14px 28px rgba(0,0,0,0.50), 10px 10px 10px rgba(0,0,0,0.22)',
                    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                  }}
                  flexDirection={['column', 'row']}
                >
                  <Image
                    src={project.image}
                    width={['100%', '50%']}
                    height={['250px', '300px']}
                    borderRadius={['none', 'none']}
                    boxShadow={[
                      '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                      ''
                    ]}
                  />
                  <Flex
                    color={darkMode ? 'whitesmoke' : 'black'}
                    margin={['0', '0 auto']}
                    flexDirection={['column']}
                    alignItems={['center']}
                    minWidth='400px'
                  >
                    <Heading
                      as='h3'
                      p={['25px 0 0 0', '20px 15px 12px']}
                      textAlign='center'
                      fontSize='3xl'
                    >
                      {project.title}
                    </Heading>
                    <Text
                      noOfLines={2}
                      textAlign={['center', 'center']}
                      p={['10px 15px 0', '0 50px']}
                      wordBreak='break-word'
                      fontSize={['18px']}
                      fontWeight={['light']}
                      mt={['0', '15px']}
                    >
                      {project.text}
                    </Text>
                    <Stack spacing='0' direction={['row', 'column']} display='grid' gridTemplateColumns={'repeat(2, 1fr)'} gridRowGap='10px' width='100%' maxWidth='287px' mt='30px' ml='15%'>
                      {project.technologies.map((technology, idx) => {
                        const technologyUppercase = technology.charAt(0).toUpperCase() + technology.slice(1)
                        return (
                          <UnorderedList  listStyleType='none' key={idx} ml='0' >
                            <Flex as={ListItem} alignItems='center'>
                              <ListIcon
                                as={StarIcon}
                                fontSize='sm'
                                display={['none', 'block']}
                              />
                              <Text fontWeight='semibold' color={darkMode ? 'whitesmoke' : 'black'}>
                                {technologyUppercase}
                              </Text>
                            </Flex>
                          </UnorderedList>
                        )
                      })}
                    </Stack>
                    <HStack position='relative' mt={['0', '15px']} spacing={25} pb='15px'>
                      {project.links.map((link, index) => {
                        return (
                          <Link
                            href={link.platformLink}
                            key={index}
                            target='_blank'
                            color='blue.500'
                            position='absolute'
                            top='25'
                            pb={['50px', '0']}
                            _hover={{
                              color: 'cyan.500',
                              transition: '0.3s'
                            }}
                          >
                            {link.platformName}
                          </Link>
                        )
                      })}
                    </HStack>
                  </Flex>
                </Flex>
              </LinkBox>
            </Box>
          </Stack>
        )
      })}
    </>
  )
}
