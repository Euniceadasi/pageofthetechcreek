import location from "./assets/icon.svg";
import logo from "./assets/logo2.png";
import member from "./assets/member.svg";
import menu from "./assets/hamburger.svg";
import lady from "./assets/woman2.jpg";

const HEADER = () => {
    return ( 
        <div className="Container">
            <div className="Navbar_container">
                <div className="img1">
                    <img  src={logo} alt=""width={50} height="auto" />
                </div>
                
                <div className="locationholder">
                    <div className="location">
                        <img  src={location} alt="" width={19}  height="auto" />
                    </div> 
                    <div>
                        <h3>Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port Harcourt. Rivers State, Nigeria. talk@techcreek.ng. <br /> O9030003185, 09030003180 </h3>
                    </div> 
                </div>
                 
                 <div className="headerimg">
                    <div className="img3">
                        <img src={member} alt="" width={19} height="auto" />
                    </div>
                    <div className="img4">
                        <img  src={menu} alt="" width={25} height="50vh" /> 
                    </div>
                 </div>
            </div>
            <div className="Headerbody_container">
                <div className="text">
                    <h2>Welcome <br /> to the Creek</h2>    
                </div>
                <div >
                    <img src={lady} alt="" />
                </div>
            </div>
            <div className="Headerfooter_container"></div>
        </div>
     );
}
 
export default HEADER;