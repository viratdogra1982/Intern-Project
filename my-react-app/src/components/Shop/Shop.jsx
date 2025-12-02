import './Shop.css'
import WeightImage from "../../images/WeightImage.png"
import NerveImage from "../../images/Nerve.png"
import Globe from "../../images/Globe.png"
import HealthCare from "../../images/HealthCare.png"
import WomenHealthCare from "../../images/WomenHealthCare.png"
function Shop(){
    return(
  <div className='shop'>
    <div>
      <h1 className='shop-text'>Nutrition Solutions</h1>
      <h1 className='shop-text'>for your complete-well being</h1>
    </div>

    <div className='shop-container'>
     <div className='shop-container-2'>
    <div className='shop-container2-child'>
    <img src={WeightImage} alt="" height={40} />
    <h6 style={{fontSize:15}} >Weight Loss</h6>
    <p style={{fontSize:12 }}>Shop trusted weight loss products that helps boost metabolism and support your journey to a healthier you</p>
    <button className='shop-button' style={{marginTop:15,width:170, padding:8, borderRadius:24 }}>Buy Now</button>
    </div>

     <div className='shop-container2-child'>
    <img src={NerveImage} alt="" height={40} />
    <h6 style={{fontSize:15}}>Nerve Pain</h6>
    <p style={{fontSize:12 }}>Shop trusted weight loss products that helps boost metabolism and support your journey to a healthier you</p>
    <button className='shop-button' style={{marginTop:15, width:170, padding:8  , borderRadius:24 }}>Buy Now</button>
    </div>

     <div className='shop-container2-child'>
    <img src={Globe} alt="" height={40} />
    <h6 style={{fontSize:15}}>Skin Care</h6>
    <p style={{fontSize:12 }}>Shop trusted weight loss products that helps boost metabolism and support your journey to a healthier you</p>
    <button className='shop-button' style={{marginTop:15,width:170, padding:8 ,  borderRadius:24}}>Buy Now</button>
    </div>

     <div className='shop-container2-child'>
    <img src={HealthCare} alt="" height={40} />
    <h6 style={{fontSize:15}}>HealthCare</h6>
    <p style={{fontSize:12 }}>Shop trusted weight loss products that helps boost metabolism and support your journey to a healthier you</p>
    <button className='shop-button' style={{marginTop:15,width:170, padding:8,   borderRadius:24}}>Buy Now</button>
    </div>

     <div className='shop-container2-child'>
    <img src={WomenHealthCare} alt="" height={40} />
    <h6 style={{fontSize:15}}>WomenHealth</h6>
    <p style={{fontSize:12 }}>Shop trusted weight loss products that helps boost metabolism and support your journey to a healthier you</p>
    <button className='shop-button' style={{marginTop:15, width:170, padding:8,   borderRadius:24}}>Buy Now</button>
    </div>
    </div>
    </div>   
    </div>
    )
}

export default Shop;