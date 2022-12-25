import {  Image, Link, Stack } from '@chakra-ui/react'
import linkedinIcon from '../../icons/iconsImages/linkedin.svg'
import githubIcon from '../../icons/iconsImages/github.svg'
import cvIcon from '../../icons/iconsImages/curriculum.svg'


export const Sidebar = ({ darkMode }) => {
  return (
    <Stack position='fixed' top='40%' left='0' minHeight='200px' width='50px' display='flex' justifyContent='space-around' alignItems='center' bg={darkMode ? '#7a7e87' : 'f5f5f5'}>
        <Link href='https://www.linkedin.com/in/santiago-bali%C3%B1o/' target='_blank' rel='noopener noreferrer'>
            <Image src={linkedinIcon} width='30px' height='30px' cursor='pointer' bg='#f5f5f5'/>
        </Link>
        <Link href='https://github.com/Luvwen' target='_blank' rel='noopener noreferrer'>
            <Image src={githubIcon} width='30px' height='30px' cursor='pointer' bg='#f5f5f5' borderRadius={darkMode ? '50%' : '0'}/>
        </Link>
        <Link href='https://docdro.id/d3eVnfY' target='_blank' rel='noopener noreferrer'>
            <Image src={cvIcon} width='30px' height='30px' cursor='pointer' bg='#f5f5f5'/>
        </Link>
    </Stack>
  )
}
