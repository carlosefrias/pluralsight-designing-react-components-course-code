import React from 'react';
import withData from './withData';

const Speakers = ({ speakers }) => (
  <div>
    {speakers.map(({ imageSrc, name }) => (
      <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc} />
    ))}
  </div>
);
const maxSpeakersToShow = 2;
export default withData(maxSpeakersToShow)(Speakers);
