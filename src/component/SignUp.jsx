import { Container, Heading, VStack,Input, Button ,Text, Avatar} from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form >
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
            <Heading>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>
            <Input placeholder={'Name'} type={'text'} required focusBorderColor={'purple.500'}/>
            <Input placeholder={'Email'} type={'email'} required focusBorderColor={'purple.500'}/>
            <Input placeholder={'Password'} type={'password'} required focusBorderColor={'purple.500'}/>
           
            <Button colorScheme={'purple'} type={'submit'}>
               Sign Up
            </Button>

            <Text textAlign={'right'} bottom={'10'}>
               Already Signed Up User ? {" "}
            <Button variant={'link'} colorScheme={'purple'}> 
                <Link to={'/login'}>Login in</Link>
            </Button>
            </Text>

        </VStack>
    </form>
</Container>
  )
}
