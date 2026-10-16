import { NavLink } from 'react-router-dom'
import './App.css'

const navItems = ['Home', 'Service', 'Team', 'Career', 'Portfolio', 'Login']

function App() {
  return (
    <section id="center">
      <h1 style={{ color: 'darkred', fontSize: '32px', marginBottom: '20px' }}>
        This is an Ecommerce Store
      </h1>

      <nav style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {navItems.map((item) => (
          <NavLink
            key={item}
            to="/collection/1223"
            end
            style={{
              textDecoration: 'none',
              color: 'black',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </section>
  )
}

export default App
