import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import Profile from './views/Profile';
import Layout from './views/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
