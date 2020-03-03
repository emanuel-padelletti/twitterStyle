import React, { createContext, Component } from 'react';

export const TweetContext = createContext();

class TweetContextProvider extends Component {
  state = {
    tweets: [
      {
        id: 1,
        name: 'Nombre deCuenta',
        user: '@Carlitox',
        text:
          'Quick Start To get started with React Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router.First, install create-react-app and make a new project with it.',
        date: '2 de Enero',
        comentariosId: 34343, //Una lista de comentarios asociados a la publicacion
        likes: 40
      },
      {
        id: 2,
        name: 'Otro',
        user: '@Carlitex',
        text:
          'Quick Star HAHAHAHAH ou’ll need a React web app. If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router.First, install create-react-app and make a new project with it.',
        date: '3 de Enero',
        comentariosId: 34345, //Una lista de comentarios asociados a la publicacion
        likes: 4
      },
      {
        id: 3,
        name: 'Otr33o',
        user: '@Carlitax',
        text:
          'Quick Star EJEJEJE ou’ll need a React web app. If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router.First, install create-react-app and make a new project with it.',
        date: '4 de Enero',
        comentariosId: 3475, //Una lista de comentarios asociados a la publicacion
        likes: 1
      }
    ]
  };

  addTweet = text => {
    const newTweet = {
      id: this.state.tweets.length + 1,
      name: 'Usuario de base de Datos',
      text,
      date: Date(),
      comentariosId: 78978,
      likes: 0
    };
    const tweets = this.state.tweets;
    tweets.unshift(newTweet);

    this.setState({
      tweets
    });
  };

  render() {
    return (
      <TweetContext.Provider value={{ ...this.state, addTweet: this.addTweet }}>
        {this.props.children}
      </TweetContext.Provider>
    );
  }
}

export default TweetContextProvider;
