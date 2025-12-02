
import './Charitable.css'
import myimage5 from "../../images/image5.png"
function Charitable(){
    return(
        <div id='section6parent'>
        <div id='section6'>
        <div>
           <h1>Owr Charitable Initiatives</h1> 
        </div>
        <div>
            <h2>Health Care Desk Gives Back</h2>
        </div>
        </div>
        <br />
        <div style={{textAlign:"center", color:'white'}}>At health care desk a portion of owr profits are comitted to supporting charities and global health research initiatives </div>
        <div id="image5">
            <img src={myimage5} alt="" height={100} width={1100} />
        </div>
        </div>
    )
}

export default Charitable;