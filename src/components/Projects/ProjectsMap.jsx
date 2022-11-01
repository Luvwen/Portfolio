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

import { ChevronRightIcon } from '@chakra-ui/icons'

export const ProjectsMap = () => {
  return (
    <>
      {myProjects.map((project, index) => {
        return (
          <Stack>
            <Box key={index} width={['100%', '750px']} height={['100%']}>
              <LinkBox as='article' maxHeight={['100%', '300px']}>
                <Flex
                  mb='30px'
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
                    margin={['0', '0 auto']}
                    flexDirection={['column']}
                    justifyContent={['flex-start']}
                    alignItems={['center']}
                    background={['', 'cyan.50']}
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
                      p={['10px 15px 0', '0 15px']}
                      wordBreak='break-word'
                      fontSize={['18px']}
                      fontWeight={['light']}
                      mt={['0', '15px']}
                    >
                      {project.text}
                    </Text>
                    <Stack mt='30px' direction={['row', 'row']}>
                      {project.technologies.map((technology, idx) => {
                        return (
                          <UnorderedList listStyleType='none' key={idx} ml='0'>
                            <Flex as={ListItem} alignItems='center'>
                              <ListIcon
                                as={ChevronRightIcon}
                                display={['none', 'block']}
                              />
                              <Text fontWeight='md' color='gray.500'>
                                {technology}
                              </Text>
                            </Flex>
                          </UnorderedList>
                        )
                      })}
                    </Stack>
                    <HStack position='relative' mt={['0', '15px']} spacing={25}>
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
