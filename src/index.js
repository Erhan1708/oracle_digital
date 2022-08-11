import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContext } from './context/context';

function Main() {
   const [users, setUsers] = useState([])
   return (
      <React.StrictMode>
         <UserContext.Provider value ={{users, setUsers}}>
            <App />
         </UserContext.Provider>
  </React.StrictMode>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);