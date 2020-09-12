import React from 'react';
import SpeakersRenderProps from './SpeakersRenderProps';

const Speakers = () => (
  <SpeakersRenderProps>
    {({ speakers }) => (
      <div>
        {speakers.map(({ imageSrc, name }) => (
          <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc} />
        ))}
      </div>
    )}
  </SpeakersRenderProps>
);
export default Speakers;
