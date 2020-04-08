import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="../static/remitano-logo.png" height="30px" width="120px" className="d-inline-block align-top mr-2" alt="" />
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;