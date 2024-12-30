import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
        backgroundColor: '#9501FF',
      padding: '1rem',
      width: '95%',
      borderRadius: '10px',
      position: 'fixed',
      top: '0',
      left: '0',
      margin: "20px",
      zIndex: '1000',
    },
    navbarBrand: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.5rem',
    },
  };

  return (
    <nav style={styles.navbar}>
      <label styles={styles.navbarBrand}>Student's Login</label>
    </nav>
  );
};

export default Navbar;