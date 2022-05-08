import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {
  AlertDismissable,
  Posts,
  CreatePost,
  Post,
  Profile,
  Login,
  Signup,
  Search,
} from './components';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Posts />} path="/" exact></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Signup />} path="/sign-up"></Route>
          <Route element={<Profile />} path="/profile/:username"></Route>
          <Route element={<Search />} path="/search"></Route>
          <Route element={<CreatePost />} path="/create-post"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
