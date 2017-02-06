import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CommentBox from './components/comment-box';
import {Router, Route, Redirect} from 'react-router';

import Layout from './layout/layout';

import BlogPage from './pages/blog';
import PicPage from './pages/picture';
import VideoPage from './pages/video';

const app = (
  <Router>
    <Redirect from='/' to='/blog' />
    <Route path='/' component={Layout}>
      <Route path='blog' component={BlogPage}/>
      <Route path='picture' component={PicPage}/>
      <Route path='video' component={VideoPage}/>

    </Route>
  </Router>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('comment-box')
  );
})
