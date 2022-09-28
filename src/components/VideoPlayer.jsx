import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const VideoPlayer = () => {
  return (
    <Container>
        <ReactPlayer
            url= 'videos/video.MP4'
            width='100%'
            height='100%'
            controls = {false}
            volume= '0'
            playing= {true}
        />
    </Container>
  )
}

export default VideoPlayer