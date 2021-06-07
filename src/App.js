import Recat from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { SocketContext, socket } from 'context/socket';
import Spyfall from './components/containers/Spyfall';

const App = () => {
  return (
    <div>
      {/* <SocketContext.Provider value={socket}> */}
      <BrowserRouter>
        <Spyfall />
        <ToastContainer />
        </BrowserRouter>
        {/* </SocketContext.Provider> */}
    </div>
  );
}

export default App;
