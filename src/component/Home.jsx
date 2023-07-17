import { Box, Container, Heading, Image,Stack, Text} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Futur from '../assest/futur.jpg';
import Gamelife from '../assest/gamelife.jpg';
import Life from '../assest/life.jpg';
import Night from '../assest/night.jpg';
import Service from '../assest/7450.png';
const headingOption = {
    pos:"absolute",
    left:'50%',
    top:'50%',
    transform:"translate(-50%,-50%)",
    textTransform :'uppercase',
    p:4,
    size:'4xl'
}
const ser={
    
    left:'50%',
}
const Home = () => {
    return (
         <Box>
            <MyCarousel />
           <Container maxW={'container.xl'} minH={'100vh'} p='16'>
            <Heading textTransform={"uppercase"} py='2' w={"fit-content"} borderBottom={'2px solid'} m='auto'>Services</Heading>
            <Stack h="full" p={'4'} alignItems={'center'} direction={['column', 'row']}>
                <Image src={Service}  h={["40",'400']} filter={'hue-rotate(-130deg)'}  />
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                backdrop-filter is not supported in Firefox. It can be enabled by the user, but it is suggested to design a component that looks good with and without this property.
                backdrop-filter is not supported in Firefox. It can be enabled by the user, but it is suggested to design a component that looks good with and without this property.
                backdrop-filter is not supported in Firefox. It can be enabled by the user, but it is suggested to design a component that looks good with and without this property.
                backdrop-filter is not supported in Firefox. It can be enabled by the user, but it is suggested to design a component that looks good with and without this property.
                backdrop-filter is not supported in Firefox.   It can be enabled by the user, but it is suggested to design a component that looks good with and without this property.
                </Text>
            </Stack>
           </Container>
        </Box>

    )
}
// change color bgColor={'whiteAlpha.600'} color={'black'}  filter={'hue-rotate(-130deg)'}
const MyCarousel = () => (

    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false} showThumbs={false} >
        <Box w={'full'} h={'100vh'}>
            <Image src={Futur} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption} > Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={ Gamelife} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>Future is Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={Life} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}> Gaming on console</Heading>
        </Box>
         <Box w={'full'} h={'100vh'}>
            <Image src={Night} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>Night life is cool</Heading>
        </Box>
         
    </Carousel >
)
export default Home;