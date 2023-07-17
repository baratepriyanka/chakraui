import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Video from '../assest/video.mp4'
// import Service from '../assest/7450.png';

export default function Videos() {
    const videoUrl = ['https://www.w3schools.com/html/mov_bbb.mp4', 'https://www.w3schools.com/howto/rain.mp4', 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4', 'https://player.vimeo.com/external/138504815.sd.mp4?s=8a71ff38f08ec81efe50d35915afd426765a7526&profile_id=112']
    const [videoSrc, setVideoSrc] = useState();

    return (
        <Stack direction={['column', 'row']} h={'100vh'}>
            <VStack w={'full'}>
                <video controls controlsList='nodownload' src={videoSrc} style={{ width: '100%' }} ></video>

                <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
                    <Heading>Sample Video 1</Heading>
                    <Text>
                        This is a Sample video for testing and demo .
                        this is called .This is a Sample video for testing and demo this is called.
                    </Text>
                </VStack>
            </VStack>
            <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
               {
                videoUrl.map((item ,index)=> (
                    <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)}>
                    Lecture {index+1 }
                </Button>

                ))
               }
            </VStack>
        </Stack>
    )
}
