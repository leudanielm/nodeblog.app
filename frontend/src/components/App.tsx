import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Header from './header';
import Footer from './footer';
import ArticlesList from './articles';
import Article from './articles/article';
import CreateArticle from './admin/createArticle';

import react from '../assets/react.svg';
import lambda from '../assets/lambda.svg';
import dynamo from '../assets/dynamodb.svg';
import s3 from '../assets/s3.svg';
import apigw from '../assets/apigw.svg';

const styles = StyleSheet.create({
  root: {
    padding: '0 5rem',
    '@media screen and (max-width: 380px)': {
      padding: '0 1rem',
    },
  },
});

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className={css(styles.root)}>
        <Switch>
          <Route path="/" exact component={ArticlesList} />
          <Route path="/articles/:slug" component={Article} />
          <Route path="/admin/create-article" component={CreateArticle} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
