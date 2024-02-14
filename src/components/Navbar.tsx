import React from "react";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  // Define your styles here
  const styles = {
    nav: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '0.5rem',
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
      padding: 0,
    },
    li: {
      margin: '0 1rem',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      transition: 'color 0.3s ease-in-out',
    },
    linkHover: { // This style is for demonstration and won't be directly applied
      color: '#61dafb',
    }
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          {/* Inline styles don't support pseudo-classes like :hover. You'll need to handle hover effects with JavaScript or use CSS classes. */}
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/about-us" style={styles.link}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;