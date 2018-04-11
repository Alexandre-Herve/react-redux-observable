import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '@src/containers/App';
import { Provider } from 'react-redux';
import getStore from '@src/redux/store';
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

const history = createHistory()
const store = getStore(history);

const Test = () => (<div>test</div>);

const Root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/test" component={Test}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root') as HTMLElement);
