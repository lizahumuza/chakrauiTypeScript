import {background, Button, Flex, Heading, Input, useColorMode, useColorModeValue} from '@chakra-ui/react'
import Link from 'next/link'
import AboutPage from '../components/aboutPage'

const IndexPage = () =>{ 
  const {toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return(
  <Flex height="100vh" alignItems="center" justifyContent="center" >
    <Flex direction="column" background={formBackground}  p={12} rounded={6}>
      <Heading mb={6}>Log in</Heading>
      <Input placeholder="liz@gmail.com" variant="filled" mb={3} type="email"/>
      <Input placeholder="******" variant="filled" mb={6} type="password"/>
      <Button mb={6} colorScheme="teal"><Link href="https://nextjs.org/learn"><a>Log in</a></Link></Button>
      <Button onClick={toggleColorMode}>Toggle Color mode</Button>
    </Flex>
  </Flex>
)
}
export default IndexPage
