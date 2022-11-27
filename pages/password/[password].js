import { useRouter } from 'next/router'
import { decrypt } from "../../utils/decrypt";
import { Flex, Button, Text } from "@chakra-ui/react";
import { copyToClipboard } from '../../utils/copyclipboard';

const fetchPassword = async (pass, detailToast) => {
    const endpoint = process.env.NEXT_PUBLIC_BACKEND + '/password/' + pass
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    try {
        const response =  await fetch(endpoint, options)
        const res =  await response.json()
        if (res) {
            const final = decrypt(res.result.password)
            copyToClipboard(final, detailToast)
        }
    } catch (error) {
        console.log(error)
    }
}



const Password = () => {
    const router = useRouter();

    return (
        <Flex direction='column' w='100%' h='100vh' justifyContent='center' align='center' color='brand.100' bg='#f0ece4'>
            <Text align="center" className='title'> Thank for using SharePassword </Text>
            <Button mt={5} variant='outline' bg='brand.50' color='brand.100' _hover={{ color: 'gray' }} onClick={() => fetchPassword(router.query.password, 
                {
                    title: 'Password successfully copied to clipboard',
                    description: "You can now paste it anywhere",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                }
                )}>
                Click to copy the pasword
            </Button>
        </Flex>
    )
}

export default Password