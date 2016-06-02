import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { createHashHistory } from 'history';

import App from './components/App';
import Home from './components/Home';
import FourCornerScroll from './components/FourCornerScroll';
import FourCornerExpand from './components/FourCornerExpand';


// function onChangeScroll(prevState, nextState) {
//   console.log(nextState);
//   const hash = nextState.location.hash;
//
//   if (hash !== '') {
//     // push onto callback queue so it runs after the DOM is updated
//     // this is required when navigating from a different page so that
//     // the element is redered on the page before trying to getElementById
//     setTimeout(() => {
//       let id = hash.replace('#', '');
//       let element = document.getElementById(id);
//       if (element) element.scrollIntoView();
//     }, 0);
//   }
// }


const routes = (
  // <Route path='/' component={App} onChange={onChangeScroll} >
  <Route path='/' component={App} >
    <IndexRoute component={Home} />

    <Route path='four-corner-scroll' component={FourCornerScroll} />
    <Route path='four-corner-expand' component={FourCornerExpand} />

    // redirect for github pages
    <Route path={githubRepoName} onEnter={redirectToDomain} />
  </Route>
);


function onUpdateFuncs() {
  // call other onUpdate functions
  // fooUpdate();
  hashLinkScroll();
}

function hashLinkScroll() {
  console.log('onUpdate');
  const { hash } = window.location;
  if (hash !== '') {
    // push onto callback queue so it runs after the DOM is updated
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

render(
  <Router history={browserHistory} onUpdate={onUpdateFuncs}>{routes}</Router>,
  document.getElementById('root')
)
