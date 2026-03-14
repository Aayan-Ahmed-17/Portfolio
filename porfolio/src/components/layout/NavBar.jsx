import { navLinks } from '../../data/content';

export function NavBar() {
  return (
    <nav>
      <div className="container">
        <a href="#" className="nav-logo">
          Aayan Ahmed Tejani
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}