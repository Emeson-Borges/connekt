import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FeedList from './components/Feed/FeedList';
import Login from './components/Login/Login';
import CreatePostForm from './components/CriarPost/CriarPost';
import PrivateRoute from './PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <FeedList />
          </PrivateRoute>
        } />
        <Route path="/criar-post" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <CreatePostForm />
          </PrivateRoute>
        } />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

   
   
   
  //  <Router>
  //     <Routes>
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/" element={<FeedList />} />
  //       <Route path="/criar-post" element={<CreatePostForm />} />
  //       {/* <PrivateRoute path="/" element={<FeedList />} /> */}
  //       <Route path="*" element={<Navigate to="/login" replace />} />
  //       <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}><FeedList /></PrivateRoute>} />
  //       <Route path="/criar-post" element={<PrivateRoute isAuthenticated={isAuthenticated}><CreatePostForm /></PrivateRoute>} />

  //     </Routes>
  //   </Router>


