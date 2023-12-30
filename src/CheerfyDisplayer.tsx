import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

const CheerfyDisplayer: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [randomImage, setRandomImage] = useState<string>('');

  const handleGenerateMeme = () => {
    // You can use a meme API or an array of meme URLs here to get a random meme
    // For simplicity, let's use a placeholder image
    const placeholderImage = 'https://via.placeholder.com/400';
    setRandomImage(placeholderImage);
  };

  return (
    <Container>
      <TextField
        label="Write Whats On Your Mind"
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleGenerateMeme}>
        Generate Meme
      </Button>
      {randomImage && <img src={randomImage} alt="Generated Meme" style={{ marginTop: 16, maxWidth: '100%' }} />}
    </Container>
  );
};

export default CheerfyDisplayer;
