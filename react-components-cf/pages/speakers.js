import React from 'react';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Menu from '../src/components/Menu/Menu';
// eslint-disable-next-line import/no-cycle
import Speakers from '../src/components/Speakers/Speakers';
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar';

import SpeakerContext from '../src/components/Speakers/SpeakerContext';

export default function Page() {
  const speakers = [
    { imageSrc: 'speaker-component-1124', name: 'Douglas Crockford' },
    { imageSrc: 'speaker-component-1530', name: 'Tamara Baker' },
    { imageSrc: 'speaker-component-10803', name: 'Eugene Chuvyrov' },
  ];

  return (
    <div>
      <Header />
      <Menu />
      <SpeakerContext.Provider value={speakers}>
        <SpeakerSearchBar />
        <Speakers />
      </SpeakerContext.Provider>
      <Footer />
    </div>
  );
}
