import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from './Parts/Home.js';
import AdminPart from './Parts/AdminPart.js';
import ClientPart from './Parts/ClientPart.js';
import Profile from './Parts/Profile.js';

import PrivateRoute from "../Hoc/PrivateRoute.js";

export default function Main() {
  return (
    <div className="main">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AdminPart" element={<AdminPart />} />
          <Route path="/ClientPart" element={<ClientPart />} />
          <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}