import logo from './logo/logo.svg';
import logoVacrec from './logo/logoVacrec.svg';
import './css/Navbar.css';

/* function Navbar() {
  return (
    <div className="Navbar">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

function Navbar() {
  return (
  <div className="navbar">
  <section>
    <header>
    <a href="index.html" ><img src={logoVacrec} alt="logoVacrec" className='logoVacrec'/></a>
    <ul>
      <li><a href="index.html" className='navText'>หน้าหลัก</a></li>
      <li><a href="vaccineHistory.html" className='navText'>ข้อมูลผู้ป่วย</a></li>
    </ul>
    </header>
  </section>
  </div>
  );
}

export default Navbar;