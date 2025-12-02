import "./AboutUs.css"
import AboutUs1 from "../../images/Aboutusimage1.png"
import Aboutus2 from "../../images/Aboutusimage2.png"


function AboutUs(){
    return(
    <div>

    <div className="aboutus-container">
         <h1>Our Best Seller</h1> <br />
         <h4 style={{fontWeight:100}}> Formulated with science backed all natural ingridients owr unique supplements support holistic health healing & wellness</h4><br /><br />
         <span className="aboutus-container-option" style={{display:"flex", gap:15}}>
            <span>Result-Driven |</span>
            <span>All-Natural |</span>
            <span>Non GMO |</span>
            <span>Cruelty-Free</span>
         </span>
    </div>

    <div className="aboutus-icons">
        <div className="aboutus-icons-container">
        <div>
            <img src={AboutUs1} alt="" height={130} width={130} />
      <div style={{marginTop:20}}>   
      <div style={{fontWeight:600}}>Dent Pure</div>
      <div style={{color:"gold"}}>★★★★★</div>
      <div style={{marginTop:20}}>
      <button className="aboutus-button">Shop Now</button>
      </div>
      </div>  
        </div>

        <div>
            <img src={Aboutus2} alt="" height={130} width={130} />

       <div style={{marginTop:20}}>   
      <div style={{fontWeight:600}}>True Fem</div>
      <div style={{color:"gold"}}>★★★★★</div>
      <div style={{marginTop:20}}>
      <button className="aboutus-button">Shop Now</button>
      </div>
      </div>  

        </div>

        <div>
            <img src="https://m.media-amazon.com/images/I/81AxHOOmlRL._AC_SL1500_.jpg" alt="" height={130} width={130} />
      <div style={{marginTop:20}}>   
      <div style={{fontWeight:600}}>Vita Renew</div>
      <div style={{color:"gold"}}>★★★★★</div>
      <div style={{marginTop:20}}>
      <button className="aboutus-button">Shop Now</button>
      </div>
      </div>  
        </div>

        <div>
            <img src="https://m.media-amazon.com/images/I/71LVpbrNjfL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="" height={130} width={130} />
     <div style={{marginTop:20}}>   
      <div style={{fontWeight:600}}>ProstaZen</div>
      <div style={{color:"gold"}}>★★★★★</div>
      <div style={{marginTop:20}}>
      <button className="aboutus-button">Shop Now</button>
      </div>
      </div>  
        </div>

        <div>
            <img src="https://i5.walmartimages.com/seo/NerveFreedom-Capsules-Plant-Based-Formula-with-Turmeric-Alpha-Lipoic-Acid-and-Magnesium-Glycinate-Non-GMO-3-Pack_65f45d9d-0226-4dde-93ca-e074f8061f28.a159a6499141f190de1a17a5c205162e.png" alt="" height={130} width={130} />
       <div style={{marginTop:20}}>   
      <div style={{fontWeight:600}}>Nerve Freedom</div>
      <div style={{color:"gold"}}>★★★★★</div>
      <div style={{marginTop:20}}>
      <button className="aboutus-button">Shop Now</button>
      </div>
      </div>  
        </div>
        </div>
    </div>
   
    </div>
    )
}

export default AboutUs;