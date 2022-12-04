import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './components/Game'

function Home () {
  return (
    <Game />
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
