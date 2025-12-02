import './Navbar.css';
import NavbarImage from "../../images/Navbar.png";

function Navbar() {
  return (
    <div className='nav-container'>
      <div>
        <img className='nav-image' src={NavbarImage} alt="" />
      </div>

      <div className='nav-items-container'>
        <div className='nav-items'>
          Home
        </div>
        <div className='nav-items'>
          Shop
        </div>
        <div className='nav-items'>
          About Us
        </div>
        <div className='nav-items'>
          FAQ
        </div>
        <div className='nav-items'>
          Blog
        </div>
        <div className='nav-items'>
          Contact Us
        </div>
        <div>
          <i class="ri-shopping-bag-3-line"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;