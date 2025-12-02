import "../../index.css"
import DoctorImage from "../../images/Doctor.png"
import "./Home.css"
function Home(){
    return(
    //       <div id="Middle-text">
    //         <div>
    // <div style={{fontSize:50,marginTop:140,marginLeft:100,fontWeight:600}}>
    //   Health Desk Clinic:
    // </div>
    // <div style={{fontSize:50,marginLeft:100,fontWeight:600}}>
    //   All Natural Supplements
    // </div>
    //  <div id='container2'> 
    // <div className='text1'>
    //   Health care desk is the premier choice for those seeking 
    // </div>
    // <div className='text1'>
    //   Wellness through wholesome,superfood en-riched formulas that
    // </div>
    // <div className='text1'>
    //   actually work.owr all natural,organic health supplements are 
    // </div>
    // <div className='text1'>
    //   Designed to give your body what it needs to thrive and optimize 
    // </div>
    // <div className='text1'>
    //   your health each day
    // </div>
    // </div>
    //  <div id='container3'>
    // <button id="doctor-button">Shop Now</button>
    // </div>
    // </div>

    // <div id="doctorimage" style={{marginLeft:190}}>
    //   <img src={DoctorImage} alt=""  height={600} width={400}/>
    // </div>
    // </div>
    <div className="home">
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-h1"><span>Health Desk Clinic:</span><br /><span> All Natural Supplements</span></h1>
            <p className="home-text-p"> Health Care Desk is a premier place for those seeking wellness through wholesome, superfood-enriched formulas that actually work. Our all-natural, organic health supplements are designed to give your body what it needs to thrive and optimize your health each day!
            </p>
            <button className="home-text-button">Shop Now</button>
        </div>
        <div className="home-image-container">
            <img className="home-image" src={DoctorImage} alt="" />
        </div>
    </div>
    </div>
    )
}
export default Home;