import React, { useContext } from 'react';
import SpeakerContext from './SpeakerContext';

const Speakers = () => {
  const speakers = useContext(SpeakerContext);
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => (
        <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc} />
      ))}
    </div>
  );
};

export default Speakers;
