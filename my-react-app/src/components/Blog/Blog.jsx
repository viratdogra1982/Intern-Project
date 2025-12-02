import './Blog.css'
import myImage from "../../images/Fruits.png";
import myImage2 from "../../images/chemical.png"
function Blog(){
    return(
        <div id="section4">
            <div id="section4-child">
        <div>
            Health Care Desk 
        </div>
        <div>
            The Future of Smart Health
        </div>
        </div>

         <div id='section4-innerchild'>
        <div>
            At health care desk we are commited to producing supplement that harness the power of all-natural
        </div>
        <div>
            superfoods.Owr products helps support the body's natural processes improving owr customer quality's of life   
        </div>
        </div>

        
        <span id="fruits">
         <img src={myImage} alt="" />

         <div id='fruits-child'>
         <div>
         <h1>100% Natural Components</h1>
         <div style={{marginRight:70, fontWeight:600, fontSize:18}}>Nature powered wellness you can trust</div>
         </div>

         <div id='fruitsinner'>
            <div id='fruitsinner1' style={{width:360}}>
          <p> We harness the goodness of Nature to create supplements
            enriched with premium researched backed superfood 
            extracts.each formula is carefully craffted to promote 
            overall vitality and deliver proven health benefits.At
            health desks care we uphold the highest standards of 
            quality safely and regulatory complimance ensuring every product 
            you choose is both effective and trustworthy</p> 
            </div>

            <div id='fruitsinner2'>
                <button id="fruitsbutton">Learn More</button>
            </div>
         </div>
         </div>
        </span>

        <span id='fruits2'>
            <div id='fruits2inner'>
        <h1>Researched Back Formulations</h1><br />
        <div style={{fontWeight:600, fontSize:18}}>Formulated with clinically tested Ingredients</div>
        <div style={{width:350}} id='fruits3inner'>
        <p>We combine the expertise of owr physicians with the latest
        health data and medical research  ensuring every 
        supplement is thoughtfully formulated for maximum benifit</p>
        </div>
        <div id='fruits2button'>
            <button id='buttonfruits2inner'> Learn More</button>
        </div>
        </div>
        <div>
            <img src={myImage2} alt="" />
        </div>
        </span>
        </div>
    )
}

export default Blog;