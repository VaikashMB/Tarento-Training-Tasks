import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { useState } from "react";
import { RecoilRoot } from "recoil"
import Account from './pages/Account';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {!user && (
              <Route
                path="login"
                element={<Login authenticate={() => setUser(true)} />}
              />
            )}
            {user ? (
              <>
                <Route path="about" element={<About />} />
                <Route path='shop' element={<Shop />} />
                <Route path="contact" element={<Contact />} />
                <Route path="account" element={<Account />} />
              </>
            ) : (
              <>
                <Route path="about" element={<Navigate to="/" />} />
                <Route path="shop" element={<Navigate to="/" />} />
                <Route path="contact" element={<Navigate to="/" />} />
                <Route path="account" element={<Navigate to="/" />} />
              </>
            )}
            <Route index element={<Home />} />
            
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
