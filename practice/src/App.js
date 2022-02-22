import './App.css';
import Subscribers from './components/Subscribers';
import { Provider } from 'react-redux';
import store from './redux/store';
import Display from './components/Display';
import Views from './components/Views';
import Comments from './components/Comments';
import Todo from './components/Todo';
import Async from './async/async';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Todo />
        <Comments />
        <Subscribers />
        <Views />
        <Display />
        <Async />
      </div>
    </Provider>
  );
}

export default App;
