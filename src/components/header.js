import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <div className='brand'>
        <img src={require("../assets/images/logo.png")} />
      </div>
      <div className='nav hide-on-mobile'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Promotions</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='btn-group'>
        <span className='btn-clear'>Masuk</span>
        <span className='btn-primary'>Daftar Sekarang</span>
      </div>
    </header>
  );
};
export default Header;