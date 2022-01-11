import { BrowserRouter} from 'react-router-dom'
import './App.css';
import Router from './router/Index'
import store from './redux/Store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

