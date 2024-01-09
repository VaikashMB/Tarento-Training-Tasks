import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Login from "./pages/Login";
import { useState } from "react";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import {RecoilRoot , atom} from "recoil"





function App() {
  const [user, setUser] = useState(null);
  return (
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
              <Route
                path="about"
                element={<About logout={() => setUser(false)} />}
              />
              <Route path='features' element={<Features />} />
            </>
          ) : (
            <>
              <Route path="about" element={<Navigate to="/" />} />
              <Route path="Features" element={<Navigate to="/" />} />
            </>
          )}
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />




        </Routes>
      </BrowserRouter>

    </RecoilRoot>


  );
}

export default App;
