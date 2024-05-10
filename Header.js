import { useState } from "react";

const Header =  () => {
    //let btnName = "Login"; 
    const { btnNameReact, setbtnNameReact } = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src={"https://stock.adobe.com/in/search?k=%22food+logo%22"}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                        className="login" 
                        onClick={()=>{
                            btnNameReact == "Login" ? 
                            setbtnNameReact("Logout") :
                            setbtnNameReact("Login");
                        }
                    }> { btnNameReact } </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;