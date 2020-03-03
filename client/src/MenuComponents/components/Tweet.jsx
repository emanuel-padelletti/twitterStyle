import React, { useContext } from 'react';
import { TweetContext } from '../../contexts/TweetContext';

export default function Tweet() {
  const { tweets } = useContext(TweetContext);
  console.log(tweets);
  return (
    <div>
      <div className='Tweet'>
        {tweets.map(tweet => (
          <div key={tweet.id}>
            <div>
              <img
                className='profileImage'
                src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
              />
            </div>
            <span className='tweetMenu'>
              <span className='name'>{tweet.name} </span>
              <span className='user'> {tweet.user} </span>
              <span className='date'> - {tweet.date} </span>
            </span>
            <div className='tweetContent'>{tweet.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
