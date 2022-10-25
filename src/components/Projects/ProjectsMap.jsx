import React from 'react'
import {
  Divider,
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
          <>
            <LinkBox as='article' key={index}>
              <Flex
                mb='30px'
                border={['none', '1px solid gray']}
                borderRadius={['none', '10px']}
                overflow='hidden'
                _hover={{
                  boxShadow:
                    '0 14px 28px rgba(0,0,0,0.50), 0 10px 10px rgba(0,0,0,0.22)',
                  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
                }}
                flexDirection={['column', 'row']}
              >
                <Image
                  src={project.image}
                  width={['335px', '60%']}
                  height={['250px', '400px']}
                  borderRadius={['8px', 'none']}
                  boxShadow={[
                    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                    ''
                  ]}
                />
                <Flex
                  margin={['0', '0 auto']}
                  flexDirection={['column']}
                  justifyContent={['flex-start']}
                  background={['', 'cyan.50']}
                >
                  <Heading as='h3' p={['25px 0 0 0', '40px 15px 0']}>
                    {project.title}
                  </Heading>
                  <Text
                    noOfLines={2}
                    textAlign={['left', 'center']}
                    p={['10px 0 0 0', '0 15px']}
                    fontSize={['18px']}
                    fontWeight={['light']}
                  >
                    {project.text}
                  </Text>
                  <Stack mt='25px'>
                    {project.technologies.map((technology, idx) => {
                      return (
                        <UnorderedList listStyleType='none' key={idx} ml='0'>
                          <Flex as={ListItem} alignItems='center'>
                            <ListIcon as={ChevronRightIcon} />
                            <Text fontWeight='md' color='gray.500'>
                              {technology}
                            </Text>
                          </Flex>
                        </UnorderedList>
                      )
                    })}
                  </Stack>
                  <HStack position='relative'>
                    {project.links.map((link, index) => {
                      return (
                        <Link
                          href={link.platformLink}
                          key={index}
                          target='_blank'
                          color='blue.500'
                          position='absolute'
                          top='25'
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
                  <Divider
                    orientation='horizontal'
                    display={['block', 'none']}
                    height='5px'
                    borderRadius='1000px'
                    background='gray.400'
                    width='75%'
                    m={['50px auto 0']}
                  />
                </Flex>
              </Flex>
            </LinkBox>
          </>
        )
      })}
    </>
  )
}
