import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/NotFound.css';
function NotFound() {
  return (
    <div className="page">
      <h1>404 Not Found</h1>
      <Link to="/" style={{ color: 'white' }}>
        페이지로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
