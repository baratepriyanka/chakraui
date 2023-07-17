import { Box, Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

export default function Footer() {
    return (<Box bgColor={'blackAlpha.900'} minW={'40'} p={'16'} color={'white'}>
        <Stack direction={['coloum', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center' ,'left']}>Subscribe to gate  updates</Heading>
                <HStack borderBottom={'2px solid white'} py='2'>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'}
                        outline={'none'} focusBorderColor='none'/>
                    <Button p={'0'} colorScheme={'purple'}
                        variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>
<VStack w={'full'} borderLeft={['none','1px solid,white']}  borderRight={['none','1px solid,white']} >
<Heading  textTransform={'uppercase'} textAlign={'center'}>
    VIDEO HUB 
</Heading>
<Text > All Right Recevied</Text>
</VStack>
<VStack w={'full'}>
<Heading size={'md'} textTransform={'uppercase'}>
    Social Media
</Heading>
<Button variant={'link'} colorScheme={'whiteAlpha'}>
    <a href='http://localhost:3000/' > CodePan</a>
</Button>
<Button variant={'link'} colorScheme={'whiteAlpha'}>
    <a href='http://localhost:3000/' > GitHub</a>
</Button><Button variant={'link'} colorScheme={'whiteAlpha'}>
    <a href='http://localhost:3000/' > FaceBook</a>
</Button>
</VStack>
        </Stack>
    </Box>
    )
}
