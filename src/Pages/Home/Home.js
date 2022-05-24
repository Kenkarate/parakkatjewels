import React from "react";
import Cards from "../../Conponents/Cards";
import Cards2 from "../../Conponents/Cards2";
import Slider from "../../Conponents/Slider";
import UserHeader from "../../Conponents/UserHeader";
import './Home.css'
function Home() {
  return (
    <div>
          <UserHeader />
          <Slider />
          <div className="container">Exclusive Online Store</div>
          
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "30px" }}>
              <Cards /><Cards /><Cards /><Cards />
              <div style={{ textAlign: "center", fontSize: "55px", fontFamily: "cinzel",marginTop:"50px", color: "gold",backgroundColor:"rebeccapurple" }}>Categories</div>
                 <Cards2/><Cards2/><Cards2/>
            </div>
      </div>
  );
}

export default Home;
