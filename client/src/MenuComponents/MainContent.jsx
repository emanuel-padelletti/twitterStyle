import React from 'react';
import Tweet from './components/Tweet';
import TweetInput from './components/TweetInput';

export default function MainContent({ tweets }) {
  return (
    <div className='MainContent'>
      <TweetInput />
      <Tweet />
    </div>
  );
}
