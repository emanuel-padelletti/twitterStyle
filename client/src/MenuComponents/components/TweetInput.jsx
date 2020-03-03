import React, { useContext, useState } from 'react';

import { TweetContext } from '../../contexts/TweetContext';

export default function TweetInput() {
  const [text, setText] = useState('');

  const { addTweet } = useContext(TweetContext);
  const onSubmit = e => {
    e.preventDefault();
    addTweet(text);
    setText('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className='inputTweet'
          placeholder='write the tweet here .'
        ></input>
        <span className='buttonWrapper'>
          <button className='btnTweet'>Twittear</button>
        </span>
      </form>
    </div>
  );
}
