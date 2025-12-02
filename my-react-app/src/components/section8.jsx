import myimage9 from "../images/Healthdesk.png";
import myimage10 from "../images/Healthicons.png";

function Section8(){
    return(
        <div>
            <div id="health-desk">
                <img src={myimage9} alt="" />
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                 <button id="health-button">Follow Us</button>
            </div>
            <div style={{display:"flex", justifyContent:"center",marginTop:30}}>
                <img src={myimage10} alt="" />
            </div>
        </div>
    )
}

export default Section8;