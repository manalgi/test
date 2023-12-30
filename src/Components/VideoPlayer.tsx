import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { getRandomVideo, Video } from '../Catalog/mediaCatalog';
import SendIcon from '@mui/icons-material/Send';


const VideoPlayer: React.FC = () => {
  const [randomVideo, setRandomVideo] = useState<Video | undefined>(undefined);
  const [textValue, setTextValue] = useState('')
  const embadedYoutubeUrl= "https://www.youtube.com/embed/"

  const handleGenerateVideo = () => {
    const video = getRandomVideo();
    setRandomVideo(video);
    setTextValue('')
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1, position: 'relative' }}>
      {randomVideo && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <iframe
             width="100%"
             height="95%"
            src={`${embadedYoutubeUrl}${randomVideo.youtubeId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto', marginBottom: '8px' }} >
        <TextField 
        id="outlined-basic" 
        variant="outlined" 
        onChange={(e)=>{ setTextValue(e.target.value) }}  
        fullWidth
        value={textValue}/>

        <Button variant="contained" color="primary" onClick={handleGenerateVideo} disabled={textValue === ''} style={{marginLeft:'5px'}}>
            <SendIcon/>
      </Button>
      </div>
    </Container>
  );
};

export default VideoPlayer;
