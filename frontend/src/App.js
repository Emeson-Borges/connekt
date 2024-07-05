import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedCard from './components/Feed/FeedCard';
import FeedList from './components/Feed/FeedList';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedList />} />
        {/* <Route path="/" element={<FeedCard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
