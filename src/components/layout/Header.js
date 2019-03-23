import React from 'react'
import {Link} from 'react-router-dom'

function Header() {

  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link to="/" style={linkSyle}>Home</Link> | <Link to="/about" style={linkSyle}>About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
}
const linkSyle = {
  color: 'red',
  textDecoration: 'none'
}


export default Header;
