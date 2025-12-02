import React from "react";
import myimage11 from "../images/IMAGE footer.png"


export default function Footer() {
  return (
    <footer style={{marginTop:100}} className="footer">

      {/* Newsletter / Top Bar */}
      <div className="newsletter">
  <h2>Let's Grow Together</h2>
</div>


      {/* Middle Content */}
      <div className="footer-content">

        {/* Left Column */}
        <div className="footer-left">
          <img src={myimage11} className="footer-logo" alt="logo" />

          <p>Address: 7823 Red Oak Trail, Austin,<br />
            TX, 78745, United States</p>

          <p>Phone: (512) 555-2376</p>
          <p>Email: Ereforce@outlook.com</p>
        </div>

        <div className="vertical-line"></div>

        {/* Right Product Columns */}
        <div className="footer-products">
          <h3>Our Products</h3>

          <div className="product-columns">
            <ul>
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>Uro Flow</li>
            </ul>

            <ul>
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>Memof</li>
            </ul>

            <ul>
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>Derma care</li>
            </ul>

            <ul>
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>TestoZen</li>
            </ul>

            <ul>
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>True Fem</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="disclaimer">
        <p>These statements have not been evaluated by the Food and Drug Administration.</p>
        <p>These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.</p>

        <div className="cards">
          <img src="https://static.vecteezy.com/system/resources/previews/020/975/576/original/visa-logo-visa-icon-transparent-free-png.png" alt="MasterCard" />
          <img src="https://cdn-icons-png.flaticon.com/512/217/217424.png" alt="Discover" />
          <img src="https://tse3.mm.bing.net/th/id/OIP.5rkMgUG0DvrfeVKRYJTMWwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Visa" />
          <img src="https://cdn-icons-png.flaticon.com/512/217/217424.png" alt="American Express" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>

        <div className="bottom-links">
          <a href="#">Terms And Conditions</a> |
          <a href="#">Privacy Policy</a> |
          <a href="#">Contact</a>
        </div>
      </div>

    </footer>
  );
}
