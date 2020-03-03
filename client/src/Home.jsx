import React, { useState } from 'react';
import Navbar from './MenuComponents/Navbar';
import MainContent from './MenuComponents/MainContent';
import RigthPanel from './MenuComponents/RigthPanel';
import TweetContextProvider from './contexts/TweetContext';

function Home() {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      name: 'Nombre deCuenta',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque amet voluptate dolorum laboriosam perspiciatis veniam quis ipsum repudiandae corporis animi doloribus magni mollitia, eaque quaerat suscipit ullam sapiente incidunt natus.',
      date: '2 de Enero',
      comentariosId: '34343', //Una lista de comentarios asociados a la publicacion
      likes: 40
    }
  ]);
  return (
    <div className='home'>
      <TweetContextProvider>
        <Navbar />
        <MainContent tweets={tweets} />
        <RigthPanel />
      </TweetContextProvider>
    </div>
  );
}
export default Home;
