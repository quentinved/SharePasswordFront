import { Box, Flex, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {

  return (
    <Box position='relative' h='100vh' w='100vw'>
      <Flex display='flex' backgroundImage="url('/blob-scene-haikei.svg')" >
        <Flex direction='column' w='100%' h='100vh' justifyContent='center' align='center' color='black'>
          <Text className='title' align="center" > Don't be afraid to share your password </Text>
          <Link href={'/share'} passHref>
            <Button _hover={{ color: 'gray' }} background="#332f36" color="white" >
              Start Now
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

