import React, { Component }  from 'react';

import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';

import mediusLogo from './assets/mediusLogo.png';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <div>
        <img className="container__image" alt="react logo" src={mediusLogo} />
      </div>
      <ul className="header" >
        <li className="headerItem">
          <Link to="/Assessment" >Assessment</Link>
        </li>
        <li className="headerItem">
          <Link to="/Profile">Profile</Link>
        </li>
        <li className="headerItem">
          <Link to="/Account">Account</Link>
        </li>
      </ul>
      <Routes />
    </main>
  </BrowserRouter>
);

// class App extends Component {
//   handleNewUserMessage = (newMessage) => {
//     console.log(`New message incomig! ${newMessage}`);
//     // Now send the message throught the backend API
//   }

//   render() {
//     return (
//       <div className="App">
//         <Widget
//           handleNewUserMessage={this.handleNewUserMessage}
//         />
//       </div>
//     );
//   }
// }

export default App;