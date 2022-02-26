import './App.css';
import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" element={<PostListPage />} />
        <Route path="/:id" element={<PostPage />} />
    </BrowserRouter>
  );
}

export default App;
