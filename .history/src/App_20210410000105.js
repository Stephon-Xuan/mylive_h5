// import logo from './logo.svg';
// import './App.css';
import { Button } from 'antd-mobile'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<Button type="primary">primary</Button>
          <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
          <Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</Button>

    </div>
  );
}

export default App;
