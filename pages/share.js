import {
    Box, Flex, Center, Text, Button, Input, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Progress,
    useToast
} from '@chakra-ui/react'
import { useState } from 'react'
const Share = () => {

    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')
    const [time, setTime] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (event) => setPassword(event.target.value)
    const toast = useToast()

    const copyToClipboard = () => {
        navigator.clipboard.writeText(result)
        toast({
            title: 'Copied to clipboard',
            description: "You can now paste it anywhere",
            status: 'success',
            duration: 7000,
            isClosable: true,
          })
      }

    const next_step = () => {
        window.scrollBy({
            top: 0,
            left: window.innerWidth,
        })

    }
    const timeChange = (event) => {
        switch (event.target.value) {
            case '5 Minutes':
                setTime(5);
                break;
            case '30 Minutes':
                setTime(30);
                break;
            case '2 Hours':
                setTime(120);
                break;
            case '1 Day':
                setTime(720);
                break;
            default:
                setTime(5)
        }
    }

    const getLink = async () => {
        setIsLoading(true)
        const endpoint = 'https://api.quentinvedrenne.fr/password/create'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: password, time: time })
        }

        const response = await fetch(endpoint, options)
        const res = await response.json()
        setResult('https://sharepassword.quentinvedrenne.fr/password/' + res.passwordData.uuid)
        next_step()
        setIsLoading(false)
    }

    return (
        <Box position='relative' h='100vh' w='300vw' overflowX='scroll' sx={'scroll-direction: horizontal'}>
            <Flex h='100vh' w='300vw' >
                <Flex left='0' justify='center' align='center' h='100vh' w='100vw' bg="#f0ece4">
                    <Center flexDirection='column'>
                        <Text fontSize='5xl' color='#1F1F26'>
                            Enter your password
                        </Text>
                        <Input
                            id="password"
                            type='password'
                            value={password}
                            onChange={handleChange}
                            placeholder='Insert your password'
                            _placeholder={{ color: '#1F1F26' }}
                            focusBorderColor='#1F1F26'
                            borderColor='#1F1F26'
                            color='#1F1F26'
                        />
                        <Button mt={5} variant='flushed' bg='#1F1F26' onClick={next_step}>
                            suivant
                        </Button>
                    </Center>
                </Flex>
                <Flex left='100vw' justify='center' align='center' h='100vh' w='100vw' bg='#1F1F26'>
                    <Center flexDirection='column'>
                        <Text id='test' fontSize='5xl' color='#f0ece4'>
                            Put your expiration time
                        </Text>
                        <Select onChange={timeChange}>
                            <option>5 Minutes</option>
                            <option>30 Minutes</option>
                            <option>2 Hours</option>
                            <option>1 Day</option>
                        </Select>
                        <Button
                            isLoading={isLoading}
                            loadingText='Time to work'
                            colorScheme='teal'
                            variant='outline'
                            spinnerPlacement='start'
                            onClick={getLink}
                            mt={5}
                        >
                            Generate my link
                        </Button>
                    </Center>
                </Flex>
                <Flex left='200vw' justify='center' align='center' h='100vh' w='100vw' bg='#f0ece4'>
                    <Center flexDirection='column'>
                        <Text fontSize='5xl' color='#1F1F26'>
                            Here is your link
                        </Text >
                        <Text onClick={copyToClipboard} color='#1F1F26' fontSize='2md'>{result}</Text>
                    </Center>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Share