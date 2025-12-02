import './Blog.css'
import myimage3 from "../../images/eco.png"
function Blogeco(){
    return(
   <span id="eco">
   <div>
    <img src={myimage3} alt="" />
   </div>

   <div id="eco-text">
    <div>
        <h1>Eco Conscious Manufacturing</h1>
        <div style={{marginRight:150, fontSize:19, fontWeight:600}}>Sustainable from source to shelf</div>
        <div id='ecoinnertext'>
            <div style={{width:350, marginLeft:90}}>
       <p>Owr supplements are crafted in certified facilities that
        meet and exceed industry standards-ensuring
        exceptional quality while minimizing enviromental impact 
        through eco friendly processes and a commitment to 
        reducing owr carbon footprint we create wellness
        solutions that are as good for the planet as they are for you</p>
        </div>

        <div style={{marginRight:40 }} id='ecotextbutton'>
            <button id='ecobutton'>Learn More</button>
        </div>
        </div>
    </div>
   </div>
   </span>
    )
}

export default Blogeco;