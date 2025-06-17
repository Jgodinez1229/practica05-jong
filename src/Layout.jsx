import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '15px 30px', backgroundColor: '#f13710', color: '#fff' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0 }}>Mi Sitio</h1>
          <div>
            <Link to="/" style={linkStyle}>Inicio</Link>
            <Link to="/about" style={linkStyle}>Acerca de</Link>
          </div>
        </nav>
      </header>

      <main style={{ flex: 1, padding: '30px', backgroundColor: '#f9f9f9' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '15px', backgroundColor: '#f13710', color: '#fff', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>© 2025 Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '20px',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'color 0.3s',
};

export default Layout;

