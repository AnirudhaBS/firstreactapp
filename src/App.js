import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import AbcComponent from './AbcComponent';
import XyzComponent from './XyzComponent';
import Messenger from './Messenger';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <MyComponent/>
      <MyComponent/>
      {MyComponent()}
      <AbcComponent/>
      {AbcComponent()}
      <XyzComponent/>
      {XyzComponent()}

      <Messenger/>
    </div>
  );
}

export default App;
