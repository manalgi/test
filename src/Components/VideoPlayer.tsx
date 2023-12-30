// src/MemeGenerator.tsx
import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { getRandomVideo, Video } from '../Catalog/mediaCatalog';

const VideoPlayer: React.FC = () => {
  const [randomVideo, setRandomVideo] = useState<Video | undefined>(undefined);
  const [textValue, setTextValue] = useState('')
  const embadedYoutubeUrl= "https://www.youtube.com/embed/"

  const handleGenerateVideo = () => {
    const video = getRandomVideo();
    setRandomVideo(video);
  };

  return (
    <Container>

      {randomVideo && (
        <div>
         <iframe
            width="560"
            height="315"
            src={`${embadedYoutubeUrl}${randomVideo.youtubeId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
          <TextField id="outlined-basic" variant="outlined" onChange={(e)=>{
            setTextValue(e.target.value)
          }}/>
          <Button variant="contained" color="primary" onClick={handleGenerateVideo} disabled={textValue === ''}>
        Generate Random Video
      </Button>
    </Container>
  );
};

export default VideoPlayer;
