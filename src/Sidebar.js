import { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Sidebar(props) {
  const pageName = props.page;
  return (
    <div class="sidebar">
      <Link to="/">Home</Link>
      <Link to="/pizza">Hot, Fresh Pizza!</Link>
      <Link to="/sandwichesPasta">Sandwiches & Pasta!</Link>
    </div>
  );
}

export default Sidebar;
