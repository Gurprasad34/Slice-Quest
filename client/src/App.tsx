import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container pt-20 flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
